<template>
    <div class="skills_wrapper">
        <h2 class="skills_wrapper_headline">What I DO ?</h2>
        <v-layout row wrap style="width: 100%" class="skils_container">
            <v-flex md4 xs12 class="skils_lists">
                <h5>Front end</h5>
                <ul>
                   <li> JavaScript es6+</li>
                   <li> VueJS 2+ (VueX, Vue-router, CLI...)</li>
                   <li> Vuetify</li>
                   <li> Nuxt.js</li>
                   <li> Angular 5+</li>
                   <li> TypeScript</li>
                   <li> jQuery</li>
                   <li> Ionic Framework</li>
                   <li> SASS</li>
                   <li> anime.js</li>
                   <li> Webpack</li>
                   <li> Bootstrap / Bulma</li>
                </ul>
            </v-flex>
            <v-flex md4 xs12 class="skils_lists">
                <h5>Back end</h5>
                <ul>
                   <li> Laravel Framework</li>
                   <li> PHP</li>
                   <li> Lumen</li>
                   <li> OAuth</li>
                   <li> JWT Authentificaction</li>
                   <li> CRON JOBS / Queue</li>
                   <li> Redis</li>
                   <li> MySQL / MongoDB</li>
                   <li> Laravel ECOSYSTEM (Nova - Scout - Homestead - Echo - Voyager)</li>
                </ul>
            </v-flex>
            <v-flex md4 xs12 class="skils_lists">
                 <h5>OTHERS</h5>
                 <ul>
                   <li> Git / Mercurial</li>
                   <li> Vagrant / Docker</li>
                   <li>  Esastic search / Algolia </li>
                   <li> Server side rendering</li>
                   <li>Illustrator</li>
                   <li> API Integration (Facebook, Google, Microsoft...)</li>
                </ul>
                 <h5>Things I want to learn</h5>
                 <ul class="pending">
                   <li> Flutter </li>
                   <li> E2E & unit testing </li>
                </ul>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    layout : "secondary",
    mounted(){
        this.$anime
                .timeline()
                .add({
                    targets : ".skills_wrapper_headline",
                    easing : "easeInOutSine",
                    opacity : [0,1]
                })
                .add({
                    targets : ".skils_lists li",
                    easing : "easeInOutSine",
                    opacity : [0,1],
                    translateY : ["-20px",0],
                })
                .add({
                    targets : ".skils_lists h5",
                    easing : "easeInOutSine",
                    opacity : [0,1],
                    translateY : ["-20px",0],
                     offset : "-=900"
                })
    }
}
</script>

<style scoped lang="scss">
    .skills_wrapper{
         width: calc(100% - 240px);
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transform: translateY(-90px);
        padding: 120px 30px;
        h2 {
            position: relative;
            font-size: 40px;
            &::before {
                    content: "";
                    background: #ff174e;
                    width: 60%;
                    position: absolute;
                    height: 20px;
                    left: 0;
                    left: 9px;
                    bottom: 2px;
                    z-index: -1;
                }
        }
    }
    .skils_lists {
        text-align: left; 
    }
    .skils_container {
        margin-top: 30px;
        h5 {
            margin-top: 20px;
        }
        ul {
            list-style: none;
            li {
                position: relative;
                margin-top: 15px;
                margin-left: 15px;
                &:before {
                    content : "";
                    position: absolute;
                    left: -20px;
                    top: 3px;
                    animation: pulse 2s infinite;
                    border-radius: 100%;
                    background: white;
                    height: 10px;
                    width: 10px;
                }
            }
        }
        .pending li{
            &::before{
                    background: #4061b5;
            } 
        }
        h5 {
             font-size: 16px;
             text-transform: uppercase;
        }
    }

     @media only screen and (max-width: 990px) {
        .skills_wrapper {
            width : 100%;
        }
    }
</style>
