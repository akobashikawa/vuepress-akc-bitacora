---
tags: ["vue", "vite"", "howto"]
---
# 20230709: Vite Bootstrap Vue

- bootstrap-vue facilita usar bootstrap 4 con vue2
- Es posible usar bootstrap-vue con vue3, usando @vue/compat

## Con vue CLI
- vue CLI permite usar vue2 y así tambien bootstrap-vue directamente
	- [akobashikawa/vue2-bootstrap-vue: bootstrap-vue con vue 2](https://github.com/akobashikawa/vue2-bootstrap-vue)
- vue CLI permite usar vue 3 por default y luego configurar @vue/compat, con lo que se consigue usar bootstrap-vue
	- [akobashikawa/vue3-bootstrap-vue: bootstrap-vue con vue 3 (@vue/compat)](https://github.com/akobashikawa/vue3-bootstrap-vue)

## Con Vite ❤️
- vite permite usar vue 3 por default y luego configurar @vue/compat, con lo que se consigue usar bootstrap-vue
	- [akobashikawa/vite-vue3-bootstrap-vue: bootstrap-vue con vue 3 (@vue/compat), usando vite](https://github.com/akobashikawa/vite-vue3-bootstrap-vue)
- vite se puede configurar para usar vue2 y así tambien bootstrap-vue directamente
	- [akobashikawa/vite-vue2-bootstrap-vue: bootstrap-vue con vue 2, usando vite](https://github.com/akobashikawa/vite-vue2-bootstrap-vue)

## Referencias

- [Starting with Bootstrap-Vue step by step | Ma-No Tech News & Analysis, javascript, angular, react, vue, php](https://www.ma-no.org/en/programming/javascript/starting-with-bootstrap-vue-step-by-step)
- [Compatibildad Vue 3 - Vite con Bootstrap-Vue, Font-Awesome, etc](https://platzi.com/tutoriales/1856-avanzado-vue/23120-compatibildad-vue-3-vite-con-bootstrap-vue-font-awesome-etc/)
- [Migration Build | Vue 3 Migration Guide](https://v3-migration.vuejs.org/migration-build.html#upgrade-workflow)
- [Vue.js 3 support | BootstrapVue](https://bootstrap-vue.org/vue3)