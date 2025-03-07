import { ContentRating } from "@paperback/types";
import { MangaStreamGeneric } from "../generic/MangaStream";
import config from "./pbconfig";

const DOMAIN_NAME: string = "https://lunarscan.org/";

class LunarScansExt extends MangaStreamGeneric {
    domain = DOMAIN_NAME;
    name = config.name;

    override directoryPath = "series";
    override defaultContentRating: ContentRating = config.contentRating;
}

export const LunarScans = new LunarScansExt();
