<template>
  <div class="home_content">
     <div class="home_content_right_pan"></div>
      <v-container>
          <div class="home_content_scroll">
            <img src="svg/scroll.svg" alt="">
           <p> scroll to discover</p>
          </div>
          <v-layout row>
              <v-flex x6>
                  <app-intro ref="intro" @onAnimationFinish="animateHomePage" />
              </v-flex>
              <v-flex x6>
                  <div class="home_content_nav">
                      <span>Works</span>
                      <span>Skills</span>
                  </div>
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
        .add({
           targets : [".home_content_scroll", ".intro_container_contact", ".home_content_nav"],
           opacity : 1,
           easing: 'easeOutExpo',
           translateY : 0,
           duration: 1500,
           elasticity: 600,
            scale: [0, 1],
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
  height: 100vh;
  overflow: hidden;
  &_right_pan{
    width: 40%;
    position: absolute;
    right: -50%;
    height: 100vh;
    background: #03214c;
    z-index: -1;
  }
}

.home_content {
    &_scroll{
        position: absolute;
        left: 0;
        right: 0;
        opacity: 0;
        bottom: 40px;
        margin: auto;
        text-align: center;
        color: white;
        transform : translateY(40px);
        img {
          width: 30px;
        }
    }
    &_nav {
      opacity: 0;
      color: white;
      text-align: right;
      span{
        font-size: 20px;
        font-weight: bold;
        margin:  0 5px;
      }
    }
}
</style>




