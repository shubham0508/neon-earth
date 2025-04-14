import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const productFeatures = [
  "Multiple fabric or texture options.",
  "Choose curtains with 70-80% or 100% light block.",
  "Customize in any size as per requirement.",
  "A range of colors and designs available.",
  "Available in pinch pleat with fabric gathered at top edge.",
  "Customize for a window or door; mount outside or inside.",
  'Set of 2, 3" wide tiebacks to secure the drapes.',
  "Available in three valance options: tailored, inverted and pinch.",
];

const howToMeasureSteps = [
  "Measure the window/door width and add extra for fullness.",
  "Measure from the rod to desired length, allowing for hems.",
];

const easyInstallationSteps = [
  "Install the curtain rod securely, ensuring it is level.",
  "Hang drapes, adjusting pleats or folds for even appearance.",
];

export default function ProductDetail() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Product Description</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-[37vw] w-full aspect-square rounded-lg overflow-hidden relative h-[45vh]">
          <Image
            src="/productImages/product5.webp"
            alt="Product Images"
            fill
            className="object-cover h-1/2"
          />
        </div>

        <div className="md:w-1/2">
          <ul className="space-y-3">
            {productFeatures.map((feature, index) => (
              <li key={index} className="flex gap-5 items-center">
                <Check className="h-3 w-3 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="#" className="text-pink-700 mt-4 inline-block underline float-end">
            Read More
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Card className="lg:col-span-1 p-5 h-[50vh]">
          <CardHeader>
            <CardTitle className="text-xl">How to Measure:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {howToMeasureSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p className="font-semibold mt-5">Yes, it's that easy!</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 p-5 h-[50vh]">
          <CardHeader>
            <CardTitle className="text-xl">Easy Installation:</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {easyInstallationSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <p className="font-semibold mt-5">Happy decorating!</p>
            </div>
            <div className="lg:w-1/2 relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/productImages/product6.webp"
                alt="Installation Guide"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <div className="w-full">
          <p className="font-semibold">Care Instructions:</p>
          <span className="text-center">Hand wash or dry clean. Iron or steam to remove wrinkles.</span>
        </div>
      </div>
    </div>
  );
}
