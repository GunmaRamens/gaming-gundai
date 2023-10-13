import { storage } from "./storage";

export default async function getIsEnabled() {
    const config = await storage.get("enabled");
    return config.enabled;
}
