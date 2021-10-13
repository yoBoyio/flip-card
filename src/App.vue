<template>
  <div id="app" class="flex flex-col justify-center text-center h-full m-10">
    <FlipCard class="my-10" v-for="card in 4" :key="card">
      <template v-slot:front> <front-side /> </template>
      <template v-slot:back> <back-side /> </template>
    </FlipCard>
  </div>
</template>

<script>
import FlipCard from "./components/FlipCard.vue";
import FrontSide from "./components/FrontSide.vue";
import BackSide from "./components/BackSide.vue";
export default {
  name: "App",
  components: { FlipCard, FrontSide, BackSide },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
