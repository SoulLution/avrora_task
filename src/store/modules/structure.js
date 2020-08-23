import { generateCityes } from '@/assets/functions'
const state = () => ({
  items: generateCityes()
})

const getters = {
  getItems: (state, getters, rootState) => {
    return state.items
  },
  getItem: state => index => {
    let now = String(index).split('n')
    let result = ''
    for(let i = 0; i < now.length-1; i++)
      result = inTabs(result ? result.tabs : state.items, now[i])
    if (!result)
      result = state.items[index]
    else
      result = result.tabs[now[now.length-1]]
    return result
  }
}

const actions = {
  addItem ({ state, commit }, structure) {
    commit('addItem', {
      content: structure.content,
      tabs: structure.tabs
    })
  },
  changeItem ({ state, commit }, structure) {
    commit('changeItem', {
      index: structure.index,
      content: structure.content,
      tabs: structure.tabs
    })
  },
  removeItem ({ state, commit }, structure) {
    commit('removeItem', { 
      index: structure.index
    })
  }
}

const mutations = {
  addItem (state, { content, tabs }) {
    state.items.push({
      content,
      tabs
    })
  },
  changeItem (state, { index, content, tabs }) {
    let now = String(index).split('n')
    let result = ''
    for(let i = 0; i < now.length-1; i++)
      result = inTabs(result ? result.tabs : state.items, now[i])
    if (!result)
      result = state.items[index]
    else
      result = result.tabs[now[now.length-1]]
    result.content = content
    result.tabs = tabs
  },
  removeItem (state, { col, index }) {
    let now = String(index).split('n')
    let result = ''
    for(let i = 0; i < now.length-1; i++)
      result = inTabs(result ? result.tabs : state.items, now[i])
    if (!result)
      result = state.items
    else
      result = result.tabs
    result.splice(now[now.length-1], 1)
  }
}

const inTabs = (arr, index) => {
  return arr[index]
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
