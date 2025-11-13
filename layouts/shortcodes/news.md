  <h2 class="ms-3">CodeMeta News</h2>
  <ul id="newslist" class="list-group list-unstyled">

{{ $items := slice }}

{{ range $feed := .Site.Data.feeds }}
{{ $item := index $feed.channel "item" }}
{{ $items = $items | append $item }}
{{ end }}

{{ $combi := slice }}

{{- range $items -}}
{{ $t := time.AsTime .pubDate }}
{{ $m := dict "link" .link "title" .title "pubDate" $t "description" .description }}
{{ $combi = $combi | append $m }}
{{- end -}}

{{ $combi := sort $combi ".pubDate" "desc" }}

    {{ range $combi }}
    <li class="ps-2 pb-2">
      <h3><a class="list-group-item newslink p-2" href="{{ .link }}">{{ .title }}</a></h3>
      <small class="ps-2 text-secondary-emphasis">{{ .pubDate | time.Format "Jan 02, 2006 3:04 PM MST"  }}</small>
      <div class="ps-2 pt-2">{{ .description }}</div>
    </li>
    {{ end }}
  </ul>
<script>

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

async function fetchCodeMetaPostsFromSWHWordPress() {
    let url = `https://softwareheritage.org/tag/codemeta/feed/`;
    let response = await fetch(url, {
        method: "GET",
    });

    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    const items = doc.getElementsByTagName("item");

    $("#newslist").empty();
    for (let i = 0 ; i < items.length ; ++i) {

        const title = items[i].querySelector("title").textContent;
        const link = items[i].querySelector("link").textContent;
        const date = new Date(items[i].querySelector("pubDate").textContent);
        const desc = items[i].querySelector("description").textContent;

        const year = date.getUTCFullYear();
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const month = months[date.getUTCMonth()];
        const day = date.getUTCDate().toString().padStart(2, '0');
        const timestr = formatAMPM(date);

        const utc = `${month} ${day}, ${year} ${timestr} UTC`

        $("#newslist").append(
            `<li class="ps-2 pb-2 refreshed">
                <h3><a class="list-group-item newslink p-2" href="${link}">${title}</a></h3>
                <small class="ps-2 text-secondary-emphasis">${utc}</small>
                <div class="ps-2 pt-2">${desc}</div>
            </li>`
        )
    };
}

fetchCodeMetaPostsFromSWHWordPress();
</script>
