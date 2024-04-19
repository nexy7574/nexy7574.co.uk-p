# nexy7574.co.uk-p
This is the *third* iteration of my website.

In this iteration, I am moving away from using NextJS, React, and NodeJS for building simple sites.

This site is meant to be a simple portal and about me/portfolio website.

See the below image for a general idea of what the site is going to look like.

<details>
N/A yet.
</details>

## Serving
You simply need to serve the [src](/src/) directory with your favourite HTTP server.

<details>
<summary>Setting up with Caddy</summary>

```
example.com, www.example.com {
    handle /ip {
        templates
        header Content-Type text/plain
        respond "{{.ClientIP}}"
    }

    root * /path/to/website/src
    encode zstd gzip
    header ?Cache-Control `public, max-age=604800, immutable`
    file_server
}
```
</details>
