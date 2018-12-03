<template>
  <div class="home_content">
      <app-intro ref="intro" />
  </div>
</template>

<script>
import appIntro from '~/components/intro.vue'

export default {
  mounted() {
      this.$refs.intro.animate_intro();
  },

  components: {
    appIntro,

  }
}
</script>



