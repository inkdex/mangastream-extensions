import { type TestLogger } from "@paperback/types";

import { RageScans } from "../RageScans/main.js";
import sourceInfo from "../RageScans/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("RageScans tests", logger);
  registerDefaultTests(suite, RageScans, sourceInfo);

  await suite.run();
}
