import React from "react";
import { Link } from "react-router-dom";
import { CalculatorsHub } from "../components/calculators/CalculatorsHub";
import { Ruler, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      {/* Header */}
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Measurement Calculators</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[#7A8C7D] font-semibold tracking-wider uppercase mb-2">
            <Ruler className="w-4 h-4" />
            <span>Interactive Kitchen Tools</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Kitchen Space & Measurement Calculators
          </h1>

          <p className="text-sm md:text-base text-[#2C3531]/80 mt-3 leading-relaxed max-w-3xl">
            Take the guesswork out of kitchen organization. Input your internal cabinet dimensions in inches to calculate exact footprint capacities, plumbing clearance corridors, and container quantities before ordering.
          </p>

          <div className="mt-6 pt-6 border-t border-[#EFECE6] flex flex-wrap items-center gap-6 text-xs text-[#2C3531]/75">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7A8C7D]" />
              <span>Runs 100% locally in browser</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7A8C7D]" />
              <span>US inches and cubic measurements</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#7A8C7D]" />
              <span>Includes adjustable safety clearances</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <CalculatorsHub />

        {/* Measurement Advice Card */}
        <div className="mt-16 bg-white rounded-2xl border border-[#EFECE6] p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-[#2C3531] mb-3">
            Best Practices for Accurate Kitchen Measurements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#2C3531]/80 leading-relaxed">
            <div>
              <strong className="block text-[#2C3531] font-semibold mb-1">Use a Metal Tape Measure</strong>
              Cloth tailor tapes and smartphone measurement apps often stretch or misread interior corners by 0.5" to 1.0", which can cause an organizer to jam.
            </div>
            <div>
              <strong className="block text-[#2C3531] font-semibold mb-1">Account for Face Frames & Lips</strong>
              The top opening of a drawer box is often restricted by the cabinet face frame rail. Always measure the vertical clearance from the floor to the lowest overhead projection.
            </div>
            <div>
              <strong className="block text-[#2C3531] font-semibold mb-1">Check Back Wall Obstructions</strong>
              Water valves, electrical disposal outlets, and gas pipe unions typically extend 2" to 4" from the rear wall. Subtract these protrusions from your cabinet depth.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
