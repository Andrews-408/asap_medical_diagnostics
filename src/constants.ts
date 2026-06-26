import type { PartnerOpportunity, Service, TeamMember } from "./types";
import {
  Activity,
  Microscope,
  Globe,
  Heart,
  Database,
  Users,
} from "lucide-react";

export const SERVICES: Service[] = [
  {
    title: "Hematology",
    description:
      "Blood analysis for routine screening and diagnostic investigations.",
    items: [
      "Complete blood count (CBC)",
      "Blood film analysis",
      "Tests for anemia, infections, and related conditions",
    ],
    icon: Activity,
  },
  {
    title: "Biochemistry",
    description:
      "Chemistry testing that supports metabolic, kidney, and liver health checks.",
    items: [
      "Blood sugar (glucose)",
      "Lipid profile",
      "Kidney function tests: urea and creatinine",
      "Liver function tests",
      "Electrolytes",
    ],
    icon: Database,
  },
  {
    title: "Serology & Immunology",
    description:
      "Testing for infections, hormone levels, and immune-system markers.",
    items: [
      "Infectious disease testing, including HIV, hepatitis, malaria, and typhoid",
      "Hormone level testing",
      "Autoimmune marker testing",
    ],
    icon: Microscope,
  },
  {
    title: "Microbiology",
    description:
      "Culture and sensitivity testing to support targeted clinical decisions.",
    items: [
      "Culture and sensitivity for bacteria",
      "Urine analysis",
      "Stool tests",
    ],
    icon: Heart,
  },
  {
    title: "Imaging",
    description:
      "Ultrasound scan services for common abdominal, pelvic, obstetric, and thyroid assessments.",
    items: [
      "Abdominal ultrasound scans",
      "Pelvic ultrasound scans",
      "Obstetric ultrasound scans",
      "Thyroid ultrasound scans",
    ],
    icon: Activity,
  },
];

export const SERVICE_DETAILS = {
  hours: "8AM to 5PM",
  location: "Sampa, Above Medicort Pharmacy",
  email: "azapmedicaldiagnostics@gmail.com",
  phone: "0554411017",
};

export const PARTNER_OPPORTUNITIES: PartnerOpportunity[] = [
  {
    title: "Healthcare Providers",
    desktopDescription: "Integrate our diagnostics into your practice",
    mobileDescription: "Integrate our diagnostics",
    icon: Heart,
  },
  {
    title: "Research Institutions",
    desktopDescription: "Collaborate on cutting-edge research",
    mobileDescription: "Collaborate on research",
    icon: Microscope,
  },
  {
    title: "Pharmaceutical Companies",
    desktopDescription: "Partner for drug development and trials",
    mobileDescription: "Partner for drug development",
    icon: Database,
  },
  {
    title: "Insurance Providers",
    desktopDescription: "Streamline claims and coverage processes",
    mobileDescription: "Streamline claims processes",
    icon: Users,
  },
  {
    title: "Technology Partners",
    desktopDescription: "Integrate with our AI and data platforms",
    mobileDescription: "Integrate with our platforms",
    icon: Globe,
  },
];

export const FOOTER_TARGET_AUDIENCES = [
  "Patients",
  "Clinicians",
  "Insurers",
  "Pharma Partners",
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Agyapong Afriyie Jephthah",
    role: "Chief Executive Officer",
    summary:
      "Leads Azap Medical Diagnostics with a focus on reliable, accessible diagnostic care.",
    imageAlt: "Placeholder portrait for the CEO",
  },
  {
    name: "Brigette Osei",
    role: "Nurse",
    summary:
      "Supports patient preparation, sample collection, and a calm care experience.",
    imageAlt: "Placeholder portrait for the nurse",
  },
];
