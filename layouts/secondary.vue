<template>
  <div class="app_wrapper">
    <v-container class="works_container">
        <div class="works_container_left_sidebar">
                <nuxt-link to="/" >
                        <h3 class="name_header" >
                            MAROUANE <span class="newline">SOUAH</span>
                            <span class="back_home"> <font-awesome-icon icon="long-arrow-alt-left"/> BACK TO HOME</span> 
                        </h3> 
                </nuxt-link> 
                <nuxt-link to="/contact" class="works_container_left_sidebar_contact">
                    <button class="btn_contact pulse"><font-awesome-icon icon="envelope"/></button>
                    <span>CONTACT</span>
                </nuxt-link>
                <div class="toggle_works">
                    <font-awesome-icon @click="collpaseRightNavbar = !collpaseRightNavbar"  icon="grip-lines"/>
                </div>
        </div>
        <nuxt />
        <div class="works_container_right_sidebar" :class="{'collapse_right_nav' : collpaseRightNavbar}">
            <div class="right_sidebar_close">
                <font-awesome-icon @click="collpaseRightNavbar = !collpaseRightNavbar"  icon="times"/>
            </div>
            <nuxt-link to="/about" class="nav_link default_link" v-if='!["about","skills","contact"].includes(currentRoute)'>ABOUT</nuxt-link>
            <nuxt-link to="/works" class="nav_link default_link" v-if="currentRoute != 'works' && currentRoute != 'works-id'">Works</nuxt-link>
            <div class="social_icons">
                <a href="https://github.com/marouanesh" class="default_link" target="_blank"><font-awesome-icon :icon="['fab','github']"/></a>
                <a href="https://www.facebook.com/Marwan.Esaaouira" class="default_link" target="_blank"><font-awesome-icon  :icon="['fab','facebook']"/></a>
                <a href="https://www.linkedin.com/in/marouane-sh-256797133/" class="default_link" target="_blank"><font-awesome-icon  :icon="['fab','linkedin']"/></a>
            </div>
            <nuxt-link to="/skills" class="nav_link default_link" v-if='currentRoute != "skills"'>SKILLS</nuxt-link>
             <nuxt-link to="/about" class="nav_link default_link" v-else>ABOUT</nuxt-link>
        </div>
    </v-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appFooter from "../components/footer";
  export default {
    mounted() {
        // Change background IMAGE
        if(!this.$store.getters.backgroundStatus) {
            this.$store.commit('changeBgImage',"bg1.svg");
        }
        if(window.innerWidth < 990) {
            this.collpaseRightNavbar = true;
        }
    },
    data() {
      return {
          collpaseRightNavbar : false,
      }
    },
    computed : {
        currentRoute() {
            return this.$nuxt.$route.name;
        },
    },
    components : {
        appFooter
    }
  }
</script>

<style lang="scss">
    .works_container {
        color: white;
        margin-top: 50px;
        max-width: 100% !important;
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
                font-weight: bold;
                font-size: 17px; 
                .newline {
                    display: block;
                }
                .back_home {
                    font-size: 8px;
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
            border-left: 1px solid rgba(250, 251, 255, 0.52);
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
            .nav_link{
                font-weight: bold;
                font-size: 15px;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    background: linear-gradient(to top, #f33a68, rgba(255,23,78,0.27843));
                    width: 50%;
                    height: 12px;
                    position: absolute;
                    right: 0;
                    bottom: 3px;
                    z-index: -1;
                }
            }
         }
    }

    .right_sidebar_close {
        display: none;
    }

</style>


<style lang="scss">

.toggle_works {
    display: none;
}
@media only screen and (max-width: 990px) {
  .works_container {
      display: flex;
      flex-direction: column;
  }
  .works_container_left_sidebar {
    position: unset;
    height: auto;
    padding-top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    z-index: 2;
    .toggle_works {
        display: block;
        svg {
             font-size: 29px;
        }
       
    }
  }

  .works_container_right_sidebar{
      background: #063dc5;
    z-index: 3;
      transition: all 2s ease-in;
  }
  .collapse_right_nav {
        right: -50vh;
        display: none;
    }
    .right_sidebar_close {
        position: absolute;
        left: 10px;
        display: block;
       
        svg {
            font-size: 22px;
        }
    }
    .works_container_content{width: 100%;}
    .works_items {
        .works_items_box {
            width: 100%;
            .works_overlay_details_technologies img {
                width: 25px !important;
            }
            h4 {
               font-size: 11px;
            }
            p {
                font-size: 10px;
            }
        }
    }
    .single_works_content {
        flex-direction: column-reverse;
        .single_works_content_details {
            width : 94% !important;
            margin : 0 auto !important;
        }
    }
 
}
</style>
