<template>
  <div class="v-autocomplete d-flex d-flex--column" :style="wrapperStyleList">
    <label
      :for="`autocomplete-${autocompleteId}`"
      class="d-flex justify--between"
    >
      <span v-if="title" class="v-autocomplete__title text text--primary">
        {{ title }}
      </span>
      <span v-if="errorMessage" class="v-autocomplete__error text text--alert">
        {{ errorMessage }}
      </span>
    </label>
    <input
      :id="`autocomplete-${autocompleteId}`"
      v-model="currentValue"
      v-click-outside="hideItems"
      :type="type"
      :class="inputClassList"
      :placeholder="placeholder"
      :disabled="disabled"
      :list="`list-${autocompleteId}`"
      autocomplete="off"
      @focusin="showItems = true"
    />
    <ul v-if="showItems" class="v-autocomplete-dropdown">
      <li
        v-for="(item, index) of filterItems"
        :key="index"
        class="v-autocomplete-dropdown__item text text--secondary"
        @click="changeHandler"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span v-html="highlightText(item.text || item)"></span>
        <!--eslint-enable-->
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
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
    },
    items: {
      type: Array,
      default: () => [
        { text: 'Первый', value: 1 },
        { text: 'Второй', value: 2 },
        { text: 'Третий', value: 3 }
      ]
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showItems: false,
      currentValue: ''
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
        'v-autocomplete__input': true,
        'v-autocomplete__input--default': true,
        text: true,
        'text--secondary': true,
        'v-autocomplete__input--error': !!this.errorMessage,
        'v-autocomplete__input--disabled': this.disabled
      }
    },
    autocompleteId() {
      return this._uid
    },
    filterItems() {
      if (this.currentValue) {
        return this.items.filter((item) => {
          const text = this.currentValue.toLowerCase()
          const itemText = item.text.toLowerCase()

          if (itemText.includes(text)) {
            return true
          } else {
            return false
          }
        })
      } else {
        return this.items
      }
    }
  },
  methods: {
    hideItems() {
      this.showItems = false
    },
    highlightText(text) {
      if (this.currentValue) {
        const reggie = new RegExp(this.currentValue, 'ig')
        const found = text.search(reggie) !== -1
        const index = text.indexOf(this.currentValue)
        const result = index === -1 ?
          '<b>' + text[0] + text.replace(reggie, this.currentValue.slice(1) + '</b>') :
          text.replace(reggie, '<b>' + this.currentValue + '</b>') 
        if (found) {
          return result
        } else {
          return text
        }
      } else {
        return text
      }
    },
    changeHandler(item) {
      this.currentValue = item.text || item
      this.$emit('input', item.value || item)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-autocomplete {
  // .v-select__title
  &__title {
    display: block;
    height: 17px;
  }
  // .v-select__error
  &__error {
    margin: auto 0px;
  }
  // .v-select__input
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
    // .v-select--active .v-select--focus
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
    // .v-select--default
    &--default {
      border-color: $color--gray2;
    }
    // .v-select--error
    &--error,
    &--error:hover,
    &--error:focus {
      border-color: $color--alert;
      transition: 0.3s linear;
    }
    // .v-select--disabled
    &--disabled,
    &--disabled:hover,
    &--disabled:focus {
      border-color: $color--white1;
      box-shadow: none;
      transition: 0.3s linear;
    }
  }
  &-dropdown {
    background: $color--white;
    border: 1px solid $color--gray2;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    &__item {
      padding: 8px 20px;
      cursor: pointer;
      transition: 0.3s linear;
      &:hover {
        transition: 0.3s linear;
        background-color: $color--white2;
      }
    }
  }
}
</style>
