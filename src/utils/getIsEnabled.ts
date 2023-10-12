export default async function getIsEnabled() {
    const config = await chrome.storage.local.get("enabled");
    return config.enabled;
}
