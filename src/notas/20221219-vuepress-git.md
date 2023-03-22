---
tags: ["vuepress", "git"]
---

# 20221219: Vuepress, Git

## VuePress: Crear site

### create-vuepress-site

- npx create-vuepress-site vuepress-hello
- cd vuepress-hello/docs
- npm install
- npm run dev
- <http://localhost:8080/>

### manual

- npm install --save-dev vuepress
- package.json
  - "docs:dev": "vuepress dev docs"
  - "docs:build": "vuepress build docs"
- mkdir docs
- vim docs/index.md

```toml
---
home: true
actionText: Counter Component
actionLink: /counter/
features:
- title: Embedded Vue Compments
  details: A Vue counter developed using Vue is embedded in this documentation. Now that's the power of VuePress!
- title: Documentation made with VuePress
  details: This entire documentation was made with VuePress which parsed Markdown files and corresponding assets using webpack.
footer: Developed using VuePress by William Imoh
---
```

- npm run docs:dev
- <http://localhost:8080/>

## Git: Cherry Pick

- Permite tomar uno o varios cambios de otra branch sin tener que hacer el merge completo.
  - git cherry-pick commit_id
  - Referencia: [Platzi: Git cherry-pick: traer commits viejos al head de un branch](https://platzi.com/clases/1557-git-github/19982-git-cherry-pick-traer-commits-viejos-al-head-de-un)

## Git: Pretty graph

- git log --graph --decorate --format=format:'%h %s' --all
  - Muestra el id del commit y el sumario
