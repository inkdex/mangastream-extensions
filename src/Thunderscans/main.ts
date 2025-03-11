import { BasicAcceptedElems, CheerioAPI } from "cheerio";
import { AnyNode } from "domhandler";
import { MangaStreamGeneric } from "../generic/MangaStream";
import config from "./pbconfig";

const DOMAIN_NAME = "https://en-thunderscans.com";

class ThunderscansExt extends MangaStreamGeneric {
    name: string = config.name;

    domain: string = DOMAIN_NAME;

    override directoryPath: string = "comics";

    override configureSections() {
        this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
            $("div.bsx", $("h2:contains(Latest Update)").parent().next());
        this.latestUpdatesSection.subtitleSelectorFunc = (
            $: CheerioAPI,
            element: BasicAcceptedElems<AnyNode>,
        ): string => $(element).find("a.maincl").first().text().trim();
    }
}

export const Thunderscans = new ThunderscansExt();
