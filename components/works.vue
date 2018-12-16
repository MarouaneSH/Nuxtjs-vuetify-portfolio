<template>
    <v-app class="app_works">
        <div class="works_items" >
            <div class="works_items_box" v-for="work in works" :key="work.id">
            <img src="/img/works/wklni.png" alt="" class="works_thumbnail">
            <div class="works_overlay">
                    <svg viewBox="0 0 450 92"><defs><linearGradient id="a" x1="155.76" y1="181.93" x2="300.74" y2="-69.18" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff174e"/><stop offset="0.14" stop-color="#fe1b51"/><stop offset="0.25" stop-color="#fd2659" stop-opacity="0.98"/><stop offset="0.36" stop-color="#fa3966" stop-opacity="0.96"/><stop offset="0.45" stop-color="#f6547a" stop-opacity="0.93"/><stop offset="0.5" stop-color="#f36586" stop-opacity="0.91"/><stop offset="0.7" stop-color="#f55b7f" stop-opacity="0.86"/><stop offset="1" stop-color="#f84670" stop-opacity="0.76"/><stop offset="1" stop-color="#f74a73" stop-opacity="0.74"/><stop offset="1" stop-color="#f5567b" stop-opacity="0.68"/><stop offset="1" stop-color="#f45f81" stop-opacity="0.63"/><stop offset="1" stop-color="#f36485" stop-opacity="0.61"/><stop offset="1" stop-color="#f36586" stop-opacity="0.6"/></linearGradient></defs><path d="M450,7.11V86H0V8.85A287.69,287.69,0,0,1,91.54.79a246.55,246.55,0,0,1,46.55,8c27.76,7.53,49.22,18.28,74,25.7q7.88,2.34,16.62,4.32C278.3,49.83,349.75,49.6,450,7.11Z" fill="#f9eff9" opacity="0.32"/><path d="M450,17V92H0V32C28.78,20,71.9,6.93,123,11c4.94.39,9.65.92,14.17,1.57,38,5.44,62.21,19.07,90.05,28.54,1.91.65,3.83,1.28,5.78,1.89,44.92,14,113.42,19.06,214-24.68Z" fill="url(#a)"/></svg>
                    <div class="works_overlay_details">
                        <h4 class="works_overlay_details_title"></h4>
                        <div class="works_overlay_details_technologies">
                            <v-tooltip v-for="(techno,index) in work.technologies"  
                                        :key="index"
                                        bottom >
                                <img :src="'/img/technologies/'+ techno.url"
                                    :style="{width : techno.width_thumbnail}"
                                    slot="activator"
                                    alt="">
                                <span>Tooltip</span>
                            </v-tooltip>
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>
   </v-app>
</template>

<script>
import {works}  from "./works";
export default {
    mounted() {
    },
    data() {
        return {
            works : works,
        }
    }
}
</script>

<style lang="scss">
.app_works {
    background: none !important;
}
.works_overlay {
    position: absolute;
    width: 100%;
    /* top: 0; */
    bottom: 0;
    &_details {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: left;
        &_technologies {
            position: relative;
            width: 100%;
            left: 0;
            display: flex;
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
                padding-bottom: 8px;
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
        img.works_thumbnail {
            max-width: 100%;
        }
    }
}
</style>

