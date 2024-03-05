"use client";

import { PropsWithChildren } from "react";
import { DELAY, useNavigationTransition } from "./context";
import { AnimatePresence, motion } from "framer-motion";

export default function Animate({ children }: PropsWithChildren) {
  const { pending } = useNavigationTransition();
  return (
    <AnimatePresence mode="wait">
      {!pending && (
        <motion.div
          className="flex-1"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ ease: "circInOut", duration: DELAY / 1000 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
