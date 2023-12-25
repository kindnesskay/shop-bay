import Hero from "@/components/store/hero";
import Categories from "@/components/store/Categories";

export default function Page() {
  return (
    <section className="w-full">
      <Hero />
      <div className="w-full pt-8">
        <Categories />
      </div>
    </section>
  );
}
