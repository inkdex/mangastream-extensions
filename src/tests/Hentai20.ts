import { type TestLogger } from "@paperback/types";

import { Hentai20 } from "../Hentai20/main.js";
import sourceInfo from "../Hentai20/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("Hentai20 tests", logger);
  registerDefaultTests(suite, Hentai20, sourceInfo);

  await suite.run();
}
