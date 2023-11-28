// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isTrue(value: any) {
    if (value === undefined) return undefined;

    let str: string;

    if (typeof value === "boolean") {
        str = value.toString();
    } else if (typeof value === "string") {
        str = value.toLowerCase();
    } else {
        str = value;
    }
    return str === "true";
}
