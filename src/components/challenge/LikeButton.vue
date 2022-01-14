<template>
  <div class="container">
    <div
      id="heart-anim"
      :class="'heart' + heartAnimationList[heartAnimationStep]"
      @click="click"
    >
      <div class="heart-left" />
      <div class="heart-right" />
      <div class="heart-square" />
    </div>
    <div
      id="ring-anim"
      :class="'ring' + ringAnimationList[ringAnimationStep]"
    />
    <div
      v-for="(circle, index) in circles"
      v-bind:key="circle"
      :id="'circle-anim-' + index"
      :class="circle.circleAnimationList[circle.circleAnimationStep]"
      :style="{
        width: circle.size,
        height: circle.size,
        borderRadius: '50%',
        backgroundColor: circle.color,
        position: 'absolute',
      }"
    />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      heartAnimationStep: 0,
      heartAnimationList: [
        "",
        " heart-anim-hidden",
        " heart-anim-show",
        " heart-is-click",
      ],
      ringAnimationStep: 0,
      ringAnimationList: [" ring-hidden", " ring-anim-hidden", " ring-hidden"],
      circles: [
        {
          size: "20px",
          color: "rgb(166, 223, 211)",
          target: ["20px", "-200px"],
          circleAnimationList: ["circle-hidden", "circle-anim-0"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(166, 223, 211)",
          target: ["-15px", "-170px"],
          circleAnimationList: ["circle-hidden", "circle-anim-1"],
          circleAnimationStep: 0,
        },
        {
          size: "20px",
          color: "rgb(210, 225, 164)",
          target: ["170px", "-120px"],
          circleAnimationList: ["circle-hidden", "circle-anim-2"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(210, 225, 164)",
          target: ["120px", "-120px"],
          circleAnimationList: ["circle-hidden", "circle-anim-3"],
          circleAnimationStep: 0,
        },
        {
          size: "20px",
          color: "rgb(100, 200, 157)",
          target: ["190px", "60px"],
          circleAnimationList: ["circle-hidden", "circle-anim-4"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(100, 200, 157)",
          target: ["170px", "10px"],
          circleAnimationList: ["circle-hidden", "circle-anim-5"],
          circleAnimationStep: 0,
        },
        {
          size: "20px",
          color: "rgb(215, 164, 190)",
          target: ["65px", "180px"],
          circleAnimationList: ["circle-hidden", "circle-anim-6"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(215, 164, 190)",
          target: ["90px", "140px"],
          circleAnimationList: ["circle-hidden", "circle-anim-7"],
          circleAnimationStep: 0,
        },
        {
          size: "20px",
          color: "rgb(189, 114, 220)",
          target: ["-110px", "150px"],
          circleAnimationList: ["circle-hidden", "circle-anim-8"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(189, 114, 220)",
          target: ["-60px", "140px"],
          circleAnimationList: ["circle-hidden", "circle-anim-9"],
          circleAnimationStep: 0,
        },
        {
          size: "20px",
          color: "rgb(189, 114, 220)",
          target: ["-195px", "15px"],
          circleAnimationList: ["circle-hidden", "circle-anim-10"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(189, 114, 220)",
          target: ["-160px", "45px"],
          circleAnimationList: ["circle-hidden", "circle-anim-11"],
          circleAnimationStep: 0,
        },
        {
          size: "20px",
          color: "rgb(156, 133, 203)",
          target: ["-140px", "-150px"],
          circleAnimationList: ["circle-hidden", "circle-anim-12"],
          circleAnimationStep: 0,
        },
        {
          size: "10px",
          color: "rgb(156, 133, 203)",
          target: ["-135px", "-100px"],
          circleAnimationList: ["circle-hidden", "circle-anim-13"],
          circleAnimationStep: 0,
        },
      ],
    };
  },
  mounted() {
    // 动画播放可以使用监听函数
    document
      .getElementById("heart-anim")
      .addEventListener("animationend", this.animationCallback);

    document
      .getElementById("ring-anim")
      .addEventListener("animationend", this.animationCallback);

    for (let i = 0; i < this.circles.length; i++) {
      document
        .getElementById("circle-anim-" + i)
        .addEventListener("animationend", this.animationCallback);
    }

    // document
    //   .getElementById("heart-anim")
    //   .addEventListener("transitionend", this.animationCallback);
  },
  methods: {
    click() {
      if (
        this.heartAnimationStep === 0 ||
        this.heartAnimationStep === this.heartAnimationList.length - 1
      ) {
        this.heartAnimationStep =
          ++this.heartAnimationStep >= this.heartAnimationList.length
            ? 0
            : this.heartAnimationStep;
        this.ringAnimationStep =
          ++this.ringAnimationStep >= this.ringAnimationList.length
            ? 0
            : this.ringAnimationStep;
        const circlesTemp = this.circles.map((circle) => {
          circle.circleAnimationStep =
            ++circle.circleAnimationStep >= circle.circleAnimationList.length
              ? 0
              : circle.circleAnimationStep;

          return {
            ...circle,
          };
        });
        this.circles = circlesTemp;
      }
    },
    animationCallback(value) {
      value.animationName.includes("heart") && ++this.heartAnimationStep;
      value.animationName.includes("ring") && ++this.ringAnimationStep;
      this.circles.forEach((circle) => {
        value.animationName.includes("circle") && ++circle.circleAnimationStep;
      });
    },
    transitionCallback(value) {
      console.log("transitionCallback==============+++=");
      console.log(value);
      console.log("transitionCallback==============+++=");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @extend .is-flex-column-center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .circle-test {
    transform: translate(0, 0);
    transition: 2s;
  }

  .ring {
    border: 0px solid blueviolet;
    width: 0px;
    height: 0px;
    transform: translate(0, -15px);
    border-radius: 50%;
    position: absolute;
  }

  .ring-hidden,
  .circle-hidden {
    display: none;
  }

  .heart {
    position: absolute;
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

  .circle-anim-0 {
    animation: circle-0 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-0 {
    0% {
      transform: translate(10px, -100px);
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      transform: translate(10px, -100px);
      opacity: 1;
    }
    65% {
      transform: translate(20px, -200px);
      opacity: 1;
    }
    75% {
      transform: translate(20px, -200px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(20px, -200px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-0 {
    0% {
      transform: translate(10px, -100px);
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      transform: translate(10px, -100px);
      opacity: 1;
    }
    65% {
      transform: translate(20px, -200px);
      opacity: 1;
    }
    75% {
      transform: translate(20px, -200px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(20px, -200px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-1 {
    animation: circle-1 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-1 {
    0% {
      transform: translate(-7.5px, -85px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-15px, -170px);
      opacity: 1;
    }
    75% {
      transform: translate(-15px, -170px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-15px, -170px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-1 {
    0% {
      transform: translate(-7.5px, -85px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-15px, -170px);
      opacity: 1;
    }
    75% {
      transform: translate(-15px, -170px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-15px, -170px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-2 {
    animation: circle-2 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-2 {
    0% {
      transform: translate(85px, -60px);
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(85px, -60px);
    }
    65% {
      transform: translate(170px, -120px);
      opacity: 1;
    }
    75% {
      transform: translate(170px, -120px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(170px, -120px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-2 {
    0% {
      transform: translate(85px, -60px);
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(85px, -60px);
    }
    65% {
      transform: translate(170px, -120px);
      opacity: 1;
    }
    75% {
      transform: translate(170px, -120px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(170px, -120px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-3 {
    animation: circle-3 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-3 {
    0% {
      transform: translate(60px, -60px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(120px, -120px);
      opacity: 1;
    }
    75% {
      transform: translate(120px, -120px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(120px, -120px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-3 {
    0% {
      transform: translate(60px, -60px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(120px, -120px);
      opacity: 1;
    }
    75% {
      transform: translate(120px, -120px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(120px, -120px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-4 {
    animation: circle-4 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-4 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      transform: translate(30px, -30px);
      opacity: 1;
    }
    65% {
      transform: translate(190px, 60px);
      opacity: 1;
    }
    75% {
      transform: translate(190px, 60px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(190px, 60px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-4 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      transform: translate(30px, -30px);
      opacity: 1;
    }
    65% {
      transform: translate(190px, 60px);
      opacity: 1;
    }
    75% {
      transform: translate(190px, 60px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(190px, 60px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-5 {
    animation: circle-5 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-5 {
    0% {
      transform: translate(85px, 5px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(170px, 10px);
      opacity: 1;
    }
    75% {
      transform: translate(170px, 10px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(170px, 10px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-5 {
    0% {
      transform: translate(85px, 5px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(170px, 10px);
      opacity: 1;
    }
    75% {
      transform: translate(170px, 10px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(170px, 10px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-6 {
    animation: circle-6 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-6 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(32.5px, 90px);
    }
    65% {
      transform: translate(65px, 180px);
      opacity: 1;
    }
    75% {
      transform: translate(65px, 180px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(65px, 180px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-6 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(32.5px, 90px);
    }
    65% {
      transform: translate(65px, 180px);
      opacity: 1;
    }
    75% {
      transform: translate(65px, 180px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(65px, 180px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-7 {
    animation: circle-7 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-7 {
    0% {
      transform: translate(45px, 70px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(90px, 140px);
      opacity: 1;
    }
    75% {
      transform: translate(90px, 140px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(90px, 140px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-7 {
    0% {
      transform: translate(45px, 70px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(90px, 140px);
      opacity: 1;
    }
    75% {
      transform: translate(90px, 140px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(90px, 140px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-8 {
    animation: circle-8 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-8 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(-55px, 75px);
    }
    65% {
      transform: translate(-110px, 150px);
      opacity: 1;
    }
    75% {
      transform: translate(-110px, 150px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(-110px, 150px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-8 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(-55px, 75px);
    }
    65% {
      transform: translate(-110px, 150px);
      opacity: 1;
    }
    75% {
      transform: translate(-110px, 150px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(-110px, 150px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-9 {
    animation: circle-9 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-9 {
    0% {
      transform: translate(-30px, 70px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-60px, 140px);
      opacity: 1;
    }
    75% {
      transform: translate(-60px, 140px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-60px, 140px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-9 {
    0% {
      transform: translate(-30px, 70px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-60px, 140px);
      opacity: 1;
    }
    75% {
      transform: translate(-60px, 140px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-60px, 140px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-10 {
    animation: circle-10 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-10 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(-97.5px, 7.5px);
    }
    65% {
      transform: translate(-195px, 15px);
      opacity: 1;
    }
    75% {
      transform: translate(-195px, 15px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(-195px, 15px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-10 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(-97.5px, 7.5px);
    }
    65% {
      transform: translate(-195px, 15px);
      opacity: 1;
    }
    75% {
      transform: translate(-195px, 15px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(-195px, 15px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-11 {
    animation: circle-11 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-11 {
    0% {
      transform: translate(-80px, 22.5px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-160px, 45px);
      opacity: 1;
    }
    75% {
      transform: translate(-160px, 45px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-160px, 45px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-11 {
    0% {
      transform: translate(-80px, 22.5px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-160px, 45px);
      opacity: 1;
    }
    75% {
      transform: translate(-160px, 45px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-160px, 45px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-12 {
    animation: circle-12 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-12 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(-70px, -75px);
    }
    65% {
      transform: translate(-140px, -150px);
      opacity: 1;
    }
    75% {
      transform: translate(-140px, -150px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(-140px, -150px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-12 {
    0% {
      opacity: 0;
    }
    19% {
      opacity: 0;
    }
    20% {
      opacity: 1;
      transform: translate(-70px, -75px);
    }
    65% {
      transform: translate(-140px, -150px);
      opacity: 1;
    }
    75% {
      transform: translate(-140px, -150px);
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      transform: translate(-140px, -150px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .circle-anim-13 {
    animation: circle-13 0.4s linear;
    animation-fill-mode: both;
    animation-delay: 0.02s;
    -webkit-animation-delay: 0.02s;
  }

  @keyframes circle-13 {
    0% {
      transform: translate(-67.5px, -50px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-135px, -100px);
      opacity: 1;
    }
    75% {
      transform: translate(-135px, -100px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-135px, -100px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes circle-13 {
    0% {
      transform: translate(-67.5px, -50px);
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    65% {
      transform: translate(-135px, -100px);
      opacity: 1;
    }
    75% {
      transform: translate(-135px, -100px);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      transform: translate(-135px, -100px);
      width: 0;
      height: 0;
      opacity: 1;
    }
  }

  .ring-anim-hidden {
    animation: ring-hidden 0.13s;
    animation-fill-mode: both;
  }

  .heart-anim-hidden {
    animation: heart-reduce 0.08s;
    animation-fill-mode: both;
    animation-delay: 0.05s;
    -webkit-animation-delay: 0.05s;
    .heart-left,
    .heart-right,
    .heart-square {
      background-color: red;
    }
  }

  .heart-anim-show {
    animation: heart-amplify 0.6s;
    animation-fill-mode: both;
    .heart-left,
    .heart-right,
    .heart-square {
      background-color: red;
    }
  }

  @keyframes ring-hidden {
    from {
      width: 200px;
      height: 200px;
      border: 100px solid blueviolet;
    }
    to {
      width: 280px;
      height: 280px;
      border: 10px solid blueviolet;
    }
  }

  @-webkit-keyframes ring-hidden {
    from {
      width: 200px;
      height: 200px;
      border: 100px solid blueviolet;
    }
    to {
      width: 280px;
      height: 280px;
      border: 10px solid blueviolet;
    }
  }

  @keyframes heart-reduce {
    from {
      transform: scale(20%) rotate(-45deg);
    }
    to {
      transform: scale(0) rotate(-45deg);
    }
  }

  @-webkit-keyframes heart-reduce {
    from {
      transform: scale(20%) rotate(-45deg);
    }
    to {
      transform: scale(0) rotate(-45deg);
    }
  }

  @keyframes heart-amplify {
    0% {
      transform: scale(0) rotate(-45deg);
    }
    40% {
      transform: scale(120%) rotate(-45deg);
    }
    60% {
      transform: scale(100%) rotate(-45deg);
    }
    75% {
      transform: scale(103%) rotate(-45deg);
    }
    100% {
      transform: scale(100%) rotate(-45deg);
    }
  }

  @-webkit-keyframes heart-amplify {
    0% {
      transform: scale(0) rotate(-45deg);
    }
    40% {
      transform: scale(120%) rotate(-45deg);
    }
    60% {
      transform: scale(100%) rotate(-45deg);
    }
    75% {
      transform: scale(103%) rotate(-45deg);
    }
    100% {
      transform: scale(100%) rotate(-45deg);
    }
  }
}
</style>
