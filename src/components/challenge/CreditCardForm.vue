<template>
  <div class="container">
    <div class="form-card-container">
      <div class="card-container">
        <div class="title-contaier">
          <div class="icon" />
          <div class="bank-logo" />
        </div>
        <div
          :class="
            'card-number-container' +
            (isNumberInputFocus ? ' card-number-container-focus' : '')
          "
        >
          <div class="number">####</div>
          <div class="number">####</div>
          <div class="number">####</div>
          <div class="number">####</div>
        </div>
        <div class="bottom-info-container">
          <div class="card-holder-container">
            <div class="title">Card Holder</div>
            <div class="name">Mythos Ma</div>
          </div>
          <div class="card-expire-container">
            <div class="title">Expires</div>
            <div class="date">MM/YY</div>
          </div>
        </div>
      </div>
      <div class="order-container">
        <div class="form-container">
          <div class="card-number-input-container">
            <div class="title">Card Number</div>
            <input type="text" class="input" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      isNumberInputFocus: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  @extend .is-flex-column-center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .form-card-container {
    width: 380px;
    height: 400px;
    background-color: #fff;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgb(180, 179, 179);

    .card-container {
      @extend .is-flex-column;

      width: 300px;
      height: 180px;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 12px;
      background-color: purple;
      position: absolute;
      border-radius: 10px;
      box-shadow: 0 0 20px 10px rgb(165, 164, 164);

      .title-contaier {
        @extend .is-flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 22px;
        padding: 3px;

        .icon {
          width: 40px;
          height: 30px;
          background-color: black;
        }

        .bank-logo {
          width: 50px;
          height: 30px;
          background-color: black;
        }
      }

      .card-number-container {
        @extend .is-flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 30px;

        padding: 0 10px;
        border-radius: 5px;
        margin-bottom: 20px;

        .number {
          color: #fff;
          font-size: 15px;
        }
      }

      .card-number-container-focus {
        border: 1px solid #fff;
      }

      .bottom-info-container {
        @extend .is-flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;

        .card-holder-container {
          @extend .is-flex-column;
          height: 25px;
          color: #fff;
          text-align: left;

          .title {
            font-size: 12px;
          }

          .name {
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
          }
        }

        .card-expire-container {
          @extend .is-flex-column;
          height: 25px;
          color: #fff;
          text-align: right;

          .title {
            font-size: 12px;
          }

          .date {
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
          }
        }
      }
    }

    .order-container {
      width: 100%;
      height: 100%;
      padding: 30% 25px 25px 25px;

      .form-container {
        width: 100%;
        height: 100%;

        .card-number-input-container {
          @extend .is-flex-column;
          width: 100%;

          .title {
            text-align: left;
            font-size: 12px;
          }

          .input {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
