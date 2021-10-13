<template>
  <div @click="flipped = !flipped">
    <transition name="flip">
      <div
        key="ad"
        v-if="!flipped"
        class="w-96 h-full bg-yellow-200 shadow-lg rounded-lg border"
      >
        <h1 class="p-4 text-xl font-bold">Front side</h1>
        <slot name="front"></slot>
      </div>
      <div
        key="as"
        v-if="flipped"
        class="h-full w-96 my-auto bg-pink-200 shadow-lg rounded-lg border"
      >
        <h1 class="p-4 text-xl font-bold">Back side</h1>

        <slot name="back"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
  data: function () {
    return {
      flipped: false,
    };
  },
};
</script>

<style type='text/css' scoped>
.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>