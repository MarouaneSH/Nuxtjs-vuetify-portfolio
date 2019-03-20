<template>
    <div class="about_container">
        <div class="lamp_svg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 385 560"><defs><linearGradient id="a" x1="237.35" y1="25.6" x2="130.65" y2="210.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#26366a"/><stop offset="0.29" stop-color="#2a3c74"/><stop offset="0.77" stop-color="#364a8d"/><stop offset="1" stop-color="#3c539c"/></linearGradient><linearGradient id="b" x1="90" y1="221.5" x2="278" y2="221.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6f1"/><stop offset="0.48" stop-color="#f0f0f6"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="c" x1="192.5" y1="282" x2="192.5" y2="560" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0.3"/><stop offset="0.31" stop-color="#fffafc" stop-opacity="0.29"/><stop offset="0.52" stop-color="#ffebf3" stop-opacity="0.26"/><stop offset="0.69" stop-color="#ffd1e2" stop-opacity="0.2"/><stop offset="0.85" stop-color="#ffadcc" stop-opacity="0.11"/><stop offset="0.99" stop-color="#ff7fae" stop-opacity="0.01"/><stop offset="1" stop-color="#ff7bac" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="96" y1="282" x2="272" y2="282" xlink:href="#a"/><linearGradient id="e" x1="103.24" y1="226.85" x2="131.57" y2="226.85" gradientTransform="translate(-43.14 27.29) rotate(-11.3)" xlink:href="#a"/><linearGradient id="f" x1="118.54" y1="228.24" x2="132.24" y2="228.24" gradientTransform="translate(-43.14 27.29) rotate(-11.3)" xlink:href="#a"/><linearGradient id="g" x1="193" y1="220.05" x2="277.72" y2="220.05" xlink:href="#a"/></defs><title>Fichier 15</title><rect x="175" width="18" height="236" fill="url(#a)"/><path d="M278,252a93.78,93.78,0,0,1-6,33h-3.27c-19.35-10.91-50.79-18-86.27-18s-66.92,7.09-86.27,18H96a94,94,0,1,1,182-33Z" fill="url(#b)"/><polyline points="96 282 0 560 385 560 272 282" fill="url(#c)"/><ellipse cx="184" cy="282" rx="88" ry="32" fill="url(#d)"/><path d="M108.05,255.89a58.76,58.76,0,0,1,.42-34.94A57.87,57.87,0,0,1,122.9,198l2.8,2.86a53.74,53.74,0,0,0-13.43,21.36,54.57,54.57,0,0,0-.38,32.52Z" stroke="#3977d1" stroke-miterlimit="10" opacity="0.2" fill="url(#e)"/><path d="M120.48,240.64a28.38,28.38,0,0,1,.2-16.9,28.09,28.09,0,0,1,7-11.1L129,214a26,26,0,0,0-6.49,10.32,26.4,26.4,0,0,0-.19,15.73Z" stroke="#3977d1" stroke-miterlimit="10" opacity="0.2" fill="url(#f)"/><path d="M193,158l43.58,98.34c16.07,2.54,29.69,9.08,35.92,26.16C297.79,228.06,224.66,151.41,193,158Z" stroke="#3977d1" stroke-miterlimit="10" opacity="0.2" fill="url(#g)"/></svg>
        </div>
        <div class="about_container_content">
            <div class="about_container_content_img pulse">
                <div class="circle "></div>
                <div class="circle "></div>
            </div>
            <div class="about_container_content_desc">
                  <!-- <strong>Hi, I'm Marouane Souah</strong>  -->
                <div class="about_container_content_desc_timeline">
                    <div class="about_container_content_desc_timeline_about">
                        <h5>ABOUT ME</h5>
                      
                        <p>
                            <strong>Hi, I'm Marouane Souah.</strong> A full stack web developer & mobile app developer based in Essaouira, Morocco . <br>
                            My skills are broad: from ux to design, front end to back end development. I enjoy each aspect, and love building web apps & mobile apps from start to finish, for clients all over the world.
                            <br> <br>
                            I'm available for remote work, if you would like to build something together, <nuxt-link to="/contact">get in touch</nuxt-link> ?
                            <br><br>
                            EMAIL : marouanesouah@gmail.com
                        </p>
                    </div>
                    <div class="about_container_content_desc_timeline_experiences">
                         <h5>EXPERIENCES</h5>
                         <v-timeline
                                align-top
                                dense
                                px-4
                            >
                                <v-timeline-item
                                color="#00a48f"
                                small
                                >
                                    <v-layout  >
                                        <v-avatar>
                                                <v-img
                                                src="/img/companies/logo_impax.png"
                                                ></v-img>
                                        </v-avatar>
                                        <div class="pl-3 text-xs-left">
                                            <div><strong>IMPAX-TOURS</strong> - <span class="subheading_location"> <font-awesome-icon :icon="['fa','map-marker-alt']"/>Aachen, Germany </span></div>
                                            <div class="subheadline_occupation"><span><font-awesome-icon :icon="['fa','home']"/> Remotely</span></div>
                                            <div class="subheadline_occupation">Full stack developer - <span>DEC 2018 - MAR 2019</span></div>
                                        </div>
                                    </v-layout>
                                </v-timeline-item>
                                <v-timeline-item
                                color="#6f00ff"
                                small
                                >
                                    <v-layout  >
                                        <v-avatar>
                                                <v-img
                                                src="/img/companies/logo_stage.png"
                                                ></v-img>
                                        </v-avatar>
                                        <div class="pl-3 text-xs-left">
                                            <div><strong>STAGEMAROC</strong> - <span class="subheading_location"> <font-awesome-icon :icon="['fa','map-marker-alt']"/>  Casablanca, Morocco </span></div>
                                             <div class="subheadline_occupation"><span><font-awesome-icon :icon="['fa','home']"/> Remotely</span></div>
                                            <div class="subheadline_occupation">Full stack developer - <span>OCT 2018 - NOV 2018</span></div>
                                        </div>
                                    </v-layout>
                            </v-timeline-item>
                            <v-timeline-item
                                color="#e98a82"
                                small
                                >
                                    <v-layout  >
                                        <v-avatar>
                                                <v-img
                                                src="/img/companies/logo_wklni.png"
                                                ></v-img>
                                        </v-avatar>
                                        <div class="pl-3 text-xs-left">
                                            <div><strong>WKLNI</strong> - <span class="subheading_location"> <font-awesome-icon :icon="['fa','map-marker-alt']"/>  Riyadh, Saudi Arabia </span></div>
                                             <div class="subheadline_occupation"><span><font-awesome-icon :icon="['fa','home']"/> Remotely</span></div>
                                            <div class="subheadline_occupation">Full stack developer - <span>JUN  2018 - SEPT 2018</span></div>
                                        </div>
                                    </v-layout>
                            </v-timeline-item>
                            <v-timeline-item
                                color="red"
                                small
                                >
                                    <v-layout  >
                                        <v-avatar>
                                                <v-img
                                                src="/img/companies/logo_grafimage.jpg"
                                                ></v-img>
                                        </v-avatar>
                                        <div class="pl-3 text-xs-left">
                                            <div><strong>Grafimage</strong> - <span class="subheading_location"> <font-awesome-icon :icon="['fa','map-marker-alt']"/>  Agadir, Morocco </span></div>
                                             <div class="subheadline_occupation"><span><font-awesome-icon :icon="['fa','building']"/> In office</span></div>
                                            <div class="subheadline_occupation">Internship Frontend Developer - <span>MAR  2018 - MAY 2018</span></div>
                                        </div>
                                    </v-layout>
                            </v-timeline-item>
                            
                        </v-timeline>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "secondary",
    mounted() {
        this.$anime
            .timeline()
            .add({
                targets : ".lamp_svg svg",
                translateY : ["-400px", "-100px"],
                easing : "linear"
            })
            .add({
                targets : ".lamp_svg svg polyline",
                opacity : 1,
                easing : "linear"
            })
            .add({
                targets : ".about_container_content_img",
                easing : "linear",
                duration : 500,
                opacity : [0 ,1],
            })
            .add({
                targets : ".about_container_content_desc",
                easing : "easeInOutSine",
                opacity : [0 ,1],
                translateY : ["50px", 0],
            })

        this.$anime({
                targets : ".circle:nth-child(1)",
                easing : "easeInOutSine",
                scale : [1 , 1.6 , 0.9],
                direction: 'alternate',
                loop: true,
                duration : 3000,
                delay : 1000,
                rotate: "100deg",
            })
        this.$anime({
                targets : ".circle:nth-child(2)",
                easing : "linear",
                scale : [1.2 , 1.9 , 0.8],
                opacity : [1, 0.3 , 0],
                direction: 'alternate',
                loop: true,
                duration : 3000,
                rotate: "100deg",
                delay : 2000,
            })
    }
}
</script>

