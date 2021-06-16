<template>
  <div class="v-text-field d-flex d-flex--column" :style="wrapperStyleList">
    <label for="input-id" class="d-flex justify--between">
      <span v-if="title" class="v-text-field__title text text--primary">
        {{ title }}
      </span>
      <span v-if="errorMessage" class="v-text-field__error text text--alert">
        {{ errorMessage }}
      </span>
    </label>
    <input
      id="input-id"
      :type="type"
      :class="inputClassList"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '220px'
    },
    placeholder: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    wrapperStyleList() {
      return {
        width: this.width
      }
    },
    inputClassList() {
      return {
        'v-text-field__input': true,
        'v-text-field__input--default': true,
        text: true,
        'text--secondary': true,
        'v-text-field__input--error': !!this.errorMessage,
        'v-text-field__input--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-text-field {
  // .v-text-field__title
  &__title {
    display: block;
    height: 17px;
  }
  // .v-text-field__error
  &__error {
    margin: auto 0px;
  }
  // .v-text-field__input
  &__input {
    padding: 8px 20px;
    background: $color--white;
    border: 1px solid;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba($color: $color--dark, $alpha: 0.1);
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    transition: 0.3s linear;
    &:hover,
    &--hover {
      box-shadow: 0px 4px 10px rgba($color: #63b9f8, $alpha: 0.25);
      transition: 0.3s linear;
    }
    // .v-text-field--active .v-text-field--focus
    &:active,
    &--active,
    &:focus,
    &--focus {
      border-color: #0088fe;
      transition: 0.3s linear;
    }
    &::placeholder {
      @include fs($fs--sm, $lh--sm);
      color: $color--gray;
      user-select: none;
    }
    // .v-text-field--default
    &--default {
      border-color: $color--gray2;
    }
    // .v-text-field--error
    &--error,
    &--error:hover,
    &--error:focus {
      border-color: $color--alert;
      transition: 0.3s linear;
    }
    // .v-text-field--disabled
    &--disabled,
    &--disabled:hover,
    &--disabled:focus {
      border-color: $color--white1;
      box-shadow: none;
      transition: 0.3s linear;
    }
  }
}
</style>
