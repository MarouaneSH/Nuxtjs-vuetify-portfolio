<template>
    <v-container class="works_container">
        <div class="works_container_left_sidebar">
                <nuxt-link to="/" >
                    <div ref="name_header">
                        <h3  >MAROUANE </h3> 
                        <h3> SOUAH</h3>
                    </div>
                </nuxt-link> 
                <div class="works_container_left_sidebar_contact">
                    <button class="btn_contact"><font-awesome-icon icon="envelope"/></button>
                    <span>CONTACT</span>
                </div>
        </div>
        <nuxt />
        <div class="works_container_right_sidebar">
            <p class="nav_link">ABOUT</p>
            <div class="social_icons">
                <font-awesome-icon   :icon="['fab','github']"/>
                <font-awesome-icon  :icon="['fab','facebook']"/>
                <font-awesome-icon  :icon="['fab','linkedin']"/>
            </div>
            <p class="nav_link">SKILLS</p>
        </div>
    </v-container>
</template>

<script>
  export default {
    mounted() {
        this.$refs.name_header.innerHTML = this.$refs.name_header.innerText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
        this.$anime.timeline({loop: true})
        .add({
            targets: '.works_container_left_sidebar h3 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: function(el, i) {
            return 500 + 30 * i;
            }
        }).add({
            targets: '.works_container_left_sidebar h3 .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1100,
            delay: function(el, i) {
            return 100 + 30 * i;
            }
        });
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
    .works_container {
        color: white;
        margin-top: 50px;
        &_content {
            width: calc(100% - 240px);
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
                font-size: 60px;
                margin: 0;
                padding: 0;
                position: relative;
                position: relative;
                &::before {
                    content: "";
                    background: #ff174e;
                    width: 60%;
                    position: absolute;
                    height: 50%;
                    right: 0;
                    bottom: 11px;
                    z-index: -1;
                }
            }
            p.quote {
                transform: translate(62px,-9px);
                font-size: 10px;
            }
        }
        &_left_sidebar  {
            h3 {
                font-weight: 200;
                font-size: 17px; 
                .newline {
                    display: block;
                }
            }
            &_contact {
                display: flex;
                flex-direction: column;
                align-items: center;
                button {
                    height: 40px;
                    width: 40px;
                    background: #ff174e;
                    border-radius: 100%;
                }
                span {
                    font-size: 10px;
                    margin-top: 6px;
                }
            }
        }
        &_right_sidebar, &_left_sidebar {
            position: fixed;
            height: 100vh;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 20px 0;  
             width: 200px;
        }
        &_left_sidebar {
            left: 0;
            padding-top: 40px;
            a {
                color: white;
                text-decoration: none;
            }
        }
         &_right_sidebar {
            border-left: 1px solid #59607182;
            width: 150px;
            right: 0;
            .social_icons {
                display: flex;
                flex-direction: column;
                font-size: 25px;
                svg {
                    margin-top: 10px;
                }
            } 
            .nav-link {
                font-weight: bolder;
            }
         }
    }
</style>