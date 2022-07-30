<template>
  <form class="form" action="./#" @submit="submitForm">
    <div class="group">
      <label class="group__title group__title--required" for="item-name">Наименование товара</label>
      <input class="group__input" v-model="name" type="text" id="item-name" placeholder="Введите наименование товара"
        required />
      <span class="group__info"></span>
    </div>

    <div class="group">
      <label class="group__title" for="item-desc">Описание товара</label>
      <textarea class="group__input" v-model="desc" rows="6" id="item-desc" placeholder="Введите описание товара" />
    </div>

    <div class="group">
      <label class="group__title group__title--required" for="item-link">Ссылка на изображение товара</label>
      <input class="group__input" v-model="image" type="url" pattern="https?://.*" id="item-link"
        placeholder="Введите ссылку" required />
      <span class="group__info"></span>
    </div>

    <div class="group">
      <label class="group__title group__title--required" for="item-price">Цена товара</label>
      <input class="group__input" v-model="price" type="text" id="item-price" placeholder="Введите цену" required />
      <span class="group__info"></span>
    </div>

    <button class="button" type="submit">Добавить товар</button>
  </form>
</template>

<script setup>
import numbers from '@/helpers/numbers'
import store from '@/stores/index'
import { computed, ref } from 'vue'

const name = ref('')
const desc = ref('')
const image = ref('')
const _price = ref('')

const price = computed({
  get () {
    if (_price.value === '') return ''

    return numbers.formatThousand(_price.value)
  },
  set (newValue) {
    const newValueParsed = numbers.parseThousand(newValue)

    _price.value = newValueParsed
  }
})

const submitForm = (event) => {
  store.setters.addProduct({
    name: name.value,
    desc: desc.value,
    image: image.value,
    price: _price.value
  })
}
</script>

<style lang="scss" scoped>
.form {
  flex-basis: 332px;

  display: inline-flex;
  flex-direction: column;

  gap: 16px;

  padding: 24px;

  background: $back-color;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  transition: box-shadow 0.3s ease;

  &:focus-within {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  &:invalid>.button {
    background: #EEEEEE;
    box-shadow: none;
    color: $sec-color;

    cursor: auto;
    pointer-events: none;
  }
}

.group {
  position: relative;

  display: inline-flex;
  flex-direction: column;

  gap: 4px;

  &__title {
    position: relative;

    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;

    color: $main-color;

    &--required::after {
      width: 4px;
      height: 4px;

      position: absolute;
      content: "";

      background-color: $inv-color;
      border-radius: 50%;
    }
  }

  &__input {
    background: $back-color;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    border: 1px solid transparent;
    border-radius: 4px;

    margin: 0;
    padding: 10px 15px;

    font-family: inherit;

    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: $main-color;

    resize: none;
    appearance: none;

    transition: all .3s;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }

    &::placeholder {
      color: $sec-color;
    }

    &:focus {
      outline: 0;
      border: 1px solid $sec-color;
    }

    &:invalid:focus {
      border: 1px solid $inv-color;

      &+.group__info::before {
        position: absolute;

        content: 'Поле является обязательным';

        font-weight: 400;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: -0.02em;

        color: $inv-color;
      }
    }
  }
}

.button {
  background: $val-color;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  border: none;
  border-radius: 10px;

  padding: 10px 15px;
  margin-top: 8px;

  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;

  color: #FFFFFF;

  cursor: pointer;

  transition: background .3s ease;

  &:hover {
    background-color: adjust-color($val-color, $lightness: -15%);
  }

  // &:disabled {
  //   background: #EEEEEE;
  //   box-shadow: none;
  //   color: $sec-color;

  //   cursor: auto;
  // }
}
</style>
