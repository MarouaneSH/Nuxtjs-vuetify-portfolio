<template>
  <div id="app-wrapper">
    <nuxt />
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style>
 body{

    background-image: url("/svg/bg.svg"),linear-gradient(180deg,#303fd9 0,#031b4e);
    background-size: cover;
     background-attachment: fixed;
    width: 100%;
  }


@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0.1);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0.1);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.1);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0.1);
  }
}

.pulse {
  animation: pulse 2s infinite;
}

.opacity-pulse {
  animation: opacityPulse 2s infinite;
}

@-webkit-keyframes opacityPulse {
    0% {
       opacity: 1.0;
    }
    50% {
       opacity: 0.3;
    }
    100% {
       opacity: 1.0;
    }
}
</style>
