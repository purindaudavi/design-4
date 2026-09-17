import type { NextConfig } from "next";
import { xrayPlugin } from "@stinsky/xray/plugin";

const sourceInspectorEnabled = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(sourceInspectorEnabled
    ? {
        turbopack: {
          rules: xrayPlugin({ bundler: "turbopack", editor: "code" })
        }
      }
    : {})
};

export default nextConfig;
