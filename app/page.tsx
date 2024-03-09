import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </main>
  );
}

// components/Page.tsx
// import React from "react";

// interface PageProps {
//   isAboutPage?: boolean; // Prop to indicate if it's the About page
// }

// const Page: React.FC<PageProps> = ({ children, isAboutPage = false }) => {
//   return (
//     <div
//       className={
//         isAboutPage ? "" : "mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"
//       }
//     >
//       {children}
//     </div>
//   );
// };

// export default Page;
