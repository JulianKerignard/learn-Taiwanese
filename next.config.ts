import type { NextConfig } from "next";

// No basePath: the language is the first route segment instead, so
// /taiwan/path/unit-01 resolves exactly as it did when basePath provided it.
// That is what lets the Mandarin edition's public URLs survive the merge.
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
