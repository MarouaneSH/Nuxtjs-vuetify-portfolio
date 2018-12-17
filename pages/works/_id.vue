<template>
    <div class="works_container_content">
        sddsds
    </div>
</template>

<script>
import {works}  from "../../data/works";

export default {
    layout: 'works',
    mounted () {
        const id =this.$route.params.id;
        this.work = works.filter((w)=>  {
            return w.id = id;
        })[0];
    },
    data() {
        return {
            work : null,
        }
    }
}
</script>

<style>

</style>
