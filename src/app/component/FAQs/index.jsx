"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const allFaqData = [
  {
    id: "faq-1",
    question: "What are custom drapes?",
    answer:
      "Custom drapes are window treatments crafted from high-quality materials. They are customized to your specific measurements and preferences. You can also choose the fabric, style, length, and other details to complement your decor.",
  },
  {
    id: "faq-2",
    question: "Which are the modern style curtains?",
    answer:
      "Modern style curtains often feature clean lines, solid colors (neutrals are popular), geometric patterns, or subtle textures. Styles like grommet top, wave fold, or simple rod pockets fit well. Fabrics like linen, cotton blends, or sheers contribute to the look.",
  },
  {
    id: "faq-3",
    question: "How do I measure my windows for custom drapes?",
    answer:
      "You typically need to measure the width of the area you want to cover (often wider than the window frame for fullness) and the desired finished length (from the rod position to the sill, below the sill, or the floor). Consult the specific provider's measuring guide for accuracy.",
  },
  {
    id: "faq-4",
    question: "Are custom drapes machine washable?",
    answer:
      "Washability depends entirely on the fabric. Some materials like certain polyesters or cottons might be machine washable on a gentle cycle, but delicate fabrics like silk, velvet, or linen usually require dry cleaning or careful spot cleaning. Always check the care instructions.",
  },
  {
    id: "faq-5",
    question: "What is the typical lead time for custom drapes?",
    answer:
      "Production and shipping times can vary depending on the manufacturer, fabric availability, and order complexity. It usually ranges from 2 to 8 weeks. Always check the estimated timeframe when ordering.",
  },
  {
    id: "faq-6",
    question: "Can I order fabric samples first?",
    answer:
      "Yes, most reputable custom drape retailers offer fabric swatches or samples, sometimes for free or a small fee. This is highly recommended to see the color, texture, and light-filtering properties in your own space before committing.",
  },
];

const INITIAL_VISIBLE_FAQS = 4;
const DEFAULT_EXPANDED = "faq-1";

export function FaqSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_FAQS);
  const [expandedFaq, setExpandedFaq] = useState(DEFAULT_EXPANDED);

  const visibleFaqs = allFaqData.slice(0, visibleCount);
  const hasMoreFaqs = visibleCount < allFaqData.length;

  const toggleShowMore = () => {
    if (hasMoreFaqs) {
      setVisibleCount(allFaqData.length);
    } else {
      setVisibleCount(INITIAL_VISIBLE_FAQS);
      setExpandedFaq(DEFAULT_EXPANDED);
    }
  };

  return (
    <div className="w-full mt-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        FAQs
      </h2>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
        <Accordion
          type="single"
          collapsible
          value={expandedFaq}
          onValueChange={(val) => setExpandedFaq(val)}
          className="w-full cursor-pointer"
        >
          {visibleFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={`transition-colors ${
                expandedFaq === faq.id
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-white dark:bg-transparent"
              }`}
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-8 text-center">
        <Button
          variant="outline"
          onClick={toggleShowMore}
          className="text-pink-700 border-pink-500 hover:text-pink-700 cursor-pointer"
        >
          {hasMoreFaqs ? "Show More" : "Show Less"}
        </Button>
      </div>
    </div>
  );
}

export default FaqSection;
