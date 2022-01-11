<template>
  <div class="container">
    <h1>
      {{ challengeData.name }}
    </h1>

    <ChallengeTip
      v-if="challengeData.tipInfo"
      :tipInfo="challengeData.tipInfo"
    />
    <div>
      <Icon type="left-circle" :style="{ fontSize: '30px' }" @click="back" />
    </div>

    <div class="component">
      <component v-bind:is="challengeData.component" />
    </div>
  </div>
</template>

<script>
import { CHALLENGE_LIST } from "../configs/challengeList.js";
import { findIndexByKeyValue } from "../utils/utils";
import { Icon } from "ant-design-vue";
import ChallengeTip from "../components/common/ChallengeTip.vue";

export default {
  data() {
    return {
      challengeData:
        CHALLENGE_LIST[
          findIndexByKeyValue(CHALLENGE_LIST, "path", this.$route.params.id)
        ],
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
  components: {
    ChallengeTip,
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.container {
  @extend .is-flex-column;
  width: 100%;
  height: 100%;

  & > h1 {
    margin-bottom: 0;
  }

  .component {
    flex: 1;
    padding: 20px;
    @extend .is-flex-column-center;
  }
}
</style>
