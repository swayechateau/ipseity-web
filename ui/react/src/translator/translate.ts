class Translate {
  model: any | null;
  asArray: boolean = true;
  defaultLanguage: string;
  fallbackLanguage: string;
  constructor(
    model = null,
    defaultLanguage = "en-gb",
    fallbackLanguage = "en-gb"
  ) {
    this.fallbackLanguage = fallbackLanguage;
    this.defaultLanguage = defaultLanguage;
    this.model = model;
  }

  setModel(model: object[]): void {
    this.model = model;
  }

  all(): object[] {
    return this.asArray ? (this.all_as_array()) : (this.all_as_object());
  }

  all_as_array(): object[] {
    let translatedModel: any = [];
    this.get_keys().forEach((key) => {
      translatedModel.push(this.one(key));
    });
    return translatedModel;
  }

  all_as_object(): object[] {
    let translatedModel: any = {};
    this.get_keys().forEach((key) => {
      translatedModel[key] = this.one(key);
    });
    return translatedModel;
  }

  one(key: string | number): object | null {
    if (this.check_key_exists(key)) {
      return this.transform(this.model[key], key);
    }
    return null;
  }

  transform(data: any, index: any): object {
    return data.translations[this.defaultLanguage]
      ? data.translations[this.defaultLanguage]
      : data.translations[this.fallbackLanguage];
  }

  get_keys(): string[] {
    return Object.keys(this.model);
  }

  check_key_exists(key: string | number): boolean {
    return this.model.hasOwnProperty(key);
  }
}

export default Translate;
