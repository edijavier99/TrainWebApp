import {
    CheckCircle,
    Circle,
    CircleOff,
    HelpCircle,
    Timer,
    FolderKanban,
  } from "lucide-react"
  import { Dumbbell, Building, HeartPulse, Brain } from "lucide-react";
  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "under_review",
      label: "Under Review",
      icon: HelpCircle,
    },
    {
      value: "active",
      label: "Active",
      icon: Circle,
    },
    {
      value: "coming_soon",
      label: "Coming Soon",
      icon: Timer,
    },
    {
      value: "published",
      label: "Published",
      icon: CheckCircle,
    },
    {
      value: "rejected",
      label: "Rejected",
      icon: CircleOff,
    },
  ]
  
  export const investmentCategories = [
    {
      label: "Opportunistic",
      value: "Opportunistic",
      icon: FolderKanban,
    },
    {
      label: "Core",
      value: "Core",
      icon: Building,
    },
  ]



  export const articleType = [
    {
      value: "Health",
      label: "Health",
      icon: HeartPulse, // Icono para viviendas multifamiliares
    },
    {
      value: "Fitness",
      label: "Fitness",
      icon: Dumbbell, // Icono para oficinas
    },
    {
      value: "Mindset",
      label: "Mindset",
      icon: Brain, // Icono para propiedades industriales
    }
  ];

export const orderStatus = [
  {
    value: "expired",
    label: "Expired",
  },
  {
    value: "valid",
    label: "Valid",
  }
]

