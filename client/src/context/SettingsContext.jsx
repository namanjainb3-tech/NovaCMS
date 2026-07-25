import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  import api from "../services/api";
  import { useAuth } from "./AuthContext";
  
  const SettingsContext = createContext();
  
  export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated } = useAuth();
  
    async function fetchSettings() {
      try {
        setLoading(true);
  
        const res = await api.get("/settings");
  
        setSettings(res.data);
      } catch (err) {
        console.error("Failed to load settings", err);
      } finally {
        setLoading(false);
      }
    }
  
    async function saveSettings(updatedSettings) {
      try {
        const res = await api.put(
          "/settings",
          updatedSettings
        );
  
        setSettings(res.data.settings);
  
        return true;
      } catch (err) {
        console.error("Failed to save settings", err);
  
        return false;
      }
    }

    async function resetSettings() {
      try {
        const res = await api.put("/settings/reset");
    
        setSettings(res.data.settings);
    
        return true;
      } catch (err) {
        console.error("Failed to reset settings", err);
    
        return false;
      }
    }
  
    function updateSection(section, data) {
        setSettings((prev) => {
          if (!prev) return prev;
      
          return {
            ...prev,
            [section]: {
              ...prev[section],
              ...data,
            },
          };
        });
      }
  
      useEffect(() => {
        if (isAuthenticated) {
          fetchSettings();
        } else {
          setLoading(false);
        }
      }, [isAuthenticated]);
  
    return (
      <SettingsContext.Provider
        value={{
          settings,
          loading,
          fetchSettings,
          resetSettings,
          saveSettings,
          updateSection,
        }}
      >
        {children}
      </SettingsContext.Provider>
    );
  }
  
  export function useSettings() {
    return useContext(SettingsContext);
  }