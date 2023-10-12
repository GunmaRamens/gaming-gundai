export default async function isEnabled() {
    const config = await chrome.storage.local.get("enabled");
    return config.enabled;
}
