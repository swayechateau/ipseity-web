package main

import (
	"net/http"
	"strings"
)

func AppHandler(route string, handler func(http.ResponseWriter, *http.Request)) {
	http.Handle(
		route,
		LanguageRedirectMiddleware(Site.Languages.Default)(
			http.HandlerFunc(handler),
		),
	)
}

func LanguageRedirectMiddleware(defaultLanguage string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Get the URL path
			path := r.URL.Path
			var lang string
			// Split the path into parts
			parts := strings.Split(path, "/")
			// Check if the first part is a language code
			if len(parts) >= 2 {
				lang = parts[1]

			}
			// If the language code is valid, pass the request to the next handler
			if checkLang(lang) {
				Lang = lang
				next.ServeHTTP(w, r)
				return
			}
			// If the language code is not present, redirect to the default language
			redirectURL := "/" + defaultLanguage
			if path != "/" {
				redirectURL = redirectURL + path
			}
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
		})
	}
}

func checkLang(l string) bool {
	for _, lang := range Site.Languages.Available {
		if lang == l {
			return true
		}
	}
	return false
}
