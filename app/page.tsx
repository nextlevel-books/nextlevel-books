import Hero from "@/app/components/Hero";
import Book from "@/app/components/Book";
import Club from "@/app/components/Club";
import Author from "@/app/components/Author";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <Book />
      <Club />
      <Author />
      <Footer />
    </main>
  );
}
