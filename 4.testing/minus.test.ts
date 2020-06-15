import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minus from '../2.bundle/lib/minus.ts'

Deno.test("2 - 1 should be 1", () => {
  assertEquals(minus(2, 1), 1);
});