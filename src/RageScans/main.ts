/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { ContentRating } from "@paperback/types";
import { type CheerioAPI } from "cheerio";

import { MangaStreamGeneric } from "../generic/main";
import config from "./pbconfig";
import pbconfig from "./pbconfig";

const DOMAIN_NAME: string = "https://ragescans.com/";

class RageScansExtension extends MangaStreamGeneric {
  domain = DOMAIN_NAME;
  name = config.name;
  contentRating: ContentRating = pbconfig.contentRating;

  override configureSections(): void {
    this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
      $("div.bsx", "#content > div > div.postbody > div:nth-child(1) > div.listupd");
  }
}

export const RageScans = new RageScansExtension();
