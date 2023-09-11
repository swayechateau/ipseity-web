import store from '@/state/store'
const appName = store.state.site.settings.site_name

function pageTitle (page) {
  return store.state.site.visited ? store.getters['site/pages'][page].title : page
}

function queryTitle (query) {
  if (query) {
    document.title = `${store.getters['site/siteWords'].resultsFor[0].toUpperCase() + store.getters['site/siteWords'].resultsFor.slice(1)} ${query} | ${appName}`
  } else {
    return store.state.site.visited ? 'Search' : null
  }
}

function postTitle (post) {
  if (post) {
    document.title = `${post} | ${appName}`
  } else {
    document.title = store.state.site.visited ? appName : null
  }
}

export { pageTitle, queryTitle, postTitle, setMeta }

function setMeta (to, from, next) {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  if (!store.state.site.visited) {
    return next()
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title ? `${nearestWithTitle.meta.title()} |  ${store.state.site.settings.site_name}` : store.state.site.settings.site_name

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    el => el.parentNode.removeChild(el)
  )

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
}

// Private helper
