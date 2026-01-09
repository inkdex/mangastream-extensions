import { ContentRating, type ExtensionInfo, SourceIntents } from "@paperback/types";
import { getVersion } from "../generic/MangaStreamUtils";

export default {
  name: "Lunar Scans",
  description: "Extension that pulls content from lunarscan.org.",
  version: getVersion({ increasePrerelease: 3 }),
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.ADULT,
  badges: [{ label: "18+", textColor: "#000000", backgroundColor: "#FF0000" }],
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
