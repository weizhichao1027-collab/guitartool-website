import type { MetadataRoute } from "next";
import { assetPath } from "@/app/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GuitarTool — Tuner, Metronome & Chords",
    short_name: "GuitarTool",
    description: "Offline practice tools for guitar and ukulele.",
    start_url: ".",
    display: "standalone",
    background_color: "#f7f5ee",
    theme_color: "#0caeae",
    icons: [{ src: assetPath("/app-icon.png"), sizes: "1024x1024", type: "image/png" }],
  };
}
