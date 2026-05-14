import { type TestLogger } from "@paperback/types";

import { DrakeScans } from "../DrakeScans/main.js";
import sourceInfo from "../DrakeScans/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("DrakeScans tests", logger);
  registerDefaultTests(suite, DrakeScans, sourceInfo);

  await suite.run();
}
