<template>
  <div class="home_content">
      <div class="rounded_item"></div>
      <v-container>
          <div class="home_content_scroll">
            <nuxt-link to="/works" class="default_link">
              <img src="svg/scroll.svg" alt="Marouane Souah Portfolio">
              <p> click to discover</p>
            </nuxt-link>
             
          </div>
          <v-layout row class="row_home_wrapper">
              <v-flex x6>
                  <app-intro ref="intro" @onAnimationFinish="animateHomePage" />
              </v-flex>
              <v-flex x6 class="home_content_right">
                  <div class="home_content_nav">
                      <nuxt-link to="/about" class="default_link"> <span>About</span> </nuxt-link> 
                      <nuxt-link to="/works" class="default_link"><span>Works</span> </nuxt-link> 
                        <nuxt-link to="/skills" class="default_link"> <span>Skills</span> </nuxt-link> 
                  </div>

                  <div class="home_content_contact ">
                      <button class="btn_contact pulse"><font-awesome-icon icon="envelope"/></button>
                      <span>CONTACT</span>
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
  data() { 
    return {
      animation_status : null,
    }
  },
  methods : {
     animateHomePage() {
      //make animation finished
      this.animation_status = "starting";
      let _this = this;
      this.$anime
        .timeline()
        .add({
           targets : [".home_content_scroll", ".home_content_contact", ".home_content_nav"],
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
          },
          complete : function() {
              _this.animation_status = "finished";
          }
        })

      
    },
  },
  components: {
    appIntro,

  },
  leave: function (el) {
      console.log("sdsd");
      setTimeout(() => {
          done();
      }, 900);
  }
}
</script>


<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
  background-image: none;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
   background-image: none;
   transition: opacity 5s;
}


.home_content {
  position: relative;
  height: 100vh;
  overflow: hidden;

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
        z-index: -1;
        opacity: 0;
        bottom: 40px;
        margin: auto;
        z-index: 5;
        text-align: center;
        color: white;
        transform : translateY(40px);
        text-decoration: none;
        img {
          width: 30px;
        }
    }
    &_right{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    }

    &_nav {
      opacity: 0;
      color: white;
      text-align: right;
      span{
        font-size: 20px;
        position: relative;
        font-weight: bold;
        margin:  0 5px;
        &::before {
          content: "";
          position: absolute;
          background: linear-gradient(to top, #f33a68, rgba(255, 23, 78, 0.78));
          width: 50%;
          height: 12px;
          position: absolute;
          left: 0;
          bottom: 3px;
          z-index: -1;
        }
      }
    }

    &_contact {
        opacity: 0;
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        margin-bottom: 85px;
        align-self: flex-end;
        span {
          color: white;
          font-size: 12px;
          margin-top: 5px;
        }
      .btn_contact {
          align-self: flex-start;
          background: #ff0047;
          padding: 15px;
          border-radius: 100%;
          line-height: 1;
          color: white;
          font-size: 20px;
          box-shadow: -11px 2px 20px rgba(255, 0, 71, 0.4), 9px 4px 6px rgba(255, 0, 71, 0.19);
      }
    }
}



.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media only screen and (max-width: 990px) {
  .row_home_wrapper {
    flex-direction: column-reverse !important;
  }
  .home_content_right {
    align-items: center;
  }
  .home_content_contact {
    align-self: center;
    margin-top: 20px;
  }
  .intro_container {
    justify-content: flex-start;
  }
}

</style>




