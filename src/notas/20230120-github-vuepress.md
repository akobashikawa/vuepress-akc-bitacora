---
tags: ["github", "vuepress"]
---

# 20230120: Github Actions

## Github actions: Desplegando Vuepress

- Después de varias horas intentando sin éxito las recetas de varios blogs, y del mismo marketplace de github, conversando con chatGPT llegué a esta solución.
- Preparativos
	- En mi profile, Settings, genero un Personal Access Toke (PAT) y copio su valor
	- En el repositorio
		- Settings, Secrets, agrego ACCESS_TOKEN con el valor del PAT
		- Pages, e indico `gh-pages`
	- En el proyecto
		- Instalo el módulo gh-pages
			- `npm install --save-dev gh-pages`
		- Agrego el script para el deploy, indicando el directorio del `dist`
		- En `config.js`, se especifica la base:
			- Para deployar en **gh-pages**, sería: `base: '/vuepress-akc-bitacora/'` 
			- Para deployar en **netlify**, sería: `base: '/'`
			- Para deployar adecuadamente en ambos ambientes, sería: `base: process.env.VUEPRESS_BASE || '/',` donde `VUEPRESS_BASE` es una variable de ambiente cuyo valor se puede indicar el el yml del action.

- package.json

```json
{
  "name": "AKC Bitacora",
  "version": "0.0.1",
  "description": "Lo que aprendi hoy",
  "main": "index.js",
  "authors": {
    "name": "Antonio Kobashikawa",
    "email": "akobashikawa@gmail.com"
  },
  "repository": "git@github.com:akobashikawa/vuepress-akc-bitacora.git/AKC Bitacora",
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src",
    "deploy": "gh-pages -d src/.vuepress/dist"
  },
  "license": "MIT",
  "devDependencies": {
    "@vue/babel-preset-app": "4.5.18",
    "gh-pages": "^4.0.0",
    "vuepress": "^1.9.8",
    "vuepress-plugin-internal-link": "^0.2.0"
  }
}
```

- deploy.yml
```yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Configure Git
      run: |
        git config --global user.email "akobashikawa@gmail.com"
        git config --global user.name "Antonio Kobashikawa"
        git remote set-url origin https://${{ secrets.ACCESS_TOKEN }}@github.com/akobashikawa/vuepress-akc-bitacora.git

    - name: Build and Deploy
      run: |
        npm ci
        npm run build
        npm run deploy
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        VUEPRESS_BASE: "/vuepress-akc-bitacora/"
```

- Con esto, cada vez que hago push, se produce el despliegue del site publicado en [https://akobashikawa.github.io/vuepress-akc-bitacora/](https://akobashikawa.github.io/vuepress-akc-bitacora/)