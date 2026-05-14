import { type TestLogger } from "@paperback/types";

import { ManhwaX } from "../ManhwaX/main.js";
import sourceInfo from "../ManhwaX/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("ManhwaX tests", logger);
  registerDefaultTests(suite, ManhwaX, sourceInfo);

  await suite.run();
}
