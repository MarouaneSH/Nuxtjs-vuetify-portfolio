<template>
    <div class="works_container_content">
        <v-app id="app_single_works">
            <div class="single_works" v-if="work">
                <div class="single_works_bg" 
                :style="{background : 'url(/img/works/'+work.thumbnail+')'}">
                    <div class="single_works_bg_title"> {{work.name}} </div>
                </div>
                <div class="single_works_content">
                    <div class="single_works_content_info">
                       <div class="item_content">
                            <h3 class="item_content_heading">Project description</h3>
                            <p class="item_content_val project_desc">{{work.details.description}}  </p>
                        </div> 
                    </div>
                    <div class="single_works_content_details">
                        <p class="title-sm">PROJECT DETAILS</p>
                        <div class="item_content">
                            <h3 class="item_content_heading">Project name</h3>
                            <p class="item_content_val">{{work.name}} </p>
                        </div>
                        <div class="item_content">
                            <h3 class="item_content_heading">Project URL</h3>
                            <a href="#" target="_blank" class="item_content_val">{{work.details.project_url}} </a>
                        </div>
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
        </v-app>
    </div>
</template>

<script>
import {works}  from "../../data/works";
import {works_details}  from "../../data/works-details";

export default {
    layout: 'works',
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
      
    },
    data() {
        return {
            work : null,
        }
    }
}
</script>

<style scoped lang="scss">
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
        }
        &_info {
            flex: 2;
            text-align: left;
           .project_desc {
               padding: 0 30px !important;
               margin: 15px 0;
               text-align: justify;
           }
        }
    }
    .item_content {
        margin-left: 10px;
        &:first-of-type {
            margin-top: 15px;
        }
        &_val {
            padding-left: 7px;
        }
        a {
            color : #021b44;
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
    }
}

.title-sm {
    font-size: 12px;
    font-weight: 200;
    &:not(:first-of-type) {
        margin-top: 20px;
    }
}

#app_single_works {
    width: 100%;
    background: none;
    color: white;
}
</style>
