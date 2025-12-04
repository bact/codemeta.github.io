# CodeMeta Website

![Made with Hugo](https://img.shields.io/badge/made_with-Hugo-FF4088?logo=hugo)
![Styled with Bootstrap](https://img.shields.io/badge/styled_with-Bootstrap-7952B3?logo=bootstrap)

This is where the [`codemeta.github.io`](https://codemeta.github.io) website
is built from, using a Static Site Generator called Hugo; a framework that
turns Markdown into static HTML pages that can be served from anywhere. Our
theme uses the Bootstrap framework.

We use GitHub actions to build and deploy the Hugo site to GitHub Pages. Many
changes to the site are possible with the GitHub web interface, however for
complex changes it will be quicker to use git directly.

These tools have good documentation:

- [Hugo documentation](https://gohugo.io/documentation/)
- [Bootstrap documentation (currently 5.3)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [Git documentation](https://git-scm.com/docs)

The website's content content often uses [JSON](https://json-schema.org/understanding-json-schema/about)
and CodeMeta itself is based on [JSON-LD](https://json-ld.org/). Updating
the site might involve editing such data.

## Prerequisites

Building the website locally may require installing a few packages. Install
`git` and `hugo` if they are not already available.

- [Git](https://gohugo.io/installation/)
- [Hugo](https://git-scm.com/install/)

_*Optional*_: If you require new Crosswalk data that is not yet synced with
this repository, you will need `Make`.
- deb-based: `sudo apt install build-essential`
- rpm-based: `sudo dnf group install 'Development tools'`
- arch-based: `sudo pacman -S base-devel`
- Windows: through `wsl` and distro-specific package manager
- MacOS: install `xcode` or use macports

Run `make` in the `codemeta.github.io` git directory to sync the data.

## Staging the site

Generate the website by running `hugo` in the git directory. Hugo will output
the files to `../website` according to configuration. If desired, set an 
alternative path with the `--destination=<path>` option, where
`<path>` is the desired location for the website.

Hugo comes with a staging webserver. Run `hugo serve` to make hugo serve the
website it generates. Hugo will serve the website at `http://localhost:1313`.
Preview the site from another device by passing the options 
`--baseURL=<host>` and `--bind=<host>`, where `<host>` is the
desired IP or domain.

A combination of the above can be used to serve the website with a standard
web server. Use `--appendPort=false` to remove the port number from links.

## Contributing to CodeMeta

[Please refer to our contributing guide](https://github.com/codemeta/codemeta.github.io?tab=contributing-ov-file).
