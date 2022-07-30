<template>
  <div class="page">
    <!-- HEADER -->
    <div class="page__title">Добавление товара</div>
    <ProductsFilter
      :default="store.state.filter"
      :options="filterData"
      @input="store.setters.setFilter"
      class="page__filter"
    />
    <!-- MAIN -->
    <ProductAddForm class="page__sidebar" />
    <div class="page__products">
      <div
        v-if="!store.getters.filteredProducts.value.length"
        @click="store.setters.reloadDemo"
        class="page__demo"
      >
        Подгрузить демо данные</div>
      <TransitionGroup name="fade">
        <ProductCard
          v-for="product in store.getters.filteredProducts.value"
          :key="product.id"
          :product="product"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import ProductAddForm from '@/components/ProductAddForm.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductsFilter from '@/components/ProductsFilter.vue'
import store from '@/stores/index'
import { onBeforeMount } from 'vue'

const filterData = [
  { val: 'def', title: 'По умолчанию' },
  { val: 'min', title: 'Сначала недорогие' },
  { val: 'max', title: 'Сначала дорогие' },
  { val: 'name', title: 'По наименованию' }
]

onBeforeMount(() => {
  store.setters.loadFromLocalStorage()
})
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;

  margin: 0;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 100%;

  padding: 32px;

  background: rgba(255, 254, 251, 0.8);
}

.page {
  display: grid;
  align-items: flex-start;
  grid-template-columns: 332px 1fr;
  gap: 16px;

  // grid-template-columns: max-content 1fr;
  // grid-template-columns: minmax(332px, auto);

  &__sidebar {
    position: sticky;
    top: 16px;

    width: 332px;
  }

  &__products {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    // display: grid;
    // grid-template-columns: repeat(auto-fill, 332px);
  }

  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;

    color: #3F3F3F;
  }

  &__filter {
    justify-self: end;

    outline: none;
  }
}

@media (max-width:740px) {
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__sidebar {
      position: relative;
      width: 100%;
      margin-bottom: 16px;
    }

    &__products {
      justify-content: center;
    }

    &__title {
      text-align: center;
    }
  }
}

.page__demo {
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  color: #494949;
  background: invert($main-color);

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  border: none;
  border-radius: 10px;

  padding: 10px 15px;
  margin-top: 8px;

  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;

  cursor: pointer;

  &:hover {
    background: $main-color;
    color: #fff;
  }
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
