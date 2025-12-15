import { ContentRating, ExtensionInfo, SourceIntents } from "@paperback/types";
import { getVersion } from "../generic/MangaStreamUtils";

export default {
  name: "Hentai20",
  description: "Extension that pulls content from hentai20.io.",
  version: getVersion(),
  icon: "icon.jpg",
  language: "en",
  contentRating: ContentRating.ADULT,
  badges: [],
  capabilities:
    SourceIntents.CHAPTER_PROVIDING |
    SourceIntents.DISCOVER_SECIONS_PROVIDING |
    SourceIntents.SETTINGS_FORM_PROVIDING |
    SourceIntents.SEARCH_RESULTS_PROVIDING |
    SourceIntents.CLOUDFLARE_BYPASS_PROVIDING,
  developers: [
    {
      name: "nyzzik",
      github: "https://github.com/nyzzik",
    },
  ],
} satisfies ExtensionInfo;
