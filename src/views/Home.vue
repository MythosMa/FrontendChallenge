<template>
  <div class="list-container">
    <h1>挑战赛</h1>
    <div
      v-for="(item, index) in challengeList"
      :key="item.name"
      class="item"
      @click="click(index)"
    >
      {{ `${index + 1}. ${item.name}` }}
    </div>
  </div>
</template>

<script>
import { CHALLENGE_LIST } from "../configs/challengeList.js";

export default {
  name: "Home",
  data() {
    return {
      challengeList: CHALLENGE_LIST,
    };
  },
  methods: {
    click(index) {
      this.$router.push(`/${this.challengeList[index].path}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  @extend .is-flex-column;

  .item {
    cursor: pointer;
    font-weight: 500;
    font-size: 24px;
  }
}
</style>
