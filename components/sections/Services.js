import { services } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Services() {
  return (<section id="services" className="mx-auto max-w-5xl px-5 py-14 md:px-8">
    <Heading eyebrow="Full Spectrum Directing" title="Creative Services" sub="End-to-end stewardship from the initial screenplay beat-sheet to on-set execution." />
    <div className="mt-7 grid gap-4 md:grid-cols-2">{services.map(([ic, t, d]) => <article key={t} className="card reveal flex gap-4 p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-panel2 text-gold"><Icon n={ic} size={24} /></span><div><h3 className="text-xl font-bold leading-snug">{t}</h3><p className="mt-2 text-sm leading-relaxed text-cream/80">{d}</p></div></article>)}</div></section>);
}
