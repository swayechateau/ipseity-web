package main

import (
	"fmt"
	"net/http"
	"strings"
	"time"
)

func checkLang(l string) bool {
	for _, lang := range Site.Languages.Available {
		if lang == l {
			return true
		}
	}
	return false
}

func LanguageRedirectMiddleware(next http.Handler) http.Handler {
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
		redirectURL := "/" + Site.Languages.Default
		if path != "/" {
			redirectURL = redirectURL + path
		}
		http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)

	})

}

func LoggerMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		// Log information about the incoming request
		fmt.Printf("[%s] %s %s\n", r.Method, r.URL.Path, time.Since(start))

		// Call the next handler in the chain
		next.ServeHTTP(w, r)
	})
}

func AppHandler(route string, handler func(http.ResponseWriter, *http.Request)) {
	http.Handle(
		route,
		LoggerMiddleware(
			LanguageRedirectMiddleware(
				http.HandlerFunc(handler),
			),
		),
	)
}
