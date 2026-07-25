import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";

  import { useAuth } from "./AuthContext";
  import { useNotifications } from "./NotificationContext";
  import api from "../services/api";
  import useKeyboardShortcuts from "../hooks/useKeyboardShortcuts";
  import useUnsavedChangesWarning from "../hooks/useUnsavedChangesWarning";
  const CMSContext = createContext();
  
  export function CMSProvider({ children }) {
    const { isAuthenticated } = useAuth();

    const [editor, setEditor] = useState({
      content: [],
      history: [],
      historyIndex: -1,
    
      loading: true,
      saving: false,
    
      dirtySections: {},
    
      activeSection: "hero",
      hoveredSection: null,
    
      lastSaved: null,
    });

    const { addNotification } = useNotifications();
  
    useEffect(() => {
      if (!isAuthenticated) {
        setEditor((prev) => ({
          ...prev,
          loading: false,
          content: [],
        }));
        return;
      }
    
      loadContent();
    }, [isAuthenticated]);
  
    async function loadContent() {
      try {
        setEditor((prev) => ({
          ...prev,
          loading: true,
        }));
    
        const res = await api.get("/content");
    
        const data = res.data.data || [];
    
        setEditor((prev) => ({
          ...prev,
    
          loading: false,
    
          content: data,
    
          history: [
            structuredClone(data),
          ],
    
          historyIndex: 0,
        }));
      } catch (err) {
        console.error(err);
    
        setEditor((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    }
  
    function getSection(section) {
      return (
        editor.content.find(
          (item) => item.section === section
        )?.data || {}
      );
    }
  
    function updateSection(section, newData) {
      setEditor((prev) => {
    
        const updatedContent =
          prev.content.map((item) =>
            item.section === section
              ? {
                  ...item,
                  data: newData,
                }
              : item
          );
    
        const trimmedHistory =
          prev.history.slice(
            0,
            prev.historyIndex + 1
          );
    
        return {
    
          ...prev,
    
          content: updatedContent,
    
          history: [
            ...trimmedHistory,
            structuredClone(updatedContent),
          ],
    
          historyIndex:
            trimmedHistory.length,
    
          dirtySections: {
            ...prev.dirtySections,
            [section]: true,
          },
    
        };
    
      });
    }

    function undo() {
      setEditor((prev) => {
        if (prev.historyIndex <= 0) return prev;
    
        return {
          ...prev,
          historyIndex: prev.historyIndex - 1,
          content: structuredClone(
            prev.history[prev.historyIndex - 1]
          ),
        };
      });
    }

    function redo() {
      setEditor((prev) => {
        if (
          prev.historyIndex >=
          prev.history.length - 1
        )
          return prev;
    
        return {
          ...prev,
          historyIndex: prev.historyIndex + 1,
          content: structuredClone(
            prev.history[prev.historyIndex + 1]
          ),
        };
      });
    }
  
    async function saveSection(section) {
      if (!isAuthenticated) return false;
      try {
        setEditor((prev) => ({
          ...prev,
          saving: true,
        }));
    
        const data = getSection(section);
    
        await api.put(`/content/${section}`, data);

        addNotification({
          type: "success",
          title: "Section Saved",
          message: `${section} updated successfully.`,
        });
    
        setEditor((prev) => ({
          ...prev,
    
          saving: false,
    
          dirtySections: {
            ...prev.dirtySections,
            [section]: false,
          },
    
          lastSaved: new Date(),
        }));
    
        return true;
      } catch (err) {

        addNotification({
          type: "error",
          title: "Save Failed",
          message:
            err.response?.data?.message ||
            "Something went wrong while saving.",
        });
        
        console.error(err);
    
        setEditor((prev) => ({
          ...prev,
          saving: false,
        }));
    
        return false;
      }
    }

    async function saveAll() {
      if (!isAuthenticated) return;
      const dirty = Object.entries(
        editor.dirtySections
      )
        .filter(([, value]) => value)
        .map(([section]) => section);
    
      for (const section of dirty) {
        await saveSection(section);
      }
    }

    useKeyboardShortcuts({
      undo,
      redo,
      save: saveAll,
    });

    const hasUnsavedChanges = Object.values(
      editor.dirtySections
    ).some(Boolean);
    
    useUnsavedChangesWarning(hasUnsavedChanges);
  
    const value = useMemo(
      () => ({
        content: editor.content,
    
        loading: editor.loading,
    
        saving: editor.saving,
    
        dirtySections: editor.dirtySections,
    
        activeSection: editor.activeSection,
    
        hoveredSection: editor.hoveredSection,
    
        undo,
        redo,
    
        canUndo:
          editor.historyIndex > 0,
    
        canRedo:
          editor.historyIndex <
          editor.history.length - 1,
    
        setActiveSection: (section) =>
          setEditor((prev) => ({
            ...prev,
            activeSection: section,
          })),
    
        setHoveredSection: (section) =>
          setEditor((prev) => ({
            ...prev,
            hoveredSection: section,
          })),
    
        getSection,
    
        updateSection,
    
        saveSection,
    
        reload: loadContent,
      }),
      [editor]
    );
  
    return (
      <CMSContext.Provider value={value}>
        {children}
      </CMSContext.Provider>
    );
  }
  
  export function useCMS() {
    return useContext(CMSContext);
  }