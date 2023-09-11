import MultiTranslate from './multi-translate';
import {
  IStatePost,
  ITranslatedPost,
  IStatePostTranslation,
} from './../../interfaces/index';

class MultiTranslatePost extends MultiTranslate {
  transform(data: IStatePost) {
    const dataTranslations: IStatePostTranslation = data.translations[
      this.defaultLanguage
    ]
      ? data.translations[this.defaultLanguage]
      : data.translations[this.fallbackLanguage];
    const translated: ITranslatedPost = {
      index: data.index,
      slug: data.slug,
      hero: data.hero,
      name: data.name,
      short_name: dataTranslations.short_name,
      meta: dataTranslations.meta,
      title: dataTranslations.title,
      sub_title: dataTranslations.sub_title,
      description: dataTranslations.description,
      content: dataTranslations.content,
      aside: dataTranslations.aside,
      featured: data.featured,
      prominent: data.prominent,
      published: data.published,
      readtime: dataTranslations.readtime,
      category: data.category,
      posted_at: data.posted_at,
      updated_at: dataTranslations.updated_at,
    };
    return translated;
  }

  recent(amount: number = 3) {
    return this.all().slice(0, amount);
  }
}

export default MultiTranslatePost;
