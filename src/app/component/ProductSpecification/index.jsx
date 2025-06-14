"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  X,
  Minus,
  Plus,
  Star,
  ZoomIn,
  Circle,
  Shirt,
  Palette,
  Ruler,
  ThumbsUp,
  Bolt,
  ArrowRightIcon,
  Truck,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const mainImages = [
  "/productImages/product1.webp",
  "/productImages/product2.webp",
  "/productImages/product3.webp",
  "/productImages/product4.webp",
];

const fabricTextures = [
  {
    name: "Cruze Daizy",
    image: "/fabricImages/fabric1.webp",
    price: 141.92,
    color: "#f0f0e8",
    swatch: "/fabricSwatches/swatch1.webp",
  },
  {
    name: "Cruze Tortilla",
    image: "/fabricImages/fabric2.webp",
    price: 141.92,
    color: "#e0d1c3",
    swatch: "/fabricSwatches/swatch2.webp",
  },
  {
    name: "Charms Frost",
    image: "/fabricImages/fabric3.webp",
    price: 145.92,
    color: "#d2d2d2",
    swatch: "/fabricSwatches/swatch3.webp",
  },
  {
    name: "Nevada Malabar",
    image: "/fabricImages/fabric4.webp",
    price: 149.92,
    color: "#c8ccc8",
    swatch: "/fabricSwatches/swatch4.webp",
  },
  {
    name: "Daventry Coconut",
    image: "/fabricImages/fabric5.webp",
    price: 152.92,
    color: "#eeeeea",
    swatch: "/fabricSwatches/swatch5.webp",
  },
  {
    name: "Austin Desert Tan",
    image: "/fabricImages/fabric6.webp",
    price: 141.92,
    color: "#7f7e74",
    swatch: "/fabricSwatches/swatch6.webp",
  },
];

const headingStyles = [
  {
    name: "Flat Panel",
    image: "/headingImages/heading1.webp",
    pattern: "flat",
    price: 0,
  },
  {
    name: "Pinch Pleat",
    image: "/headingImages/heading2.webp",
    pattern: "pinch",
    price: 12.99,
  },
  {
    name: "Grommet",
    image: "/headingImages/heading3.webp",
    pattern: "grommet",
    price: 15.99,
  },
  {
    name: "Ripple Folds",
    image: "/headingImages/heading4.webp",
    pattern: "ripple",
    price: 18.99,
  },
  {
    name: "Tailored Pleats",
    image: "/headingImages/heading5.webp",
    pattern: "tailored",
    price: 17.99,
  },
  {
    name: "Goblet",
    image: "/headingImages/heading6.webp",
    pattern: "goblet",
    price: 19.99,
  },
];

const predefinedCombinations = {
  "Cruze Daizy_Flat Panel": "/customizeImages/customizeImage1.png",
  "Cruze Tortilla_Pinch Pleat": "/customizeImages/customizeImage2.png",
  "Charms Frost_Grommet": "/customizeImages/customizeImage3.png",
};

const placementOptions = [
  { name: "Window", image: "/placement/placement1.webp", price: 3.99 },
  { name: "Door", image: "/placement/placement2.webp", price: 5.99 },
];

const mountOptions = [
  { name: "Outside", image: "/mount/moun1.webp", price: 0 },
  { name: "Inside", image: "/mount/mount2.webp", price: 0 },
];

const panelOptions = [
  {
    name: "Pair of Panel",
    image: "/panel/panel1.webp",
    panels: 2,
    price: 0,
  },
  {
    name: "Single Panel (Left)",
    image: "/panel/panel2.webp",
    panels: 1,
    side: "left",
    price: 7.99,
  },
  {
    name: "Single Panel (Right)",
    image: "/panel/panel3.webp",
    panels: 1,
    side: "right",
    price: 7.99,
  },
];

const tiebackOptions = [
  {
    name: "No",
    image: "/tiebacks/tiebacks1.webp",
    hasTieback: false,
    price: 0,
  },
  {
    name: "3 Inch Wide Set of 2",
    image: "/tiebacks/tiebacks2.webp",
    hasTieback: true,
    price: 7.99,
  },
];

