---
tags:
  - vitepress
---

# 20240412: Vitepress favicon

- Tengo un site vitepress pero no tiene favicon
- [Favicon Generator for perfect icons on all browsers](https://realfavicongenerator.net/)
	- A partir de un png, puede generar el código html las imágenes y archivos necesarios para setear correctamente el favicon de modo compatible con múltiples navegadores.
- Descargo el zip y lo descomprimo en `public/assets/favicons/`
- Edito `.vitepress/config.ts`

```ts
head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#5bbad5"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    //...
],
```