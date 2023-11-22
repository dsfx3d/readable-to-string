import {type Readable} from "node:stream";
import {readableToBuffer} from "./readableToBuffer";

export async function readableToString(readable: Readable): Promise<string> {
  const buffer = await readableToBuffer(readable);
  return buffer.toString();
}
