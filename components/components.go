package components

import (
	"html/template"
	"log"
	"net/http"
	"path/filepath"
	"strings"
)

var templates *template.Template

// func LoadTemplates() {
// 	templateFiles, err := filepath.Glob("templates/*.html")
// 	if err != nil {
// 		panic(err)
// 	}

// 	templates = template.Must(template.ParseFiles(templateFiles...))
// }

func LoadTemplates() {
	// Glob layout templates
	layoutTemplateFiles, err := filepath.Glob("templates/layouts/*.html")
	if err != nil {
		panic(err)
	}

	// // Glob page templates
	// pageTemplateFiles, err := filepath.Glob("templates/pages/*.html")
	// if err != nil {
	// 	panic(err)
	// }

	// Glob component templates
	componentTemplateFiles, err := filepath.Glob("templates/components/*.html")
	if err != nil {
		panic(err)
	}

	// Merge layout and page templates
	allTemplateFiles := append(layoutTemplateFiles, componentTemplateFiles...)
	// allTemplateFiles = append(allTemplateFiles, pageTemplateFiles...)

	// Parse all templates

	templates = template.Must(template.ParseFiles(allTemplateFiles...))

}

func RenderTemplate(w http.ResponseWriter, tmpl string, data interface{}) {
	err := templates.ExecuteTemplate(w, checkName(tmpl), data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
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
	return templates.Lookup(checkName(name))
}

func GetTemplates() *template.Template {
	return templates
}

func checkName(name string) string {
	if !strings.Contains(name, ".html") {
		name += ".html"
	}
	return name
}

func LoadTemplate(templ string, tempType string) *template.Template {
	dir := "templates/"
	switch tempType {
	case "layout":
		dir += "layouts/"
	case "page":
		dir += "pages/"
	case "component":
		dir += "components/"
	}
	// Glob layout templates
	templateFile, err := filepath.Glob(dir + checkName(templ))
	if err != nil {
		log.Println(err)
	}
	name := removeHtml(templ)
	// Parse all templates
	return template.Must(template.New(name).ParseFiles(templateFile...))
}

func removeHtml(name string) string {
	if strings.Contains(name, ".html") {
		name = strings.TrimRight(name, ".html")
	}
	return name
}

func LoadPage(page string) *template.Template {
	files := getFiles()
	files = append(files, getPageFile(checkName(page))...)
	return template.Must(template.ParseFiles(files...))
}

func getLayoutFiles() []string {
	files, err := filepath.Glob("templates/layouts/*.html")
	if err != nil {
		panic(err)
	}
	return files
}

func getPageFile(page string) []string {
	files, err := filepath.Glob("templates/pages/" + page)
	if err != nil {
		panic(err)
	}
	return files
}

func getComponentFiles() []string {
	files, err := filepath.Glob("templates/components/*.html")
	if err != nil {
		panic(err)
	}
	return files
}

func getFiles() []string {
	files := getLayoutFiles()
	files = append(files, getComponentFiles()...)
	return files
}
