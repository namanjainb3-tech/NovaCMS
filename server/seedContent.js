require("dotenv").config();

const mongoose = require("mongoose");
const Content = require("./models/Content");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Content.deleteMany();

    const sections = [
      {
        section: "hero",
        data: {
          badge: "AI Powered CMS",
          heading: "Manage Your Website Without Writing Code",
          description:
            "Create, edit and publish content instantly using a premium visual CMS built for startups, agencies and modern product teams.",
          buttonText: "Get Started",
          secondaryButton: "Live Demo",
          image: "",
        },
      },

      {
        section: "features",
        data: {
          badge: "Powerful Features",

          heading:
            "Everything you need to manage modern websites",

          subtitle:
            "Designed for startups, agencies and growing businesses that need a premium content management experience.",

          cards: [
            {
              icon: "FileText",

              title: "Visual Content Editor",

              description:
                "Create, edit and publish content using a beautiful visual editor without touching code.",

              bullets: [
                "Real-time editing",
                "Rich text blocks",
                "Instant publishing",
              ],
            },

            {
              icon: "Sparkles",

              title: "AI Content Assistant",

              description:
                "Generate headlines, descriptions and SEO content in seconds.",

              bullets: [
                "Headline generation",
                "SEO optimization",
                "Grammar improvements",
              ],
            },

            {
              icon: "Users",

              title: "Team Collaboration",

              description:
                "Invite teammates, manage permissions and collaborate in real time.",

              bullets: [
                "Role management",
                "Live collaboration",
                "Version history",
              ],
            },

            {
              icon: "ShieldCheck",

              title: "Enterprise Security",

              description:
                "JWT authentication with secure publishing workflow.",

              bullets: [
                "JWT Auth",
                "Protected APIs",
                "Secure Workflow",
              ],
            },
          ],
        },
      },

      {
        section: "workflow",
        data: {
          badge: "Workflow",

          heading:
            "A publishing workflow built for speed",

          subtitle:
            "From content creation to deployment, every step is streamlined for modern teams.",

          steps: [
            {
              icon: "Upload",
              title: "Upload",
              subtitle: "Import Content",
              description:
                "Drag & drop pages or create content directly inside the CMS.",
            },

            {
              icon: "Sparkles",
              title: "AI",
              subtitle: "Optimize",
              description:
                "Generate SEO titles and improve readability instantly.",
            },

            {
              icon: "Eye",
              title: "Review",
              subtitle: "Approve",
              description:
                "Preview every update before publishing.",
            },

            {
              icon: "Rocket",
              title: "Publish",
              subtitle: "Deploy",
              description:
                "Deploy content with one click.",
            },
          ],
        },
      },

      {
        section: "cta",
        data: {
          badge: "Ready to launch?",

          heading: "Build your next CMS faster",

          description:
            "Everything you need to manage modern websites with AI-powered editing and instant publishing.",

          buttonText: "Get Started Free",

          secondaryButton: "Live Demo",

          stats: [
            {
              value: "99.9%",
              label: "Uptime",
            },

            {
              value: "<1 min",
              label: "Setup Time",
            },

            {
              value: "AI Powered",
              label: "Content Editing",
            },
          ],
        },
      },

      {
        section: "footer",
        data: {
          logo: "CMS",
          logoAccent: ".",
      
          description:
            "Build, edit and publish beautiful websites without writing code. Designed for startups, agencies and modern product teams.",
      
          tagline:
            "Create faster. Publish smarter. Scale confidently.",
      
          columns: [
            {
              title: "Product",
              links: [
                "Features",
                "Workflow",
                "Integrations",
              ],
            },
            {
              title: "Resources",
              links: [
                "Documentation",
                "Blog",
                "Guides",
                "Help Center",
              ],
            },
            {
              title: "Company",
              links: [
                "About",
                "Careers",
                "Contact",
                "Privacy",
              ],
            },
            {
              title: "Social",
              links: [
                "Twitter",
                "LinkedIn",
                "GitHub",
                "Discord",
              ],
            },
          ],
      
          copyright:
            "© 2026 CMS. All rights reserved.",
      
          techStack:
            "Built with React • Node.js • MongoDB",
        },
      },

      {
        section: "theme",
        data: {
          accent: "#7C3AED",       
          background: "#09090B",  
          radius: "16",
          font: "Inter",
        },
      },
    ];

    await Content.insertMany(sections);

    process.exit();

  } catch (err) {

    console.error(err);

    process.exit();

  }
}

seed();
