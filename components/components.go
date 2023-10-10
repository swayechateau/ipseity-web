package components

import (
	"html/template"
	"path/filepath"
	"strings"
)

func LoadPage(page string) *template.Template {
	p := getPageFile(page)
	p = append(p, getFiles()...)
	return template.Must(template.ParseFiles(p...))
}

func getLayoutFiles() []string {
	files, err := filepath.Glob("templates/layouts/*.html")
	if err != nil {
		panic(err)
	}
	return files
}

func getPageFile(page string) []string {
	files, err := filepath.Glob("templates/pages/" + checkName(page))
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
	files := getComponentFiles()
	files = append(files, getLayoutFiles()...)
	return files
}

func checkName(name string) string {
	if !strings.Contains(name, ".html") {
		name += ".html"
	}
	return name
}
