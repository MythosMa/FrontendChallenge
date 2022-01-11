<template>
  <div class="container">
    <div :class="'heart' + animationList[animationStep]" @click="click">
      <div class="heart-left" />
      <div class="heart-right" />
      <div class="heart-square" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      animationStep: 0,
      animationList: ["", " heart-is-click"],
    };
  },
  methods: {
    click() {
      if (
        this.animationStep === 0 ||
        this.animationStep === this.animationList.length - 1
      ) {
        this.animationStep =
          ++this.animationStep >= this.animationList.length
            ? 0
            : this.animationStep;
      }
    },
  },
};
</script>
