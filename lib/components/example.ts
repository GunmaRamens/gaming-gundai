// 値がbooleanであるキーのみを受け付ける
type BooleanKeyOf<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

function toggle<T>(
    obj: T,

    key: BooleanKeyOf<T>,
) {
    const data = obj[key];
    const newdata = !data;
    obj = { ...obj, [key]: newdata };
}

function main() {
    type hoge = { a: number; b: boolean };
    const obj: hoge = { a: 1, b: true };
    toggle(obj, "b");
}

main();
