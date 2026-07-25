import { useCMS } from "../../../context/CMSContext";
import ImageUploader from "../common/ImageUploader";

import EditorCard from "../common/EditorCard";
import SaveBar from "../common/SaveBar";
import SectionTitle from "../common/SectionTitle";
import TextAreaField from "../common/TextAreaField";
import TextField from "../common/TextField";

export default function HeroEditor({ data }) {
  const {
    updateSection,
    saveSection,
    saving,
    dirtySections,
  } = useCMS();

  function update(key, value) {
    updateSection("hero", {
      ...data,
      [key]: value,
    });
  }

  async function handleSave() {
    await saveSection("hero");
  }

  return (
    <div className="flex h-full flex-col">

      <SectionTitle
        title="Hero Section"
        subtitle="Manage the first section visitors see when they land on your website."
        badge={
          dirtySections.hero
            ? "Unsaved Changes"
            : "Saved"
        }
      />

      <div className="space-y-6">

        <EditorCard
          title="Content"
          subtitle="Main messaging shown on the landing page."
        >

          <div className="space-y-5">

            <TextField
              label="Badge"
              value={data?.badge || ""}
              placeholder="AI Powered CMS"
              onChange={(v) =>
                update("badge", v)
              }
            />

            <TextField
              label="Heading"
              value={data?.heading || ""}
              placeholder="Manage your website..."
              onChange={(v) =>
                update("heading", v)
              }
            />

            <TextAreaField
              label="Description"
              value={data?.description || ""}
              placeholder="Describe your product..."
              onChange={(v) =>
                update("description", v)
              }
            />

          </div>

        </EditorCard>

        <EditorCard
          title="Buttons"
          subtitle="Primary actions for your visitors."
        >

          <div className="grid gap-5 md:grid-cols-2">

            <TextField
              label="Primary Button"
              value={data?.buttonText || ""}
              placeholder="Get Started"
              onChange={(v) =>
                update("buttonText", v)
              }
            />

            <TextField
              label="Secondary Button"
              value={data?.secondaryButton || ""}
              placeholder="Live Demo"
              onChange={(v) =>
                update("secondaryButton", v)
              }
            />

          </div>

        </EditorCard>

        <EditorCard
          title="Media"
          subtitle="Hero illustration or banner image."
        >
          <ImageUploader
            value={data?.image}
            onChange={(url) => update("image", url)}
          />
        </EditorCard>

      </div>

      <SaveBar
        saving={saving}
        dirty={dirtySections.hero}
        onSave={handleSave}
      />

    </div>
  );
}