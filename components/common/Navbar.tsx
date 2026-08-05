import Link from "next/link"
import { Menu, Search, Moon, Bookmark, FolderCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {  Toggle } from "@base-ui/react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className=" flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold flex flex-row gap-2">
                    <FolderCode />
                    RepoDocs
                </Link>
                {/* Desktop Navigation Links */}
                {/* <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-primary">Home</Link>
                    <Link href="/about" className="transition-colors hover:text-primary">About</Link>
                    <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
                    <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
                </nav> */}

                {/* Action Button */}
                <div className="flex flex-row">
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline"  className="text-muted-foreground"size="sm"> 
                        <Search  /> Search <kbd>ctrlK</kbd>
                    </Button>
                    <Toggle>
                        <Moon />
                    </Toggle>
                    <Toggle>
                        <Bookmark />
                        </Toggle>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                                className="grayscale"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                </div>
                 
                </div>
                {/* Mobile Menu Trigger */}
                <Sheet>
                    <SheetTrigger  className="md:hidden">
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-6 py-6">
                            <Link href="/" className="text-lg font-bold">MyBrand</Link>
                            <div className="flex flex-col gap-4 text-base font-medium">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                            <div className="flex flex-col gap-2 pt-4 border-t">
                                <Button variant="outline">Log in</Button>
                                <Button>Sign up</Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
