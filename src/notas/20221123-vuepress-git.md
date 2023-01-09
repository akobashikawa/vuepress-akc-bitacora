# 20221123: vuepress, git

## VuePress
- Framework para generar sites estáticos.
    - [VuePress](https://vuepress.vuejs.org/)
    - Markdown to HTML
    - Basado en Vue

- Problema para deployar
    - [fresh new 1.x project fails to build (but dev works OK) #3065](https://github.com/vuejs/vuepress/issues/3065)
        - npm run dev
            - OK
        - npm run build
            - KO
    - Fue necesario hacer downgrade de `babel-preset-app`
        ```json
        // package.json
        "devDependencies": {
            "vuepress": "^1.5.3",
            "@vue/babel-preset-app": "4.5.18"
        }
        ```
    - Elimino `node_modules`
    - npm run build

- Deploy en Netlify
    - [Netlify](https://app.netlify.com/)
        - Para hosting y despliegue automatizado de sites estáticos
        - Soporta Hugo, Vuepress, etc
    - En github, creo el repositorio https://github.com/akobashikawa/vuepress-akc-bitacora
    - En netlify
        - Defino un nuevo site
            - Indico el repositorio de github
        - Indico los parámetros para el deploy
            - La carpeta a deployar es `src/.vuepress/dist`
        - Cambio el nombre del site
            - akc-bitacora
        - Asocio un custom domain al site
            - bitacora.akcademia.xyz
            - Indico que fuerce la redirección hacia https
        - Pruebo el deploy manual
    - En github, modifico el readme y compruebo el deploy automático


## Git
- Establecer vim como editor
    - git config --global core.editor "vim"
- Permitir pull y mergear historias no relacionadas
    - git pull origin master --allow-unrelated-histories
    - Me ocurrió porque cree un repositorio directamente en github, otro en mi local, y quise unirlos