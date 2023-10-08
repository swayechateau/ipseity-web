package main

var Site = GetSiteData()
var Lang = Site.Languages.Default

type PageNavigation struct {
	Home     map[string]string
	About    map[string]string
	Projects map[string]string
	Blog     map[string]string
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
