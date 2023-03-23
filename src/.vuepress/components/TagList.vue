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
            <h2 :id="tag.key" :class="`mytag tag-${tag.key}`">
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