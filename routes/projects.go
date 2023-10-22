package routes

import (
	"log"
	"net/http"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Project Handler")
	data := pageDataTemplate()
	projects := ConvertApiProjects(state.Projects.All)
	data.Hero.Image = "https://swayechateau.com/media/image/futaba-computer.jpg"
	data.Hero.Title = "Projects"
	data.Projects = &projects
	RenderPage(w, "projects", data)
}

func ProjectHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Project Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/futaba-computer.jpg"
	data.Hero.Title = "Project"
	RenderPage(w, "project", data)
}
