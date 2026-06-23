"use client"

import { motion } from "motion/react"

type FillFABMenuProps = {
  onClose: () => void;
}

export default function FillFABMenu({
  onClose,
}: FillFABMenuProps) {
  const menuFillNavs = [
    {
      label: "About Me",
      href: "#about-me",
    },
    {
      label: "Tech Stack",
      href: "#about-me",
    },
    {
      label: "Works Project",
      href: "#about-me",
    },
    {
      label: "Contact",
      href: "#about-me",
    },
  ]

  return (
    <motion.div
      className=""
    >
      {menuFillNavs.map((menu, index) => (
        <motion.a
          key={menu.label}
          href={menu.href}
          onClick={onClose}
        >
          {menu.label}
        </motion.a>
      ))}
    </motion.div>
  )
}