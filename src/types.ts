import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface PartnerOpportunity {
  title: string;
  desktopDescription: string;
  mobileDescription: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  summary: string;
  imageAlt: string;
}
