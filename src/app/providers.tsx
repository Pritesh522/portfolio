"use client"

import { ThemeProvider } from "next-themes"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "motion/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  )
}

// A wrapper that bootstraps next-themes then Aurora Background
export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
>
    <Providers>{children}</Providers>
  </ThemeProvider>
)

