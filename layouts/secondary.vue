<template>
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
        </div>
        <nuxt />
        <div class="works_container_right_sidebar">
            <nuxt-link to="/about" class="nav_link default_link" v-if="currentRoute != 'about' && currentRoute != 'skills'">ABOUT</nuxt-link>
            <nuxt-link to="/works" class="nav_link default_link" v-if="currentRoute != 'works'">Works</nuxt-link>
            <div class="social_icons">
                <font-awesome-icon   :icon="['fab','github']"/>
                <font-awesome-icon  :icon="['fab','facebook']"/>
                <font-awesome-icon  :icon="['fab','linkedin']"/>
            </div>
            <nuxt-link to="/skills" class="nav_link default_link">SKILLS</nuxt-link>
        </div>
    </v-container>
</template>

<script>
  export default {
    mounted() {
        // Change background IMAGE
        if(!this.$store.getters.backgroundStatus) {
            this.$store.commit('changeBgImage',"bg1.svg");
        }
    },
    data() {
      return {
      }
    },
    computed : {
        currentRoute() {
            return this.$nuxt.$route.name;
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
            a{
                font-weight: bold;
                font-size: 15px;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    background: #ff0047;
                    height: 7px;
                    bottom: 4px;
                    left: 2px;
                    width: 51%;
                    z-index: -1;
                }
            }
         }
    }

</style>