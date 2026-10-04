import type { NextConfig } from "next";

// No basePath: the language is the first route segment instead, so
// /taiwan/path/unit-01 resolves exactly as it did when basePath provided it.
// That is what lets the Mandarin edition's public URLs survive the merge.
const nextConfig: NextConfig = {
  output: "standalone",

  // Public files are served with `max-age=0` by default: every clip a learner
  // had already heard was revalidated on each visit, one round trip per tap.
  // A clip's name is the hash of its text, so a given URL always says the same
  // thing — it can be kept a month and quietly refreshed after that. The
  // manifest does change when audio is generated, so it is kept an hour.
  async headers() {
    return [
      {
        source: "/audio/:lang/:file*.mp3",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=31536000" },
        ],
      },
      {
        source: "/audio/:lang/manifest.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
