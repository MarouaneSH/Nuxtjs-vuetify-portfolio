<template>
  <div class="home_content">
      <script src="/pt.min.js"></script>
      <section id="home_canvas" class="flex height-fix">
         <div id="pt" class="canvas"></div>
      </section>
      <div class="rounded_item"></div>
      <v-container>
          <nuxt-link to="/works" class="home_content_scroll">
             <img src="svg/scroll.svg" alt="">
             <p> click to discover</p>
          </nuxt-link>
          <v-layout row>
              <v-flex x6>
                  <app-intro ref="intro" @onAnimationFinish="animateHomePage" />
              </v-flex>
              <v-flex x6 class="home_content_right">
                  <div class="home_content_nav">
                      <span>About</span>
                      <span>Works</span>
                      <span>Skills</span>
                  </div>

                  <div class="home_content_contact">
                      <button class="btn_contact"><font-awesome-icon icon="envelope"/></button>
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
     //starting canvas animation
     this.animate_canvas();
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
            targets : "#home_canvas .canvas",
            opacity : [0,1],
            easing: 'easeInOutSine',
        })
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
    test() {
      console.log("dssd");
    },
    animate_canvas() {
      var space;
        var colors = [
          "#FF3F8E", "#04C2C9", "#2E55C1"
        ];


        space = new CanvasSpace("canvas", "#153667" ).display();
        var form = new Form( space );

        // Elements
        var pts = [];
        var center = space.size.$divide(1.8);
        var angle = -(window.innerWidth * 0.5);
        var count = window.innerWidth * 0.05;
        if (count > 150) count = 150;
        var line = new Line(0, angle).to(space.size.x, 0);
        var mouse = center.clone();

        var r = Math.min(space.size.x, space.size.y) * 1;
        for (var i=0; i<count; i++) {
          var p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
          p.moveBy( center ).rotate2D( i*Math.PI/count, center);
          p.brightness = 0.1
          pts.push( p );
        }

        // Canvas
        space.add({
          animate: function(time, fps, context) {

            for (var i=0; i<pts.length; i++) {
              // rotate the points slowly
              var pt = pts[i];

              pt.rotate2D( Const.one_degree / 20, center);
              form.stroke( false ).fill( colors[i % 3] ).point(pt, 1);

              // get line from pt to the mouse line
              var ln = new Line( pt ).to( line.getPerpendicularFromPoint(pt));

              // opacity of line derived from distance to the line
              var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint(pt)) / r);
              var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

              if (distFromMouse < 50) {
                if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
              } else {
                if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
              }

              var color = "rgba(255,255,255," + pts[i].brightness +")"
              form.stroke(color).fill( true ).line(ln);
            }
          },

          onMouseAction: function(type, x, y, evt) {
            if (type=="move") {
              mouse.set(x,y);
            }
          },

          onTouchAction: function(type, x, y, evt) {
            this.onMouseAction(type, x, y);
          }
        });

        space.bindMouse();
        space.play();

    }
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
        &::before{
            position: absolute;
            background: #ff0047;
            content: "";
            height: 19px;
            width: 59%;
            z-index: -1;
            bottom: 0;
        }
        font-size: 25px;
        position: relative;
        font-weight: bold;
        margin:  0 5px;
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


</style>




