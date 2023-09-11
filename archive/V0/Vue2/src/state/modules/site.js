import store from '@/state/store'
import { api } from '@/utils/api'
import { getSavedState, saveState } from '@/utils/local-storage'

export const state = {
  visited: getSavedState('site.visited') || false,
  settings: getSavedState('site.settings') || 'no settings',
  language: {
    default: getSavedState('site.language.default') || 'en',
    available: getSavedState('site.language.available')
  },
  search: {
    query: '',
    searching: false,
    results: [],
    page: 1
  },
  pages: getSavedState('site.pages') || 'no pages',
  projects: getSavedState('site.projects') || 'no projects',
  posts: getSavedState('blog.posts') || 'no posts',
  routes: {
    core: [
      {
        index: 'home',
        to: '/'
      },
      {
        index: 'about',
        to: '/about-me'
      },
      {
        index: 'projects',
        to: '/projects'
      },
      {
        index: 'blog',
        to: '/blog'
      }
    ],
    auth: [
      {
        index: 'dashboard',
        to: '/dashboard'
      }
    ],
    unauth: [
      {
        index: 'login',
        to: '/login'
      }
    ]
  }
}

export const getters = {
  socialLinks: state => state.settings.social_links,
  lang: state => state.language.default,
  availableLangs: state => state.language.available,
  siteWords: state => state.settings.siteWords[state.language.default],
  supportedLangs: state => state.settings.supported_langs,
  pages: state => state.pages[state.language.default],
  navRoutes: state => {
    const loggedIn = store.getters['auth/loggedIn']
    const pages = state.pages[state.language.default]
    const routes = state.routes.core
    let nav = []
    let auth

    if (loggedIn) {
      auth = state.routes.auth
    } else {
      auth = state.routes.unauth
    }
    routes.forEach(link => {
      nav.push(link)
    })
    auth.forEach(link => {
      nav.push(link)
    })
    nav.forEach(link => {
      link['name'] = pages[link.index].name
    })

    return nav
  },
  // pages: state => state.pages[state.language.default],
  projects: state => state.projects[state.language.default],
  // search
  query: state => state.search.query,
  searching: state => state.search.searching,
  results: state => state.search.results[state.language.default],
  resultPage: state => state.search.page,
  resultPages: state => Math.ceil(state.search.results.length / 5),
  paginatedResults: state => {
    const start = (state.search.page - 1) * 5
    const stop = state.search.page * 5
    return state.search.results.slice(start, stop)
  },
  // posts
  posts: state => state.posts[state.language.default],
  postPages: state => Math.ceil(state.posts[state.language.default].length / 11),
  categories: state => {
    const categories = []
    for (const article of state.posts[state.language.default]) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue
      const text = article.category
      categories.push({
        text,
        to: `/category/${text}`
      })
    }
    return categories.sort().slice(0, 4)
  },
  paginatedArticles: state => {
    const start = (1 - 1) * 6
    const stop = 1 * 6
    return state.posts[state.language.default].slice(start, stop)
  },
  featuredPosts: state => {
    const featured = []
    for (const article of state.posts[state.language.default]) {
      if (article.featrued) continue
      featured.push(article)
    }
    return featured
  }
}

export const mutations = {
  setVisited: state => (state.visited = true),
  setNavRoutes: (state, payload) => (state.routes.current = payload),
  setLanguage: (state, payload) => (state.language.default = payload),
  storeAvailableLanguages: (state, payload) => (state.language.available = payload),
  storeProjects: (state, payload) => (state.projects = payload),
  storePages: (state, payload) => (state.pages = payload),
  storePosts: (state, payload) => (state.posts = payload),
  storeSettings: (state, payload) => (state.settings = payload),
  setQuery: (state, payload) => (state.search.query = payload),
  setSearching: (state, payload) => (state.search.searching = payload),
  setResults: (state, payload) => (state.search.results = payload),
  updateResultsPage: (state, payload) => (state.search.resultsPage = payload),
  previousResultsPage: state => (state.search.resultsPage--)
}

export const actions = {
  init ({ dispatch, commit, state }) {
    if (!state.visited) {
      dispatch('firstTime')
    } else {
      commit('app/setLoader', false, { root: true })
      dispatch('fetchLanguages')
      dispatch('fetchSettings')
      dispatch('fetchPages')
    }
  },
  firstTime ({ dispatch, commit }) {
    document.title = 'Loading your first Time | Swaye Chateau'
    dispatch('fetchLanguages')
    dispatch('fetchProjects')
    dispatch('fetchPosts')
    dispatch('fetchSettings').then(() => {
      dispatch('fetchPages').then(() => {
        commit('app/setLoader', false, { root: true })
        commit('setVisited')
        document.title = 'Swaye Chateau'
        saveState('site.visited', true)
      })
    })
  },
  fetchPages ({ commit }) {
    // 1. Check if we can get live data.
    return api.get(`/pages`).then(res => {
      commit('storePages', res.data)
      saveState('site.pages', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  fetchSettings ({ commit }) {
    // 1. Check if we can get live data.
    return api.get(`/settings`).then(res => {
      commit('storeSettings', res.data)
      saveState('site.settings', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  fetchLanguages ({ commit }) {
    // 1. Check if we can get live data.
    return api.get(`/languages`).then(res => {
      commit('storeAvailableLanguages', res.data)
      saveState('site.language.available', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  fetchPosts ({ commit }) {
    // 1. Check if we can get live data.
    api.get(`/posts`).then(res => {
      commit('storePosts', res.data)
      saveState('blog.posts', res.data)
      return res.data
    }).catch(err => {
      console.warn(err)
    })
  },
  fetchProjects ({ commit }) {
    api.get(`/projects`).then(res => {
      commit('storeProjects', res.data)
      saveState('site.projects', res.data)
    }).catch(err => {
      console.warn(err)
    })
  },
  changeLang ({ commit }, lang) {
    commit('setLanguage', lang)
    saveState('site.language.default', lang)
  },
  updateNav ({ state, commit }) {
    const loggedIn = store.getters['auth/loggedIn']
    const pages = state.pages[state.language.default]
    const routes = state.routes.core
    let nav = []
    let auth

    if (loggedIn) {
      auth = state.routes.auth
    } else {
      auth = state.routes.unauth
    }
    routes.forEach(link => {
      nav.push(link)
    })
    auth.forEach(link => {
      nav.push(link)
    })
    nav.forEach(link => {
      link['name'] = pages[link.index].name
    })
    commit('setN')
  },
  searchQuery ({ commit }, { query }) {
    let params = { q: query }
    commit('setQuery', query)
    commit('setSearching', true)
    return api.get('/query', { params })
      .then(response => {
        commit('setResults', response.data)
        commit('setSearching', false)
        return response.data
      })
      .catch(error => {
        return error
      })
  }
}
