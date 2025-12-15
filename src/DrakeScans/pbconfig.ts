import { ContentRating, ExtensionInfo, SourceIntents } from "@paperback/types";
import { getVersion } from "../generic/MangaStreamUtils";

export default {
  name: "Drake Scans",
  description: "Extension that pulls content from drakecomic.org.",
  version: getVersion(),
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.EVERYONE,
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
