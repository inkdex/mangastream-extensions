import { ContentRating } from "@paperback/types";
import { MangaStreamGeneric } from "../generic/MangaStream";
import config from "./pbconfig";
import pbconfig from "./pbconfig";

const DOMAIN_NAME: string = "https://lunarscan.org/";

class LunarScansExt extends MangaStreamGeneric {
  domain = DOMAIN_NAME;
  name = config.name;
  contentRating: ContentRating = pbconfig.contentRating;

  override directoryPath = "series";
}

export const LunarScans = new LunarScansExt();
