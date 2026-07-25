import { useState } from "react";

import DashboardLayout from "../components/app/layout/DashboardLayout";
import EditorPanel from "../components/app/content/EditorPanel";
import PreviewPanel from "../components/app/preview/PreviewPanel";
import SettingsEditor from "../components/app/content/SettingsEditor";

import { useCMS } from "../context/CMSContext";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("hero");

  const { loading, getSection, updateSection } = useCMS();

  const sectionData = getSection(activeSection);

  return (
    <DashboardLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      {activeSection === "settings" ? (

        <div className="mx-auto w-full max-w-[1200px]">
          <SettingsEditor />
        </div>

        ) : (

          <div className="mx-auto grid h-[calc(100vh-7rem)] w-full max-w-[1400px] gap-8 xl:grid-cols-[440px_minmax(0,1fr)]">
          {/* Editor */}
          <section className="min-w-0">
            <EditorPanel
              loading={loading}
              activeSection={activeSection}
              sectionData={sectionData}
              updateSection={updateSection}
            />
          </section>

          {/* Live Preview */}
          <section className="min-w-0">
            <PreviewPanel loading={loading} />
          </section>

        </div>

        )}
    </DashboardLayout>
  );
}