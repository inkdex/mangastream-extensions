import { MangaStreamGeneric } from "./MangaStream";
import { Months } from "./MangaStreamInterfaces";

const BASE_VERSION = "1.0.0-alpha.2";

export function getVersion(
  options?:
    | {
        increaseMajor?: number;
        increaseMinor?: number;
        increasePatch?: number;
      }
    | {
        increasePrerelease: number;
      },
): string {
  if (!options) {
    return BASE_VERSION;
  }

  const baseParts = BASE_VERSION.split("-");
  const versionNumbers = baseParts[0].split(".").map(Number);
  const isPrerelease = baseParts.length > 1;

  if (versionNumbers.length < 3) {
    throw new Error(
      `Invalid BASE_VERSION: '${BASE_VERSION}'. Expected format: 'X.Y.Z' or 'X.Y.Z-prerelease.N'`,
    );
  }

  if ("increasePrerelease" in options) {
    if (!isPrerelease) {
      throw new Error("Cannot set a prerelease number on a stable version.");
    }

    const prereleaseParts = baseParts[1].split(".");
    if (prereleaseParts.length < 2 || isNaN(Number(prereleaseParts[1]))) {
      throw new Error(
        `Invalid prerelease format in BASE_VERSION: '${BASE_VERSION}'. Expected format: 'X.Y.Z-prerelease.N'`,
      );
    }

    const newPrereleaseNum = Number(prereleaseParts[1]) + options.increasePrerelease;
    return `${baseParts[0]}-${prereleaseParts[0]}.${newPrereleaseNum}`;
  }

  if (isPrerelease) {
    throw new Error("BASE_VERSION is a prerelease. Use increasePrerelease option instead.");
  }

  const hasVersionIncrement =
    options.increaseMajor !== undefined ||
    options.increaseMinor !== undefined ||
    options.increasePatch !== undefined;

  if (!hasVersionIncrement) {
    throw new Error(
      "Empty options object provided. Either specify version increments or call getVersion() with no arguments.",
    );
  }

  const newMajor = versionNumbers[0] + (options.increaseMajor || 0);
  const newMinor = versionNumbers[1] + (options.increaseMinor || 0);
  const newPatch = versionNumbers[2] + (options.increasePatch || 0);

  return `${newMajor}.${newMinor}.${newPatch}`;
}

export function convertDate(dateString: string, source: MangaStreamGeneric): Date {
  // Parsed date string
  dateString = dateString.toLowerCase();

  // Month formats provided by the source
  const dateMonths: Months = source.dateMonths;

  let date: Date | null = null;

  for (const [key, value] of Object.entries(dateMonths)) {
    if (dateString.toLowerCase().includes((value as string).toLowerCase())) {
      date = new Date(dateString.replace(value as string, key ?? ""));
    }
  }

  if (!date || String(date) == "Invalid Date") {
    console.log(
      "Failed to parse chapter date! TO DEV: Please check if the entered months reflect the sites months",
    );
    return new Date();
  }
  return date;
}
