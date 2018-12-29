<template>
    <div class="works_container_content" :class="{animationComplete :animation_completed } ">
        <div class="works_page_wrapper">
            <h1>WORKS</h1>
            <p class="quote">❝ Behind every success is hard work ❝</p>
            <app-works ref="works_items" ></app-works>
        </div>
        <div class="panel_elem">
            <div class="panel_elem_single"></div>
            <div class="panel_elem_single"></div>
            <div class="panel_elem_single"></div>
        </div>
    </div>
</template>

<script>
import appWorks from '~/components/works.vue'
 
export default {
    layout: 'secondary',
    data(){
      return {
            parentAnimationComplete : false
      }
    },
    components : {
        appWorks
    },
    computed : {
        animation_completed(){
            return this.$store.getters.workAnimationStatus;
        } 
    },
    mounted(){
         if(!this.animation_completed) {
             this.firstTimeAnimation();
         } else {
            this.$refs.works_items.$data.parentAnimationCompleted = true;
         }
    },
    methods : {
        firstTimeAnimation() {
            let _this = this;
            this.$anime
                .timeline()
                .add({
                    targets : ".panel_elem_single",
                    easing : "linear",
                    translateY : ["200vh",0],
                    delay: function(el, i) {
                        return 200 * i;
                    },
                })
                .add({
                    targets : ".panel_elem_single",
                    easing : "linear",
                    translateY : "-200vh",
                        delay: function(el, i) {
                            return 200 * i;
                        },
                        complete : function() {
                        _this.$store.commit('completeWorkAnimation'); 
                        }
                })
                .add({
                    targets : ".works_container_content h1",
                    translateY : [-100, 0],
                    easing : "easeInOutSine",
                    offset : "-=500"
                })
                .add({
                    targets : ".works_items_box",
                    translateY : [100, 0],
                    easing : "easeInOutSine",
                    opacity : [0 ,1],
                    complete : function() {
                        _this.$refs.works_items.$data.parentAnimationCompleted = true;
                    }
              });
        }
    }
}
</script>

<style scoped lang="scss">
.works_page_wrapper {
    display: none;
     flex-direction: column;
     align-items: center;
}

.panel_elem {
    position: absolute;
    left: 0;
    right: 0;
    opacity: 1;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 5;
    display: flex;
    &_single {
        opacity: 1;    
        width: 35%;
        background: white;
        height: 100%;
    }
}
.animationComplete {
    .panel_elem { display: none; }
   .works_page_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>


