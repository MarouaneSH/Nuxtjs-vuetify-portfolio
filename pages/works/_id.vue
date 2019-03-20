<template>
    <div class="works_container_content">
        <div class="works_back" @click="$router.go(-1)">
              <font-awesome-icon   :icon="['fas','arrow-up']"/>
              <span>back to works</span>
        </div>
        <v-app id="app_single_works" >
            <div class="single_works" v-if="loading">
                <div class="loding_single_works">
                    <div class="single_works_bg">
                            <div class="single_works_bg_title loading_bar "></div>
                    </div>
                     <div class="single_works_content">
                           <div class="single_works_content_info">
                               <div class="item_content">
                                    <h3 class="item_content_heading loading_bar"></h3>
                                    <p class="item_content_val project_desc loading_bar"></p>
                                </div> 
                           </div>
                     </div>
                </div>
            </div>
            <div v-if="work" v-show="!loading">
                <div class="single_works">
                    <div class="single_works_bg" 
                        :style="{background : 'url(/img/works/'+work.thumbnail+')'}">
                        <div class="single_works_bg_title"> {{work.name}} </div>
                    </div>
                    <div class="single_works_content">
                        <div class="single_works_content_info">
                        <div class="item_content">
                                <h3 class="item_content_heading">Project description</h3>
                                <p class="item_content_val project_desc" v-html="work.details.description">  </p>
                      
                                <template v-if="work.details.hasVideo">
                                    <h3 class="item_content_heading">Video preview</h3>
                                    <div class="item_content_video"  @click="showVideo = true"  :style="{backgroundImage : 'url(/img/works/'+work.thumbnail+')'}">
                                            <div class="pulse1"></div>
                                            <div class="pulse2"></div>
                                            <font-awesome-icon icon="play-circle" />
                                    </div>
                                </template>
                            </div> 
                        </div>
                        <div class="single_works_content_details">
                            <p class="title-sm">PROJECT DETAILS</p>
                            <div class="item_content">
                                <h3 class="item_content_heading">Project name</h3>
                                <p class="item_content_val">{{work.name}} </p>
                            </div>
                            <div class="item_content" v-if="work.details.project_url">
                                <h3 class="item_content_heading">Project URL</h3>
                                <a href="#" target="_blank" class="item_content_val">{{work.details.project_url}} </a>
                            </div>
                            <template  v-if="work.details.isApp">
                                <div class="item_content">
                                    <h3 class="item_content_heading">Links</h3>
                                    <div class="store_badges">
                                        <a v-if="work.details.store_links.playstore" target="_blank" :href="work.details.store_links.playstore" >
                                            <img class="playstore_badge"  src="/img/playstore.png" alt="">    
                                        </a>
                                        <a v-if="work.details.store_links.appstore" target="_blank" :href="work.details.store_links.appstore" >
                                            <img class="appstore_badge" src="/img/appstore.png" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="item_content">
                                    <h3 class="item_content_heading">Available on codecanyon</h3>
                                    <div class="store_badges codecanyon">
                                        <a v-if="work.details.codecanyon" target="_blank" :href="work.details.codecanyon.url" >
                                            <img src="/img/codecanyon.png" alt="">
                                        </a>
                                        <span>For only {{work.details.codecanyon.price}} $</span>
                                    </div>
                                </div>
                            </template>
                            <p class="title-sm">Frameworks / languages / Tools used</p>
                            <div class="item_content">
                                <h3 class="item_content_heading">Main</h3>
                                <div class="item_content_technologies">
                                    <v-tooltip v-for="(techno,index) in work.technologies"  
                                                :key="index"
                                                bottom >
                                        <img :src="'/img/technologies/'+ techno.url"
                                            :style="{width : techno.width_thumbnail}"
                                            slot="activator"
                                            alt="">
                                        <span>{{techno.description}} </span>
                                    </v-tooltip>
                                </div>
                            </div>
                            <div class="item_content">
                                <h3 class="item_content_heading">Others</h3>
                                <p class="item_content_val">
                                    <v-chip class="item_content_chip" v-for="(techno,index) in work.details.other_technologies" :key="index">
                                        {{techno}}
                                    </v-chip>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single_works_screenshots">
                    <div class="item_content" v-if="getScreenshots">
                        <h3 class="item_content_heading">Screenshots</h3>
                        <div class="item_screenshot_container">
                                <img v-for="(screenshot,index) in getScreenshots" 
                                    :src="screenshot" 
                                    :key="index"
                                    class="screenshots_img">
                        </div>
                    </div> 
                </div>
            </div>
             <transition name="slide-fade">
               
               <div class="video_popup" v-if="work && showVideo">
                  
                   <font-awesome-icon class="close-btn" @click="showVideo = false"  icon="times"/>
                   <video width="700" autoplay controls>
                        <source   :src="`/img/works/videos/${work.details.videoLink}`"  type="video/mp4"> 
                    </video> 
               </div>
            </transition>
        </v-app>
    </div>
