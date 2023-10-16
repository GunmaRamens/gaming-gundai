import Storage from "./Storage";

export default async function GetIsEnabled() {
    const config = await Storage.get("enabled");
    return config.enabled;
}
