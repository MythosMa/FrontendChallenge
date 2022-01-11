import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(VueSimpleMarkdown);
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
