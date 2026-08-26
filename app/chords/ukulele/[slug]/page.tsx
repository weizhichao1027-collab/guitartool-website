import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChordPageView } from "@/app/components/ChordPageView";
import { getPopularChord, popularChords, routeForChord } from "@/app/lib/chords";
import { absoluteUrl } from "@/app/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return popularChords.ukulele.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const chord = getPopularChord("ukulele", slug); if (!chord) return {}; const title = `${chord.name} Ukulele Chord: 3 GCEA Positions | GuitarTool`; const description = `Learn the ${chord.name} ukulele chord with three clear GCEA diagrams. Explore all ${chord.voicingCount} positions, edit the shape and hear it in GuitarTool.`; return { title, description, alternates: { canonical: absoluteUrl(routeForChord("ukulele", slug)) }, openGraph: { title, description, type: "article" } }; }
export default async function UkuleleChordPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const chord = getPopularChord("ukulele", slug); if (!chord) notFound(); return <ChordPageView instrument="ukulele" chord={chord} />; }
