import { lang, langs, projects as spjs, words as sws, categories as scs, posts as spts, pages as spgs } from '.'
import MultiTranslateProject from "../translator/multi/multi-translate-project"
import MultiTranslatePost from "../translator/multi/multi-translate-post"
import MultiTranslatePage from "../translator/multi/multi-translate-page"
import MultiTranslate from '../translator/multi/multi-translate';
export function getLangCodes(): string[] {
  let tangs: string[] = [];
  langs.forEach(l => {
    tangs.push(l.code)
  })
  return tangs;
}

const LanguageCodes = getLangCodes();
export const multiWords = new MultiTranslate(LanguageCodes, lang, sws)
multiWords.everyLanguage()
export const words = multiWords.translated

export const multiCats = new MultiTranslate(LanguageCodes, lang, scs)
multiCats.everyLanguage()
export const categories = multiCats.translated

export const multiProjs = new MultiTranslateProject(LanguageCodes, lang, spjs)
multiProjs.everyLanguage()
export const projects = multiProjs.translated

export const multiPosts = new MultiTranslatePost(LanguageCodes, lang, spts)
multiPosts.everyLanguage()
export const posts = multiPosts.translated

export const multiPages = new MultiTranslatePage(LanguageCodes, lang, spgs)
multiPages.asArray = false;
multiPages.everyLanguage()
export const pages = multiPages.translated