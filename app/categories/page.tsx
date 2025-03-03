import Link from "next/link"
import { Utensils, Shirt, Laptop, Sparkles, Home, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CategoriesPage() {
  const categories = [
    {
      id: "food-drink",
      name: "Food & Drink",
      description: "Restaurants, cafes, delivery services, and food products",
      icon: "Utensils",
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Clothing, accessories, shoes, and traditional Ethiopian wear",
      icon: "Shirt",
    },
    {
      id: "technology",
      name: "Technology",
      description: "Electronics, software, digital services, and tech products",
      icon: "Laptop",
    },
    {
      id: "health-beauty",
      name: "Health & Beauty",
      description: "Cosmetics, personal care, wellness products, and services",
      icon: "Sparkles",
    },
    {
      id: "home-living",
      name: "Home & Living",
      description: "Furniture, decor, household items, and home services",
      icon: "Home",
    },
    {
      id: "travel",
      name: "Travel & Tourism",
      description: "Hotels, tours, travel agencies, and local experiences",
      icon: "Plane",
    },
  ]

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
              <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" />
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Industry Categories</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our marketplace categories and find the perfect products to promote or the right affiliates for
                  your business.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {categories.map((category) => {
                // Dynamically select the icon component based on the category's icon property
                const IconComponent =
                  category.icon === "Utensils"
                    ? Utensils
                    : category.icon === "Shirt"
                      ? Shirt
                      : category.icon === "Laptop"
                        ? Laptop
                        : category.icon === "Sparkles"
                          ? Sparkles
                          : category.icon === "Home"
                            ? Home
                            : Plane

                return (
                  <Link
                    key={category.id}
                    href="/"
                    className="group relative overflow-hidden rounded-lg border hover:border-primary transition-colors"
                  >
                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-full bg-primary/10 p-4">
                          <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-center">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2 text-center">{category.description}</p>
                      <div className="flex items-center justify-center mt-4 text-sm text-primary font-medium">
                        Explore category <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Don't See Your Industry?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We're constantly expanding our categories. Contact us to suggest a new industry or to learn how we can
                  help your specific business.
                </p>
              </div>
              <Link href="/">
                <Button size="lg">Contact Us</Button>
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

