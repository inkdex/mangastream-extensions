/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { ContentRating, type ExtensionInfo, SourceIntents } from "@paperback/types";
import { getVersion } from "../generic/MangaStreamUtils";

export default {
  name: "Night Scans",
  description: "Extension that pulls content from nightsup.net.",
  version: getVersion({ increasePrerelease: 3 }),
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.EVERYONE,
  badges: [],
  capabilities:
    SourceIntents.CHAPTER_PROVIDING |
    SourceIntents.DISCOVER_SECIONS_PROVIDING |
    SourceIntents.SETTINGS_FORM_PROVIDING |
    SourceIntents.SEARCH_RESULTS_PROVIDING,
  developers: [
    {
      name: "nyzzik",
      github: "https://github.com/nyzzik",
    },
  ],
} satisfies ExtensionInfo;
