<template lang="html">
    <!-- https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html -->
    <div>
        Tags:
        <router-link v-for="tag in $page.frontmatter.tags" :key="tag" :to="{ path: `/tags.html#${tag}` }">
            {{ tag }}
        </router-link>
    </div>
</template>