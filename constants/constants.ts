import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/program",
    label: "Program",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/mentors",
    label: "Mentors",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/reviews",
    label: "Reviews",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/placements",
    label: "Placements",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/features",
    label: "Features",
  },
];
