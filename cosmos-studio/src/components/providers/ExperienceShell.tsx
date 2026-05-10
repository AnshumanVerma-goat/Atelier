"use client";

import { SiteHeader } from "@/components/nav/SiteHeader";
import { SmoothScroll } from "./SmoothScroll";

type Props = {
  children: React.ReactNode;
};

export function ExperienceShell({ children }: Props) {
  return (
    <SmoothScroll>
      <SiteHeader />
      {children}
    </SmoothScroll>
  );
}
