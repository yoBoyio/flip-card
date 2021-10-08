<template>
  <div id="app" class="flex justify-center text-center h-full mt-10">
    <FlipCard>
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
