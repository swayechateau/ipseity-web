package routes

import (
	"ipseity-web/api"
	"log"
	"net/http"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Project Handler")
	data := pageDataTemplate()
	projects := ConvertApiProjects(state.Projects.All)
	data.Hero.Image = "https://swayechateau.com/media/image/futaba-computer.jpg"
	data.Hero.Title = "Projects"
	data.Content = &projects
	RenderPage(w, "projects", data)
}

func ProjectHandler(w http.ResponseWriter, r *http.Request, slug string) {
	log.Printf("Project Handler")
	p, err := api.FetchProject(slug)
	if err != nil {
		log.Printf("Error fetching project: %s", err)
		NotFoundHandler(w, r)
		return
	}
	project := ConvertApiProject(p)
	data := pageDataTemplate()

	hero := "https://swayechateau.com/media/image/futaba-computer.jpg"
	if project.Content.HeroImage != nil {
		hero = *project.Content.HeroImage
	}
	data.Meta.Title = &project.Meta.Title
	data.Meta.Description = &project.Meta.Description
	data.Meta.Keywords = &project.Meta.Keywords
	data.Hero.Image = hero
	data.Hero.Title = project.Content.Title

	c := convertConent(project.Content.ContentType, project.Content.ContentData)
	data.Content = &c

	RenderPage(w, "project", data)
}
