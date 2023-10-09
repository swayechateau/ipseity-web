package components

import (
	"html/template"
	"log"
	"path/filepath"
	"strings"
)

var templates *template.Template

func LoadTemplates() {
	templateFiles, err := filepath.Glob("templates/*.html")
	if err != nil {
		panic(err)
	}

	templates = template.Must(template.ParseFiles(templateFiles...))
}

func UseLayout() *template.Template {
	return GetTemplate("layout.html")
}

func TemplateList() {
	log.Printf("templates: %v", templates.Templates())
	// Loop through the template names and print them
	log.Println("List of templates:")
	for _, tmpl := range templates.Templates() {
		log.Println(tmpl.Name())
	}
}

func GetTemplate(name string) *template.Template {
	if !strings.Contains(name, ".html") {
		name += ".html"
	}
	return templates.Lookup(name)
}

func GetTemplates() *template.Template {
	return templates
}
