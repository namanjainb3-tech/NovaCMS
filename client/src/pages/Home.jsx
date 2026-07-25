import { useEffect, useState } from "react";
import { useSettings } from "../context/SettingsContext";

import api from "../services/api";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Workflow from "../components/sections/Workflow";
import CTA from "../components/sections/CTA";

import MaintenancePage from "../components/system/MaintenancePage";

import DashboardPreview from "../components/dashboard/DashboardPreview";

export default function Home() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { settings, loading: settingsLoading } = useSettings();

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await api.get("/content");

        // New backend response:
        // {
        //   success: true,
        //   data: [...]
        // }

        setContent(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load website content.");
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  const getSection = (section) => {
    return (
      content.find((item) => item.section === section)?.data || {}
    );
  };

  useEffect(() => {
    if (!settings) return;
  
    document.title =
      settings.seo.metaTitle ||
      settings.general.siteName;
  }, [settings]);

  useEffect(() => {
    if (!settings) return;
  
    let meta = document.querySelector(
      'meta[name="description"]'
    );
  
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
  
    meta.content =
      settings.seo.metaDescription;
  }, [settings]);

  useEffect(() => {
    if (!settings) return;
  
    let meta = document.querySelector(
      'meta[name="keywords"]'
    );
  
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "keywords";
      document.head.appendChild(meta);
    }
  
    meta.content =
      settings.seo.keywords;
  }, [settings]);

  useEffect(() => {
    if (!settings?.branding?.favicon) return;
  
    let link = document.querySelector(
      "link[rel='icon']"
    );
  
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
  
    link.href = settings.branding.favicon;
  }, [settings]);

  if (loading || settingsLoading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center text-slate-300"
        style={{
          backgroundColor: "var(--background)",
        }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex min-h-screen items-center justify-center text-red-400"
        style={{
          backgroundColor: "var(--background)",
        }}
      >
        {error}
      </div>
    );
  }

  if (
    settings?.publishing?.status === "maintenance"
  ) {
    return <MaintenancePage />;
  }

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <Navbar />

      <main>
        <Hero data={getSection("hero")} />

        <DashboardPreview />

        <Features data={getSection("features")} />

        <Workflow data={getSection("workflow")} />

        <CTA data={getSection("cta")} />
      </main>

      <Footer data={getSection("footer")} />
    </div>
  );
}