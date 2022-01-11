import CreditCardForm from "../components/challenge/CreditCardForm.vue";
import LikeButton from "../components/challenge/LikeButton.vue";

export const CHALLENGE_LIST = [
  {
    name: "CreditCard Form",
    path: "credit-card-form",
    tipInfo: {
      description: `### CreditCard Form\n\n信用卡表格（CreditCard Form）一张美观的信用卡表格具有流畅的微交互作用。包括数字格式化、验证和卡类的自动检测。\n\n解决这些挑战将有如下收获\n- 表格处理和表格验证\n- 学会掌控事件监听器（例如，当字段更改时，就会在信用卡上打印值）\n- 了解如何在页面上显示和定位元素，尤其是与表格重叠的信用卡`,
      imgUrl:
        "https://pic4.zhimg.com/v2-db8c14fb3978675b0148c90d7dc546fb_b.gif",
    },
    component: CreditCardForm,
  },
  {
    name: "Like Button",
    path: "like-button",
    component: LikeButton,
    tipInfo: {
      description: `### Like Button\n\nTwitte爱心点赞动画早在2016年，Twitter就针对推文点赞推出了很棒的动画。直到2019年，它看起来仍然很不错，那么为什么不试试自己创建一个呢？\n\n解决这一挑战将有如下收获\n- keyframes CSS属性如何工作\n- 如何操作和制作HTML动画元素\n- 如何结合JavaScript、HTML和CSS`,
      imgUrl:
        "https://pic4.zhimg.com/v2-2183650ec3942c28da5b2bf8ac69808b_b.gif",
    },
  },
];
