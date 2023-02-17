import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import LocationSection from "./LocationSection";
import ProjectSection from "./ProjectSection";

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
      <ProjectSection></ProjectSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
      <LocationSection></LocationSection>
    </div>
  );
}

export default PageContent;
