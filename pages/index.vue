<template>
  <div class="home_content">
      <script src="/pt.min.js"></script>
      <section id="home_canvas" class="flex height-fix">
        <div id="pt" class="canvas"></div>
      </section>
      <div class="home_content_right_pan"></div>
      <div class="rounded_item"></div>
      <v-container>
          <nuxt-link to="/works" class="home_content_scroll">
             <img src="svg/scroll.svg" alt="">
             <p> scroll to discover</p>
          </nuxt-link>
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
                  <script src="/canvas.js"></script>

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
          opacity : [0,1],
          duration : 1500,
          backgroundColor: ["#FF174E", "#03204C"],
          direction: 'alternate',
          easing: 'easeInOutSine',
        })
        .add({
            targets : "#home_canvas .canvas",
            opacity : [0,1],
            easing: 'easeInOutSine',
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
         .add({
          targets: '.intro-elem path',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          offset: '-=1000',
          duration: 750,
          easing: "easeOutExpo",
          delay: function(el, i) {
            return 50 * i;
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


 .canvas {
        background: #252934;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        z-index: -1;
          opacity: 0;
    }

.home_content {
  position: relative;
  height: 100vh;
  overflow: hidden;

  &_right_pan{
    width: 100%;
    opacity: 0;
    position: absolute;
    height: 100vh;
    background: #EB3A53;
    z-index: -1;
  }
}

.rounded_item {
    position: absolute;
    background: #ff0047;
    height: 200%;
    width: 88%;
    margin: auto;
    right: 0;
    left: 0;
    top: 0;
    opacity : 0;
    border-radius: 100%;
    
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
        text-decoration: none;
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




