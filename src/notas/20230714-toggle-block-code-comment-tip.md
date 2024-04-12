---
tags: ["programming", "tips"]
---

# 20230714: Tip para comentar/descomentar fácilmente un bloque de código

<TagLinks />

Expondré esta idea para javascript, pero funciona del mismo modo en lenguajes similares, como java y C.

- Sabemos que para comentar una línea, usamos el marcador de comentario simple, el doble slash (`//`), al inicio del comentario

```js
// Comentario de una línea
if (true) { } // Comentario de media línea
```

- Sabemos que para comentar un bloque de código, envolvemos el bloque entre los marcadores de comentario `/*` (de inicio) y `*/` (de fin)

```js
/*
Bloque comentado
*/
```

- Cuando el bloque es muy, muy largo, comentarlo o descomentarlo, normalmente significa poner/retirar ambos marcadores de comentario.
- Sin embargo, un marcador de comentario también se puede comentar. Entonces podemos usar el marcador de comentario simple estratégicamente, para que un solo cambio en un solo lugar produzca la activación/desactivación del bloque comentado.

```js
/*
Este bloque está comentado.
Notar que el marcador de comentario simple no afecta al marcador de cierre
porque es parte del bloque comentado.
//*/

///*
let message = `Este bloque no está comentado.
Es porque un marcador de comentario simple comenta el marcador de apertura.
Entonces, el marcador de comentario simple del final, ahora sí comenta el marcador de cierre.
`;
//*/
```

## Conclusión

- Iniciar el comentario de bloque con `/*` como de costumbre, pero terminarlo con `//*/*` facilita activar/desactivar todo el bloque con solamente comentar/descomentar el marcador de comentario de apertura.
	- En **vscode** se puede comentar/descomentar con `CTRL + /`