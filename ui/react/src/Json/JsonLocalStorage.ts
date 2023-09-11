class JsonLocalStorage {
    name: string;
    storage: Storage;
    constructor(name: string) {
        this.name = name;
        this.storage = localStorage;
    }
    
    get(key: string): JSON | null {
        const item = this.storage.getItem(this.name + '.' + key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }

    set(key:string, value:any): void {
        this.storage.setItem(this.name + '.' + key, JSON.stringify(value));
    }

    remove(key:string): void {
        this.storage.removeItem(this.name + '.' + key);
    }
}

export default JsonLocalStorage