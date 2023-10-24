package api

import (
	"time"
)

//Shared Data types

// Meta represents metadata information for different languages
type Meta struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Keywords    string `json:"keywords"`
}

type Content struct {
	// Content Title
	Title       string      `json:"title"`
	SubTitle    *string     `json:"subtitle"`
	ContentType *string     `json:"content_type"`
	ContentData ContentData `json:"content_data"`
	Description *string     `json:"description"`
	HeroImage   *string     `json:"hero_image"`
	// ReadTime represents the time it takes to read a post in minutes.
	ReadTime  *int       `json:"read_time"`
	CreatedAt *time.Time `json:"created_at"`
	UpdatedAt *time.Time `json:"updated_at"`
}

type Category struct {
	Main string    `json:"main"`
	Sub  *[]string `json:"sub"`
}

type Translation struct {
	Meta       *Meta     `json:"meta"`
	Categories *Category `json:"categories"`
	Content    *Content  `json:"content"`
}

// Editor Js Types
type ContentData struct {
	EditorJs EditorJs `json:"editorjs"`
	Markdown string   `json:"markdown"`
}

type EditorJs struct {
	Time    int     `json:"time"`
	Blocks  []Block `json:"blocks"`
	Version string  `json:"version"`
}

type Block struct {
	Id    string                 `json:"id,omitempty"`
	Type  string                 `json:"type"`
	Data  map[string]interface{} `json:"data"`
	Tunes Tune                   `json:"tunes,omitempty"`
}

type Tune struct {
	Footnotes []string `json:"footnotes,omitempty"`
}

type File struct {
	URL string `json:"url"`
}
