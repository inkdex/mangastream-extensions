import { type TestLogger } from "@paperback/types";

import { SushiScans } from "../SushiScans/main.js";
import sourceInfo from "../SushiScans/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("SushiScans tests", logger);
  registerDefaultTests(suite, SushiScans, sourceInfo);

  await suite.run();
}
