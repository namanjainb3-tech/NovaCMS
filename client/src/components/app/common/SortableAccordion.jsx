import {
    DndContext,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
  } from "@dnd-kit/core";
  
  import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
  } from "@dnd-kit/sortable";
  
  import SortableItem from "./SortableItem";
  
  export default function SortableAccordion({
    items,
    onReorder,
    renderItem,
  }) {
    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 8,
        },
      })
    );
  
    function handleDragEnd(event) {
      const { active, over } = event;
  
      if (!over) return;
      if (active.id === over.id) return;
  
      const oldIndex = items.findIndex(
        (item) => item.id === active.id
      );
  
      const newIndex = items.findIndex(
        (item) => item.id === over.id
      );
  
      if (oldIndex === -1 || newIndex === -1) return;
  
      onReorder(arrayMove(items, oldIndex, newIndex));
    }
  
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6">
            {items.map((item, index) => (
              <SortableItem
                key={item.id}
                id={item.id}
              >
                {(sortableProps) =>
                  renderItem(
                    item,
                    index,
                    sortableProps
                  )
                }
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    );
  }