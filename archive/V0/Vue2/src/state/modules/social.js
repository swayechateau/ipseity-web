import axios from 'axios'
import { getSavedState, saveState } from '@/utils/local-storage'

export const state = {
  instagram: getSavedState('social.instagram'),
  youtube: getSavedState('social.youtube')
}

export const getters = {
  youtube: state => state.youtube.items,
  instagram: state => state.instagram.edge_owner_to_timeline_media.edges.slice(0, 6)
}

export const mutations = {
  storeInstagram: (state, payload) => (state.instagram = payload),
  storeYoutube: (state, payload) => (state.youtube = payload)
}

export const actions = {
  init ({ dispatch }) {
    dispatch('fetchInstagram')
    dispatch('fetchYoutube')
  },
  fetchInstagram ({ commit }) {
    axios.get('https://www.instagram.com/swayechateau?__a=1').then(response => {
      const instagram = response.data.graphql.user
      commit('storeInstagram', instagram)
      saveState('social.instagram', instagram)
    })
  },
  fetchYoutube ({ commit }) {
    const URL = 'https://www.googleapis.com/youtube/v3/playlistItems'
    const params = {
      part: 'snippet',
      key: 'AIzaSyBzynZCYrWnZiZc6odJRzo7YMn9YKoGFT4',
      maxResults: 6,
      playlistId: 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB'
    }
    axios.get(URL, { params }).then(response => {
      const youtube = response.data
      commit('storeYoutube', youtube)
      saveState('social.youtube', youtube)
    })
  }
}
