---
tags: ["vuepress"]
---

# 20230322: Tags en Vuepress

<TagLinks />

- El frontmatter se coloca al inicio del archivo entre guiones triples (`---`).
- Se puede indicar una lista de tags

```
---
tags: ["javascript", "vue", "vuepress"]
---
```

- Se puede definir el componente TagLinks para mostrar la lista de tags de la página

`src\.vuepress\components\TagLinks.vue`
```vue
<template lang="html">
    <!-- https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html -->
    <div>
        Tags:
        <router-link v-for="tag in $page.frontmatter.tags" :key="tag" :to="{ path: `/tags.html#${tag}` }">
            {{ tag }}
        </router-link>
    </div>
</template>
```

- Se puede definir el componente TagList para mostrar la lista de tags de todas las páginas

`src\.vuepress\components\TagList.vue`
```vue
<template lang="html">
    <!-- basado en https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html -->
    <div>
        <!-- <span v-for="tag in Object.keys(tags)">
            <h2 :id="tag">
                <router-link :to="{ path: `/tags.html#${tag}` }" class="header-anchor" aria-hidden="true">#</router-link>
                {{ tag }}
            </h2>
            <ul>
                <li v-for="page in tags[tag]">
                    <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
                </li>
            </ul>
        </span> -->
        <span v-for="tag of tags">
            <h2 :id="tag.key">
                <router-link :to="{ path: `/tags.html#${tag.key}` }" class="header-anchor" aria-hidden="true">#</router-link>
                {{ tag.key }}
            </h2>
            <ul>
                <li v-for="page of tag.pages">
                    <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
                </li>
            </ul>
        </span>
    </div>
</template>
  
<script>
export default {
    computed: {
        tags() {
            let tags = {}
            for (let page of this.$site.pages) {
                for (let index in page.frontmatter.tags) {
                    const tag = page.frontmatter.tags[index]
                    if (tag in tags) {
                        tags[tag].push(page)
                    } else {
                        tags[tag] = [page]
                    }
                }
            }

            const tagsSorted = [];
            const keysSorted = Object.keys(tags).sort();
            for (let key of keysSorted) {
                const item = {
                    key,
                    pages: tags[key] 
                };
                tagsSorted.push(item);
            }
            
            // return tags
            return tagsSorted;
        }
    }
}
</script>
```

- Los links suponen que se ha agregado la página tags.md 

`src\tags.md`
```md
# Tags

<TagList />
```

`src\.vuepress\config.js`
```js
//...
nav: [
      //...
      {
        text: 'Tags',
        link: '/tags/',
      },
      //...
]
//...
```

- Referencia: [Adding Tags to Vuepress](https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html)