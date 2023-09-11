export const state = {
  drawer: false,
  loading: true
}

export const getters = {
  loading: state => state.loading,
  drawer: state => state.drawer
}

export const mutations = {
  setLoader: (state, payload) => (state.loading = payload),
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer)
}

export const actions = {

}
