package convert

import (
	"html/template"
	"log"

	"github.com/swayechateau/solemnity-editorjs-go/editorjs"
)

func EditorJsToHtml(b interface{}) template.HTML {
	var html template.HTML
	editorjs, err := editorjs.Convert(b)
	if err != nil {
		log.Printf("Error converting editorjs: %s", err)
		return html
	}
	html = template.HTML(editorjs.ToHtml())
	return html
}

func ConvertToHtml(from string, data interface{}) template.HTML {
	switch from {
	case "editorjs":
		return EditorJsToHtml(data)
		// case "markdown":
		// 	return MarkdownToHtml(data.(string))
	}

	return ""
}
