package routes

import (
	"ipseity-web/components"
	"log"
	"net/http"
	"strings"
)

var handlerMap = map[string]func(http.ResponseWriter, *http.Request){
	"about":    AboutHandler,
	"projects": ProjectsHandler,
	"blog":     BlogHandler,
	"":         IndexHandler, // Default handler
}

func SiteHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	parts := strings.Split(path, "/")
	log.Printf("Path: %s", path) // log the path being accessed
	log.Printf("Parts: %v", parts)
	var page string
	var subPage string

	if len(parts) >= 4 {
		subPage = parts[3]
		log.Printf("SubPage: %s", subPage)
	}
	if len(parts) >= 3 {
		page = parts[2]
	}

	if page == "blog" && subPage != "" {
		PostHandler(w, r, subPage)
		return
	}

	if page == "projects" && subPage != "" {
		ProjectHandler(w, r, subPage)
		return
	}
	handler, exists := handlerMap[page]
	if !exists {
		NotFoundHandler(w, r) // handle not found case
		return
	}

	log.Printf("Page: %s", page) // log the page being accessed
	handler(w, r)                // dispatch to the appropriate handler
}

func RenderPage(w http.ResponseWriter, page string, data interface{}) {
	c := components.LoadPage(page)
	err := c.Execute(w, data)
	if err != nil {
		log.Println("Template execution error:", err)
	}
}

func pageDataTemplate() PageData {
	title := state.Site.Meta[Lang.Current].Title
	description := state.Site.Meta[Lang.Current].Description
	keywords := state.Site.Meta[Lang.Current].Keywords

	words := ConvertApiWords(state.Words.All)
	log.Printf("Words: %v", words["FeaturedProjects"])

	routes := []Route{
		{
			Name: PageRoutes.Home[Lang.Current],
			Icon: "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z",
			Link: "/" + Lang.Current,
		},
		{
			Name: PageRoutes.About[Lang.Current],
			Icon: "M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14",
			Link: "/" + Lang.Current + "/about",
		},
		{
			Name: PageRoutes.Projects[Lang.Current],
			Icon: "M13.03 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V17.5L20.96 16.44C20.97 16.3 21 16.15 21 16C21 14.88 20.62 13.86 20 13.03V8H4V18H11.42C11.77 18.8 12.33 19.5 13.03 20M22.87 21.19L18.76 17.08C19.17 16.04 18.94 14.82 18.08 13.97C17.18 13.06 15.83 12.88 14.74 13.38L16.68 15.32L15.33 16.68L13.34 14.73C12.8 15.82 13.05 17.17 13.93 18.08C14.79 18.94 16 19.16 17.05 18.76L21.16 22.86C21.34 23.05 21.61 23.05 21.79 22.86L22.83 21.83C23.05 21.65 23.05 21.33 22.87 21.19Z",
			Link: "/" + Lang.Current + "/projects",
		},
		{
			Name: PageRoutes.Blog[Lang.Current],
			Icon: "M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z",
			Link: "/" + Lang.Current + "/blog",
		},
	}
	return PageData{
		Languages: PageLanguages{
			Current:   Lang.Current,
			Default:   Lang.Default,
			Available: Lang.Available,
		},
		Meta: PageMeta{
			Title:       &title,
			Description: &description,
			Keywords:    &keywords,
		},
		Socials: state.Site.Socials,
		UseHero: true,
		Hero: &PageHero{
			Large:     false,
			TitleGlow: false,
			Title:     title,
		},
		Founded: &state.Site.YearFounded,
		Routes:  routes,
		Words:   &words,
	}
}
