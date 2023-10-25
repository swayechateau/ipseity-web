package routes

import (
	"html/template"
	"ipseity-web/api"
	"log"
	"net/http"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Project Handler")
	data := pageDataTemplate()
	projects := ConvertApiProjects(state.Projects.All)
	data.Hero.Image = "https://swayechateau.com/media/image/futaba-computer.jpg"
	data.Hero.Title = data.Words.Projects
	data.Content = &projects
	RenderPage(w, "projects", data)
}

type projectData struct {
	Title string
	Demo  string
	Open  bool
	Code  string
	Study string
	Data  *template.HTML
}

func ProjectHandler(w http.ResponseWriter, r *http.Request, slug string) {
	log.Printf("Project Handler")
	p, err := api.FetchProject(slug)
	if err != nil {
		log.Printf("Error fetching project: %s", err)
		NotFoundHandler(w, r)
		return
	}
	log.Printf("Project: %s", p)
	project := ConvertApiProject(p)
	data := pageDataTemplate()
	setMeta(&data, &project.Meta)

	data.Hero.Image = *project.Content.HeroImage
	data.Hero.Title = project.Content.Title

	c := convertConent(project.Content.ContentType, project.Content.ContentData)
	data.Content = projectData{
		Title: project.Content.Title,
		Demo:  project.LiveLink,
		Open:  project.OpenSource,
		Code:  project.GitHubLink,
		Study: *project.CaseStudy,
		Data:  &c,
	}

	RenderPage(w, "project", data)
}
