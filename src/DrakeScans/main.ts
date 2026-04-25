/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { ContentRating } from "@paperback/types";
import { type CheerioAPI } from "cheerio";

import { MangaStreamGeneric } from "../generic/main";
import config from "./pbconfig";
import pbconfig from "./pbconfig";

const DOMAIN_NAME: string = "https://drakecomic.org/";

class DrakeScansExtension extends MangaStreamGeneric {
  domain = DOMAIN_NAME;
  name = config.name;
  contentRating: ContentRating = pbconfig.contentRating;

  override configureSections(): void {
    this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
      $("div.bsx", $("h2:contains('Latest update')").closest("div.releases").next("div.listupd"));
    this.featuredSection.selectorFunc = ($: CheerioAPI) =>
      $(
        "div.bsx",
        $("h2:contains('Popular today')").closest("div.releases").next("div.listupd.popularslider"),
      );
  }
}

export const DrakeScans = new DrakeScansExtension();
