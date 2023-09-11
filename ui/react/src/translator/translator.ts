import { Translate } from ".";

interface IModel {
  
}

interface IModels {
  model: any | null,
  defaultLanguage: string,
  fallbackLanguage: string,
  setModel(model: object[]): void
  all(): object[],
  one(key: string | number): object | null,
  transform(data: any): object,
  get_keys(): string[],
  check_key_exists(key: string | number): boolean
}

class Translator {
  models: IModels[];
  defaultLanguage: string;
  fallbackLanguage: string;
  constructor(defaultLanguage = 'en-gb', fallbackLanguage = 'en-gb') {
    this.defaultLanguage = defaultLanguage;
    this.fallbackLanguage = fallbackLanguage;
  }

  assignModel(modelName:string, className: IModels) {
    this.models[modelName] = className;
  }

  setLanguages(defaultLanguage: string, fallbackLanguage: string)  {
    this.setLanguage(defaultLanguage);
    this.setFallbackLanguage(fallbackLanguage);
  }

  setLanguage(language: string) {
    this.defaultLanguage = language;
    this.updateLanguage();
  }

  setFallbackLanguage(language: string) {
    this.fallbackLanguage = language;
    this.updateFallbackLanguage();
  }

  updateLanguages() {
    this.updateLanguage();
    this.updateFallbackLanguage();
  }

  updateLanguage() {
    this.models.forEach(model => {
      model.defaultLanguage = this.defaultLanguage;
    });
  }

  updateFallbackLanguage() {
    this.models.forEach(model => {
      model.fallbackLanguage = this.fallbackLanguage;
    });
  }

  setModelData(modelName: string, data: any) {
    this.models[modelName] ? this.models[modelName].setModel(data) : null;
  }
}

export default Translator;