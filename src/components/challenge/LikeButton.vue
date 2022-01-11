<template>
  <div class="container">
    <div :class="'heart' + (isClick ? ' heart-is-click' : '')" @click="click">
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
      isClick: false,
    };
  },
  methods: {
    click() {
      this.isClick = !this.isClick;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @extend .is-flex-column-center;
  width: 100%;
  height: 100%;
  background-color: aqua;

  .heart {
    position: relative;
    transform: rotate(-45deg);

    .heart-left {
      transform: translate(-50%, -100%);
    }

    .heart-right {
      transform: translate(0, -50%);
    }

    .heart-square {
      transform: translate(-50%, -50%);
    }

    .heart-left,
    .heart-right {
      border-radius: 50%;
    }

    .heart-left,
    .heart-right,
    .heart-square {
      width: 100px;
      height: 100px;
      position: absolute;
      background-color: grey;
    }
  }

  .heart-is-click {
    .heart-left,
    .heart-right,
    .heart-square {
      background-color: red;
    }
  }
}
</style>
