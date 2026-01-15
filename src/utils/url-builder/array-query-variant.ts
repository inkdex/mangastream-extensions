/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { URLBuilder as BaseURLBuilder } from "./base";

class URLBuilder extends BaseURLBuilder {
  protected override formatArrayQuery(key: string, value: string[]): string[] {
    return value.length > 0 ? value.map((v) => `${key}=${v}`) : [];
  }
}

export { URLBuilder };
