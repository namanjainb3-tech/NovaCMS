import { useState } from "react";

import { useCMS } from "../../../context/CMSContext";

import AccordionCard from "../common/AccordionCard";
import EditorCard from "../common/EditorCard";
import SaveBar from "../common/SaveBar";
import SectionTitle from "../common/SectionTitle";
import TextAreaField from "../common/TextAreaField";
import TextField from "../common/TextField";

export default function FooterEditor({ data }) {
  const {
    updateSection,
    saveSection,
    saving,
    dirtySections,
  } = useCMS();

  const [openColumn, setOpenColumn] = useState(0);

  function updateRoot(key, value) {
    updateSection("footer", {
      ...data,
      [key]: value,
    });
  }

  function updateColumn(index, key, value) {
    const columns = [...(data.columns || [])];

    columns[index] = {
      ...columns[index],
      [key]: value,
    };

    updateSection("footer", {
      ...data,
      columns,
    });
  }

  function updateLink(columnIndex, linkIndex, value) {
    const columns = [...(data.columns || [])];

    columns[columnIndex].links[linkIndex] = value;

    updateSection("footer", {
      ...data,
      columns,
    });
  }

  async function handleSave() {
    await saveSection("footer");
  }

  return (
    <div className="flex h-full flex-col">

      <SectionTitle
        title="Footer Section"
        subtitle="Manage the website footer."
        badge={
          dirtySections.footer
            ? "Unsaved Changes"
            : "Saved"
        }
      />

      <div className="space-y-6">

        {/* Brand */}

        <EditorCard
          title="Brand"
          subtitle="Logo and branding information."
        >

          <div className="space-y-5">

            <TextField
              label="Logo"
              value={data?.logo || ""}
              onChange={(v) =>
                updateRoot("logo", v)
              }
            />

            <TextField
              label="Logo Accent"
              value={data?.logoAccent || ""}
              onChange={(v) =>
                updateRoot("logoAccent", v)
              }
            />

            <TextAreaField
              label="Description"
              value={data?.description || ""}
              onChange={(v) =>
                updateRoot("description", v)
              }
            />

            <TextField
              label="Tagline"
              value={data?.tagline || ""}
              onChange={(v) =>
                updateRoot("tagline", v)
              }
            />

          </div>

        </EditorCard>

        {/* Footer Columns */}

        {(data.columns || []).map((column, index) => (

          <AccordionCard
            key={index}
            title={column.title}
            subtitle={`${column.links.length} Links`}
            open={openColumn === index}
            onToggle={() =>
              setOpenColumn(
                openColumn === index ? -1 : index
              )
            }
          >

            <div className="space-y-5">

              <TextField
                label="Column Title"
                value={column.title}
                onChange={(v) =>
                  updateColumn(index, "title", v)
                }
              />

              {(column.links || []).map((link, linkIndex) => (

                <TextField
                  key={linkIndex}
                  label={`Link ${linkIndex + 1}`}
                  value={link}
                  onChange={(v) =>
                    updateLink(index, linkIndex, v)
                  }
                />

              ))}

            </div>

          </AccordionCard>

        ))}

        {/* Bottom */}

        <EditorCard
          title="Bottom Bar"
          subtitle="Copyright and technology text."
        >

          <div className="space-y-5">

            <TextField
              label="Copyright"
              value={data?.copyright || ""}
              onChange={(v) =>
                updateRoot("copyright", v)
              }
            />

            <TextField
              label="Tech Stack"
              value={data?.techStack || ""}
              onChange={(v) =>
                updateRoot("techStack", v)
              }
            />

          </div>

        </EditorCard>

      </div>

      <SaveBar
        saving={saving}
        dirty={dirtySections.footer}
        onSave={handleSave}
      />

    </div>
  );
}