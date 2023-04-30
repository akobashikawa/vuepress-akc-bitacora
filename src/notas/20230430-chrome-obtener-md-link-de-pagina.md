---
tags: ["chrome", "howto"]
---

# 20230430: Chrome: Cómo obtener el link de la página en formato markdown

<TagLinks />

- Un link en formato markdown tiene la siguiente estructura: `[Título de la página](url_de_la_pagina)`
- En obsidian, por ejemplo, para insertar el link de una página, el proceso normal consiste en:
	- En el documento markdown: CTRL +K
		- Eso agrega `[]()`
	- En chrome: CTRL + L, CTRL + C
		- Eso selecciona el url de la página y luego lo copia
	- En el documento markdown:
		- Pegar el url copiado: `[](url_de_la_pagina)`
	- En chrome, no hay un atajo para obtener el título de la página y hay que hacer esa selección manualmente.
	- En el documento markdown:
		- Pegar el título copiado: `[Título de la página](url_de_la_pagina)`
- Sin embargo, hay un par de extensiones de chrome que pueden facilitar esta tarea.
	- [Copy Markdown Link - Chrome Web Store](https://chrome.google.com/webstore/detail/copy-markdown-link/gkceaaphhbeanfciglgpffnncfpipjpa/related)
		- Extensión que permite configurar un atajo del teclado para copiar el link de una página en formato markdown
		- Hotkey por default: CTRL + M
	- [Copy as Markdown - Chrome Web Store](https://chrome.google.com/webstore/detail/copy-as-markdown/fkeaekngjflipcockcnpobkpbbfbhmdn/related)
		- Extensión que permite copiar el link de una página, o varias páginas, o de una imagen usando el mouse