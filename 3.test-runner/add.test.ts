import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minus from './add.ts'

Deno.test("2 + 1 should be 3", () => {
  assertEquals(
    minus(2, 1), 3
  )
})