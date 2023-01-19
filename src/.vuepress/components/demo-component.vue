<template>
  <p class="demo">
    {{ msg }} {{ 1 + 1 }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
