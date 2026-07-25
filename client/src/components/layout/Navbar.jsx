import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";

import Container from "../ui/Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { settings } = useSettings();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const companyName =
  settings?.branding?.companyName ||
  settings?.general?.siteName ||
  "CMS";

  const logo =
  settings?.branding?.logo || "";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-5">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between radius-theme-lg border px-6 py-4 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            {logo ? (
              <img
                src={logo}
                alt={companyName}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <h1 className="text-xl font-bold tracking-tight text-white">
                {companyName}
                <span
                  style={{ color: "var(--accent)" }}
                >
                  .
                </span>
              </h1>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Login
            </Link>

            <Link to="/Dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="radius-theme-sm border border-white/10 p-2 text-white md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="mt-4 radius-theme-lg border border-white/10 bg-slate-950/95 p-6 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 transition hover:text-white"
                >
                  Login
                </Link>

                <Link to="/Dashboard">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}