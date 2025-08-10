"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'
import coiffure from "../../../public/caroussel/1.png"
import barbe from "../../../public/caroussel/2.png"
import soins from "../../../public/caroussel/3.png"
import Image from "next/image"

const images = [
  {
    id: 1,
    title: "coiffure",
    url: coiffure,
    alt: "coiffure"
  },
  {
    id: 2,
    title: "Plage",
    url: barbe,
    alt: "Plage tropicale"
  },
  {
    id: 3,
    title: "Forêt",
    url: soins,
    alt: "Forêt verdoyante"
  },
]

export function CarouselDemo() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <Carousel 
    className="w-1/2 "
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((index) => (
          <CarouselItem key={index.id}>
            <div className="p-1">
              <Card className="p-1 ">
                <CardContent className="relative aspect-square p-0 overflow-hidden">
                  <Image
                    src={index.url}
                    alt={index.title}
                    fill
                    className="object-cover w-full h-full rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
