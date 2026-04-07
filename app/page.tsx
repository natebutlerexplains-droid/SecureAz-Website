import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { Features } from "./components/Features";
import { TrustCategories } from "./components/TrustCategories";
import { HowItWorks } from "./components/HowItWorks";
import { EarlyAccess } from "./components/EarlyAccess";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <TrustCategories />
        <HowItWorks />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
