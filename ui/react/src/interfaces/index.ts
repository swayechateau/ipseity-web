/*
 * state interfaces
 * 1. State Pages
 * 2. State Posts
 * 3. State Projects
 */
/*
 * 0. State Langaugaes
 */
export interface IStateLanguage {
  id: number;
  name: string;
  native_name: string;
  code: string;
}
export interface IStateSetting {
  id: number;
  app_id: string;
  site_name: string;
  url: string;
  email: string;
  location: string;
  default_lang: string;
  supported_langs: string[];
  social_links: IStateSocialLink[];
  founded: number;
  created_at: string;
  updated_at: string;
}
export interface IStateSocialLink {
  href: string;
  icon: string;
}
export interface IStateSitewords {
  [key: string]: IStateSiteword;
}
export interface IStateSiteword {
  translations: IStateSitewordTranslation;
}
export interface IStateSitewordTranslation {
  [key: string]: string;
}

export interface IStateCategories {
  [key: string]: {
    translations: IStateCategoryTranslation;
  };
}
export interface IStateCategoryTranslation {
  [key: string]: IStateCategory;
}
export interface IStateCategory {
  text: string;
  description: string;
}
/*
 * 1. State Pages
 */
export interface IStatePages {
  [key: string]: IStatePage;
}
export interface IStatePage {
  published: boolean | number;
  index: string;
  hero: string;
  slug: string;
  posted_at: string;
  translations: IStatePageTranslations;
}

export interface IStatePageTranslations {
  [key: string]: IStatePageTranslation;
}
export interface IStatePageTranslation {
  page_id: number;
  name: string;
  title: string;
  sub_title: string;
  description: string;
  content: any;
  aside: boolean | number;
  meta: object;
  updated_at: string;
}
/*
 * 1.1. State Pages Translated
 */
export interface ITranslatedPage {
  index: string;
  hero: string;
  slug: string;
  published: boolean | number;
  name: string;
  title: string;
  sub_title: string;
  description: string;
  content: any;
  aside: boolean | number;
  meta: object;
  posted_at: string;
  updated_at: string;
}

/*
 * 2. state posts
 */
export interface IStatePosts {
  [index: string]: IStatePost;
}
export interface IStatePost {
  index: string;
  featured: boolean | number;
  prominent: boolean | number;
  category: string;
  name: string;
  published: number;
  hero: string;
  slug: string;
  posted_at: string;
  translations: IStatePostTranslations;
}

export interface IStatePostTranslations {
  [index: string]: IStatePostTranslation;
}

export interface IStatePostTranslation {
  short_name: string;
  title: string;
  sub_title: string;
  description: string;
  content: {
    body: string;
  };
  aside: boolean | number;
  meta: object | null;
  updated_at: string;
  readtime: number;
}

/*
 * 2.1. State Posts Translated
 */
export interface ITranslatedPost {
  index: string;
  published: boolean | number;
  featured: boolean | number;
  prominent: boolean | number;
  category: string;
  name: string | null;
  hero: string;
  slug: string;
  posted_at: string;
  short_name: string | null;
  title: string | null;
  sub_title: string | null;
  description: string | null;
  aside: boolean | number;
  meta: object | null;
  updated_at: string;
  readtime: boolean | number;
  content: any;
}

/*
 * 3. State Projects
 */
export interface IStateProjects {
  [index: string]: IStateProject;
}

export interface IStateProject {
  published: number;
  open_source: number;
  hero: string;
  slug: string;
  git_url: string;
  demo_url: string;
  posted_at: string | null;
  translations: IStateProjectTranslations;
  tags: string[];
}

export interface IStateProjectTranslations {
  [index: string]: IStateProjectTranslation;
}

export interface IStateProjectTranslation {
  name: string;
  title: string;
  sub_title: string;
  description: string;
  content: {
    body: string;
  };
  aside: boolean | number;
  meta: object | null;
  updated_at: string;
}
/*
 * 3.1. State Projects Translated
 */
export interface ITranslatedProject {
  index: string;
  published: number;
  open_source: number;
  hero: string;
  slug: string;
  git_url: string;
  demo_url: string;
  posted_at: string | null;
  tags: string[];
  name: string;
  title: string;
  sub_title: string;
  description: string;
  content: {
    body: string;
  };
  aside: boolean | number;
  meta: object | null;
  updated_at: string;
}
