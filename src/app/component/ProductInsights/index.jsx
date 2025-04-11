import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const insightsData = [
  {
    imageUrl: "/productInsights/product1.webp",
    title: "How To Choose the Right Fabric for Your Curtain?",
    description:
      "Curtains contribute to the charm of any space, offering benefits like noise reduction, light control, and privacy. Choosing the right fabric is crucial to achieve the desired look and functionality. Here's a concise guide to help you choose the ideal curtain fabric for your space.",
    link: "#",
  },
  {
    imageUrl: "/productInsights/product2.webp",
    title: "How to Iron Curtains: Tips for Wrinkle-Free Results",
    description:
      "Curtains aren't just for decoration; they also provide privacy, control light, and insulate rooms. However, wrinkles can spoil their appearance and usefulness. Ironing is key to removing wrinkles and maintaining their beauty. We'll explore effective ironing techniques.",
    link: "#",
  },
  {
    imageUrl: "/productInsights/product3.webp",
    title: "Ready-Made vs. Custom Curtains: Which is Right for You?",
    description:
      "Imagine entering a room and being greeted by stunning, cascading curtains that gracefully hang from ceiling to floor. Instantly, you're enveloped in a feeling of luxury and ease. Curtains possess a remarkable ability to regulate light and enhance the atmosphere.",
    link: "#",
  },
];

export default function ProductInsights() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Product Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insightsData.map((insight, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden cursor-pointer p-0"
          >
            <CardHeader className="p-0">
              <div className="relative w-full h-52">
                <Image
                  src={insight.imageUrl}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-lg font-medium px-4 pt-4">
                {insight.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow px-4 pb-4">
              <CardDescription className="text-sm">
                {insight.description}
                <Link
                  href={insight.link}
                  className="text-sm font-sm text-pink-500 ml-1"
                >
                  Read More
                </Link>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
