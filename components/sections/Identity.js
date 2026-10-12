import { features } from '@/data/content';
import Icon from '@/components/ui/Icon';
export default function Identity() {
  return (<section id="about" className="mx-auto max-w-5xl px-5 py-14 md:px-8">
    <p className="eyebrow reveal">Artistic Identity</p><h2 className="h2 reveal">The Craft Behind the Lens</h2>
    <blockquote className="reveal mt-6 rounded-2xl border-l-[6px] border-gold bg-panel p-6 md:p-10"><p className="font-serif text-2xl font-semibold italic leading-snug md:text-4xl">“Every frame must smell of human memory. A commercial should linger with the same poignant depth as an arthouse mastershot.”</p>
      <footer className="mt-5 flex items-center gap-3 text-xs font-bold tracking-wider text-cream/80"><span className="h-px w-8 bg-cream/40" />MOHAMED ABU AL-MAATI — CAIRO</footer></blockquote>
    <div className="mt-6 grid gap-4 text-base leading-relaxed text-cream/85 md:grid-cols-2"><p>With an established career spanning classical Egyptian cinematic traditions and avant-garde international advertising, Mohamed orchestrates productions from concept inception to post-color timing.</p><p>Specializing in nuanced talent direction, high-velocity narrative shorts, and high-fashion visual poetry, his work bridges heritage texture with razor-sharp digital aesthetics.</p></div>
    <div className="mt-6 grid grid-cols-2 gap-4">{features.map(([ic, t, d]) => <div key={t} className="card reveal p-5"><Icon n={ic} size={26} className="text-gold" /><h3 className="mt-3 font-bold">{t}</h3><p className="mt-2 text-sm text-cream/80">{d}</p></div>)}</div>
  </section>);
}
