import HeroEditor from "./HeroEditor";
import FeaturesEditor from "./FeaturesEditor";
import WorkflowEditor from "./WorkflowEditor";
import CTAEditor from "./CTAEditor";
import FooterEditor from "./FooterEditor";
import ThemeEditor from "./ThemeEditor";

export default function EditorPanel({
  activeSection,
  sectionData,
  updateSection,
  loading,
}) {
  if (loading) {
    return (
      <div className="radius-theme-lg border border-zinc-800 bg-zinc-900 p-6 text-zinc-400">
        Loading...
      </div>
    );
  }

  switch (activeSection) {
    case "hero":
      return (
        <HeroEditor data={sectionData} />
      );

    case "features":
        return (
          <FeaturesEditor
            data={sectionData}
          />
        );

    case "workflow":
      return (
        <WorkflowEditor
          data={sectionData}
        />
      );

    case "cta":
    return (
      <CTAEditor
        data={sectionData}
      />
    );

    case "footer":
    return (
      <FooterEditor
        data={sectionData}
      />
    );

    case "theme":
    return <ThemeEditor />;

    default:
      return (
        <div className="radius-theme-lg border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold text-white">
            {activeSection}
          </h2>

          <p className="mt-4 text-zinc-400">
            Editor coming soon...
          </p>
        </div>
      );
  }
}