"use client";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[#252321] px-4 py-14 text-[#e8e4dc] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-[1.25rem] font-medium text-[#f7f5f2]">Atelier</p>
          <p className="mt-3 max-w-xs text-[14px] font-light leading-relaxed text-[#a39e96]">
            Editorial websites & art direction for houses that prefer whisper to shout.
          </p>
        </div>
        <div className="flex flex-col gap-6 text-[14px] font-light sm:flex-row sm:gap-16">
          <div>
            <p className="text-[12px] tracking-wide text-[#8a847c]">Navigate</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#work" className="text-[#e8e4dc] hover:text-[#f7f5f2]">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#e8e4dc] hover:text-[#f7f5f2]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#e8e4dc] hover:text-[#f7f5f2]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] tracking-wide text-[#8a847c]">Social</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-[#e8e4dc] hover:text-[#f7f5f2]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[#e8e4dc] hover:text-[#f7f5f2]">
                  Are.na
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-[rgba(247,245,242,0.08)] pt-8 text-[12px] font-light text-[#8a847c] sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Atelier</span>
        <a href="#top" className="w-fit hover:text-[#e8e4dc]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
