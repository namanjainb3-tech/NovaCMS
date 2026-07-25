import { useCMS } from "../../../context/CMSContext";

import { useState } from "react";

import AccordionCard from "../common/AccordionCard";

import EditorCard from "../common/EditorCard";
import IconPicker from "../common/IconPicker";
import SaveBar from "../common/SaveBar";
import SectionTitle from "../common/SectionTitle";
import TextAreaField from "../common/TextAreaField";
import TextField from "../common/TextField";
import DragHandle from "../common/DragHandle";
import SortableAccordion from "../common/SortableAccordion";

import {
  Plus,
  Copy,
  Trash2,
} from "lucide-react";

export default function FeaturesEditor({ data }) {
  const {
    updateSection,
    saveSection,
    saving,
    dirtySections,
  } = useCMS();

  const [openCard, setOpenCard] = useState(0);

  function updateRoot(key, value) {
    updateSection("features", {
      ...data,
      [key]: value,
    });
  }

  function updateCard(index, key, value) {
    const cards = [...(data.cards || [])];

    cards[index] = {
      ...cards[index],
      [key]: value,
    };

    updateSection("features", {
      ...data,
      cards,
    });
  }

  function updateBullet(cardIndex, bulletIndex, value) {
    const cards = [...(data.cards || [])];

    const bullets = [...cards[cardIndex].bullets];

    bullets[bulletIndex] = value;

    cards[cardIndex] = {
      ...cards[cardIndex],
      bullets,
    };

    updateSection("features", {
      ...data,
      cards,
    });
  }

  async function handleSave() {
    await saveSection("features");
  }

  function addCard() {
    const cards = [...(data.cards || [])];
  
    cards.push({
      id: crypto.randomUUID(),
      icon: "Sparkles",
      title: "New Feature",
      description: "Describe your feature...",
      bullets: [
        "Bullet 1",
        "Bullet 2",
        "Bullet 3",
      ],
    });
  
    updateSection("features", {
      ...data,
      cards,
    });
  
    setOpenCard(cards.length - 1);
  }

  function deleteCard(index) {
    const cards = [...data.cards];
  
    cards.splice(index, 1);
  
    updateSection("features", {
      ...data,
      cards,
    });
  
    setOpenCard(-1);
  }

  function duplicateCard(index) {
    const cards = [...data.cards];
  
    cards.splice(index + 1, 0, {
      ...cards[index],
      id: crypto.randomUUID(),
      bullets: [...cards[index].bullets],
    });
  
    updateSection("features", {
      ...data,
      cards,
    });
  
    setOpenCard(index + 1);
  }

  const cards = (data.cards || []).map((card, index) => ({
    ...card,
    id: card.id || `feature-${index}`,
  }));

  return (
    <div className="flex h-full flex-col">

      <SectionTitle
        title="Features Section"
        subtitle="Manage all feature cards shown on the landing page."
        badge={
          dirtySections.features
            ? "Unsaved Changes"
            : "Saved"
        }
      />

      <div className="space-y-6">

        <EditorCard
          title="Section Content"
          subtitle="Main heading displayed above the feature grid."
        >

          <div className="space-y-5">

            <TextField
              label="Badge"
              value={data?.badge || ""}
              onChange={(v) => updateRoot("badge", v)}
            />

            <TextField
              label="Heading"
              value={data?.heading || ""}
              onChange={(v) => updateRoot("heading", v)}
            />

            <TextAreaField
              label="Subtitle"
              value={data?.subtitle || ""}
              onChange={(v) => updateRoot("subtitle", v)}
            />

          </div>

        </EditorCard>

        <div className="mb-6 flex justify-end">

          <button
            onClick={addCard}
            className="flex items-center gap-2 radius-theme-sm bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/30"
          >
            <Plus size={18} />
            Add Feature
          </button>

        </div>

        <SortableAccordion
      items={cards}
      onReorder={(cards) =>
        updateSection("features", {
          ...data,
          cards,
        })
      }
      renderItem={(card, index, sortable) => (
        <AccordionCard
          key={card.id}
          title={card.title || `Feature ${index + 1}`}
          subtitle={card.icon}
          open={openCard === index}
          onToggle={() =>
            setOpenCard(
              openCard === index ? -1 : index
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
                  duplicateCard(index);
                }}
                className="rounded-lg p-2 text-zinc-400 transition hover:bg-violet-500/10 hover:text-violet-300"
              >
                <Copy size={16} />
              </button>

              <button
                title="Delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCard(index);
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
              value={card.icon}
              onChange={(icon) =>
                updateCard(index, "icon", icon)
              }
            />

            <TextField
              label="Title"
              value={card.title}
              onChange={(v) =>
                updateCard(index, "title", v)
              }
            />

            <TextAreaField
              label="Description"
              value={card.description}
              onChange={(v) =>
                updateCard(index, "description", v)
              }
            />

            {(card.bullets || []).map(
              (bullet, bulletIndex) => (
                <TextField
                  key={bulletIndex}
                  label={`Bullet ${bulletIndex + 1}`}
                  value={bullet}
                  onChange={(v) =>
                    updateBullet(
                      index,
                      bulletIndex,
                      v
                    )
                  }
                />
              )
            )}

          </div>
        </AccordionCard>
      )}
    />

      </div>

      <SaveBar
        saving={saving}
        dirty={dirtySections.features}
        onSave={handleSave}
      />

    </div>
  );
}
