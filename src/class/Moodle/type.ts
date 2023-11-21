import { GundaiWebSite } from "../UnivWebsite";

export interface MoodleAdditionalInfo {
    headerText: string;
    linkInjected: boolean;
}

export type Moodle = GundaiWebSite<MoodleAdditionalInfo>;
