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
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, shopping cart, and secure payment integration using Stripe.",
      fullDescription:
        "This comprehensive e-commerce solution features a complete product catalog with search and filtering capabilities, user authentication and authorization, shopping cart functionality with session management, secure payment processing through Stripe integration, order history and tracking, admin dashboard for inventory management, and responsive design for mobile and desktop users.",
      image: "/project1.jpg",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/Lam-Thai",
      liveUrl: "#",
      features: [
        "Product catalog with search and filtering",
        "User authentication and authorization",
        "Shopping cart with session management",
        "Secure payment processing with Stripe",
        "Order history and tracking",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
      ],
      challenges:
        "Implementing secure payment processing and managing complex state for the shopping cart across multiple pages.",
      solution:
        "Used Redux for global state management and implemented Stripe's secure checkout flow with webhook handling for payment confirmations.",
    },
    "task-management": {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user authentication, and team collaboration features.",
      fullDescription:
        "A powerful task management tool designed for teams to collaborate efficiently. Features real-time synchronization using WebSockets, drag-and-drop task organization, user roles and permissions, project boards with customizable workflows, commenting and file attachments, email notifications for task updates, and analytics dashboard for project insights.",
      image: "/project2.jpg",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/Lam-Thai",
      liveUrl: "#",
      features: [
        "Real-time task updates with Socket.io",
        "Drag-and-drop task organization",
        "User roles and permissions",
        "Project boards with custom workflows",
        "Commenting and file attachments",
        "Email notifications",
        "Analytics and reporting dashboard",
      ],
      challenges:
        "Ensuring real-time synchronization across multiple users without conflicts and maintaining data consistency.",
      solution:
        "Implemented operational transformation for conflict resolution and optimistic UI updates with rollback mechanisms.",
    },
    "weather-dashboard": {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather and forecasts using external APIs with beautiful data visualization.",
      fullDescription:
        "An intuitive weather application providing detailed weather information and forecasts. Features current weather conditions, 7-day forecast, hourly predictions, interactive weather maps, location-based automatic weather updates, customizable units (metric/imperial), weather alerts and warnings, and beautiful data visualizations with charts.",
      image: "/project3.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
      githubUrl: "https://github.com/Lam-Thai",
      liveUrl: "#",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Hourly predictions",
        "Interactive weather maps",
        "Location-based auto-updates",
        "Customizable units",
        "Weather alerts and warnings",
        "Data visualizations with charts",
      ],
      challenges:
        "Handling API rate limits and caching data efficiently while maintaining up-to-date weather information.",
      solution:
        "Implemented smart caching strategy with Redis and background data refresh to minimize API calls while keeping data fresh.",
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
