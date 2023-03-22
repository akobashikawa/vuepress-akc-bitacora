---
tags: ["javascript"]
---

# 20230321: Copy to Cipboard para web

- Para enviar al clipboard un texto seleccionado en el navegador

```js
try {
  //...
  await navigator.clipboard.writeText(text);
  //...
} catch (err) {
  //...
}
```