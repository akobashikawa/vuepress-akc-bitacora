---
tags: ["express", "node", "nodemon"]
---

# 20231005: Nodemon REPL

<TagLinks />

- Supongamos un REPL que ejecutamos:
	- `node my-repl.js`
- Para que nodemon recargue el repl al ocurrir un cambio en el proyecto, indicarle dónde ver esos cambios. Por ejemplo usando -w (watch) al ejecutar el comando:
	- `nodemon -w ../modules/ my-repl.js`