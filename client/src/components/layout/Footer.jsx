import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

import Container from "../ui/Container";

export default function Footer({ data }) {
  const footerLinks = {
    Features: "#features",
    Workflow: "#workflow",
    Pricing: "#cta",
    Integrations: "#cta",
  
    About: "#cta",
    Careers: "#cta",
    Contact: "#cta",
    Privacy: "#footer",
  
    Documentation: "https://react.dev",
    Blog: "https://vercel.com/blog", 
    Guides: "https://developer.mozilla.org",
    "Help Center": "https://stackoverflow.com",
  
    Twitter: "https://twitter.com",
    LinkedIn: "https://linkedin.com",
    GitHub: "https://github.com",
    Discord: "https://discord.com",
  };

  const { settings } = useSettings();
  const companyName =
  settings?.branding?.companyName ||
  data?.logo ||
  "CMS";

  const copyright =
  settings?.branding?.copyright ||
  data?.copyright;

  return (
    <footer
      id="footer"
      className="border-t border-white/10 py-16"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">

          <div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            {companyName}
            <span style={{ color: "var(--accent)" }}>
              .
            </span>
          </h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              {data?.description}
            </p>

            <p className="mt-8 text-sm text-gray-500">
              {data?.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {(data?.columns || []).map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 font-semibold text-white">
                  {column.title}
                </h3>

                <div className="space-y-3">
                  {(column.links || []).map((link) => (
                    <motion.a
                      key={link}
                      href={footerLinks[link] || "#"}
                      target={
                        footerLinks[link]?.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        footerLinks[link]?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
          {copyright}
          </p>

          <p className="text-sm text-gray-500">
            {data?.techStack}
          </p>
        </div>
      </Container>
    </footer>
  );
}
