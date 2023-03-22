<template lang="html">
    <!-- https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html -->
    <div>
        <router-link v-for="tag in $page.frontmatter.tags" :key="tag" :to="{ path: `/tags.html#${tag}` }" :class="`tag tag-${tag}`">
            {{ tag }}
        </router-link>
    </div>
</template>