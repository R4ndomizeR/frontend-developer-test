<template>
  <div class="card">
    <div class="card__image">
      <img :src="product.image">
    </div>
    <div class="card__wrap">
      <div class="card__title">{{ product.name }}</div>
      <div class="card__desc">{{ product.desc }}</div>
      <div class="card__price">{{ formattedPrice }}</div>
    </div>
    <div class="card__delete" @click="performDelete">
      <img src="@/assets/img/delete.png">
    </div>
  </div>
</template>

<script setup>
import numbers from '@/helpers/numbers'
import state from '@/stores/index'
import { computed, defineProps } from 'vue'

const props = defineProps({
  product: {
    type: Object
  }
})

const formattedPrice = computed(() => {
  return numbers.formatThousand(props.product.price) + ' руб.'
})

const performDelete = (event) => {
  state.setters.deleteProduct(props.product.id)
}
</script>

<style lang="scss" scoped>
$gap: 16px;

.card {
  position: relative;
  flex-basis: 332px;

  display: flex;
  flex-direction: column;
  // gap: 16px;
  justify-content: space-between;

  background: $back-color;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  // transition: background .3s, box-shadow .3s;

  cursor: pointer;

  &__wrap {
    padding: 16px 16px 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  &__image {
    width: 100%;
    height: 200px;
  }

  &__title {
    // margin-top: 16px;

    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: $main-color;
  }

  &__desc {
    // margin-top: 16px;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: $main-color;
  }

  &__price {
    margin-top: 16px; //32px

    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    color: $main-color;
  }

  &__delete {
    width: 32px;
    height: 32px;

    display: none;

    background: $inv-color;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    transition: all .3s ease;

    &:hover {
      background: adjust-color($inv-color, $lightness: -15%);
    }
  }

  &:hover {
    // background: adjust-color($back-color, $lightness: +10%);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover>&__delete {
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(8px, -8px);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

}
</style>
