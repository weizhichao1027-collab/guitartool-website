import type { Metadata } from "next";
import { ChordHub } from "@/app/components/ChordHub";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = { title: "Popular Guitar Chords with Multiple Positions | GuitarTool", description: "Learn 25 popular guitar chords with clear diagrams and multiple positions, then explore 12,415 editable guitar fingerings in GuitarTool.", alternates: { canonical: absoluteUrl("/chords/guitar/") }, openGraph: { title: "25 Popular Guitar Chords with Multiple Positions", description: "Clear diagrams plus access to 12,415 editable guitar fingerings.", url: absoluteUrl("/chords/guitar/"), type: "website" } };
export default function GuitarChordHub() { return <ChordHub instrument="guitar" />; }
