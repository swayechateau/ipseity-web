package convert

import (
	"encoding/json"
	"fmt"
	"html/template"
	"ipseity-web/convert/editorjs"
)

func EditorJsToHtml(b interface{}) template.HTML {
	var html template.HTML
	editorjs, err := ConvertToEditorJs(b)
	if err != nil {
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

func ConvertToEditorJs(data interface{}) (editorjs.EditorJs, error) {
	var parsedData editorjs.JsonEditorJs
	var editorJs editorjs.EditorJs
	var err error
	var bytes []byte
	bytes, err = toJson(data)
	if err != nil {
		fmt.Println("Error:", err)
		return editorJs, err
	}
	err = json.Unmarshal(bytes, &parsedData)
	if err != nil {
		fmt.Println("Error:", err)
		return editorJs, err
	}
	editorJs = parsedData.ToEditorJs()
	return editorJs, nil
}

func toJson(p interface{}) ([]byte, error) {
	bytes, err := json.Marshal(p)
	if err != nil {
		fmt.Println(err)
		return bytes, err
	}

	return bytes, nil
}
