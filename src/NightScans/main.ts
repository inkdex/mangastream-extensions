import { ContentRating } from "@paperback/types";
import { type BasicAcceptedElems, type CheerioAPI } from "cheerio";
import { type AnyNode } from "domhandler";
import { MangaStreamGeneric } from "../generic/MangaStream";
import config from "./pbconfig";
import pbconfig from "./pbconfig";

const DOMAIN_NAME = "https://nightsup.net";

class NightScansExt extends MangaStreamGeneric {
  name: string = config.name;
  domain: string = DOMAIN_NAME;
  contentRating: ContentRating = pbconfig.contentRating;

  override configureSections() {
    this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
      $("div.bsx", $("h2:contains(Latest Update)").parent().next());
    this.latestUpdatesSection.subtitleSelectorFunc = (
      $: CheerioAPI,
      element: BasicAcceptedElems<AnyNode>,
    ): string => $(element).find("a.maincl").first().text().trim();
  }
}

export const NightScans = new NightScansExt();
