<template>
  <div class="home_content">
     <div class="home_content_right_pan"></div>
      <v-container>
          <v-layout row>
              <v-flex x6>
                  <app-intro ref="intro" @onAnimationFinish="animateHomePage" />
              </v-flex>
              <v-flex x6>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script>
import appIntro from '~/components/intro.vue'

export default {
  mounted() {
    //starting intro animation
     this.$refs.intro.animate_intro();
  },
  methods : {
     animateHomePage() {
      let _this = this;
      this.$anime
        .timeline()
        .add({
          targets : ".home_content_right_pan",
          translateX: "-100%",
          delay : 200,
          duration : 1500,
           backgroundColor: ["#FF174E", "#03204C"],
          direction: 'alternate',
          easing: 'easeInOutSine',
          complete : function() {

          }
        })
    },
  },
  components: {
    appIntro,

  }
}
</script>

<style scoped lang="scss">
.home_content {
  position: relative;
  &_right_pan{
    width: 40%;
    position: absolute;
    right: -50%;
    height: 100vh;
    background: #03214c;
  }
}
</style>




