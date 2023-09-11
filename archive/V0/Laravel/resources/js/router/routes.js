import store from '@/state/store'
import { pageTitle, queryTitle } from '@/utils/page-meta'
export default [
  {
    path: '/',
    name: 'home',
    component: () => lazyLoadView(import('./views/_core/Home')),
    meta: {
      title: () => { return pageTitle('home') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/about-me',
    name: 'about',
    component: () => lazyLoadView(import('./views/_core/About')),
    meta: {
      title: () => { return pageTitle('about') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => lazyLoadView(import('./views/_core/Projects.vue')),
    meta: {
      title: () => { return pageTitle('projects') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      beforeResolve (routeTo, routeFrom, next) {
        store.dispatch('site/fetchProjects')
        next()
      }
    }
  },
  {
    path: '/legal',
    name: 'Legal',
    component: () => lazyLoadView(import('./views/_core/Legal.vue')),
    meta: {
      title: () => { return pageTitle('legal') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => lazyLoadView(import('./views/_core/Results')),
    meta: {
      title: () => { return queryTitle() },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      beforeResolve (routeTo, routeFrom, next) {
        // If the user is already logged in
        store.dispatch('site/searchQuery', routeTo.query.q)

        next()
      }
    },
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('./views/_core/auth/Login')),
    meta: {
      title: () => { return pageTitle('login') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      beforeResolve (routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'dashboard' })
        } else {
          // Continue to the login page
          next()
        }
      }
    }
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      title: () => { return pageTitle('home') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      authRequired: true,
      beforeResolve (routeTo, routeFrom, next) {
        store.dispatch('auth/logOut')
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          route => route.meta.authRequired
        )
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: 'login' } : { ...routeFrom }
        )
      }
    }
  },
  // blog
  {
    path: '/blog',
    name: 'blog',
    component: () => lazyLoadView(import('./views/blog/View.vue')),
    meta: {
      title: () => { return pageTitle('blog') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      beforeResolve (routeTo, routeFrom, next) {
        store.dispatch('social/init')
        store.dispatch('site/fetchPosts')
        next()
      }
    }
  },
  {
    path: '/blog/posts',
    name: 'blog-posts',
    component: () => lazyLoadView(import('./views/blog/Posts.vue')),
    meta: {
      title: () => { return pageTitle('blog') },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      beforeResolve (routeTo, routeFrom, next) {
        store.dispatch('site/fetchPosts')
        next()
      }
    }
  },
  {
    path: '/blog/posts/:post',
    name: 'blog-post',
    component: () => lazyLoadView(import('./views/blog/Post.vue')),
    props: true
  },
  // dash
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => lazyLoadView(import('./views/dashboard/View.vue')),
    meta: {
      title: () => { return 'Dashboard' },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      authRequired: true,
      layout: 'default'
    }
  },

  // admin

  {
    path: '/admin',
    name: 'admin',
    component: () => lazyLoadView(import('./views/dashboard/admin/View.vue')),
    meta: {
      title: () => { return 'Dashboard' },
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      layout: 'admin'
    }
  },
  {
    path: '/admin/translations',
    name: 'AdminTranslations',
    component: () => lazyLoadView(import('./views/dashboard/admin/Translations.vue')),
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      layout: 'admin'
    }
  },
  {
    path: '/admin/settings',
    name: 'AdminSettings',
    component: () => lazyLoadView(import('./views/dashboard/admin/Settings.vue')),
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      layout: 'admin'
    }
  },
 
  {
    path: '/admin/pages',
    name: 'AdminPages',
    component: () => lazyLoadView(import('./views/dashboard/admin/Pages.vue')),
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      layout: 'admin'
    }
  },
  {
    path: '/admin/projects',
    name: 'AdminProjects',
    component: () =>
      lazyLoadView(import('./views/dashboard/admin/Projects.vue')),
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      layout: 'admin'
    }
  },
  {
    path: '/admin/posts',
    name: 'AdminPosts',
    component: () => lazyLoadView(import('./views/dashboard/admin/Posts.vue')),
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      layout: 'admin'
    }
  },
  /*
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: () => lazyLoadView(import('./views/dashboard/admin/Users.vue')),
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ],
      authRequired: true,
      layout: 'admin'
    }
  },*/
  // errors
  {
    path: '/404',
    name: '404',
    component: require('./views/_core/error/404.vue').default,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    },
    props: true
  },
  {
    path: '*',
    redirect: '404'
  }
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView (AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('./views/_core/Loading.vue').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 3000,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('./views/_core/error/Timeout.vue').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    }
  })
}
