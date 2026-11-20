
export const metadata = {
  title: "Solar Company in Hyderabad | YES Genesis",
  description: "Looking for solar solutions in Hyderabad? YES Genesis offers solar panels, inverters, batteries, solar pumps and renewable energy products for homes and businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solar Company in Hyderabad | YES Genesis",
    description: "Explore solar panels, batteries, inverters and renewable energy solutions from YES Genesis.",
    type: "website",
  },
};

import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import PartnersSection from "@/components/PartnersSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingProducts />
      <PartnersSection />
    </>
  );
}
