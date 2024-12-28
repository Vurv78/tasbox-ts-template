import { describe, expect, it } from "bun:test";

// Import your code that doesn't rely on TASBox or Luau APIs to use/test in JS.
import { add } from "../src/shared/lib";

describe("adder", () => {
    it("should add 2 and 4", () => {
        expect(add(2, 4)).toBe(2 + 4)
    });
});