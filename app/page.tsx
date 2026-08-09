import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Keyboard,
  Link as LinkIcon,
  Moon,
  Network,
  Terminal,
  Type,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const features = [
  {
    icon: Zap,
    title: "Fast Search",
    description:
      "Instant, typo-tolerant search across all your project files and markdown docs.",
  },
  {
    icon: Type,
    title: "Elegant Typography",
    description:
      "Customized readability with Geist Mono and Inter for perfect technical clarity.",
  },
  {
    icon: Moon,
    title: "Dark Mode First",
    description:
      "A deep obsidian aesthetic designed to reduce eye strain during long coding sessions.",
  },
  {
    icon: Keyboard,
    title: "Shortcuts",
    description:
      "Full keyboard navigation. Command palette driven for high-velocity browsing.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative overflow-hidden pt-20 pb-32">
        {/* Hero background mock preview */}
        <div className="pointer-events-none absolute left-1/2 top-40 h-[800px] w-[1200px] -translate-x-1/2 opacity-20">
          <div className="relative h-full w-full scale-110 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl blur-sm">
            {/* Mock sidebar */}
            <div className="absolute inset-y-0 left-0 w-64 border-r border-border bg-secondary/40 p-6">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-8 w-8 rounded bg-primary" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-3 w-40" />
                <Skeleton className="h-3 w-36" />
                <Skeleton className="h-3 w-44" />
              </div>
            </div>
            {/* Mock content */}
            <div className="ml-64 p-12">
              <Skeleton className="mb-8 h-12 w-96 bg-primary/20" />
              <div className="space-y-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="mt-12 h-48 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <section className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-4 text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-2 rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-primary"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Now in Private Beta
            </span>
          </Badge>

          <h1 className="mb-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Documentation that feels{" "}
            <span className="italic text-primary">like home.</span>
          </h1>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Transform any GitHub repository into a premium documentation
            experience instantly. Just paste your URL and let our engine
            handle the rest.
          </p>

          {/* URL input bar */}
          <div className="w-full max-w-2xl">
            <div className="flex items-center gap-2 rounded-2xl border border-border/30 bg-card/40 p-2 shadow-lg backdrop-blur-md transition-all focus-within:ring-2 focus-within:ring-primary/20">
              <LinkIcon className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Paste repo URL (e.g. facebook/react)"
                className="border-none bg-transparent shadow-none focus-visible:ring-0"
              />
              <Button className="gap-2 rounded-xl px-8 py-6 font-bold">
                Generate
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground/60">
              <span>
                Try:{" "}
                <code className="cursor-pointer rounded bg-primary/5 px-1.5 py-0.5 text-primary transition-colors hover:bg-primary/10">
                  tailwindlabs/tailwindcss
                </code>
              </span>
              <span>•</span>
              <code className="cursor-pointer rounded bg-primary/5 px-1.5 py-0.5 text-primary transition-colors hover:bg-primary/10">
                vercel/next.js
              </code>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="relative z-10 mx-auto mt-40 max-w-[1200px] px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group border-border/20 bg-card/60 p-8 transition-all duration-300 hover:bg-card"
                >
                  <CardContent className="p-0">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Bento preview */}
        <section className="mx-auto mt-40 max-w-[1200px] px-4">
          <div className="grid h-[600px] grid-cols-12 gap-6">
            <Card className="group relative col-span-12 overflow-hidden rounded-3xl border-border/20 p-0 lg:col-span-8">
              <div className="relative h-full w-full">
                <Image
                  src="/hero/img.jpg"
                  alt="A breathtaking widescreen cinematic capture of a minimalist software interface with deep charcoal backgrounds, ultra-thin glowing borders, and crisp white typography in a high-tech dark room."
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-8 left-8 z-10">
                  <h4 className="mb-2 text-3xl font-semibold text-foreground">
                    Refined Workspace
                  </h4>
                  <p className="max-w-md text-base text-muted-foreground">
                    Every pixel is aligned to an 8px grid for rhythmic,
                    professional consistency.
                  </p>
                </div>
              </div>
            </Card>

            <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
              <Card className="relative flex-1 overflow-hidden border-border/20 p-8">
                <Code2 className="absolute right-6 top-6 h-9 w-9 text-primary/40" />
                <CardContent className="flex h-full flex-col justify-end p-0">
                  <h4 className="mb-2 text-2xl font-semibold text-foreground">
                    API Reference
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Automatically extracted endpoint documentation with live
                    code playgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative flex-1 overflow-hidden border-border/20 bg-primary/5 p-8">
                <Network className="absolute right-6 top-6 h-9 w-9 text-primary/40" />
                <CardContent className="flex h-full flex-col justify-end p-0">
                  <h4 className="mb-2 text-2xl font-semibold text-foreground">
                    Repo Mapping
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Visual dependency trees and architecture maps generated
                    from your codebase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <span className="mb-4 block text-2xl font-semibold text-foreground">
              RepoDocs
            </span>
            <p className="mb-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              A project by developers, for developers. Making open source
              more accessible through beautiful documentation.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-border/30 bg-card/40 backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
              >
                <Terminal className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-border/30 bg-card/40 backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
              >
                <Network className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground">
              Product
            </h5>
            <ul className="space-y-4 text-xs text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  API Reference
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground">
              Company
            </h5>
            <ul className="space-y-4 text-xs text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mx-auto mt-20 max-w-[1200px] opacity-30" />

        <div className="mx-auto mt-8 flex max-w-[1200px] items-center justify-between text-xs text-muted-foreground/40">
          <p>© 2024 RepoDocs Inc. Built with passion for the OSS community.</p>
          <div className="flex gap-6">
            <span>Status: Fully Operational</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              AWS East-1
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}