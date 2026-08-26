import type { Metadata } from "next";
import { ChordHub } from "@/app/components/ChordHub";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = { title: "Popular Ukulele Chords for GCEA Tuning | GuitarTool", description: "Learn 25 popular ukulele chords with clear GCEA diagrams and multiple positions, then explore 6,829 editable ukulele fingerings in GuitarTool.", alternates: { canonical: absoluteUrl("/chords/ukulele/") }, openGraph: { title: "25 Popular Ukulele Chords for GCEA", description: "Clear diagrams plus access to 6,829 editable ukulele fingerings.", url: absoluteUrl("/chords/ukulele/"), type: "website" } };
export default function UkuleleChordHub() { return <ChordHub instrument="ukulele" />; }
