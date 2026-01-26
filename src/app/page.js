import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            {/* Replace the src below with your own logo */}
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={30}
              className="brightness-0 saturate-100 invert sepia hue-rotate-[10deg] saturate-[5]"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(101%)",
              }}
            />
          </div>
          <nav className="hidden md:flex gap-8 text-base font-medium">
            <a
              href="#work"
              className="text-zinc-400 hover:text-orange-400 transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-zinc-400 hover:text-orange-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-orange-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Tuoc Lam Thai{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent whitespace-nowrap">
                Web Developer
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              I’m a full-stack web developer who builds clean, scalable web
              applications from intuitive front-end experiences to robust
              back-end systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-black rounded-lg font-medium overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">Get in touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#work"
                className="px-8 py-4 border border-zinc-700 text-white rounded-lg font-medium hover:bg-zinc-800 transition-all hover:scale-105"
              >
                View my work
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-zinc-800">
              <div>
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-sm text-zinc-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-zinc-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">96%</div>
                <div className="text-sm text-zinc-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex-1 max-w-lg">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl blur-xl opacity-75 animate-pulse"></div>

              {/* Replace the src below with your own profile image */}
              <div className="relative bg-zinc-900 rounded-2xl p-2 border border-zinc-800">
                <Image
                  src="/next.svg"
                  alt="Profile"
                  width={500}
                  height={600}
                  className="rounded-xl w-full h-auto invert"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 pt-12 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 mb-6 uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {[
              "JavaScript",
              "TypeScript",
              "HTML/CSS",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "Bun.js",
              "Hono",
              "Vite",
              "Passport.js",
              "Prisma",
              "Drizzle",
              "MySQL",
              "PostgreSQL",
              "Neon",
              "C#",
              ".NET",
              "PHP",
              "Git",
              "Copilot",
              "Claude",
              "ChatGPT",
              "Cursor",
              "Grok",
              "WatsonX",
              "Gemini",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-300 text-sm font-medium hover:border-zinc-700 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
