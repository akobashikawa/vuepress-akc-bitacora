---
tags: ["javascript", "angular", "github"]
---

# 20230226: Deployar Angular en gh-pages

<TagLinks />

- Instalo el módulo `gh-pages`
- En `package.json`, agrego los scripts:

```json
{
	"build-gh": "ng build --base-href https://akobashikawa.github.io/myproject/",
	"deploy-gh": "gh-pages --dist dist/myproject --branch gh-pages"
}
```

- `npm run build-gh`
- `npm run deploy-gh`
- [https://akobashikawa.github.io/myproject/](https://akobashikawa.github.io/myproject/)
- En `src\app\app-routing.module.ts`, indicar `useHash: true`

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes, {
	useHash: true
  })],
  exports: [RouterModule]
})
```

- Referencias
	- [Angular router: forzar hash en URL](https://parzibyte.me/blog/2020/05/25/angular-router-forzar-hash-url/)