<template>
  <div class="dropdown" @blur="open = false">
    <div class="dropdown__selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <Transition>
      <div class="dropdown__items" v-if="open">
        <!-- :class="{ 'dropdown__items--hide': !open }" -->
        <div v-for="option in options" :key="option.val" @click="itemClick($event, option)">
          {{ option.title }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  default: {
    type: String,
    required: false,
    default: null
  }
})

const emit = defineEmits(['input'])

const selected = ref(props.default
  ? props.options.find(item => item.val === props.default)?.title
  : props.options[0]
    ? props.options[0].title
    : null)

const open = ref(false)

const itemClick = (event, _option) => {
  selected.value = _option.title
  open.value = false
  emit('input', _option.val)
}

</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 150px;

  font-family: inherit;

  font-weight: 400;
  font-size: 12px;
  line-height: 36px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  &__selected {
    background-color: $back-color;
    border-radius: 4px;
    color: $sec-color;

    padding-left: 16px;

    cursor: pointer;
    user-select: none;

    &.open {
      // border: 1px solid #ad8225;
      border-radius: 4px 4px 0px 0px;
    }

    &::after {
      position: absolute;
      content: "";
      // top: 22px;
      // right: 1em;
      top: 50%;
      right: 0;

      border: solid $sec-color;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;

      transform: translate(-100%, -50%) rotate(45deg);
    }
  }

  &__items {
    color: $main-color;
    border-radius: 0px 0px 4px 4px;

    overflow: hidden;
    position: absolute;
    background-color: $back-color;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    left: 0;
    right: 0;
    z-index: 1;

    opacity: 1;

    & div {
      color: $main-color;
      border-top: 1px solid $sec-color;

      padding-left: 16px;

      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: adjust-color($sec-color, $alpha: -0.8);
      }
    }

    &--hide {
      display: none;
    }
  }

}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
