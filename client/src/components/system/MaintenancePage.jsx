import { motion } from "framer-motion";
import {
  Wrench,
  ArrowLeft,
} from "lucide-react";

import { useSettings } from "../../context/SettingsContext";

import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function MaintenancePage() {
  const { settings } = useSettings();

  const companyName =
    settings?.branding?.companyName ||
    settings?.general?.siteName ||
    "CMS Studio";

  const logo = settings?.branding?.logo;

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "var(--background)",
      }}
    >
      {/* Background Blobs */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "var(--accent)",
        }}
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full blur-3xl opacity-10"
        style={{
          background: "#6366F1",
        }}
      />

      <Container className="relative flex min-h-screen items-center justify-center py-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="w-full max-w-3xl"
        >
          <Card className="border border-white/10 bg-white/5 p-12 backdrop-blur-2xl">

            {/* Logo */}

            <div className="flex justify-center">

              {logo ? (
                <img
                  src={logo}
                  alt={companyName}
                  className="h-20 object-contain"
                />
              ) : (
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{
                    background:
                      "var(--accent)",
                  }}
                >
                  <Wrench
                    className="text-white"
                    size={36}
                  />
                </motion.div>
              )}
            </div>

            {/* Company */}

            <h1 className="mt-8 text-center text-5xl font-black text-white">
              {companyName}
            </h1>

            <h2
              className="mt-6 text-center text-3xl font-bold"
              style={{
                color: "var(--accent)",
              }}
            >
              {settings.publishing.maintenanceTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-400">
            {settings.publishing.maintenanceMessage}

              <br />

              We'll be back online very soon.
            </p>

            {/* Status */}

            <div className="mt-10 flex justify-center">

              <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-400">
                Estimated downtime:
                <span className="ml-2 font-semibold">
                {settings.publishing.maintenanceETA}
                </span>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <Button
                variant="secondary"
                onClick={() =>
                  window.history.back()
                }
              >
                <ArrowLeft
                  className="mr-2 h-4 w-4"
                />
                Go Back
              </Button>

            </div>

            {/* Footer */}

            <div className="mt-12 border-t border-white/10 pt-6 text-center">

              <p className="text-sm text-zinc-500">
                Thank you for your patience ❤️
              </p>

            </div>

          </Card>
        </motion.div>

      </Container>
    </div>
  );
}