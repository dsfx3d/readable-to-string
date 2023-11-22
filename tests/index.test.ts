import {describe, expect, it} from "vitest";

import {Readable} from "node:stream";
import {readableToString} from "../src";

describe(readableToString.name, () => {
  it("converts a readable stream of buffer mode to a string", async () => {
    const input = "hello world! 👋 🌍 你好 こんにちは 😀";
    const readable = Readable.from(Buffer.from(input));
    const actual = await readableToString(readable);
    expect(actual).toBe(input);
  });

  it("converts a readable stream of text mode to a string", async () => {
    const input = "hello world! 👋 🌍 你好 こんにちは 😀";
    const readable = Readable.from(input);
    const actual = await readableToString(readable);
    expect(actual).toBe(input);
  });
});