</template>

<script>
import {works}  from "../../data/works";
import {works_details}  from "../../data/works-details";

export default {
    layout: 'secondary',
    mounted () {
        const id =this.$route.params.id;
        this.work = works.filter((w)=>  {
            return w.id === id;
        })[0];
        
        //add works details
        this.work.details = works_details.filter((w)=>  {
            return w.id === id;
        })[0];

        if(!this.work) {
              this.$nuxt.error({ statusCode: 404 })
        }
      
       setTimeout(()=> {
            this.loading = false;
        }, 900)
    },
    data() {
        return {
            work : null,
            loading : true,
            showVideo : false,
        }
    },
    computed : {
        getScreenshots() {
            if(!this.work.details.screenshots_count) 
                return;
            const count = this.work.details.screenshots_count;
            const id = this.work.id.toLowerCase();
            return Array.from(Array(count), (_,i) => { 
                    return `/img/works/screenshots/${id}/${id}-${i + 1}.jpg`;
            });
        },
    }
}
</script>

<style scoped lang="scss">
.works_back {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
    cursor: pointer;
    svg {
        font-size: 30px;
    }
    span {
        font-weight: 200;
        font-size: 10px;
    }
}
.works_container_content {
    padding: 20px;
}
.single_works {
    
    width: 100%;
    &_bg {
        width: 100%;
        background-size: cover !important;
        position: relative;
        height: 300px;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-end;
        &:after {
           content: "";
            background: linear-gradient(to top, #03214cb8,#03214c24);
            width: 100%;
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
        }
        &_title {
            margin-bottom: 50px;
            font-size: 50px;
            font-weight: bolder;
            z-index: 1;
            position: relative;
            align-self: center;
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
      
    }
    &_content {
        display: flex;
        &_details {
            background: linear-gradient( to right , #e96484, #ff174e);
            width: 300px;
            padding: 20px;
            border-radius: 10px;
            transform: translateY(-25px);
            text-align: left;
            align-self: flex-start;
        }
        &_info {
            flex: 2;
            text-align: left;
           .project_desc {
               padding: 0 30px !important;
               margin: 15px 0;
               text-align: justify;
               span {
                position: relative;
                  &::before {
                        content: "";
                        background: linear-gradient( to top , #e96484, #ff174e47);
                        width: 100%;
                        height: 9px;
                        position: absolute;
                        left: 0;
                        bottom: 3px;
                        z-index: -1;
                  }
               }
           }
        }
    }
    .item_content {
        overflow: hidden;
        margin-left: 10px;
        &:first-of-type {
            margin-top: 15px;
        }
        &_val {
            padding-left: 7px;
        }
        a {
            white-space: nowrap;
            color: #f3f3f3;
            font-weight: bold;
            white-space: nowrap;
            position: relative;
            &::before{
                content: "";
                background: linear-gradient(to top, #386196, rgba(10, 35, 67, 0.12));
                width: 95%;
                height: 10px;
                position: absolute;
                left: 0;
                bottom: 3px;
                z-index: -1;
                margin: 0 auto;
                right: 0;
            }
        }
        &_technologies {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        &_chip {
             border: none !important;
             font-size: 11px;
             color: #021c44;
             background: white;
        }
        &_video {
            /* max-height: 200px; */
            max-width: 500px;
            height: 300px;
            margin: 40px auto;
            background-size: cover;
            position: relative;
                display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            svg {
                    position: relative;
                    z-index: 2;
                    font-size: 60px;
                    cursor: pointer;
                    border-radius: 100%;
            }
            &:after {
                    content: "";
                    background: linear-gradient(to top, rgba(3,33,76,0.72157), rgba(3,33,76,0.14118));
                    width: 100%;
                    position: absolute;
                    height: 100%;
                    left: 0;
                    top: 0;
            }
        }
    }
}



.title-sm {
    font-size: 12px;
    font-weight: 200;
    &:not(:first-of-type) {
        margin-top: 20px;
    }
}

.store_badges {
      display: flex;
      align-items: center;
      img {
          align-self: center;
      }
    .playstore_badge {
        max-width: 129px;
    }
    .appstore_badge {
        max-width: 100px;
    }
  
}


.single_works_screenshots {
    text-align: left;
    .item_content_heading{
        margin-bottom: 20px;
    }
    .item_content_heading {
        padding-left:20px;
    }
    .screenshots_img {
        max-width: 100%;
    }
    .item_screenshot_container {
        text-align: center;
    }
}


.codecanyon {
    flex-direction: column;
    align-items: flex-start !important;
    padding: 8px;
    a {
        background: black;
        border-radius: 10px;
        padding: 1px 4px;
        padding-top: 6px;
    }
    img {
        max-width: 100px;
    }
    span {
        display: block;
        font-weight: 200;
        font-size: 11px;
    }
}

#app_single_works {
    width: 100%;
    background: none;
    color: white;
    min-height: 100vh;
}

.video_popup {
    position: fixed;
    top: 0;
    background: #03214cb8;
    height: 100%;
    width: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    .close-btn {
        position: absolute;
        color: white;
        font-size: 25px;
        top: 20px;
        right: 30px;
        cursor: pointer;
    }
}
.loding_single_works {
    background:  rgba(1, 81, 213, 0.77)  ;
    .single_works_bg_title::before { background :none; }
    .single_works_bg_title {
        align-self: flex-start;
        margin: 30px;
         animation: loading 1s  infinite alternate-reverse;
    }
    .loading_bar {
        height: 19px;
        width: 40%;
        background: #dee2e85e;
        border-radius: 2px;
      
    }
    .item_content_heading {
          animation: loading 2s  infinite alternate-reverse;
    }
    .item_content_val {
          animation: loading 1s .5s infinite alternate-reverse;
    }
}

@keyframes loading {
    from {
        width: 10%;
    }
    from {
        width: 90%;
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
</style>

<style lang="scss">

.project_desc {
    span {
    position: relative;
    font-weight:bold;
        &::before {
            content: "";
            background: linear-gradient( to top , #e96484, #ff174e47);
            width: 100%;
            height: 9px;
            position: absolute;
            left: 0;
            bottom: 3px;
            z-index: -1;
        }
    }
}


.pulse1 {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    border: 3px solid rgba(255, 255, 255, .1);
    -webkit-animation: pulsejg1 1.3s linear infinite;
    animation: pulsejg1 1.3s linear infinite;
    border-radius: 999px;
    -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);
    box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.pulse2 {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    border: 1px solid rgba(255, 255, 255, 0);
    -webkit-animation: pulsejg2 0.9s linear infinite;
    animation: pulsejg2 0.9s linear infinite;
    border-radius: 999px;
    -webkit-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);
    box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

@-webkit-keyframes pulsejg1 {
    0% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    50% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    60% {
        -webkit-transform: scale(.9);
        opacity: .2;
    }

    70% {
        -webkit-transform: scale(1.1);
        opacity: .35;
    }

    80% {
        -webkit-transform: scale(1.25);
        opacity: .2;
    }

    100% {
        -webkit-transform: scale(1.4);
        opacity: 0;
    }
}

@keyframes pulsejg1 {
    0% {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        opacity: 0;
    }

    50% {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        opacity: 0;
    }

    60% {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        opacity: .1;
    }

    70% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        opacity: .25;
    }

    80% {
        -webkit-transform: scale(1.25);
        transform: scale(1.25);
        opacity: .1;
    }

    100% {
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
        opacity: 0;
    }
}

@-webkit-keyframes pulsejg2 {
    0% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    40% {
        -webkit-transform: scale(.8);
        opacity: .05;
    }

    50% {
        -webkit-transform: scale(1);
        opacity: .1;
    }

    60% {
        -webkit-transform: scale(1.1);
        opacity: .3;
    }

    80% {
        -webkit-transform: scale(1.2);
        opacity: .1;
    }

    100% {
        -webkit-transform: scale(1.3);
        opacity: 0;
    }
}

@keyframes pulsejg2 {
    0% {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        opacity: 0;
    }

    40% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: .05;
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .1;
    }

    60% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        opacity: .3;
    }

    80% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        opacity: .1;
    }

    100% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        opacity: 0;
    }
}
</style>
