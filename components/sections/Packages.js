import { packages } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Packages() {
  return (<section id="packages" className="bg-[#1b190d] px-5 py-14 md:px-8"><div className="mx-auto max-w-5xl">
    <Heading eyebrow="Engagement Models" title="Director Packages" sub="Transparent structures for commercial brands, agencies, and high-growth creative ventures." />
    <div className="mt-7 grid gap-5 md:grid-cols-2">{packages.map((p) => (
      <article key={p.title} className={`reveal flex flex-col rounded-2xl p-6 ${p.hot ? 'bg-[#3a3626]' : 'bg-panel'}`}>
        <div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-bold tracking-[.14em] text-gold">{p.eyebrow}</p><h3 className="mt-1 text-2xl font-bold leading-tight">{p.title}</h3></div><span className={`shrink-0 rounded-full px-3 py-2 text-xs font-bold ${p.hot ? 'bg-gold text-bg' : 'bg-panel2 text-gold'}`}>{p.pill}</span></div>
        <p className="mt-4 text-sm leading-relaxed text-cream/85">{p.text}</p>
        <ul className="mt-4 grid flex-1 content-start gap-2.5 text-sm font-semibold">{p.items.map((i) => <li key={i} className="flex gap-2"><Icon n="verified" size={18} className="mt-0.5 shrink-0 text-gold" />{i}</li>)}</ul>
        <a href="#contact" className={`mt-5 ${p.hot ? 'btn-g' : 'btn-d'} w-full`}>{p.cta}</a></article>))}</div></div></section>);
}
