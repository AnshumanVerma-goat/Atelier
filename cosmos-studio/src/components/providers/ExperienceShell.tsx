"use client";

import { EditorialCursor } from "@/components/extras/EditorialCursor";
import { EditorialScrollProgress } from "@/components/extras/EditorialScrollProgress";
import { MobileStickyCta } from "@/components/extras/MobileStickyCta";
import { PageReveal } from "@/components/extras/PageReveal";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { SmoothScroll } from "./SmoothScroll";

type Props = {
  children: React.ReactNode;
};

export function ExperienceShell({ children }: Props) {
  return (
    <SmoothScroll>
      <EditorialScrollProgress />
      <PageReveal>
        <SiteHeader />
        {children}
      </PageReveal>
      <MobileStickyCta />
      <EditorialCursor />
    </SmoothScroll>
  );
}
