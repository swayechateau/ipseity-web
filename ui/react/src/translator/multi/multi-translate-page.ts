import MultiTranslate from "./multi-translate";
import {
  IStatePage,
  IStatePageTranslation,
  ITranslatedPage,
} from "../../interfaces/index";

export class MultiTranslatePage extends MultiTranslate {
  transform(data: IStatePage): object {
    const dataTranslated: IStatePageTranslation =
      data.translations[this.defaultLanguage] != null
        ? data.translations[this.defaultLanguage]
        : data.translations[this.fallbackLanguage];

    const translated: ITranslatedPage = {
      index: data.index,
      published: data.published,
      hero: data.hero,
      slug: data.slug,
      name: dataTranslated.name,
      title: dataTranslated.title,
      sub_title: dataTranslated.sub_title,
      description: dataTranslated.description,
      content: dataTranslated.content,
      aside: dataTranslated.aside,
      meta: dataTranslated.meta,
      posted_at: data.posted_at,
      updated_at: dataTranslated.updated_at,
    }    

    return translated;
  }
}

export default MultiTranslatePage;
