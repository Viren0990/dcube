import Hero2 from "@/components/Hero2";
import Values from "@/components/Values";
import Methodology from "@/components/Methodology";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* We are removing the old Basera Hero and Navigation completely */}
      <Hero2 />
      <Values />
      <Methodology />
      <Locations />
      <Footer />
    </>
  );
}
