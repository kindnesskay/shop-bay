import Hero from "@/components/hero";
import Categories from "@/components/store/Categories";

export default function Page() {
  return (
    <section className="w-full h-fit">
      <Hero />
      <div className="h-fit w-full pt-8">
        <Categories />
      </div>
    </section>
  );
}
