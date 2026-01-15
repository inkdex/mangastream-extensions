/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { basePbConfig, customVersion } from "../generic/config";

let pbConfig = basePbConfig;

pbConfig.name = "Astra Scans";
pbConfig.description = "Extension that pulls content from astrascans.org.";
pbConfig.version = customVersion({ increasePrerelease: 4 });

export default basePbConfig;
