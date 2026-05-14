import { type TestLogger } from "@paperback/types";

import { Thunderscans } from "../Thunderscans/main.js";
import sourceInfo from "../Thunderscans/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("Thunderscans tests", logger);
  registerDefaultTests(suite, Thunderscans, sourceInfo);

  await suite.run();
}
