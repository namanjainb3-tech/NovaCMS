import { useCMS } from "../../../context/CMSContext";
import EditableSection from "./EditableSection";
import Footer from "../../layout/Footer";

import Hero from "../../sections/Hero";
import Features from "../../sections/Features";
import Workflow from "../../sections/Workflow";
import CTA from "../../sections/CTA";

import DashboardPreview from "../../dashboard/DashboardPreview";

export default function LandingPreview() {
  const { getSection } = useCMS();

  return (
    <div
      className="text-white"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <main>
        <div className="pt-20">
        <EditableSection
          id="hero"
          title="Hero"
        >
          <Hero data={getSection("hero")} />
        </EditableSection>
        </div>

        <DashboardPreview />

        <EditableSection
          id="features"
          title="Features"
        >
          <Features data={getSection("features")} />
        </EditableSection>

        <EditableSection
          id="workflow"
          title="Workflow"
        >
          <Workflow data={getSection("workflow")} />
        </EditableSection>

        <EditableSection
          id="cta"
          title="CTA"
        >
          <CTA data={getSection("cta")} />
        </EditableSection>
      </main>

      <EditableSection
        id="footer"
        title="Footer"
      >
        <Footer data={getSection("footer")} />
      </EditableSection>
    </div>
  );
}