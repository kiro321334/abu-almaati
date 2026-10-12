"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { reels, filters } from "@/data/content";
import Icon from "@/components/ui/Icon";
const CaseModal = dynamic(() => import("@/components/ui/CaseModal"), {
  ssr: false,
});
const LIMIT = 6;

export default function Reels() {
  const [f, setF] = useState("All Works");
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);
  const list = reels.filter((r) => f === "All Works" || r.brand === f);
  const shown = all ? list : list.slice(0, LIMIT);

  return (
    <section id="reels" className="mx-auto max-w-5xl px-5 py-14 md:px-8">
      <p className="eyebrow">Director’s Selects</p>
      <h2 className="h2">Cinematic Reels</h2>
      <div
        role="tablist"
        className="noscroll -mx-5 mt-5 flex gap-2 overflow-x-auto px-5"
      >
        {filters.map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={f === k}
            className="chip"
            onClick={() => {
              setF(k);
              setAll(false);
            }}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {shown.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setOpen(r)}
            aria-label={`Play ${r.title}`}
            className="group card relative block aspect-[4/5] w-full overflow-hidden p-0 text-left"
          >
            <Image
              src={r.poster}
              alt={`${r.title} – cover frame`}
              fill
              sizes="(min-width:768px) 480px, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
              {r.brand}
            </span>
            <span className="ping absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-bg transition group-hover:scale-110">
              <Icon n="play" size={26} fill />
            </span>
            <span className="absolute inset-x-3 bottom-3 block rounded-xl bg-panel/90 p-4 backdrop-blur">
              <span className="block font-bold leading-snug md:text-lg">
                {r.title}
              </span>
            </span>
          </button>
        ))}
      </div>
      {list.length > LIMIT && (
        <button
          type="button"
          aria-expanded={all}
          onClick={() => setAll(!all)}
          className="btn-d mt-6 w-full"
        >
          {all
            ? "Show Fewer Reels"
            : `View More Reels (${list.length - LIMIT})`}
        </button>
      )}
      {open && <CaseModal reel={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
