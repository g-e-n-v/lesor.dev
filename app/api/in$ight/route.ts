import axios from "axios";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ORIGINAL_SCRIPT_URL = "https://cloud.umami.is/script.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export async function GET(req: NextRequest) {
  const { data: originalScript, status } = await axios.get<string>(ORIGINAL_SCRIPT_URL, {
    headers: {
      ...(req.headers as unknown as Record<string, string>),
      ...CORS_HEADERS,
      "accept-encoding": "gzip",
      host: null,
    },
    decompress: true,
  });

  const obfuscatedScript = originalScript;

  return new NextResponse(obfuscatedScript, { status });
}
