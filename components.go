package main

import (
	"html/template"
	"path/filepath"
)

var templates *template.Template

func LoadTemplates() {
	templateFiles, err := filepath.Glob("templates/*.html")
	if err != nil {
		panic(err)
	}

	templates = template.Must(template.ParseFiles(templateFiles...))
}

type PageData struct {
	Languages PageLanguages
	Meta      Meta
	Socials   []Social
	UseHero   bool
	Hero      *PageHero
	Founded   *int
	Routes    []Route
}

type Route struct {
	Name string
	Icon string
	Link string
}

type PageHero struct {
	Large     bool
	TitleGlow bool
	Title     string
	Subtitle  string
	Image     string
}

type PageLanguages struct {
	Current   string
	Default   string
	Available []string
}

type Meta struct {
	Title       *string
	Description *string
	Image       *string
	Keywords    *string
}
