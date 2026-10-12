import { nav } from '@/data/content';
export default function Header() {
  return (<header className="fixed inset-x-0 top-0 z-40 bg-bg/85 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
      <a href="#top" className="leading-tight"><span className="block font-serif text-lg font-semibold md:text-xl">Mohamed Abu Al-Maati</span><span className="text-[10px] font-bold tracking-[.12em] text-sage">DIRECTOR & SCREENWRITER</span></a>
      <nav aria-label="Main" className="hidden gap-7 text-sm md:flex">{nav.map(([id, l]) => <a key={id} href={`#${id}`} className="hover:text-gold">{l}</a>)}</nav>
      <details className="relative md:hidden"><summary aria-label="Menu" className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full bg-panel2 text-xl text-gold">☰</summary>
        <div className="absolute right-0 mt-2 grid w-44 gap-1 rounded-xl bg-panel2 p-2 text-sm shadow-xl">{nav.map(([id, l]) => <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 hover:bg-bg/60">{l}</a>)}</div></details>
    </div></header>);
}
