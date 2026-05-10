"use client";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[#211e1c] px-6 py-10 sm:px-8 sm:py-12 text-[#e8e4dc]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-[1.4rem] font-medium text-[#f7f5f2]">Atelier</p>
          <p className="mt-2 max-w-xs text-[13px] font-light leading-relaxed text-[#a39e96]">
            Editorial websites & art direction for houses that prefer whisper to shout.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-12 text-[13px] font-light">
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#8a847c]/70">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#work" className="text-[#e8e4dc]/90 hover:text-[#f7f5f2] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#e8e4dc]/90 hover:text-[#f7f5f2] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#e8e4dc]/90 hover:text-[#f7f5f2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#8a847c]/70">Social</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#" className="text-[#e8e4dc]/90 hover:text-[#f7f5f2] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[#e8e4dc]/90 hover:text-[#f7f5f2] transition-colors">
                  Are.na
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-[rgba(247,245,242,0.06)] pt-6 text-[12px] font-light tracking-wide text-[#8a847c] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Atelier. All rights reserved.</span>
        <a href="#top" className="w-fit hover:text-[#e8e4dc] transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
