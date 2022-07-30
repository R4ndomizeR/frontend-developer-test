import { computed } from '@vue/reactivity'
import { reactive, readonly } from 'vue'
import demo from './demo'

const state = reactive({
  filter: 'def',
  lastID: 0,
  products: []
})

const getters = {
  getFromLocalStorage: (itemName) => {
    if (localStorage.getItem(itemName)) {
      try {
        const data = JSON.parse(localStorage.getItem(itemName))
        console.log([itemName, data])
        return data
      } catch (e) {
        localStorage.removeItem(itemName)
      }
    }
    return null
  },

  filteredProducts: computed(() => {
    switch (state.filter) {
      case 'min':
        return state.products.slice().sort((a, b) => a.price - b.price)
      case 'max':
        return state.products.slice().sort((a, b) => b.price - a.price)
      case 'name':
        return state.products.slice().sort((a, b) => {
          const _a = a.name.toLocaleLowerCase()
          const _b = b.name.toLocaleLowerCase()

          if (_a < _b) return -1
          if (_a > _b) return 1
          return 0
        })
      default:
        return state.products
    }
  })
}

const setters = {
  loadFromLocalStorage: () => {
    state.lastID = getters.getFromLocalStorage('lastID') ?? demo.lastID
    state.filter = getters.getFromLocalStorage('filter') ?? demo.filter
    state.products = getters.getFromLocalStorage('products') ?? demo.products
  },
  _saveToLocalStorage: () => {
    localStorage.setItem('lastID', JSON.stringify(state.lastID))
    localStorage.setItem('filter', JSON.stringify(state.filter))
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  _resetLocalStorage: () => {
    localStorage.removeItem('lastID')
    localStorage.removeItem('filter')
    localStorage.removeItem('products')
  },
  reloadDemo: () => {
    setters._resetLocalStorage()
    setters.loadFromLocalStorage()
    setters._saveToLocalStorage()
  },
  _generateID: () => {
    return 'prod_' + ++state.lastID
  },
  setFilter: (val) => {
    console.log(['setFilter', val])
    state.filter = val
    localStorage.setItem('filter', JSON.stringify(state.filter))
  },
  addProduct: (obj) => {
    obj.id = setters._generateID()
    console.log(['addProduct', obj])
    state.products.push(obj)

    setters._saveToLocalStorage()
  },
  deleteProduct: (id) => {
    const index = state.products.findIndex((item) => item.id === id)

    if (index !== -1) {
      console.log(['deleteProduct', id, state.products[index]])
      state.products.splice(index, 1)

      setters._saveToLocalStorage()
    }
  }
}

export default {
  state: readonly(state),
  getters,
  setters
}
