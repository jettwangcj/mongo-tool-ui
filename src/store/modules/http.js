import {
  getDataBaseTrees,
  getTableData,
  sendSQL
} from '@/api'

/**
 * 发送http请求
 */

const state = {}

const mutations = {}

const actions = {

  async getTableData({ commit }, params) {
    const data = await getTableData(params)
    return data
  },

  async getDataBaseTrees({ commit }, params) {
    const data = await getDataBaseTrees(params)
    return data
  },
  async sendSQL({ commit }, params) {
    const data = await sendSQL(params)
    return data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
