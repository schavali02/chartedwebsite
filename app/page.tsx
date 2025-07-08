"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X, ArrowRight, Star, Zap, Shield, Users, BarChart, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PrivacyPolicy } from "@/components/privacy-policy"
import { TermsConditions } from "@/components/terms-conditions"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce errors.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time data visualization and reporting.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with integrated communication tools.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Enterprise Security",
      description: "Keep your data safe with end-to-end encryption and compliance features.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API ecosystem.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Image src="/images/charted-logo.png" alt="Charted" width={32} height={32} className="size-8" />
            <span>Charted</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#privacy"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms & Conditions
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button className="rounded-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#privacy" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Privacy Policy
              </Link>
              <Link href="#terms" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Terms & Conditions
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button className="rounded-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Share and Monetize Your Playlists with Charted
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Charted empowers music lovers to effortlessly create, share, and monetize playlists—bringing communities
                together and elevating every listening experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="flex justify-center items-start gap-4 md:gap-6">
                {/* Mobile Screenshots */}
                <div className="flex gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src="/images/charted-search-screen.jpg"
                      width={280}
                      height={600}
                      alt="Charted search and discovery screen"
                      className="rounded-3xl shadow-2xl border border-border/20"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <Image
                      src="/images/charted-home-screen.jpg"
                      width={280}
                      height={600}
                      alt="Charted home feed with playlists"
                      className="rounded-3xl shadow-2xl border border-border/20"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative"
                  >
                    <Image
                      src="/images/charted-profile-screen.jpg"
                      width={280}
                      height={600}
                      alt="Charted user profile and playlists"
                      className="rounded-3xl shadow-2xl border border-border/20"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Partnering with innovative companies worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <Image
                  src="/images/amazon-music-logo.png"
                  alt="Amazon Music"
                  width={120}
                  height={60}
                  className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
                <Image
                  src="/images/spotify-logo.png"
                  alt="Spotify"
                  width={120}
                  height={60}
                  className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <PrivacyPolicy />

        {/* Terms & Conditions Section */}
        <TermsConditions />

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Ready to Share Your Musical Passion?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join thousands of music lovers who are creating, sharing, and monetizing their playlists while building
                thriving music communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Start Sharing Playlists
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <Image src="/images/charted-logo.png" alt="Charted" width={32} height={32} className="size-8" />
                <span>Charted</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empower your music passion with Charted. Create, share, and monetize playlists while building vibrant
                music communities.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/charted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Image
                    src="/images/instagram-logo.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="size-6 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@charted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Image
                    src="/images/tiktok-logo.png"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="size-6 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://charted.canny.io/feature-requests"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Request a Feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://charted.canny.io/bugs"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Report a Bug
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Charted. All rights reserved.
            </p>
            <div className="flex gap-4"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
