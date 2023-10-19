package routes

import (
	"ipseity-web/api"
	"log"
	"strings"
)

type PageLanguages struct {
	Current   string
	Default   string
	Available []string
}

type PageMeta struct {
	Title       *string
	Description *string
	Image       *string
	Keywords    *string
}

type PageNavigation struct {
	Home     map[string]string
	About    map[string]string
	Projects map[string]string
	Blog     map[string]string
}

type PageData struct {
	Languages PageLanguages
	Meta      PageMeta
	Socials   []api.Social
	UseHero   bool
	Hero      *PageHero
	Projects  *[]ProjectData
	Posts     *[]PostData
	Founded   *int
	Routes    []Route
	Words     *map[string]string
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
	GlowText  string
	Image     string
}

type ProjectData struct {
	Index      string
	GitHubLink string
	LiveLink   string
	OpenSource bool
	CaseStudy  *string
	Meta       api.Meta
	Categories api.Category
	Content    api.Content
}

type PostData struct {
	Index      string
	Link       string
	Published  string
	Meta       api.Meta
	Categories api.Category
	Content    api.Content
}

var Api = api.GetApiData()
var Lang = PageLanguages{
	Current:   Api.Site.Languages.Default,
	Default:   Api.Site.Languages.Default,
	Available: Api.Site.Languages.Available,
}

var PageRoutes = PageNavigation{
	Home: map[string]string{
		"en": "Home",
		"fr": "Accueil",
		"ja": "ホーム",
		"zh": "主页",
	},
	About: map[string]string{
		"en": "About",
		"fr": "À propos",
		"ja": "私について",
		"zh": "关于我",
	},
	Projects: map[string]string{
		"en": "Projects",
		"fr": "Projets",
		"ja": "プロジェクト",
		"zh": "项目",
	},
	Blog: map[string]string{
		"en": "Blog",
		"fr": "Blogue",
		"ja": "ブログ",
		"zh": "博客",
	},
}

func ConvertApiProjects(projects []api.Project) []ProjectData {
	var projectsData []ProjectData
	for _, project := range projects {
		log.Printf("Project: %v", project)
		projectsData = append(projectsData, ConvertApiProject(project))
	}
	return projectsData
}

func ConvertApiProject(project api.Project) ProjectData {
	baseImage := "/static/project-image.jpg"
	translation := project.Translations[Lang.Current]
	caseStudy := Lang.Current + "/blog" + project.CaseStudyIndex
	meta := translation.Meta
	categories := translation.Categories
	content := translation.Content
	log.Printf("Hero Image: %v", content.HeroImage)

	var image string = *content.HeroImage
	log.Printf("Image: %v", image)
	if isBlank(image) {
		content.HeroImage = &baseImage
	}

	return ProjectData{
		Index:      project.URIIndex,
		GitHubLink: project.GitHubLink,
		LiveLink:   project.LiveLink,
		CaseStudy:  &caseStudy,
		OpenSource: project.OpenSource,
		Meta:       *meta,
		Categories: *categories,
		Content:    *content,
	}
}

func ConvertApiPosts(posts []api.Post) []PostData {
	var postsData []PostData
	for _, post := range posts {
		log.Printf("Project: %v", post)
		postsData = append(postsData, ConvertApiPost(post))
	}
	return postsData
}

func ConvertApiPost(post api.Post) PostData {
	translation := post.Translations[Lang.Current]
	meta := translation.Meta
	categories := translation.Categories
	content := translation.Content
	link := Lang.Current + "/blog/" + post.URIIndex
	return PostData{
		Index:      post.URIIndex,
		Link:       link,
		Published:  post.PublishedAt,
		Meta:       *meta,
		Categories: *categories,
		Content:    *content,
	}
}

func ConvertApiWords(words map[string]api.Word) map[string]string {
	wordsData := make(map[string]string)
	for key, word := range words {
		wordsData[key] = ConvertApiWord(word)
	}
	return wordsData
}

func ConvertApiWord(word api.Word) string {
	return word.Translation[Lang.Current]
}

func isBlank(s string) bool {
	return len(strings.TrimSpace(s)) == 0
}
