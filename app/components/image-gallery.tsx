import Image from "next/image"

// This component will display beautiful Ethiopian-themed images
export default function ImageGallery() {
  const ethiopianImages = [
    {
      src: "/businesses_car.jpg",
      alt: "Traditional Ethiopian coffee ceremony",
      width: 600,
      height: 400,
    },
    {
      src: "/businesses_realestate2.jpg",
      alt: "Modern Addis Ababa skyline with business district",
      object: "cover",
      width: 600,
      height: 400,
    },
    {
      src: "/businesses_StartUp.jpg",
      alt: "Colorful traditional Ethiopian marketplace",
      width: 600,
      height: 400,
    },
    {
      src: "/businesses_fashion.jpg",
      alt: "Young Ethiopian entrepreneurs working at a tech startup",
      width: 600,
      height: 400,
    },
    {
      src: "/businesses_cosmotics2.jpg",
      alt: "Modern Ethiopian fashion with traditional elements",
      width: 600,
      height: 400,
    },
    {
      src: "/businesses_hotels.jpg",
      alt: "Ethiopian social media influencer creating content",
      width: 600,
      height: 400,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ethiopianImages.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

