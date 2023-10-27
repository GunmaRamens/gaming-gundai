import { GundaiWebSite } from "../UnivWebsite";

export interface MoodleAdditionalInfo {
    headerText: string;
}

export type Moodle = GundaiWebSite<MoodleAdditionalInfo>;
