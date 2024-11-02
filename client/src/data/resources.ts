import { FileStackIcon, MessageCircleXIcon, WalletIcon } from "lucide-react";

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const problemList: {
  title: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Sulitnya Melacak Pembayaran",
    description:
      "Bayangkan setiap bulan harus memeriksa dan mengingat siapa yang sudah bayar dan siapa yang belum.",
    icon: WalletIcon,
  },
  {
    title: "Pencatatan Manual",
    description:
      "Berkas catatan yang menumpuk bisa berisiko hilang atau tercecer.",
    icon: FileStackIcon,
  },
  {
    title: "Komunikasi yang Tidak Efisien",
    description:
      "Pesan yang tidak teratur bisa membuat penghuni merasa tidak nyaman.",
    icon: MessageCircleXIcon,
  },
];
