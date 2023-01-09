# 20230109: regexp, vuepress

## Javascript: regexp 101
- [Regular Expressions 101](https://regex101.com/)
- Herramienta online que ayuda a aprender y experimentar con expresiones regulares en diversas variedades.

## Vuepress: wikilinks, dynamic sidebar
- docs/  (o src/), contiene la fuente de lo que se publicará
- `.vuepress/` contiene los internals de vuepress
- `.vuepress/dist/` contiene lo que se publicará
- `vuepress-plugin-internal-link` permite reconocer wikilinks
    - `[[aaa_bbb/ccc]]`
    - Para que reconozca el guión hay que indicarlo en la configuración
        - `[[aaa_bbb-ccc/ddd]]`
    ```js
    // .vuepress/config.js
    module.exports = {
        title: 'My Blog',
        plugins: {
            'internal-link': {
                linkPattern: /\[\[([\w\s/-]+)(\|(([\w\s/-])+))?\]\]/
            }
        }
    }
    ```
- [Automatic Dynamic Sidebars in Vuepress](https://techformist.com/automatic-dynamic-sidebar-vuepress/)
- Los cambios que se hacen en config.js, requieren reiniciar la ejecución.
	- Además de hacer un cambio en la página que se quiere visualizar.