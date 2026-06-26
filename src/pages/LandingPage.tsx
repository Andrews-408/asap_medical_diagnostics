import { useEffect, useState } from "react";
import { CeoMessageSection } from "../components/landing/CeoMessageSection";
import { Footer } from "../components/landing/Footer";
import { HeroSection } from "../components/landing/HeroSection";
import { LandingNavigation } from "../components/landing/LandingNavigation";
import { PackagesSection } from "../components/landing/PackagesSection";
import { ServicesSection } from "../components/landing/ServicesSection";
import { TeamSection } from "../components/landing/TeamSection";

export default function AzapLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu when clicking outside
      if (isMenuOpen && !(event.target as Element).closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <LandingNavigation
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <CeoMessageSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
