import Image from "next/image";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center mb-20">
      <div className="flex items-center gap-2">
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
  );
}
