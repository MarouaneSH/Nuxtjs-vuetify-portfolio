<template>
    <v-app class="app_works">
        <div class="works_items" >
            <template v-if="loading">
                <div class="works_items_box loading_box" v-for="n in 6" :key="n">
                    <div class="loading_box_title"></div>
                    <div class="loading_box_techno"></div>
                </div>
            </template>
            <nuxt-link v-show="isAllImagesLoaded" :to="'/works/'+work.id" class="works_items_box" v-for="(work,index) in works" :key="work.id">
                <img :src="'/img/works/' + work.thumbnail"  @load="imageLoad(index)" class="works_thumbnail" alt="Marouane Souah Portfolio, Moroccan full stack web developer, Laravel, VueJS">
                <div class="works_overlay">
                        <svg viewBox="0 0 450 162"><defs><linearGradient id="a" x1="145.88" y1="246.22" x2="315.56" y2="-47.68" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff174e"/><stop offset="0.14" stop-color="#fe1b51"/><stop offset="0.25" stop-color="#fd2659" stop-opacity="0.98"/><stop offset="0.36" stop-color="#fa3966" stop-opacity="0.96"/><stop offset="0.45" stop-color="#f6547a" stop-opacity="0.93"/><stop offset="0.5" stop-color="#f36586" stop-opacity="0.91"/><stop offset="0.7" stop-color="#f55b7f" stop-opacity="0.86"/><stop offset="1" stop-color="#f84670" stop-opacity="0.76"/><stop offset="1" stop-color="#f74a73" stop-opacity="0.74"/><stop offset="1" stop-color="#f5567b" stop-opacity="0.68"/><stop offset="1" stop-color="#f45f81" stop-opacity="0.63"/><stop offset="1" stop-color="#f36485" stop-opacity="0.61"/><stop offset="1" stop-color="#f36586" stop-opacity="0.6"/></linearGradient></defs><path d="M450,12.51V151.43H0V15.59C26.15,4.12,57.21-3.21,91.54,1.4a153.93,153.93,0,0,1,46.55,14c27.76,13.26,49.22,32.19,74,45.25a166.63,166.63,0,0,0,16.62,7.61C278.3,87.75,349.75,87.34,450,12.51Z" fill="#f9eff9" opacity="0.32"/><path d="M450,29.93V162H0V56.35c28.78-21.06,71.9-44.15,123-37a133.14,133.14,0,0,1,14.17,2.76c38,9.58,62.21,33.58,90.05,50.26,1.91,1.14,3.83,2.25,5.78,3.33,44.92,24.61,113.42,33.56,214-43.46Z" fill="url(#a)"/></svg>
                        <h4 class="works_overlay_details_title"> {{work.name}} </h4>
                        <p class="works_overlay_details_desc"> {{work.short_desc}} </p>
                        <div class="works_overlay_details_technologies">
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
            </nuxt-link>
        </div>
   </v-app>
</template>

<script>
import {works}  from "../data/works";
export default {
    mounted() {
        this.imageLoaded = new Array(this.works.length);
    },
    data() {
        return {
            works : works,
            imageLoaded : null,
            loading : true,
        }
    },
    methods : {
        imageLoad(index) {
            this.imageLoaded[index] = true;
        }
    },
    computed : {
        isAllImagesLoaded() {
            if(!this.imageLoaded) return false;
            if(this.imageLoaded.every((val) => val == "true")) {
                setTimeout(()=> {
                    this.loading = false;
                }, 1200)
            }
            if(!this.loading) return true;
        }
    }
}
</script>

<style lang="scss">
.app_works {
    background: none !important;
}
.loading_box {
    width: 400px !important;
    height: 200px;
    background: #0000001f;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &_title, &_techno {
        height: 19px;
        width: 20%;
        background: #3e5677;
        margin: 10px 20px;
        border-radius: 2px;
    }
    &_title {
         animation: loading 2s infinite alternate-reverse;
    }
     &_techno {
         animation: loading 2s 1s infinite alternate-reverse;
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
.works_overlay {
    position: absolute;
    width: 100%;
    /* top: 0; */
    bottom: 0;
    svg {
        position: absolute;
        left: 0;
         bottom: 5px;
    }
    &_details {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: left;
        &_title, &_desc {
            color: white;
            margin: 0;
            padding: 0 15px;
            position: relative;
            text-align: left;
        }
        &_desc {
            font-weight: 200;
            font-size: 12px;
            text-transform: uppercase;
        }
        &_technologies {
            position: relative;
            width: 100%;
            left: 0;
            display: flex;
            .v-tooltip {
                align-self: center;
            }
            &::before {
                content: "";
                width: 100%;
                height: 80%;
                background: linear-gradient(to top, rgba(60, 62, 96, 0.62), rgba(245,114,144,0));
                position: absolute;
                z-index: 0;
                bottom: 5px;
            }
            img {
                padding: 4px;
                cursor: pointer;
                align-self: center;
            }
        }
    }
}
.works_items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &_box {
        width: calc(50% - 30px);
        position: relative;
        margin-top: 20px;
        img.works_thumbnail {
            max-width: 100%;
        }
    }
}

.works_overlay {
    cursor: pointer;
}
.works_overlay svg path{
    transition: .5s all ease-in-out;
    cursor: pointer;
}
.works_items_box:hover svg path {
    transform: scale(1.2);
}

.works_items_box:hover .works_overlay_details_technologies img{
        animation: rotatLogo 1s alternate;

}
@keyframes rotatLogo {
    from {
        transform:  rotateY(0);
    }
    to {
        transform : rotateY(360deg)
    }
}
</style>

