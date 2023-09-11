
import MultiTranslate from './multi-translate';
import { IStateProject, ITranslatedProject } from '../../interfaces/index';

class MultiTranslateProject extends MultiTranslate {
  transform(data: IStateProject, index: string) : object {
    const dataTranslations = data.translations[this.defaultLanguage]
      ? data.translations[this.defaultLanguage]
      : data.translations[this.fallbackLanguage];
    const translated: ITranslatedProject = {
      index: index,
      name: dataTranslations.name,
      title: dataTranslations.title,
      sub_title: dataTranslations.sub_title,
      description: dataTranslations.description,
      content: dataTranslations.content,
      aside: dataTranslations.aside,
      meta: dataTranslations.meta,
      updated_at: dataTranslations.updated_at,
      posted_at: data.posted_at,
      open_source: data.open_source,
      published: data.published,
      hero: data.hero,
      tags: data.tags,
      slug: data.slug,
      git_url: data.git_url,
      demo_url: data.demo_url
    }
    return translated;
  }

  recent(amount: number = 3) : object[] {
    return this.all().slice(0, amount);
  }
}

export default MultiTranslateProject;