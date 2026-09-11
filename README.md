# SnifferBots marketing site

Static marketing website for SnifferBots (IoT-based predictive fire-situation monitoring for LV & MV electrical control panels), served at [snifferbots.com](https://snifferbots.com).

Plain HTML/CSS/JS — no build step, no framework, no dependencies. Any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages) can serve this repository as-is by pointing at the repo root.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `product.html` | Product & how it works |
| `why-snifferbots.html` | Why SnifferBots (comparison vs. arc-tested panels, gas suppression) |
| `applications.html` | Applications |
| `about.html` | About / manufacturing facility |
| `contact.html` | Contact |
| `404.html` | Custom not-found page |

## Structure

```
assets/   images (logo, favicons, product photos, diagrams)
css/      stylesheet
js/       site script (mobile nav, reveal-on-scroll, etc.)
```

`robots.txt` and `sitemap.xml` are at the root as usual.

## Deployment

This site previously lived on a Windows/Plesk VPS alongside two unrelated live
applications (`admin.snifferbots.com`, `devices.snifferbots.com`) that are **not**
part of this repo and must keep running on their existing host — only the
marketing site (`snifferbots.com` / `www`) is meant to move to static hosting.

When connected to a static host (Cloudflare Pages / Netlify / Vercel), no build
command is needed — the output/publish directory is the repo root. Only the DNS
records for `@` and `www` should point at the new host; `admin` and `devices`
stay pointed at the VPS.

There is no `Web.config` in this repo — that file was IIS-specific and has no
effect on a static host. If a "not found" page redirect needs to be configured
explicitly on the new host, use that host's own mechanism (e.g. a `_redirects`
file for Netlify/Cloudflare Pages, or `vercel.json` for Vercel).
