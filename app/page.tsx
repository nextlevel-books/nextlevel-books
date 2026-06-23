import Hero from "@/app/components/Hero";
import Book from "@/app/components/Book";
import FinnTeaser from "@/app/components/FinnTeaser";
import ForWhom from "@/app/components/ForWhom";
import Club from "@/app/components/Club";
import Author from "@/app/components/Author";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <Book />
      <FinnTeaser />
      <ForWhom />
      <Club />
      <Author />
      <Footer />
    </main>
  );
}
