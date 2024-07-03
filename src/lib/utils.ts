import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price:number) => {
  const formatter = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency: "USD",
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'MacGuardians - Custom high-quality Macbook cases',
  description = 'Create custom high-quality Macbook cases in seconds',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://ecommerce-phone-theta.vercel.app")
  }
}