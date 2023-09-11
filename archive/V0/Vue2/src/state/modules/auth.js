import { api, setAuthToken } from '@/utils/api'
import { getSavedState, saveState } from '@/utils/local-storage'

export const state = {
  token: getSavedState('auth.token'),
  user: getSavedState('auth.user')
}

export const mutations = {
  setAuthToken (state, newValue) {
    state.token = newValue
    saveState('auth.token', newValue)
    setDefaultAuthHeaders(state)
  },
  setAuthUser (state, newValue) {
    state.user = newValue
    saveState('auth.user', newValue)
  }
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn: state => !!state.token
}

export const actions = {
  init ({ state, dispatch }) {
    setDefaultAuthHeaders(state)
    // dispatch('validate')
  },
  logIn ({ commit, dispatch, getters }, { email, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')
    return api.post(`/auth/login`, { email, password }).then(res => {
      const token = res.data
      saveState('auth.token', token)
      commit('setAuthToken', token)
      dispatch('getUser')
      return token
    })
  },
  // Logs out the current user.
  logOut ({ commit }) {
    api.get(`/auth/logout`)
    commit('setAuthToken', null)
    commit('setAuthUser', null)
  },
  getUser ({ commit }) {
    return api
      .get('/auth/user')
      .then(response => {
        const user = response.data
        commit('setAuthUser', user)
        return user
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          commit('setAuthToken', null)
          commit('setAuthUser', null)
        } else {
          console.warn(error)
        }
        return null
      })
  },
  validate ({ dispatch, state }) {
    if (!state.token) return Promise.resolve(null)
    dispatch('getUser')
  }
}

// ===
// Private helpers
// ===

function setDefaultAuthHeaders (state) {
  let token = state.token ? state.token.access_token : null
  setAuthToken(token)
}
