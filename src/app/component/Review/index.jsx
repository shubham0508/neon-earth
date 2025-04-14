"use client";

import * as React from "react";
import { useState } from "react";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const averageRating = 4.2;
const totalReviews = 24;

const ratingDistribution = [
  { stars: 5, count: 5 },
  { stars: 4, count: 19 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const dummyReviews = [
  {
    id: 1,
    rating: 5,
    title: "Excellent Craftsmanship",
    text: "The curtains have a luxurious feel and look, enhancing the overall aesthetic of the room. Quality is top-notch.",
    author: "Jane D.",
    date: "Jan 3, 2024",
  },
  {
    id: 2,
    rating: 4,
    title: "Great Value and Look",
    text: "Very happy with these curtains. They block enough light and look more expensive than they were. Installation was straightforward.",
    author: "Mark S.",
    date: "Jan 3, 2024",
  },
  {
    id: 3,
    rating: 4,
    title: "Beautiful Pattern",
    text: "The mountain pattern is subtle yet beautiful. It adds a nice touch to our living room. Fabric feels durable.",
    author: "Sarah K.",
    date: "Jan 3, 2024",
  },
  {
    id: 4,
    rating: 5,
    title: "Perfect Fit and Function",
    text: "Custom size was spot on. They slide easily on the rod and the light filtering is just what we needed.",
    author: "David L.",
    date: "Jan 3, 2024",
  },
  {
    id: 5,
    rating: 3,
    title: "Decent, but color slightly off",
    text: "Overall they are okay, but the color wasn't exactly as pictured online. Still keeping them as the quality seems good for the price.",
    author: "Emily R.",
    date: "Jan 3, 2024",
  },
];

const renderStars = (rating, totalStars = 5) => {
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className="w-10 h-10 text-pink-500 fill-pink-500" />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-10 h-10 text-gray-300 fill-gray-300" />);
  }

  return <div className="flex items-center">{stars}</div>;
};

const RatingAndReview = () => {
  const [sortOption, setSortOption] = useState("most-recent");
  const [filterOption, setFilterOption] = useState("all-ratings");

  const filteredReviews = dummyReviews
    .filter((review) => {
      if (filterOption === "all-ratings") return true;
      return review.rating === parseInt(filterOption.split("-")[0]);
    })
    .sort((a, b) => {
      if (sortOption === "most-recent") {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortOption === "highest-rating") {
        return b.rating - a.rating;
      }
      if (sortOption === "lowest-rating") {
        return a.rating - b.rating;
      }
      return 0;
    });

  const calculatedTotal =
    ratingDistribution.reduce((sum, item) => sum + item.count, 0) || 1;

  return (
    <div className="container mx-auto px-4 py-12 border-1 p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 ">
        <div className="w-full md:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-gray-600">
              {averageRating.toFixed(1)}
            </span>
            <div className="flex flex-col">
              {renderStars(averageRating)}
              <span className="text-sm text-muted-foreground mt-1 cursor-pointer">
                See all {totalReviews} reviews
              </span>
            </div>
          </div>
          <div className="space-y-1.5 max-w-sm">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 w-40 justify-end">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-10 h-10 ${
                        i < item.stars
                          ? "text-pink-500 fill-pink-500"
                          : "text-gray-300 fill-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <Progress
                  value={(item.count / calculatedTotal) * 100}
                  className="w-full h-4"
                  aria-label={`Rating distribution for ${item.rating} stars`}
                />
                <span className="text-sm font-medium w-8 text-left">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-end md:justify-start">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white cursor-pointer">
            Write a Review
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Sort
          </span>
          <Select defaultValue="most-recent" onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]" aria-label="Sort the ratings">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="highest-rating">Highest Rating</SelectItem>
              <SelectItem value="lowest-rating">Lowest Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Filter
          </span>
          <Select defaultValue="all-ratings" onValueChange={setFilterOption}>
            <SelectTrigger className="w-[180px]" aria-label="Filter the ratings">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-ratings">All Ratings</SelectItem>
              <SelectItem value="5-stars">5 Stars</SelectItem>
              <SelectItem value="4-stars">4 Stars</SelectItem>
              <SelectItem value="3-stars">3 Stars</SelectItem>
              <SelectItem value="2-stars">2 Stars</SelectItem>
              <SelectItem value="1-star">1 Star</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-8">
        {filteredReviews.map((review, index) => (
          <div key={review.id}>
            {index > 0 && <Separator className="my-6" />}
            <article className="flex flex-col gap-2">
              {renderStars(review.rating)}
              <h4 className="font-semibold text-lg">{review.title}</h4>
              <p className="text-sm text-muted-foreground">{review.text}</p>
              <p className="text-xs text-gray-500 mt-1">{review.author}</p>
              <p className="text-xs text-gray-500 mt-1">{review.date}</p>
              <div className="flex flex-row items-center gap-4 mt-2 text-sm text-muted-foreground">
                <p>Was this review useful?</p>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4 cursor-pointer hover:text-pink-700" />
                  <span>0</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsDown className="w-4 h-4 cursor-pointer hover:text-pink-700" />
                  <span>0</span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingAndReview;
