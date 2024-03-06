"use client";

import { PropsWithChildren } from "react";
import { DELAY, useNavigationTransition } from "./context";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Animate({ children }: PropsWithChildren) {
  const { pending } = useNavigationTransition();
  const pathname = usePathname();
  return (
    <AnimatePresence mode="popLayout">
      {!pending && (
        <motion.div
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
