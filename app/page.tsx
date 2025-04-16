import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Stats from "../components/sections/stats/default";
import Logos from "../components/sections/logos/default";
import Items from "../components/sections/items/default";
import FAQ from "../components/sections/faq/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Pricing from "../components/sections/pricing/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Items />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
