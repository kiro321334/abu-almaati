import Image from 'next/image';
export default function Hero() {
  return (<section className="h-svh min-h-[580px] px-4 pb-4 pt-[72px] md:px-8"><div className="relative mx-auto h-full max-w-5xl overflow-hidden rounded-3xl bg-panel">
    <Image src="/hero.jpg" alt="Mohamed Abu Al-Maati, film director and screenwriter in Cairo" fill priority fetchPriority="high" sizes="(min-width:1024px) 1000px, 100vw" className="hero-img object-cover object-[50%_20%]" />
    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
      <h1 className="fade-up font-serif text-[2rem] font-semibold leading-[1.15] md:max-w-xl md:text-6xl">Cinematic Vision for Provocative Brands.</h1>
      <p className="fade-up d1 mt-3 max-w-md text-sm text-cream/90 md:text-base">Translating cultural resonance, intimate drama, and commercial poise into enduring visual storytelling.</p>
      <div className="fade-up d2 mt-5 flex gap-3"><a href="#reels" className="btn-g glow">View Reels</a><a href="#contact" className="btn-d">Book Brief</a></div>
    </div></div></section>);
}
