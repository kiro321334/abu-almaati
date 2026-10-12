import { stats } from '@/data/content';
export default function Stats() {
  return (<section className="mx-auto max-w-5xl px-4 md:px-8"><dl className="card reveal grid grid-cols-3 gap-2 p-5 text-center">{stats.map(([v, l]) => <div key={l}><dt className="font-serif text-3xl font-semibold text-gold">{v}</dt><dd className="mt-1 text-[10px] font-bold tracking-[.1em] text-sage">{l}</dd></div>)}</dl></section>);
}
