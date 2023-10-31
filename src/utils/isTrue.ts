// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isTrue(value: any) {
    if (value === undefined) return undefined;
    if (typeof value === "boolean") return value;
    if (typeof value === "string") value = value.toLowerCase();
    return value === "true";
}
