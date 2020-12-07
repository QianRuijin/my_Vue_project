<template>
  <div id="loading" class="loading"></div>
</template>

<script>
export default {
  name: "LoadingCircle",
};
</script>

<style>
.loading {
  position: absolute;
  left: 50%;
  margin-top: 0.6rem;
  margin-left: -0.3rem;
  height: 0.6rem;
  width: 0.6rem;
  border: 0.053333rem solid #ccc;
  border-right-color: transparent;
  border-radius: 50%;
  animation: circle 1s infinite linear;
  -webkit-animation: circle 1s infinite linear;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
