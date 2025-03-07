import { MangaStreamGeneric } from "../generic/MangaStream";
import config from "./pbconfig";

const DOMAIN_NAME: string = "https://astrascans.org";

class AstraScansExt extends MangaStreamGeneric {
    domain = DOMAIN_NAME;
    name = config.name;
}

export const AstraScans = new AstraScansExt();
