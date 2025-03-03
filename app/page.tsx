import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, ShoppingBag, BarChart3, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageGallery from "./components/image-gallery"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6" />
            <span>EthioAffiliates</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link href="/affiliates" className="text-sm font-medium hover:underline underline-offset-4">
              For Affiliates
            </Link>
            <Link href="/sellers" className="text-sm font-medium hover:underline underline-offset-4">
              For Sellers
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/">
              <Button>Get Started</Button>
            </Link>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ethiopia's First Affiliate Marketplace
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect businesses with digital marketers to grow your reach and sales across Ethiopia.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/sellers">
                    <Button className="w-full min-[400px]:w-auto">I'm a Seller</Button>
                  </Link>
                  <Link href="/affiliates">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      I'm an Affiliate
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/homepage_hero_section.jpg"
                width={550}
                height={550}
                alt="Ethiopian digital marketers working together"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Revolutionizing Marketing in Ethiopia
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects businesses with skilled digital marketers to help you reach your target
                  audience.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Next Generation Marketing</h3>
                <p className="text-center text-muted-foreground">
                  Leverage the power of affiliate marketing to grow your business in Ethiopia.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Find the Right Audience</h3>
                <p className="text-center text-muted-foreground">
                  We connect you with affiliates who can reach your ideal customers.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Social Media Marketing</h3>
                <p className="text-center text-muted-foreground">
                  Tap into Ethiopia's growing social media presence with our network of influencers.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <ShoppingBag className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">You Have It, We Market It</h3>
                <p className="text-center text-muted-foreground">
                  Focus on your product while we handle getting it in front of customers.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Track Your Success</h3>
                <p className="text-center text-muted-foreground">
                  Monitor performance with real-time analytics and reporting.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2">
                  <span className="text-2xl font-bold text-primary">1st</span>
                </div>
                <h3 className="text-xl font-bold">First in Ethiopia</h3>
                <p className="text-center text-muted-foreground">
                  Join Ethiopia's first dedicated affiliate marketing platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">For Sellers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Register your business</h4>
                      <p className="text-sm text-muted-foreground">
                        Create an account and list your products or services
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Set your commission rates</h4>
                      <p className="text-sm text-muted-foreground">
                        Decide how much you'll pay for successful referrals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Get connected with affiliates</h4>
                      <p className="text-sm text-muted-foreground">Our platform matches you with relevant marketers</p>
                    </div>
                  </li>
                </ul>
                <Link href="/sellers" className="inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">For Affiliates</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Join as an affiliate</h4>
                      <p className="text-sm text-muted-foreground">
                        Create your profile and showcase your marketing channels
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Choose products to promote</h4>
                      <p className="text-sm text-muted-foreground">
                        Browse our marketplace and select what fits your audience
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Earn commissions</h4>
                      <p className="text-sm text-muted-foreground">Get paid for every successful referral you make</p>
                    </div>
                  </li>
                </ul>
                <Link href="/affiliates" className="inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover Ethiopian Businesses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From Real Estate to modern Tech Startups, our platform connects Business with Consumers
                </p>
              </div>
            </div>

            <ImageGallery />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Ethiopia's first affiliate marketplace and start growing today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Globe className="h-6 w-6" />
              <span>EthioAffiliates</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ethiopia's first affiliate marketing platform.
              <br />
              Connecting businesses with digital marketers.
            </p>
          </div>
          <div className="md:ml-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Platform</h3>
              <nav className="grid gap-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                  About Us
                </Link>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover:underline">
                  How It Works
                </Link>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:underline">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Resources</h3>
              <nav className="grid gap-2">
                <Link href="/blog" className="text-sm text-muted-foreground hover:underline">
                  Blog
                </Link>
                <Link href="/faq" className="text-sm text-muted-foreground hover:underline">
                  FAQ
                </Link>
                <Link href="/support" className="text-sm text-muted-foreground hover:underline">
                  Support
                </Link>
              </nav>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="grid gap-2">
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                  Privacy
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6 md:py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} EthioAffiliates. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">TikTok</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                  <line x1="15" x2="15" y1="4" y2="12"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}




