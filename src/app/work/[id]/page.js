"use client";

import { useParams } from "next/navigation";
import NavBar from "../../components/Nav-Bar";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;

  // Project data (same as in work page)
  const projects = {
    tandem: {
      title: "Tandem - Nanny Sharing Platform",
      description:
        "Full-stack web being built in production-ready, AI-assisted platforms with Next.js, TypeScript, PostgreSQL, and serverless cloud deployments.",
      fullDescription:
        "Tandem is an innovative nanny sharing platform that connects families to share childcare services seamlessly. Built with a focus on user experience and security, Tandem offers features such as user authentication, real-time availability, secure payment processing, and an intuitive booking system. The platform leverages AI to match families based on preferences and location, ensuring optimal nanny sharing arrangements. With a responsive design, Tandem is accessible on all devices, making it easy for busy parents to manage their childcare needs on the go.",
      image: "/tandem.svg",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Socket.io",
        "PostgreSQL",
        "IBM Watson",
        "Grok AI",
        "Clerk",
        "Vercel",
      ],
      githubUrl: "https://github.com/IDSP-TRADECARE/Tandem",
      liveUrl: "https://tandem-blog.vercel.app/",
      features: [
        "Flexible schedule upload (document, manual, or voice)",
        "Smart weekly calendar view",
        "Voice input for schedules",
        "Nanny booking for non-traditional hours",
        "Personalized childcare requests",
        "Nanny sharing with other parents",
        "Company-restricted nanny sharing",
        "Group chat for coordination",
        "Dark mode",
      ],
      challenges:
        "Parents in the trades have unpredictable, early, and constantly changing work schedules, making it extremely difficult to plan and secure reliable childcare.",
      solution:
        "Tandem adapts to real-life schedules by allowing flexible schedule input (including voice), automatically organizing shifts into a clear weekly view and connecting parents to flexible nanny options, including cost-sharing with trusted coworkers.",
    },
    "expense-tracker": {
      title: "Expenses Tracker",
      description:
        "Built a full-stack expense tracking web app with secure authentication, type-safe data handling, and a scalable modern architecture using TypeScript and PostgreSQL.",
      fullDescription:
        "ExpensesApp is a full-stack web application that helps users securely track, manage, and categorize personal expenses in real time. Built with modern, type-safe tooling, it features user authentication, full CRUD functionality, and a scalable architecture for reliable personal finance management.",
      image: "/expense-tracker.jpg",
      technologies: [
        "Vite",
        "React",
        "TypeScript",
        "Hono",
        "Bun",
        "Drizzle ORM",
        "PostgreSQL",
        "Tailwind CSS",
        "Kinde Auth",
        "Zod",
        "Render",
      ],
      githubUrl: "https://github.com/Lam-Thai/Expenses-App",
      liveUrl: "https://expenses-app-3ebn.onrender.com/",
      features: [
        "Secure user authentication",
        "Create, read, update, and delete (CRUD) expenses",
        "Expense categorization and tracking",
        "Real-time state management",
        "Type-safe database interactions",
        "Responsive, modern UI",
        "Scalable and modular architecture",
      ],
      challenges:
        "Maintaining data consistency and security while managing real-time expense updates across authenticated users.",
      solution:
        "Implemented type-safe APIs with Drizzle ORM and Zod validation alongside secure authentication, ensuring reliable data handling and safe CRUD operations throughout the application.",
    },
    insurflow: {
      title: "InsurFlow - Vero Ventures - Insurance Management System",
      description:
        "Developed a comprehensive insurance management system with Next.js, TypeScript, and PostgreSQL, featuring user authentication, policy management, claims processing, and real-time notifications.",
      fullDescription:
        "InsurFlow is an AI-integrated InsurTech SaaS platform for life insurance advisors. It modernizes financial needs analysis workflows by replacing archaic spreadsheets with a cutting-edge web application featuring complex financial calculators, interactive dashboards, and GenAI-powered document generation. This is a greenfield v2.0 rebuild - built entirely from scratch using modern architecture, with v1.0 serving only as a functional specification and logic reference.",
      image: "/insurflow-logo.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Drizzle ORM",
        "PostgreSQL",
        "Better Auth",
        "Sonner",
        "Axiom",
        "Stripe",
        "UploadThing",
        "OpenAI",
        "Gemini",
        "Bun.js",
        "GitHub Actions",
        "Cloudflare Workers",
        "Vercel",
      ],
      githubUrl: "https://github.com/Vero-Ventures",
      liveUrl: "#",
      features: [
        "Financial Needs Analysis Engines",
        "Interactive Financial Dashboards",
        "GenAI Advisor Co-Pilot",
        "Client & Case Management",
        "Multi-Tenant SaaS Architecture",
        "Authentication & Access Control",
        "Cloud-Native CI/CD & Preview Environments",
        "Structured Logging & Observability",
      ],
      challenges:
        "Translating complex, regulation-heavy insurance calculations from spreadsheet-based logic into a scalable, type-safe web application without introducing financial or compliance errors.",
      solution:
        "Rebuilt all financial engines from scratch using strict TypeScript, Drizzle ORM, and isolated unit tests, treating v1 spreadsheets as a logic spec and validating outputs with test data and edge cases before integrating them into interactive dashboards and AI-generated documents.",
    },
    "social-media": {
      title: "Social Media Platform",
      description:
        "A social networking platform with user profiles, posts, comments, likes, and real-time notifications.",
      fullDescription:
        "A modern social networking platform enabling users to connect and share content. Features user profiles with customization, post creation with media uploads, commenting and nested replies, like and share functionality, real-time notifications, user following system, news feed with algorithmic sorting, and direct messaging.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
      githubUrl: "https://github.com/Lam-Thai",
      liveUrl: "#",
      features: [
        "User profiles with customization",
        "Post creation with media uploads",
        "Commenting and nested replies",
        "Like and share functionality",
        "Real-time notifications",
        "User following system",
        "Algorithmic news feed",
        "Direct messaging",
      ],
      challenges:
        "Optimizing database queries for the news feed and implementing efficient real-time notifications at scale.",
      solution:
        "Used database indexing, query optimization, and implemented Redis pub/sub for real-time features with connection pooling.",
    },
    "portfolio-cms": {
      title: "Portfolio CMS",
      description:
        "A content management system for portfolio websites with drag-and-drop functionality and dynamic content editing.",
      fullDescription:
        "A user-friendly CMS built specifically for portfolio websites. Features drag-and-drop page builder, customizable templates, media library management, SEO optimization tools, custom domain support, analytics integration, responsive preview mode, and version control for content changes.",
      image: "/project5.jpg",
      technologies: ["React", "Node.js", "MySQL", "Express.js"],
      githubUrl: "https://github.com/Lam-Thai",
      liveUrl: "#",
      features: [
        "Drag-and-drop page builder",
        "Customizable templates",
        "Media library management",
        "SEO optimization tools",
        "Custom domain support",
        "Analytics integration",
        "Responsive preview mode",
        "Version control for content",
      ],
      challenges:
        "Creating a flexible drag-and-drop system that works across different screen sizes and generating clean, performant code.",
      solution:
        "Built a component-based architecture with React DnD and implemented SSR with Next.js for optimal performance.",
    },
    "restaurant-booking": {
      title: "Restaurant Booking System",
      description:
        "An online reservation system for restaurants with table management, booking confirmation, and customer notifications.",
      fullDescription:
        "A comprehensive booking system designed for restaurants to manage reservations efficiently. Features real-time table availability, booking confirmation emails, SMS notifications, table management dashboard, customer database, waitlist management, recurring reservations, and integration with restaurant POS systems.",
      image: "/project6.jpg",
      technologies: ["Next.js", "Drizzle", "Neon", "Resend"],
      githubUrl: "https://github.com/Lam-Thai",
      liveUrl: "#",
      features: [
        "Real-time table availability",
        "Automated booking confirmations",
        "SMS and email notifications",
        "Table management dashboard",
        "Customer database",
        "Waitlist management",
        "Recurring reservations",
        "POS system integration",
      ],
      challenges:
        "Managing concurrent booking requests and preventing double-bookings while maintaining real-time availability.",
      solution:
        "Implemented database transactions with row-level locking and optimistic concurrency control to ensure data consistency.",
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
        <NavBar />
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link
            href="/work"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            ← Back to Projects
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <NavBar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-400 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 mb-6">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg font-medium hover:bg-zinc-700 hover:border-orange-500/50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-amber-600 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden border border-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                About This Project
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">
                    Challenge
                  </h3>
                  <p className="text-zinc-300">{project.challenges}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">
                    Solution
                  </h3>
                  <p className="text-zinc-300">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Links</h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Source Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
