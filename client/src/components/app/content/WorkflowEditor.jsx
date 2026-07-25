import { useState } from "react";

import {
  Plus,
  Copy,
  Trash2,
} from "lucide-react";

import { useCMS } from "../../../context/CMSContext";

import AccordionCard from "../common/AccordionCard";
import EditorCard from "../common/EditorCard";
import SaveBar from "../common/SaveBar";
import SortableAccordion from "../common/SortableAccordion";
import DragHandle from "../common/DragHandle";
import IconPicker from "../common/IconPicker";
import SectionTitle from "../common/SectionTitle";
import TextAreaField from "../common/TextAreaField";
import TextField from "../common/TextField";

export default function WorkflowEditor({ data }) {
  const {
    updateSection,
    saveSection,
    saving,
    dirtySections,
  } = useCMS();

  const [openStep, setOpenStep] = useState(0);

  function updateRoot(key, value) {
    updateSection("workflow", {
      ...data,
      [key]: value,
    });
  }

  function updateStep(index, key, value) {
    const steps = [...(data.steps || [])];

    steps[index] = {
      ...steps[index],
      [key]: value,
    };

    updateSection("workflow", {
      ...data,
      steps,
    });
  }

  function addStep() {
    const steps = [...(data.steps || [])];
  
    steps.push({
      id: crypto.randomUUID(),
      icon: "Upload",
      title: "New Step",
      subtitle: "Subtitle",
      description: "Describe this workflow step...",
    });
  
    updateSection("workflow", {
      ...data,
      steps,
    });
  
    setOpenStep(steps.length - 1);
  }

  function duplicateStep(index) {
    const steps = [...data.steps];
  
    steps.splice(index + 1, 0, {
      ...steps[index],
      id: crypto.randomUUID(),
    });
  
    updateSection("workflow", {
      ...data,
      steps,
    });
  
    setOpenStep(index + 1);
  }

  function deleteStep(index) {
    const steps = [...data.steps];
  
    steps.splice(index, 1);
  
    updateSection("workflow", {
      ...data,
      steps,
    });
  
    setOpenStep(-1);
  }

  async function handleSave() {
    await saveSection("workflow");
  }

  const steps = (data.steps || []).map((step, index) => ({
    ...step,
    id: step.id || `step-${index}`,
  }));

  return (
    <div className="flex h-full flex-col">

      <SectionTitle
        title="Workflow Section"
        subtitle="Manage the workflow timeline shown on the landing page."
        badge={
          dirtySections.workflow
            ? "Unsaved Changes"
            : "Saved"
        }
      />

      <div className="space-y-6">

        <EditorCard
          title="Section Content"
          subtitle="Main heading displayed above the workflow."
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
              label="Subtitle"
              value={data?.subtitle || ""}
              onChange={(v) =>
                updateRoot("subtitle", v)
              }
            />

          </div>

        </EditorCard>

        <div className="flex justify-end">

          <button
            onClick={addStep}
            className="flex items-center gap-2 radius-theme-sm bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/30"
          >
            <Plus size={18} />
            Add Step
          </button>

        </div>

        <SortableAccordion
        items={steps}
        onReorder={(steps) =>
          updateSection("workflow", {
            ...data,
            steps,
          })
        }
        renderItem={(step, index, sortable) => (
          <AccordionCard
            key={step.id}
            title={step.title || `Step ${index + 1}`}
            subtitle={step.subtitle}
            open={openStep === index}
            onToggle={() =>
              setOpenStep(
                openStep === index ? -1 : index
              )
            }
            actions={
              <>
                <DragHandle
                  listeners={sortable.listeners}
                  attributes={sortable.attributes}
                />

                <button
                  title="Duplicate"
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicateStep(index);
                  }}
                  className="rounded-lg p-2 text-zinc-400 transition hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <Copy size={16} />
                </button>

                <button
                  title="Delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteStep(index);
                  }}
                  className="rounded-lg p-2 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 size={16} />
                </button>
              </>
            }
          >
            <div className="space-y-5">

            <IconPicker
              label="Icon"
              value={step.icon}
              onChange={(icon) =>
                updateStep(index, "icon", icon)
              }
            />

            <TextField
              label="Title"
              value={step.title}
              onChange={(v) =>
                updateStep(index, "title", v)
              }
            />

            <TextField
              label="Subtitle"
              value={step.subtitle}
              onChange={(v) =>
                updateStep(index, "subtitle", v)
              }
            />

            <TextAreaField
              label="Description"
              value={step.description}
              onChange={(v) =>
                updateStep(index, "description", v)
              }
            />

            </div>
          </AccordionCard>
        )}
      />

      </div>

      <SaveBar
        saving={saving}
        dirty={dirtySections.workflow}
        onSave={handleSave}
      />

    </div>
  );
}
