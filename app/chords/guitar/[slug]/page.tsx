import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChordPageView } from "@/app/components/ChordPageView";
import { getPopularChord, popularChords, routeForChord } from "@/app/lib/chords";
import { absoluteUrl } from "@/app/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return popularChords.guitar.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const chord = getPopularChord("guitar", slug); if (!chord) return {}; const title = `${chord.name} Guitar Chord: 3 Positions & Fingering Diagrams | GuitarTool`; const description = `Learn the ${chord.name} guitar chord with three clear diagrams. Explore all ${chord.voicingCount} positions, edit the shape and hear it in GuitarTool.`; return { title, description, alternates: { canonical: absoluteUrl(routeForChord("guitar", slug)) }, openGraph: { title, description, type: "article" } }; }
export default async function GuitarChordPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const chord = getPopularChord("guitar", slug); if (!chord) notFound(); return <ChordPageView instrument="guitar" chord={chord} />; }
