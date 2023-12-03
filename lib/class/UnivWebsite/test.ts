interface Config {
    hoge: boolean;
    fugo: string;
}

export class Hoge<T extends Config = Config> {
    config1: T;
    config2: T;
    constructor() {
        const config: Config = {
            hoge: true,
            fugo: "fugo",
        };
        this.config1 = config;

        this.config2 = {} as T;
        this.config2.fugo = config.fugo;
        this.config2.hoge = config.hoge;
    }
}