const valanceOptions = [
  {
    name: "No Valance",
    image: "/valance/valance1.webp",
    hasValance: false,
    price: 0,
  },
  {
    name: "Tailored Pleat Valance",
    image: "/valance/valance2.webp",
    hasValance: true,
    style: "tailored",
    price: 12.99,
  },
  {
    name: "Inverted Pleat Valance",
    image: "/valance/valance3.webp",
    hasValance: true,
    style: "inverted",
    price: 14.99,
  },
  {
    name: "Pinch Pleat Valance",
    image: "/valance/valance4.webp",
    hasValance: true,
    style: "pinched",
    price: 16.99,
  },
];

const linerOptions = [
  { name: "No", image: "/liner/liner1.webp", hasLiner: false, price: 0 },
  {
    name: "Liner Option 1",
    image: "/liner/liner2.webp",
    hasLiner: true,
    density: "light",
    price: 15.99,
  },
  {
    name: "Liner Option 2",
    image: "/liner/liner3.webp",
    hasLiner: true,
    density: "heavy",
    price: 19.99,
  },
];

export default function ProductSpecification() {
  const [currentImage, setCurrentImage] = useState();
  const [width, setWidth] = useState(48);
  const [height, setHeight] = useState(48);
  const [widthInches, setWidthInches] = useState(6);
  const [heightInches, setHeightInches] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(141.92);
  const [basePrice, setBasePrice] = useState(141.92);
  const [selectedFabric, setSelectedFabric] = useState(fabricTextures[0]);
  const [selectedHeading, setSelectedHeading] = useState(headingStyles[0]);
  const [selectedPlacement, setSelectedPlacement] = useState(
    placementOptions[0]
  );
  const [selectedMount, setSelectedMount] = useState(mountOptions[0]);
  const [selectedPanel, setSelectedPanel] = useState(panelOptions[0]);
  const [selectedTieback, setSelectedTieback] = useState(tiebackOptions[0]);
  const [selectedValance, setSelectedValance] = useState(valanceOptions[0]);
  const [selectedLiner, setSelectedLiner] = useState(linerOptions[0]);
  const [showFabricSheet, setShowFabricSheet] = useState(false);
  const [measurementUnit, setMeasurementUnit] = useState("Inch");
  const [valanceHeight, setValanceHeight] = useState(12);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [showHeadingSheet, setShowHeadingSheet] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [hasCustomDimensions, setHasCustomDimensions] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(width);
  const [displayHeight, setDisplayHeight] = useState(height);
  const [displayWidthInches, setDisplayWidthInches] = useState(widthInches);
  const [displayHeightInches, setDisplayHeightInches] = useState(heightInches);
  const [measurementError, setMeasurementError] = useState();
  const [isCanvasLoading, setIsCanvasLoading] = useState(false);

  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const validateMeasurements = ({ width, height, measurementUnit }) => {
    if (measurementUnit === "Inch") {
      if (width < 48 || width > 300) {
        setMeasurementError("Allowed Width limit, Min : 48 and Max : 300");
        return false;
      }
      if (height < 48 || height > 300) {
        setMeasurementError("Allowed Height limit, Min : 48 and Max : 300");
        return false;
      }
    } else if (measurementUnit === "Ft") {
      if (width < 4 || width > 25) {
        setMeasurementError("Allowed Width limit, Min : 4 and Max : 25");
        return false;
      }
      if (height < 4 || height > 25) {
        setMeasurementError("Allowed Height limit, Min : 4 and Max : 25");
        return false;
      }
    }

    setMeasurementError("");
    return true;
  };

  useEffect(() => {
    const widthInInches =
      measurementUnit === "Ft"
        ? displayWidth * 12 + displayWidthInches
        : displayWidth;
    const heightInInches =
      measurementUnit === "Ft"
        ? displayHeight * 12 + displayHeightInches
        : displayHeight;

    const isValid = validateMeasurements({
      width: displayWidth,
      height: displayHeight,
      measurementUnit,
    });

    if (canvasContainerRef.current && isValid) {
      const aspectRatio = widthInInches / heightInInches;
      canvasContainerRef.current.style.aspectRatio = `${aspectRatio}`;
    }
  }, [
    measurementUnit,
    selectedFabric,
    selectedHeading,
    currentBackground,
    hasCustomDimensions,
    displayWidth,
    displayHeight,
    displayWidthInches,
    displayHeightInches,
  ]);

  useEffect(() => {
    if (!hasCustomDimensions) {
      setCurrentImage(mainImages[currentBackground]);
    }
  }, [currentBackground, hasCustomDimensions]);

  const captureCanvasImage = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    setPreviewImage(dataUrl);
    setShowPreview(true);
  };

  useEffect(() => {
    setPrice(basePrice * quantity);
  }, [quantity, basePrice]);

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    setBasePrice(calculateTotalBasePrice(fabric));
    if (hasCustomDimensions) {
      setTimeout(() => drawCurtainCanvas(), 50);
    }
  };

  const handleMeasurementUnitChange = (value) => {
    if (value === "Ft" && measurementUnit === "Inch") {
      const feetWidth = Math.floor(displayWidth / 12);
      const inchesWidth = displayWidth % 12;
      const feetHeight = Math.floor(displayHeight / 12);
      const inchesHeight = displayHeight % 12;

      setWidth(feetWidth);
      setWidthInches(inchesWidth);
      setHeight(feetHeight);
      setHeightInches(inchesHeight);

      setDisplayWidth(feetWidth);
      setDisplayWidthInches(inchesWidth);
      setDisplayHeight(feetHeight);
      setDisplayHeightInches(inchesHeight);
    } else if (value === "Inch" && measurementUnit === "Ft") {
      const totalWidthInches = displayWidth * 12 + displayWidthInches;
      const totalHeightInches = displayHeight * 12 + displayHeightInches;

      setWidth(totalWidthInches);
      setWidthInches(0);
      setHeight(totalHeightInches);
      setHeightInches(0);

      setDisplayWidth(totalWidthInches);
      setDisplayWidthInches(0);
      setDisplayHeight(totalHeightInches);
      setDisplayHeightInches(0);
    }

    setMeasurementUnit(value);
    setHasCustomDimensions(true);

    setTimeout(() => drawCurtainCanvas(), 50);
  };

  const MAX_CANVAS_SIZE = 600; // Max renderable area in px

  const drawCurtainCanvas = () => {
    if (!canvasRef.current || !canvasContainerRef.current) return;
  
    const widthInInches =
      measurementUnit === "Ft"
        ? displayWidth * 12 + displayWidthInches
        : displayWidth;
    const heightInInches =
      measurementUnit === "Ft"
        ? displayHeight * 12 + displayHeightInches
        : displayHeight;
  
    const isValid = validateMeasurements({
      width: displayWidth,
      height: displayHeight,
      measurementUnit,
    });
  
    if (!isValid || widthInInches <= 0 || heightInInches <= 0) return;
  
    setIsCanvasLoading(true);
  
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
  
    container.style.aspectRatio = `${widthInInches / heightInInches}`;
  
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
  
    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
  
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, containerWidth, containerHeight);
  
    const combinationKey = `${selectedFabric.name}_${selectedHeading.name}`;
    const curtainImageSrc =
      predefinedCombinations[combinationKey] || selectedFabric.image;
  
    const curtainImage = new window.Image();
    curtainImage.crossOrigin = "anonymous";
    curtainImage.onload = () => {
      // Scale the image based on real dimensions
      const maxInches = Math.max(widthInInches, heightInInches, 100); // Avoid divide-by-zero or tiny rendering
      const scale = Math.min(
        (containerWidth * 0.8) / maxInches,
        (containerHeight * 0.8) / maxInches
      );
  
      const curtainWidthPx = widthInInches * scale;
      const curtainHeightPx = heightInInches * scale;
  
      const offsetX = (containerWidth - curtainWidthPx) / 2;
      const offsetY = (containerHeight - curtainHeightPx) / 2;
  
      ctx.drawImage(
        curtainImage,
        offsetX,
        offsetY,
        curtainWidthPx,
        curtainHeightPx
      );
  
      drawDimensionLines(
        ctx,
        containerWidth,
        containerHeight,
        widthInInches,
        heightInInches,
        curtainWidthPx,
        curtainHeightPx,
        offsetX,
        offsetY
      );
  
      setIsCanvasLoading(false);
    };
  
    curtainImage.src = curtainImageSrc;
    curtainImage.onerror = () => {
      setIsCanvasLoading(false);
    };
  };

  const drawDimensionLines = (
    ctx,
    canvasWidth,
    canvasHeight,
    widthInInches,
    heightInInches,
    curtainWidthPx,
    curtainHeightPx,
    offsetX,
    offsetY
  ) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
  
    // --- Width Line ---
    const topLineY = offsetY - 20;
    ctx.beginPath();
    ctx.moveTo(offsetX, topLineY);
    ctx.lineTo(offsetX + curtainWidthPx, topLineY);
    ctx.stroke();
  
    drawArrow(ctx, offsetX, topLineY, offsetX + 20, topLineY);
    drawArrow(ctx, offsetX + curtainWidthPx, topLineY, offsetX + curtainWidthPx - 20, topLineY);
  
    const widthLabel =
      measurementUnit === "Ft"
        ? `${displayWidth}ft ${displayWidthInches}in`
        : `${widthInInches} Inch`;
    ctx.fillText(widthLabel, offsetX + curtainWidthPx / 2 - 40, topLineY - 10);
  
    // --- Height Line ---
    const rightLineX = offsetX + curtainWidthPx + 20;
    ctx.beginPath();
    ctx.moveTo(rightLineX, offsetY);
    ctx.lineTo(rightLineX, offsetY + curtainHeightPx);
    ctx.stroke();
  
    drawArrow(ctx, rightLineX, offsetY, rightLineX, offsetY + 20);
    drawArrow(ctx, rightLineX, offsetY + curtainHeightPx, rightLineX, offsetY + curtainHeightPx - 20);
  
    const heightLabel =
      measurementUnit === "Ft"
        ? `${displayHeight}ft ${displayHeightInches}in`
        : `${heightInInches} Inch`;
    ctx.save();
    ctx.translate(rightLineX + 20, offsetY + curtainHeightPx / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(heightLabel, 0, 0);
    ctx.restore();
  };

  const drawArrow = (ctx, fromX, fromY, toX, toY) => {
    const headLength = 10;
    const angle = Math.atan2(toY - fromY, toX - fromX);

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headLength * Math.cos(angle - Math.PI / 6),
      toY - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      toX - headLength * Math.cos(angle + Math.PI / 6),
      toY - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalBasePrice = (fabric = selectedFabric) => {
    let total = fabric.price;
    total += selectedHeading.price || 0;
    total += selectedPlacement.price || 0;
    total += selectedMount.price || 0;
    total += selectedPanel.price || 0;
    total += selectedTieback.price || 0;
    total += selectedValance.price || 0;
    total += selectedLiner.price || 0;
    return total;
  };

  useEffect(() => {
    const newBasePrice = calculateTotalBasePrice();
    setBasePrice(newBasePrice);
  }, [
    selectedFabric,
    selectedHeading,
    selectedPlacement,
    selectedMount,
    selectedPanel,
    selectedTieback,
    selectedValance,
    selectedLiner,
  ]);

  useEffect(() => {
    setCurrentImage(mainImages[currentBackground]);
  }, [currentBackground]);

  const handleFabricHover = (fabric) => {
    if (!fabric || hasCustomDimensions) return;
    setCurrentImage(fabric.image);
  };

  const handleFabricLeave = () => {
    if (!hasCustomDimensions) {
      setCurrentImage(mainImages[currentBackground]);
    }
  };

  useEffect(() => {
    if (hasCustomDimensions) {
      setCurrentImage(null);
    }
  }, [hasCustomDimensions]);

  const handleMeasurementChange = (value, setter, displaySetter, field) => {
    const numValue = parseInt(value) || 0;

    setter(numValue);

    const isValid = validateMeasurements({
      width: field === "width" ? numValue : displayWidth,
      height: field === "height" ? numValue : displayHeight,
      measurementUnit,
    });

    if (isValid) {
      setHasCustomDimensions(true);
      if (
        field === "width" ||
        field === "height" ||
        field === "widthInches" ||
        field === "heightInches"
      ) {
        setTimeout(() => drawCurtainCanvas(), 50);
      }
    }
  };

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row bg-white ${
          showPreview ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="w-full lg:w-1/2 px-4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-4 h-full">
            <div className="flex flex-row md:flex-col gap-2">
              {mainImages.map((img, index) => (
                <div
                  key={index}
                  className={`border rounded-md cursor-pointer hover:border-pink-500 ${
                    currentBackground === index
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setCurrentBackground(index)}
                >
                  <Image
                    src={img}
                    alt={`Room ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                    width={120}
                    height={120}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={90}
                  />
                </div>
              ))}
            </div>
            <div
              className="relative w-full border border-gray-200 rounded-md overflow-hidden"
              ref={canvasContainerRef}
              style={{
                maxHeight: "500px",
                aspectRatio: `${
                  measurementUnit === "Ft"
                    ? displayWidth * 12 + displayWidthInches
                    : displayWidth
                } / ${
                  measurementUnit === "Ft"
                    ? displayHeight * 12 + displayHeightInches
                    : displayHeight
                }`,
              }}
            >
              {hasCustomDimensions && currentImage === null ? (
                <>
                  {isCanvasLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
                    </div>
                  )}
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full cursor-pointer"
                    onClick={captureCanvasImage}
                    style={{ minHeight: "300px" }}
                  />

                  <div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 text-sm font-medium bg-white/80 rounded-full cursor-pointer hover:bg-white"
                    onClick={captureCanvasImage}
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <ZoomIn className="w-4 h-4" />
                      <p>Click for personalized view</p>
                    </div>
                  </div>
                </>
              ) : (
                currentImage && (
                  <Image
                    src={currentImage}
                    alt={`Fabric Images`}
                    className="w-full h-full object-cover rounded"
                    width={65}
                    height={65}
                    priority
                  />
                )
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 border border-gray-200 relative">
          <h1 className="text-xl font-semibold mb-1">
            Custom Drapes - Flat Panel
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-pink-500 fill-pink-500"
                  />
                ))}
              <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
            </div>
            <span className="ml-2 text-sm text-pink-700">21 reviews</span>
          </div>
          <div className="text-xl font-semibold mb-4">${price.toFixed(2)}</div>

          <div className="flex items-center bg-[#fff2d8] p-3 mb-6 rounded-md">
            <span className="mr-2">
              <Truck className="w-4 h-4" />
            </span>
            <p className="text-sm">Expected Delivery by 11 Apr 2025, Fri</p>
          </div>

          <h2 className="font-semibold">
            Pinch pleat custom drapes have fabric gathered at heading for a
            structured appearance.
          </h2>

          <div className="grid grid-cols-2 gap-y-4 mb-6 mt-5">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <Bolt className="w-4 h-4 text-pink-700" />
              </div>
              <span>Blended woven polyester</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <Circle className="w-4 h-4 text-pink-700" />
              </div>
              <span>Premium silver eyelets</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <Shirt className="w-4 h-4 text-pink-700" />
              </div>
              <span>Washable fabric</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <Palette className="w-4 h-4 text-pink-700" />
              </div>
              <span>Multiple designs & colors</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <Ruler className="w-4 h-4 text-pink-700" />
              </div>
              <span>Customizable sizes</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <ThumbsUp className="w-4 h-4 text-pink-700" />
              </div>
              <span>Easy installation</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex mb-4 align-middle items-center gap-5">
              <label className="font-medium">Measurement Unit</label>
              <Select
                value={measurementUnit}
                onValueChange={handleMeasurementUnitChange}
              >
                <SelectTrigger
                  className="w-[180px]"
                  aria-label="Select measurement unit"
                >
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Inch">Inch</SelectItem>
                  <SelectItem value="Ft">Ft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              {measurementUnit === "Inch" && (
                <div className="flex flex-row justify-between w-full gap-3">
                  <div className="w-full">
                    <label htmlFor="width" className="block font-semibold mb-2">
                      Width{" "}
                      <span className="text-xs text-pink-700">
                        ({measurementUnit})
                      </span>
                    </label>
                    <Input
                      id="width"
                      type="text"
                      value={displayWidth}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setDisplayWidth(val);
                      }}
                      onBlur={(e) => {
                        handleMeasurementChange(
                          e.target.value,
                          setWidth,
                          setDisplayWidth,
                          "width"
                        );
                      }}
                      className="w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="height"
                      className="block font-semibold mb-2"
                    >
                      Height
                      {measurementUnit === "Inch" && (
                        <span className="text-pink-700 ml-1 text-xs">
                          (Inch)
                        </span>
                      )}
                    </label>
                    <Input
                      id="height"
                      type="text"
                      value={displayHeight}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setDisplayHeight(val);
                      }}
                      onBlur={(e) => {
                        handleMeasurementChange(
                          e.target.value,
                          setHeight,
                          setDisplayHeight,
                          "height"
                        );
                      }}
                      className="w-full"
                    />
                  </div>
                </div>
              )}

              {measurementUnit === "Ft" && (
                <div className="w-full align-middle items-center">
                  <div className="flex flex-row gap-3 align-middle items-center">
                    <div className="w-full">
                      <label
                        htmlFor="width"
                        className="block font-semibold mb-2"
                      >
                        Width{" "}
                        <span className="text-xs text-pink-700">
                          ({measurementUnit})
                        </span>
                      </label>

                      <Input
                        id="width"
                        type="text"
                        value={displayWidth}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          setDisplayWidth(val);
                        }}
                        onBlur={(e) => {
                          handleMeasurementChange(
                            e.target.value,
                            setWidth,
                            setDisplayWidth,
                            "width"
                          );
                        }}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="widthInches"
                        className="block font-semibold mb-2"
                      >
                        {" "}
                        <span className="text-xs text-pink-700">(Inch)</span>
                      </label>
                      <Input
                        id="widthInches"
                        type="text"
                        value={displayWidthInches}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          setDisplayWidthInches(val);
                        }}
                        onBlur={(e) => {
                          handleMeasurementChange(
                            e.target.value,
                            setWidthInches,
                            setDisplayWidthInches,
                            "widthInches"
                          );
                        }}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="height"
                          className="block font-semibold mb-2"
                        >
                          Height
                          <span className="text-pink-700 ml-1 text-xs">
                            (Ft)
                          </span>
                        </label>
                        <Input
                          id="height"
                          type="text"
                          value={displayHeight}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            setDisplayHeight(val);
                          }}
                          onBlur={(e) => {
                            handleMeasurementChange(
                              e.target.value,
                              setHeight,
                              setDisplayHeight,
                              "height"
                            );
                          }}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="heightInches"
                        className="block font-semibold mb-2"
                      >
                        <span className="text-pink-700 ml-1 text-xs">
                          (Inch)
                        </span>
                      </label>
                      <Input
                        id="heightInches"
                        type="text"
                        value={displayHeightInches}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          setDisplayHeightInches(val);
                        }}
                        onBlur={(e) => {
                          handleMeasurementChange(
                            e.target.value,
                            setHeightInches,
                            setDisplayHeightInches,
                            "heightInches"
                          );
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {measurementError && (
                <p className="text-sm text-pink-500 mt-2">{measurementError}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="quantity" className="font-semibold text-black">
                Quantity
              </label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="rounded-full"
                  aria-label="Reduce Quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(parseInt(e.target.value) || 1)
                  }
                  className="w-20 mx-2 text-center"
                  min={1}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Add Quantity"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2" id="fabric-section">
                Fabric/Texture
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {fabricTextures.map((fabric, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedFabric.name === fabric.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleFabricChange(fabric)}
                      onMouseEnter={(e) => handleFabricHover(fabric, e)}
                      onMouseLeave={handleFabricLeave}
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={fabric.image}
                          alt={fabric.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                        {fabricTextures.length === index + 1 && (
                          <div
                            className="absolute inset-0 flex items-center justify-end p-1"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowFabricSheet(true);
                            }}
                          >
                            <div className="bg-white p-1 rounded-full">
                              <ArrowRightIcon className="h-4 w-4 text-black" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-1 text-sm text-center">{fabric.name}</div>
                    <div
                      className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                        selectedFabric.name === fabric.name ? "" : "opacity-0"
                      }`}
                    >
                      ${fabric.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block  mb-2">Heading Style</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {headingStyles.map((style, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedHeading.name === style.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedHeading(style)}
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={style.image}
                          alt={style.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                        {index === 5 && (
                          <div
                            className="absolute inset-0 flex items-center justify-end p-1"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowHeadingSheet(true);
                            }}
                          >
                            <div className="bg-white p-1 rounded-full">
                              <ArrowRightIcon className="h-4 w-4 text-black" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{style.name}</div>
                    {style.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedHeading.name === style.name ? "" : "opacity-0"
                        }`}
                      >
                        ${style.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block  mb-2">Placement of Curtain</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {placementOptions.map((option, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedPlacement.name === option.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedPlacement(option)}
                    >
                      <div className="aspect-square">
                        <Image
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{option.name}</div>
                    {option.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedPlacement.name === option.name
                            ? ""
                            : "opacity-0"
                        }`}
                      >
                        ${option.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block  mb-2">Mount Option</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {mountOptions.map((option, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedMount.name === option.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedMount(option)}
                    >
                      <div className="aspect-square">
                        <Image
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{option.name}</div>
                    {option.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedMount.name === option.name ? "" : "opacity-0"
                        }`}
                      >
                        ${option.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block  mb-2">Panel Selection</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {panelOptions.map((option, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedPanel.name === option.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedPanel(option)}
                    >
                      <div className="aspect-square">
                        <Image
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{option.name}</div>
                    {option.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedPanel.name === option.name ? "" : "opacity-0"
                        }`}
                      >
                        ${option.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block  mb-2">Tiebacks</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {tiebackOptions.map((option, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedTieback.name === option.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedTieback(option)}
                    >
                      <div className="aspect-square">
                        <Image
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{option.name}</div>
                    {option.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedTieback.name === option.name
                            ? ""
                            : "opacity-0"
                        }`}
                      >
                        ${option.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-4">
                {valanceOptions.map((option, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedValance.name === option.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedValance(option)}
                    >
                      <div className="aspect-square">
                        <Image
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{option.name}</div>
                    {option.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedValance.name === option.name
                            ? ""
                            : "opacity-0"
                        }`}
                      >
                        ${option.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {selectedValance.hasValance && (
                <div className="mt-4 bg-gray-100 p-4 rounded-md">
                  <div className="flex flex-row gap-3">
                    <div className="mr-3">
                      <label className="block font-medium mb-2">
                        Valance Height{" "}
                        <span className="text-pink-700 text-sm">
                          ({measurementUnit})
                        </span>
                      </label>
                      <Select
                        value={valanceHeight.toString()}
                        onValueChange={(value) =>
                          setValanceHeight(parseInt(value))
                        }
                      >
                        <SelectTrigger className="w-full bg-white text-black border border-gray-300 shadow-sm hover:border-gray-400 focus:ring-2 focus:ring-blue-500 rounded-md">
                          <SelectValue placeholder="Select height" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border border-gray-200 shadow-lg rounded-md">
                          <SelectItem
                            value="12"
                            className="hover:bg-gray-100 cursor-pointer"
                          >
                            12
                          </SelectItem>
                          <SelectItem
                            value="16"
                            className="hover:bg-gray-100 cursor-pointer"
                          >
                            16
                          </SelectItem>
                          <SelectItem
                            value="20"
                            className="hover:bg-gray-100 cursor-pointer"
                          >
                            20
                          </SelectItem>
                          <SelectItem
                            value="24"
                            className="hover:bg-gray-100 cursor-pointer"
                          >
                            24
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <span className="border-1 mr-3"></span>
                    <div>
                      <label className="block font-medium mb-2">
                        Fabric/Texture
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="border-2 border-pink-500 rounded-md overflow-hidden w-20 h-20">
                          <Image
                            src={selectedFabric.image}
                            alt={selectedFabric.name}
                            className="w-full h-full object-cover"
                            width={74}
                            height={74}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-medium">{selectedFabric.name}</p>
                          <p className="text-sm bg-pink-100 p-1 rounded-sm text-center">
                            ${selectedFabric.price.toFixed(2)}
                          </p>
                          <div
                            className="ml-2 text-pink-700 underline text-sm cursor-pointer"
                            onClick={() => {
                              setShowFabricSheet(true);
                            }}
                          >
                            Change
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block  mb-2">Liner</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {linerOptions.map((option, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div
                      className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                        selectedLiner.name === option.name
                          ? "border-pink-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => {
                        setSelectedLiner(option);
                        setCurrentImage(option.image);
                      }}
                    >
                      <div className="aspect-square">
                        <Image
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                    <div className="p-1 text-xs text-center">{option.name}</div>
                    {option.price > 0 && (
                      <div
                        className={`bg-pink-50 text-center rounded-lg text-xs font-semibold py-1 ${
                          selectedLiner.name === option.name ? "" : "opacity-0"
                        }`}
                      >
                        ${option.price.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white py-4 border-t border-gray-200 z-10 mt-6 shadow-2xl p-5">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">${price.toFixed(2)}</div>
              <Button
                size="lg"
                className="bg-pink-700 hover:bg-pink-800 text-white px-8 shadow-lg transform hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <Sheet open={showFabricSheet} onOpenChange={setShowFabricSheet}>
          <SheetTitle></SheetTitle>
          <SheetContent side="right" className="w-full sm:w-1/3 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Fabric/Texture</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {fabricTextures.slice(0, 5).map((fabric, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-md overflow-hidden cursor-pointer ${
                    selectedFabric.name === fabric.name
                      ? "ring-2 ring-pink-500"
                      : ""
                  }`}
                  onClick={() => {
                    handleFabricChange(fabric);
                    setShowFabricSheet(false);
                  }}
                >
                  <div className="aspect-square">
                    <Image
                      src={fabric.image}
                      alt={fabric.name}
                      className="w-full h-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium">{fabric.name}</p>
                    <p className="text-sm text-gray-600">
                      ${fabric.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Sheet open={showHeadingSheet} onOpenChange={setShowHeadingSheet}>
          <SheetTitle></SheetTitle>
          <SheetContent side="right" className="w-full sm:w-1/3 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Heading Styles</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {headingStyles.map((style, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-md overflow-hidden cursor-pointer ${
                    selectedHeading.name === style.name
                      ? "ring-2 ring-pink-500"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedHeading(style);
                    setShowHeadingSheet(false);
                  }}
                >
                  <div className="aspect-square">
                    <Image
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium">{style.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {showPreview && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-5/6 h-5/6 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
              <Button
                onClick={() => setShowPreview(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close the preview section"
              >
                <X className="w-5 h-5 text-black" />
              </Button>

              <div className="flex-1 flex items-center justify-center bg-gray-50 overflow-auto">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Custom Curtain Preview"
                    className="w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-500">
                    <p>Preview not available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
