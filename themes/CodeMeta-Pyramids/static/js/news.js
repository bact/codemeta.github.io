// News feed functions

function formatAMPM(date) {
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function formatDate(date) {
    const year = date.getUTCFullYear();
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate().toString().padStart(2, '0');
    const timestr = formatAMPM(date);
    return `${month} ${day}, ${year} ${timestr} UTC`;
}

async function fetchPostsFromFeeds(urls) {
    const posts = [];
    for (let i = 0 ; i < urls.length ; ++i) {

        let response = await fetch(urls[i], {
            method: "GET",
        });

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/xml");
        const items = doc.getElementsByTagName("item");
        for (let ii = 0 ; ii < items.length ; ++ii) {

            date = new Date(items[ii].querySelector("pubDate").textContent);


            newpost = {title: items[ii].querySelector("title").textContent,
                       link: items[ii].querySelector("link").textContent,
                       ts: date,
                       date: formatDate(date),
                       desc: items[ii].querySelector("description").textContent
                }
            posts.push(newpost);
        };
    };
    return posts.sort((a, b) => b.ts - a.ts);
}

async function refreshNewslist(urls) {
    let posts = await fetchPostsFromFeeds(urls);
    $("#newslist").empty();
    posts.forEach((post, i) => {
        $("#newslist").append(
        `<li class="ps-2 pb-2 refreshed">
            <h3><a class="list-group-item newslink p-2" href="${posts[i].link}">${posts[i].title}</a></h3>
            <small class="ps-2 text-secondary-emphasis">${posts[i].date}</small>
            <div class="ps-2 pt-2">${posts[i].desc}</div>
        </li>`
        )
    });
}
async function refreshNewslinks(urls) {
    let posts = await fetchPostsFromFeeds(urls);
    $("#newslinks ul").empty();
    posts.forEach((post, i) => {
        if (i <= ( 5  - 1 )) {
            $("#newslinks ul").append(
                `<li class="ps-2 refreshed">
                    <a class="list-group-item newslink lh-base p-2" href="${posts[i].link}">${posts[i].title}</a>
                    <small class="ps-2 text-secondary-emphasis">${posts[i].date}</small>
                </li>`
            )
        }
    });
}
