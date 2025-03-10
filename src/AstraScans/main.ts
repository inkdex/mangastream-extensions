import { CheerioAPI } from "cheerio";
import { MangaStreamGeneric } from "../generic/MangaStream";
import config from "./pbconfig";

const DOMAIN_NAME: string = "https://astrascans.org";

class AstraScansExt extends MangaStreamGeneric {
    domain = DOMAIN_NAME;
    name = config.name;

    override configureSections(): void {
        this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
            $("div.bsx", $("h2:contains(Latest Update)")?.parent()?.next());
    }
}

export const AstraScans = new AstraScansExt();
