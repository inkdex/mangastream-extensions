import { type TestLogger } from "@paperback/types";

import { LelManga } from "../LelManga/main.js";
import sourceInfo from "../LelManga/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("LelManga tests", logger);
  registerDefaultTests(suite, LelManga, sourceInfo);

  await suite.run();
}
