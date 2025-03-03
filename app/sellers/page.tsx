import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ShoppingBag, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SellersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
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
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Grow Your Business with Affiliates
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Let Ethiopia's top digital marketers promote your products and services to their audiences.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Pay only for results, not for advertising</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Reach new customers through trusted voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Track performance with detailed analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Scale your marketing efforts efficiently</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/">
                    <Button size="lg">Register as a Seller</Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550&text=Ethiopian+Business+Owner"
                width={550}
                height={550}
                alt="Ethiopian business owner managing online sales"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Affiliate Marketing?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Leverage the power of word-of-mouth at scale with Ethiopia's first affiliate platform.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Targeted Reach</h3>
                <p className="text-center text-muted-foreground">
                  Connect with affiliates who already have the audience you want to reach.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <ShoppingBag className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Performance-Based</h3>
                <p className="text-center text-muted-foreground">
                  Only pay when you get results - sales, leads, or traffic.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Scalable Growth</h3>
                <p className="text-center text-muted-foreground">
                  Easily scale your marketing efforts as your business grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Start growing your business with affiliate marketing in just a few steps.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Register</h3>
                  <p className="text-center text-muted-foreground">
                    Create your seller account and list your products or services.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Set Commission</h3>
                  <p className="text-center text-muted-foreground">
                    Decide how much you'll pay affiliates for successful referrals.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Get Promoted</h3>
                  <p className="text-center text-muted-foreground">
                    Affiliates will promote your products to their audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Grow Your Business?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Join Ethiopia's first affiliate marketplace today and start reaching new customers.
                </p>
              </div>
              <Link href="/">
                <Button size="lg">Register as a Seller</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
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
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
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
          </div>
        </div>
      </footer>
    </div>
  )
}

