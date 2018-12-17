<template>
    <div class="works_container_content">
        <h1>WORKS</h1>
        <p class="quote">❝ Behind every success is hard work ❝</p>
        <app-works></app-works>
    </div>
</template>

<script>
import appWorks from '~/components/works.vue'
 
export default {
    layout: 'works',
    components : {
        appWorks
    }
}
</script>


