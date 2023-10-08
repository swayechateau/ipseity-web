package main

import (
	"log"
	"net/http"
)

var Site = GetSiteData()
var Lang string

type PageNavigation struct {
	Home     map[string]string
	About    map[string]string
	Projects map[string]string
	Blog     map[string]string
}

var PageRoutes = PageNavigation{
	Home: map[string]string{
		"en": "Home",
		"fr": "Accueil",
		"ja": "ホーム",
		"zh": "主页",
	},
	About: map[string]string{
		"en": "About",
		"fr": "À propos",
		"ja": "私について",
		"zh": "关于我",
	},
	Projects: map[string]string{
		"en": "Projects",
		"fr": "Projets",
		"ja": "プロジェクト",
		"zh": "项目",
	},
	Blog: map[string]string{
		"en": "Blog",
		"fr": "Blogue",
		"ja": "ブログ",
		"zh": "博客",
	},
}

func main() {
	LoadTemplates()
	AppHandler("/", indexHandler)
	http.HandleFunc("/api", apiHandler)

	fs := http.FileServer(http.Dir("./templates/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

	log.Printf("Server started on port 8080")

}
