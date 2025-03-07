"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Globe, ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function RegisterAffiliatePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form data state
  const [formData, setFormData] = useState({
    affiliate_name: "",
    affiliate_tel: "",
    category: [] as string[],
    otherCategory: "",
    socialMedia: [] as {
      type: string
      link: string
      followers: number
      likes: number
    }[],
  })

  // Error state
  const [errors, setErrors] = useState({
    affiliate_name: "",
    affiliate_tel: "",
    category: "",
    socialMedia: "",
  })

  // Categories list
  const categories = [
    "Health & Wellness",
    "Beauty & Fashion",
    "Parenting & Family",
    "Food & Beverage",
    "Automotive",
    "Real Estate",
    "Travel & Tourism",
    "Technology & Gadgets",
    "Online Tools & Software",
    "Education & E-learning",
    "Subscriptions & Memberships",
    "Personal Development & Self-Improvement",
    "Finance & Investment",
    "Legal & Business Services",
    "Photography",
    "Event Planning & Party Supplies",
    "Other",
  ]

  // Social media platforms
  const socialMediaPlatforms = [
    { name: "TikTok", value: "tiktok" },
    { name: "Instagram", value: "instagram" },
    { name: "YouTube", value: "youtube" },
    { name: "Facebook", value: "facebook" },
  ]

  // Handle input change for basic info
  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle category selection
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        category: [...formData.category, category],
      })
    } else {
      setFormData({
        ...formData,
        category: formData.category.filter((c) => c !== category),
      })
    }

    // Clear category error when user selects a category
    if (errors.category) {
      setErrors({
        ...errors,
        category: "",
      })
    }
  }

  // Handle social media selection
  const handleSocialMediaSelection = (platform: string, checked: boolean) => {
    if (checked) {
      // Add platform to socialMedia array if not already present
      if (!formData.socialMedia.some((sm) => sm.type === platform)) {
        setFormData({
          ...formData,
          socialMedia: [
            ...formData.socialMedia,
            {
              type: platform,
              link: "",
              followers: 0,
              likes: 0,
            },
          ],
        })
      }
    } else {
      // Remove platform from socialMedia array
      setFormData({
        ...formData,
        socialMedia: formData.socialMedia.filter((sm) => sm.type !== platform),
      })
    }

    // Clear social media error when user selects a platform
    if (errors.socialMedia) {
      setErrors({
        ...errors,
        socialMedia: "",
      })
    }
  }

  // Handle social media details change
  const handleSocialMediaDetailsChange = (platform: string, field: string, value: string) => {
    setFormData({
      ...formData,
      socialMedia: formData.socialMedia.map((sm) => {
        if (sm.type === platform) {
          return {
            ...sm,
            [field]: field === "link" ? value : Number.parseInt(value) || 0,
          }
        }
        return sm
      }),
    })
  }

  // Validate step 1
  const validateStep1 = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.affiliate_name.trim()) {
      newErrors.affiliate_name = "Name is required"
      valid = false
    }

    if (!formData.affiliate_tel.trim()) {
      newErrors.affiliate_tel = "Phone number is required"
      valid = false
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.affiliate_tel)) {
      newErrors.affiliate_tel = "Please enter a valid phone number"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  // Validate step 2
  const validateStep2 = () => {
    let valid = true
    const newErrors = { ...errors }

    if (formData.category.length === 0) {
      newErrors.category = "Please select at least one category"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  // Validate step 3
  const validateStep3 = () => {
    let valid = true
    const newErrors = { ...errors }

    if (formData.socialMedia.length === 0) {
      newErrors.socialMedia = "Please select at least one social media platform"
      valid = false
    } else {
      // Check if all selected platforms have link, followers, and likes
      const incomplete = formData.socialMedia.some((sm) => !sm.link.trim() || sm.followers <= 0 || sm.likes <= 0)

      if (incomplete) {
        newErrors.socialMedia = "Please complete all fields for selected platforms"
        valid = false
      }
    }

    setErrors(newErrors)
    return valid
  }

  // Handle next step
  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3)
    }
  }

  // Handle previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateStep3()) return

    setIsSubmitting(true)

    // Prepare data for submission
    const submissionData = {
      affiliate_name: formData.affiliate_name,
      affiliate_tel: formData.affiliate_tel,
      category: formData.category.includes("Other")
        ? [...formData.category.filter((c) => c !== "Other"), formData.otherCategory]
        : formData.category,
      socialMedia: formData.socialMedia,
    }

    try {
      const response = await fetch(
        "https://kjp1b2yadf.execute-api.us-east-1.amazonaws.com/development/registerAffiliate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        },
      )

      if (response.ok) {
        toast({
          title: "Registration successful!",
          description: "Your affiliate registration has been submitted successfully.",
        })

        // Redirect to affiliates page after successful submission
        setTimeout(() => {
          router.push("/affiliates")
        }, 2000)
      } else {
        const errorData = await response.json()
        toast({
          title: "Registration failed",
          description: errorData.message || "There was an error submitting your registration. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "There was an error connecting to the server. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Affiliate Registration</h1>
            <p className="text-muted-foreground mt-2">
              Join Ethiopia's first affiliate marketplace and start earning today.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep === step
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep > step
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-muted-foreground bg-background text-muted-foreground"
                  }`}
                >
                  {currentStep > step ? <Check className="h-5 w-5" /> : step}
                </div>
                <span
                  className={`text-sm mt-2 ${
                    currentStep >= step ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {step === 1 ? "Basic Info" : step === 2 ? "Categories" : "Social Media"}
                </span>
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1
                  ? "Personal Information"
                  : currentStep === 2
                    ? "Select Your Interest Categories"
                    : "Social Media Platforms"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1
                  ? "Please provide your basic contact information"
                  : currentStep === 2
                    ? "Choose one or more categories that match your audience"
                    : "Select the social media platforms you use and provide your details"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="affiliate_name">Full Name</Label>
                    <Input
                      id="affiliate_name"
                      name="affiliate_name"
                      placeholder="Enter your full name"
                      value={formData.affiliate_name}
                      onChange={handleBasicInfoChange}
                    />
                    {errors.affiliate_name && <p className="text-sm text-destructive">{errors.affiliate_name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliate_tel">Phone Number</Label>
                    <Input
                      id="affiliate_tel"
                      name="affiliate_tel"
                      placeholder="e.g. +251901020304"
                      value={formData.affiliate_tel}
                      onChange={handleBasicInfoChange}
                    />
                    {errors.affiliate_tel && <p className="text-sm text-destructive">{errors.affiliate_tel}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Categories */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={formData.category.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>

                  {formData.category.includes("Other") && (
                    <div className="space-y-2">
                      <Label htmlFor="otherCategory">Specify Other Category</Label>
                      <Input
                        id="otherCategory"
                        name="otherCategory"
                        placeholder="Enter your category"
                        value={formData.otherCategory}
                        onChange={(e) => setFormData({ ...formData, otherCategory: e.target.value })}
                      />
                    </div>
                  )}

                  {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
                </div>
              )}

              {/* Step 3: Social Media */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  {socialMediaPlatforms.map((platform) => (
                    <div key={platform.value} className="space-y-3 pb-4 border-b last:border-0">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`social-${platform.value}`}
                          checked={formData.socialMedia.some((sm) => sm.type === platform.value)}
                          onCheckedChange={(checked) => handleSocialMediaSelection(platform.value, checked as boolean)}
                        />
                        <Label htmlFor={`social-${platform.value}`} className="text-base font-medium">
                          {platform.name}
                        </Label>
                      </div>

                      {formData.socialMedia.some((sm) => sm.type === platform.value) && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6">
                          <div className="space-y-2">
                            <Label htmlFor={`${platform.value}-link`}>Social Media Link</Label>
                            <Input
                              id={`${platform.value}-link`}
                              placeholder={`Your ${platform.name} link`}
                              value={formData.socialMedia.find((sm) => sm.type === platform.value)?.link || ""}
                              onChange={(e) => handleSocialMediaDetailsChange(platform.value, "link", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`${platform.value}-followers`}>Followers</Label>
                            <Input
                              id={`${platform.value}-followers`}
                              type="number"
                              placeholder="Number of followers"
                              value={formData.socialMedia.find((sm) => sm.type === platform.value)?.followers || ""}
                              onChange={(e) =>
                                handleSocialMediaDetailsChange(platform.value, "followers", e.target.value)
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`${platform.value}-likes`}>Likes</Label>
                            <Input
                              id={`${platform.value}-likes`}
                              type="number"
                              placeholder="Average likes per post"
                              value={formData.socialMedia.find((sm) => sm.type === platform.value)?.likes || ""}
                              onChange={(e) => handleSocialMediaDetailsChange(platform.value, "likes", e.target.value)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {errors.socialMedia && <p className="text-sm text-destructive">{errors.socialMedia}</p>}
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between">
              {currentStep > 1 ? (
                <Button variant="outline" onClick={handlePrevStep} disabled={isSubmitting}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              ) : (
                <Button variant="outline" onClick={() => router.push("/affiliates")} disabled={isSubmitting}>
                  Cancel
                </Button>
              )}

              {currentStep < 3 ? (
                <Button onClick={handleNextStep} disabled={isSubmitting}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} EthioAffiliates. All rights reserved.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

