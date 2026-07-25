import { useCMS } from "../../../context/CMSContext";

import EditorCard from "../common/EditorCard";
import SaveBar from "../common/SaveBar";
import SectionTitle from "../common/SectionTitle";
import TextAreaField from "../common/TextAreaField";
import TextField from "../common/TextField";

export default function CTAEditor({ data }) {
  const {
    updateSection,
    saveSection,
    saving,
    dirtySections,
  } = useCMS();

  function updateRoot(key, value) {
    updateSection("cta", {
      ...data,
      [key]: value,
    });
  }

  function updateStat(index, key, value) {
    const stats = [...(data.stats || [])];

    stats[index] = {
      ...stats[index],
      [key]: value,
    };

    updateSection("cta", {
      ...data,
      stats,
    });
  }

  async function handleSave() {
    await saveSection("cta");
  }

  return (
    <div className="flex h-full flex-col">

      <SectionTitle
        title="CTA Section"
        subtitle="Manage the call-to-action section shown before the footer."
        badge={
          dirtySections.cta
            ? "Unsaved Changes"
            : "Saved"
        }
      />

      <div className="space-y-6">

        <EditorCard
          title="Section Content"
          subtitle="Main CTA content."
        >

          <div className="space-y-5">

            <TextField
              label="Badge"
              value={data?.badge || ""}
              onChange={(v) =>
                updateRoot("badge", v)
              }
            />

            <TextField
              label="Heading"
              value={data?.heading || ""}
              onChange={(v) =>
                updateRoot("heading", v)
              }
            />

            <TextAreaField
              label="Description"
              value={data?.description || ""}
              onChange={(v) =>
                updateRoot("description", v)
              }
            />

          </div>

        </EditorCard>

        <EditorCard
          title="Buttons"
          subtitle="Primary actions displayed to users."
        >

          <div className="grid gap-5 md:grid-cols-2">

            <TextField
              label="Primary Button"
              value={data?.buttonText || ""}
              onChange={(v) =>
                updateRoot("buttonText", v)
              }
            />

            <TextField
              label="Secondary Button"
              value={data?.secondaryButton || ""}
              onChange={(v) =>
                updateRoot("secondaryButton", v)
              }
            />

          </div>

        </EditorCard>

        <EditorCard
          title="Statistics"
          subtitle="Quick highlights shown below the CTA."
        >

          <div className="grid gap-5 lg:grid-cols-3">

            {(data.stats || []).map((stat, index) => (

              <div
                key={index}
                className="radius-theme border border-zinc-800 bg-zinc-950 p-5"
              >

                <TextField
                  label="Value"
                  value={stat.value}
                  onChange={(v) =>
                    updateStat(index, "value", v)
                  }
                />

                <div className="mt-4">

                  <TextField
                    label="Label"
                    value={stat.label}
                    onChange={(v) =>
                      updateStat(index, "label", v)
                    }
                  />

                </div>

              </div>

            ))}

          </div>

        </EditorCard>

      </div>

      <SaveBar
        saving={saving}
        dirty={dirtySections.cta}
        onSave={handleSave}
      />

    </div>
  );
}