<style scoped lang="scss">
    .about_container{
        padding: 0 20px;
        width: calc(100% - 240px);
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        &_content {
            transform: translateY(-120px);
            text-align: center;
            &_img {
                margin: 0 auto;
                margin-bottom: 80px;
                width: 100px;
                height: 100px;
                position: relative;
                border-radius: 100%;
                background: url("/img/me.jpg");
               background-size: contain;
                .circle {
                    height: 100%;
                    width: 100%;
                    border: solid 0.7px ;
                    position: absolute;
                    border-radius: 100%;
                    z-index: -1;
                    &:nth-child(1) {
                         border-style: dashed;
                    }
                }
                img {
                    border-radius: 100%;
                    max-width: 100%;
                }
            }
            &_desc_timeline {
                display: flex;
            }
            p {
                text-align: center;
                margin-top: 10px;
                font-weight: 200;
                line-height: 25px;
                   text-align: justify;
                   a {
                       color : #ff0047;
                       font-weight: bold;
                       text-transform: uppercase;
                   }
            }
            &_desc_timeline {
                &_experiences {
                    align-self: flex-start;
                    width: 50%;
                    h5 {
                        text-align: left;
                        margin-top: 50px;
                        margin-bottom: 21px;
                        position: relative;
                        &::before {
                            content: "";
                            position: absolute;
                            background: #ff0047;
                            height: 3px;
                            bottom: 1px;
                            left: 2px;
                            width: 20px;
                            z-index: -1;
                        }
                    }
                }
                &_about {
                    width: 50%;
                    padding-right: 25px;
                    text-align: left;
                    h5 {
                        text-align: left;
                        margin-top: 50px;
                        margin-bottom: 21px;
                         position: relative;
                        &::before {
                            content: "";
                            position: absolute;
                            background: #ff0047;
                            height: 3px;
                            bottom: 1px;
                            left: 0;
                            width: 20px;
                            z-index: -1;
                        }
                    }
                    p {
                        font-weight: bold;
                    }
                }
            }
            .v-timeline {
                &::before {
                    background: rgba(255, 255, 255, 0.32);
                }
            }
            .theme--light.v-timeline:before {
                background: rgba(255, 255, 255, 0.32);
            }
            .subheading_location {
                font-size: 11px; 
                svg {
                    margin-right: 4px;
                }   
            }
            .subheadline_occupation {
                font-size: 12px;
                margin-top: 4px;
                span {
                    font-size: 10px;
                }
            }
        }
    }
    .lamp_svg {  
        svg {
            width: 200px;
            transform: translateY(-100px);
            polyline {
                opacity: 0;
            }
        }
    }

    @media only screen and (max-width: 990px) {
        .about_container {
            width : 100%;
        }
        .works_container {
            margin-top: 0;
        }
        .lamp_svg {
            z-index: -1;
        }
    }
</style>
