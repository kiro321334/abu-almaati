'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function CaseModal({ reel: r, onClose }) {
  const ref = useRef(null);
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ref.current.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  const close = () => ref.current.close();
  const start = () => { setPlay(true); setLoading(true); };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()}
      aria-label={r.title}
      className="m-auto h-svh w-full max-w-[480px] overflow-hidden bg-[#17150b] p-0 text-cream backdrop:bg-black/85 md:h-[92svh] md:rounded-3xl"
    >
      <div className="flex h-full flex-col bg-[linear-gradient(180deg,#2d2611,#14130a_45%)]">
        <div className="flex items-center justify-between px-5 py-4">
          <p className="eyebrow">{r.brand}</p>
          <button type="button" autoFocus onClick={close} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full bg-panel2 text-gold">
            <Icon n="close" size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 pb-8">
          <h2 className="font-serif text-3xl font-semibold">{r.title}</h2>
          <div className="relative mx-auto mt-5 aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl border-4 border-black bg-black">
            {play ? (
              <video
                src={r.video}
                poster={r.poster}
                controls
                autoPlay
                playsInline
                preload="auto"
                onWaiting={() => setLoading(true)}
                onPlaying={() => setLoading(false)}
                onError={() => setLoading(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <button type="button" onClick={start} aria-label={`Play ${r.title}`} className="group absolute inset-0 block h-full w-full">
                <Image src={r.poster} alt={`${r.title} poster frame`} fill sizes="300px" className="object-cover" />
                <span className="ping absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-bg">
                  <Icon n="play" size={26} fill />
                </span>
              </button>
            )}
            {loading && (
              <span role="status" aria-label="Loading video" className="pointer-events-none absolute inset-0 grid place-items-center bg-black/40">
                <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/25 border-t-[#d4af37]" />
              </span>
            )}
          </div>
          <a href="#contact" onClick={close} className="btn-g mt-6 w-full rounded-full py-4 text-base">
            Start a project like this <Icon n="arrow" size={18} />
          </a>
        </div>
      </div>
    </dialog>
  );
}