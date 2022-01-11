<template>
  <div class="tip-container">
    <Tooltip
      placement="bottom"
      :arrowPointAtCenter="true"
      overlayClassName="tooltip-container"
    >
      <template slot="title">
        <div class="content-container">
          <img v-if="tipInfo.imgUrl" :src="tipInfo.imgUrl" class="image" />
          <vue-simple-markdown :source="tipInfo.description" />
        </div>
      </template>
      <Icon type="question-circle" class="icon" />
    </Tooltip>
  </div>
</template>

<script>
import { Icon, Tooltip } from "ant-design-vue";

export default {
  props: {
    tipInfo: null,
  },
  data() {
    return {};
  },
  components: {
    Icon,
    Tooltip,
  },
};
</script>

<style lang="scss" scoped>
.tip-container {
  @extend .is-flex-column-center;
  height: 50px;
  .icon {
    cursor: pointer;
  }
}
</style>
