"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  X,
  Minus,
  Plus,
  Info,
  Star,
  ZoomIn,
  Circle,
  Shirt,
  Palette,
  Ruler,
  ThumbsUp,
  Bolt,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";

const mainImages = [
  "/productImages/product1.jpg",
  "/productImages/product2.png",
  "/productImages/product3.webp",
  "/productImages/product4.webp",
];

const fabricTextures = [
  {
    name: "Cruze Daizy",
    image: "/fabricImages/fabric1.webp",
    price: 141.92,
    color: "#f0f0e8",
  },
  {
    name: "Cruze Tortilla",
    image: "/fabricImages/fabric2.webp",
    price: 141.92,
    color: "#e0d1c3",
  },
  {
    name: "Charms Frost",
    image: "/fabricImages/fabric3.webp",
    price: 145.92,
    color: "#d2d2d2",
  },
  {
    name: "Nevada Malabar",
    image: "/fabricImages/fabric4.webp",
    price: 149.92,
    color: "#c8ccc8",
  },
  {
    name: "Daventry Coconut",
    image: "/fabricImages/fabric5.webp",
    price: 152.92,
    color: "#eeeeea",
  },
  {
    name: "Austin Desert Tan",
    image: "/fabricImages/fabric6.webp",
    price: 141.92,
    color: "#7f7e74",
  },
  {
    name: "Trivia Cookie",
    image: "/fabricImages/fabric7.webp",
    price: 155.92,
    color: "#8c8a7e",
  },
  {
    name: "Petals Closet",
    image: "/fabricImages/fabric8.webp",
    price: 159.92,
    color: "#bfbeba",
  },
  {
    name: "Cruze Bordeaux",
    image: "/fabricImages/fabric9.webp",
    price: 148.92,
    color: "#9c8e83",
  },
];

const headingStyles = [
  {
    name: "Flat Panel",
    image: "/headingImages/heading1.webp",
    pattern: "flat",
  },
  {
    name: "Pinch Pleat",
    image: "/headingImages/heading2.webp",
    pattern: "pinch",
  },
  {
    name: "Grommet",
    image: "/headingImages/heading3.webp",
    pattern: "grommet",
  },
  {
    name: "Ripple Folds",
    image: "/headingImages/heading4.webp",
    pattern: "ripple",
  },
  {
    name: "Tailored Pleats",
    image: "/headingImages/heading5.webp",
    pattern: "tailored",
  },
  { name: "Goblet", image: "/headingImages/heading6.webp", pattern: "goblet" },
];

const placementOptions = [
  { name: "Window", image: "/placement/placement1.webp" },
  { name: "Door", image: "/placement/placement2.webp" },
];

const mountOptions = [
  { name: "Outside", image: "/mount/moun1.webp" },
  { name: "Inside", image: "/mount/mount2.webp" },
];

const panelOptions = [
  { name: "Pair of Panel", image: "/panel/panel1.webp", panels: 2 },
  {
    name: "Single Panel (Left)",
    image: "/panel/panel2.webp",
    panels: 1,
    side: "left",
  },
  {
    name: "Single Panel (Right)",
    image: "/panel/panel3.webp",
    panels: 1,
    side: "right",
  },
];

const tiebackOptions = [
  { name: "No", image: "/tiebacks/tiebacks1.webp", hasTieback: false },
  {
    name: "3 Inch Wide Set of 2",
    image: "/tiebacks/tiebacks2.webp",
    hasTieback: true,
  },
];

const valanceOptions = [
  { name: "No Valance", image: "/valance/valance1.webp", hasValance: false },
  {
    name: "Tailored Pleat Valance",
    image: "/valance/valance2.webp",
    hasValance: true,
    style: "tailored",
  },
  {
    name: "Inverted Pleat Valance",
    image: "/valance/valance3.webp",
    hasValance: true,
    style: "inverted",
  },
  {
    name: "Pinch Pleat Valance",
    image: "/valance/valance4.webp",
    hasValance: true,
    style: "pinched",
  },
];

const linerOptions = [
  { name: "No", image: "/liner/liner1.webp", hasLiner: false },
  {
    name: "Liner Option 1",
    image: "/liner/liner2.webp",
    hasLiner: true,
    density: "light",
  },
  {
    name: "Liner Option 2",
    image: "/liner/liner3.webp",
    hasLiner: true,
    density: "heavy",
  },
];

export default function ProductSpecification() {
  const [currentImage, setCurrentImage] = useState(mainImages[0]);
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
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showFabricSheet, setShowFabricSheet] = useState(false);
  const [measurementUnit, setMeasurementUnit] = useState("Inch");
  const [valanceHeight, setValanceHeight] = useState(1);
  const [showDimensions, setShowDimensions] = useState(true);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [dimensionError, setDimensionError] = useState(false);
  const [showHeadingSheet, setShowHeadingSheet] = useState(false);
  const [canvasLoading, setCanvasLoading] = useState(true);

  const rightContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const zoomedCanvasRef = useRef(null);

  useEffect(() => {
    setWidth(48);
    setHeight(48);
    setWidthInches(6);
    setHeightInches(0);
  }, []);

  useEffect(() => {
    setCanvasLoading(true);
  drawCurtainCanvas();
  setTimeout(() => setCanvasLoading(false), 100);
  }, [
    width,
    height,
    widthInches,
    heightInches,
    measurementUnit,
    selectedFabric,
    selectedHeading,
    selectedPanel,
    selectedValance,
    valanceHeight,
    selectedTieback,
    selectedMount,
    currentBackground,
  ]);

  useEffect(() => {
    setPrice(basePrice * quantity);
  }, [quantity, basePrice]);

  useEffect(() => {
    drawCurtainCanvas();
  }, [
    width,
    height,
    widthInches,
    heightInches,
    measurementUnit,
    selectedFabric,
    selectedHeading,
    selectedPanel,
    selectedValance,
    valanceHeight,
    selectedTieback,
    selectedMount,
    currentBackground,
  ]);

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    setBasePrice(fabric.price);
  };

  const handleMeasurementUnitChange = (value) => {
    setMeasurementUnit(value);
    if (value === "Ft" && measurementUnit === "Inch") {
      const feetWidth = Math.floor(width / 12);
      const inchesWidth = width % 12;
      setWidth(feetWidth);
      setWidthInches(inchesWidth);

      const feetHeight = Math.floor(height / 12);
      const inchesHeight = height % 12;
      setHeight(feetHeight);
      setHeightInches(inchesHeight);
    } else if (value === "Inch" && measurementUnit === "Ft") {
      setWidth(width * 12 + widthInches);
      setHeight(height * 12 + heightInches);
      setWidthInches(0);
      setHeightInches(0);
    }
  };

  const handleZoomedCanvas = () => {
    if (!zoomedCanvasRef.current) return;

    const canvas = zoomedCanvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set large dimensions for high detail
    canvas.width = 1200;
    canvas.height = 800;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get total dimensions in inches
    let totalWidthInches, totalHeightInches;
    if (measurementUnit === "Inch") {
      totalWidthInches = width;
      totalHeightInches = height;
    } else {
      totalWidthInches = width * 12 + widthInches;
      totalHeightInches = height * 12 + heightInches;
    }

    // Draw room background
    const backgroundImage = new Image();
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      // Calculate curtain size with proper scaling
      const wallWidth = canvas.width * 0.85;
      const aspectRatio = totalHeightInches / totalWidthInches;
      const curtainWidth = Math.min(
        wallWidth,
        (totalWidthInches / 120) * wallWidth
      );
      const curtainHeight = curtainWidth * aspectRatio;

      // Position the curtain
      const curtainX = (canvas.width - curtainWidth) / 2;
      const curtainY = canvas.height * 0.15;

      // Draw all curtain elements using the same helper functions
      drawCurtainComponents(
        ctx,
        curtainX,
        curtainY,
        curtainWidth,
        curtainHeight,
        totalWidthInches,
        totalHeightInches
      );
    };

    // Set background image source
    backgroundImage.src = mainImages[currentBackground];
  };

  const drawCurtainCanvas = () => {
    if (!canvasRef.current || !canvasContainerRef.current) return;

    const containerWidth = canvasContainerRef.current.clientWidth;
    const containerHeight = containerWidth;

    canvasRef.current.width = containerWidth;
    canvasRef.current.height = containerHeight;

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, containerWidth, containerHeight);

    let totalWidthInches, totalHeightInches;
    if (measurementUnit === "Inch") {
      totalWidthInches = width;
      totalHeightInches = height;
    } else {
      totalWidthInches = width * 12 + widthInches;
      totalHeightInches = height * 12 + heightInches;
    }

    const backgroundImage = new window.Image();
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, containerWidth, containerHeight);

      const wallWidth = containerWidth * 0.85;
      const wallHeight = containerHeight * 0.75;

      const aspectRatio = totalHeightInches / totalWidthInches;
      const curtainWidth = Math.min(
        wallWidth,
        (totalWidthInches / 120) * wallWidth
      );
      const curtainHeight = curtainWidth * aspectRatio;

      const curtainX = (containerWidth - curtainWidth) / 2;
      const curtainY = containerHeight * 0.15;

      drawCurtainComponents(
        ctx,
        curtainX,
        curtainY,
        curtainWidth,
        curtainHeight,
        totalWidthInches,
        totalHeightInches
      );
    };

    backgroundImage.src = mainImages[currentBackground];
  };

  const drawCurtainComponents = (
    ctx,
    curtainX,
    curtainY,
    curtainWidth,
    curtainHeight,
    totalWidthInches,
    totalHeightInches
  ) => {
    ctx.fillStyle = "#5a3921";
    ctx.fillRect(curtainX - 20, curtainY - 10, curtainWidth + 40, 10);

    ctx.beginPath();
    ctx.arc(curtainX - 15, curtainY - 5, 10, 0, Math.PI * 2);
    ctx.arc(curtainX + curtainWidth + 15, curtainY - 5, 10, 0, Math.PI * 2);
    ctx.fill();

    drawValance(
      ctx,
      curtainX,
      curtainY,
      curtainWidth,
      curtainHeight,
      totalHeightInches
    );
    drawCurtainPanels(ctx, curtainX, curtainY, curtainWidth, curtainHeight);

    if (showDimensions) {
      drawDimensions(
        ctx,
        curtainX,
        curtainY,
        curtainWidth,
        curtainHeight,
        totalWidthInches,
        totalHeightInches
      );
    }
  };

  const drawValance = (
    ctx,
    curtainX,
    curtainY,
    curtainWidth,
    curtainHeight,
    totalHeightInches
  ) => {
    if (selectedValance.hasValance) {
      const valanceHeightPixels =
        (valanceHeight / totalHeightInches) * curtainHeight;
      ctx.fillStyle = selectedFabric.color;
      ctx.fillRect(curtainX, curtainY, curtainWidth, valanceHeightPixels);

      // Add valance details based on style
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      if (selectedValance.style === "tailored") {
        for (let i = 0; i < curtainWidth; i += 20) {
          ctx.fillRect(curtainX + i, curtainY, 10, valanceHeightPixels);
        }
      } else if (selectedValance.style === "pinched") {
        for (let i = 0; i < curtainWidth; i += 40) {
          ctx.fillRect(curtainX + i, curtainY, 2, valanceHeightPixels);
          ctx.fillRect(curtainX + i + 5, curtainY, 2, valanceHeightPixels);
          ctx.fillRect(curtainX + i + 10, curtainY, 2, valanceHeightPixels);
        }
      }
    }
  };

  // Draw curtain panels
  const drawCurtainPanels = (
    ctx,
    curtainX,
    curtainY,
    curtainWidth,
    curtainHeight
  ) => {
    const panelCount = selectedPanel.panels;
    const panelWidth = curtainWidth / (panelCount === 2 ? 2 : 1);

    for (let i = 0; i < panelCount; i++) {
      let panelX;

      if (panelCount === 2) {
        panelX = curtainX + i * panelWidth;
      } else if (selectedPanel.side === "left") {
        panelX = curtainX;
      } else {
        panelX = curtainX + curtainWidth - panelWidth;
      }

      // Main curtain
      ctx.fillStyle = selectedFabric.color;
      ctx.fillRect(panelX, curtainY, panelWidth, curtainHeight);

      drawFoldPattern(ctx, panelX, curtainY, panelWidth, curtainHeight);
      drawTieback(
        ctx,
        panelX,
        curtainY,
        panelWidth,
        curtainHeight,
        i,
        panelCount
      );
    }
  };

  // Draw fold pattern based on heading style
  const drawFoldPattern = (
    ctx,
    panelX,
    curtainY,
    panelWidth,
    curtainHeight
  ) => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";

    switch (selectedHeading.pattern) {
      case "pinch":
        for (let x = panelX + 20; x < panelX + panelWidth; x += 40) {
          ctx.fillRect(x, curtainY, 3, curtainHeight);
          ctx.fillRect(x + 5, curtainY, 3, curtainHeight);
          ctx.fillRect(x + 10, curtainY, 3, curtainHeight);
        }
        break;
      case "grommet":
        for (let x = panelX + 20; x < panelX + panelWidth; x += 40) {
          ctx.beginPath();
          ctx.arc(x, curtainY + 15, 8, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      case "ripple":
        ctx.beginPath();
        ctx.moveTo(panelX, curtainY);
        for (let x = panelX; x < panelX + panelWidth; x += 20) {
          ctx.quadraticCurveTo(x + 10, curtainY + 15, x + 20, curtainY);
        }
        ctx.lineTo(panelX + panelWidth, curtainHeight + curtainY);
        ctx.lineTo(panelX, curtainHeight + curtainY);
        ctx.closePath();
        ctx.fillStyle = "rgba(0,0,0,0.03)";
        ctx.fill();
        break;
      case "flat":
      default:
        for (let x = panelX + 20; x < panelX + panelWidth; x += 40) {
          ctx.fillRect(x, curtainY, 2, curtainHeight);
        }
    }
  };

  // Draw tieback if selected
  const drawTieback = (
    ctx,
    panelX,
    curtainY,
    panelWidth,
    curtainHeight,
    panelIndex,
    panelCount
  ) => {
    if (selectedTieback.hasTieback) {
      const tiebackY = curtainY + curtainHeight * 0.6;
      ctx.fillStyle = "#5a3921";
      if (
        panelIndex === 0 &&
        (panelCount === 2 || selectedPanel.side === "left")
      ) {
        // Left panel tieback
        ctx.fillRect(panelX + 20, tiebackY, 15, 3);
        ctx.beginPath();
        ctx.arc(panelX + 28, tiebackY + 1.5, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      if (
        panelIndex === 1 ||
        (panelCount === 1 && selectedPanel.side === "right")
      ) {
        // Right panel tieback
        ctx.fillRect(panelX + panelWidth - 35, tiebackY, 15, 3);
        ctx.beginPath();
        ctx.arc(panelX + panelWidth - 28, tiebackY + 1.5, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  // Draw dimensions
  const drawDimensions = (
    ctx,
    curtainX,
    curtainY,
    curtainWidth,
    curtainHeight,
    totalWidthInches,
    totalHeightInches
  ) => {
    // Format the dimensions text
    let displayWidth, displayHeight;
    if (measurementUnit === "Inch") {
      displayWidth = `${totalWidthInches} in`;
      displayHeight = `${totalHeightInches} in`;
    } else {
      const feet = Math.floor(totalWidthInches / 12);
      const inches = totalWidthInches % 12;
      displayWidth = `${feet} ft ${inches} in`;

      const heightFeet = Math.floor(totalHeightInches / 12);
      const heightInches = totalHeightInches % 12;
      displayHeight = `${heightFeet} ft ${heightInches} in`;
    }

    // Draw dimensions with contrasting background for visibility
    drawDimensionLine(
      ctx,
      curtainX,
      curtainY + curtainHeight + 20,
      curtainWidth,
      displayWidth,
      "horizontal"
    );
    drawDimensionLine(
      ctx,
      curtainX + curtainWidth + 20,
      curtainY,
      curtainHeight,
      displayHeight,
      "vertical"
    );
  };

  // Helper for drawing dimension lines with better visibility
  const drawDimensionLine = (ctx, x, y, length, text, orientation) => {
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    if (orientation === "horizontal") {
      // Draw dimension line
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + length, y);
      ctx.stroke();

      // Draw arrows
      ctx.beginPath();
      ctx.moveTo(x, y - 5);
      ctx.lineTo(x, y + 5);
      ctx.moveTo(x + length, y - 5);
      ctx.lineTo(x + length, y + 5);
      ctx.stroke();

      // Draw text with background for better visibility
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      const textWidth = ctx.measureText(text).width + 10;
      ctx.fillRect(x + length / 2 - textWidth / 2, y + 5, textWidth, 20);

      ctx.fillStyle = "#000";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(text, x + length / 2, y + 20);
    } else {
      // Draw vertical dimension line
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + length);
      ctx.stroke();

      // Draw arrows
      ctx.beginPath();
      ctx.moveTo(x - 5, y);
      ctx.lineTo(x + 5, y);
      ctx.moveTo(x - 5, y + length);
      ctx.lineTo(x + 5, y + length);
      ctx.stroke();

      // Draw text with background for better visibility
      ctx.save();
      ctx.translate(x + 20, y + length / 2);
      ctx.rotate(-Math.PI / 2);

      ctx.fillStyle = "rgba(255,255,255,0.7)";
      const textWidth = ctx.measureText(text).width + 10;
      ctx.fillRect(-textWidth / 2, -20, textWidth, 20);

      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(text, 0, -5);
      ctx.restore();
    }
  };

  const validateDimensions = (value, type) => {
    const MIN_WIDTH = 48;
    const MAX_WIDTH = 300;
    const MIN_HEIGHT = 12;
    const MAX_HEIGHT = 240;

    let totalInches;

    if (type === "width") {
      if (measurementUnit === "Inch") {
        totalInches = value;
      } else {
        totalInches = width * 12 + widthInches;
      }

      if (totalInches < MIN_WIDTH) {
        setDimensionError(true);
        return false;
      }
      if (totalInches > MAX_WIDTH) {
        setDimensionError(true);
        return false;
      }
    } else if (type === "height") {
      if (measurementUnit === "Inch") {
        totalInches = value;
      } else {
        totalInches = height * 12 + heightInches;
      }

      if (totalInches < MIN_HEIGHT) {
        setDimensionError(true);
        return false;
      }
      if (totalInches > MAX_HEIGHT) {
        setDimensionError(true);
        return false;
      }
    }

    return true;
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white">
      <div className="w-full lg:w-1/2 p-4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border border-gray-200">
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
                  width={65}
                  height={65}
                />
              </div>
            ))}
          </div>
          <div
            className="relative w-full aspect-square border border-gray-200 rounded-md overflow-hidden"
            ref={canvasContainerRef}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-pointer"
              onClick={() => setShowImageDialog(true)}
            />
            <div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 text-sm font-medium bg-white/80 rounded-full cursor-pointer hover:bg-white"
              onClick={() => setShowImageDialog(true)}
            >
              <div className="flex flex-row gap-2 items-center">
                <ZoomIn className="w-4 h-4" />
                <p>Click for personalized view</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 p-4 border border-gray-200 relative"
        ref={rightContainerRef}
      >
        <h1 className="text-xl font-semibold mb-1">
          Custom Drapes - Flat Panel
        </h1>
        <div className="flex items-center mb-4">
          <div className="flex">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="w-4 h-4 text-pink-500 fill-pink-500" />
              ))}
            <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
          </div>
          <span className="ml-2 text-sm text-pink-600">21 reviews</span>
        </div>
        <div className="text-xl font-semibold mb-4">${price.toFixed(2)}</div>

        <div className="flex items-center bg-[#fff2d8] p-3 mb-6 rounded-md">
          <span className="mr-2">🚚</span>
          <p className="text-sm">Expected Delivery by 18 Apr 2025, Fri</p>
        </div>

        <h2 className="font-semibold">
          Pinch pleat custom drapes have fabric gathered at heading for a
          structured appearance.
        </h2>

        <div className="grid grid-cols-2 gap-y-4 mb-6 mt-5">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
              <Bolt className="w-4 h-4 text-pink-500" />
            </div>
            <span>Blended woven polyester</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
              <Circle className="w-4 h-4 text-pink-500" />
            </div>
            <span>Premium silver eyelets</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
              <Shirt className="w-4 h-4 text-pink-500" />
            </div>
            <span>Washable fabric</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
              <Palette className="w-4 h-4 text-pink-500" />
            </div>
            <span>Multiple designs & colors</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
              <Ruler className="w-4 h-4 text-pink-500" />
            </div>
            <span>Customizable sizes</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
              <ThumbsUp className="w-4 h-4 text-pink-500" />
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ft">Ft</SelectItem>
                <SelectItem value="Inch">Inch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Width
                {measurementUnit === "Ft" && (
                  <span className="text-pink-500 ml-1">(Ft)</span>
                )}
                {measurementUnit === "Inch" && (
                  <span className="text-pink-500 ml-1">(Inch)</span>
                )}
              </label>
              <div className="flex gap-2">
                {measurementUnit === "Ft" && (
                  <>
                    <Input
                      type="number"
                      value={width}
                      onChange={(e) => {
                        const newValue = parseInt(e.target.value) || 0;
                        if (validateDimensions(newValue, "width")) {
                          setWidth(newValue);
                        }
                      }}
                      className="w-full"
                    />
                    <div className="ml-2 text-gray-500 w-10">(Ft)</div>
                    <Input
                      type="number"
                      value={widthInches}
                      onChange={(e) =>
                        setWidthInches(parseInt(e.target.value) || 0)
                      }
                      className="w-full"
                    />
                    <div className="ml-2 text-gray-500 w-10">(Inch)</div>
                  </>
                )}
                {measurementUnit === "Inch" && (
                  <>
                    <Input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(parseInt(e.target.value) || 0)}
                      className="w-full"
                    />
                    <div className="ml-2 text-gray-500 w-10">(Inch)</div>
                  </>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Height
                {measurementUnit === "Ft" && (
                  <span className="text-pink-500 ml-1">(Ft)</span>
                )}
                {measurementUnit === "Inch" && (
                  <span className="text-pink-500 ml-1">(Inch)</span>
                )}
              </label>
              <div className="flex gap-2">
                {measurementUnit === "Ft" && (
                  <>
                    <Input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                      className="w-full"
                    />
                    <div className="ml-2 text-gray-500 w-10">(Ft)</div>
                    <Input
                      type="number"
                      value={heightInches}
                      onChange={(e) =>
                        setHeightInches(parseInt(e.target.value) || 0)
                      }
                      className="w-full"
                    />
                    <div className="ml-2 text-gray-500 w-10">(Inch)</div>
                  </>
                )}
                {measurementUnit === "Inch" && (
                  <>
                    <Input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                      className="w-full"
                    />
                    <div className="ml-2 text-gray-500 w-10">(Inch)</div>
                  </>
                )}
              </div>
            </div>
            {dimensionError ? (
              <p className="text-sm text-pink-500">
                Allowed Width limit, Min : 4 and Max : 25
              </p>
            ) : null}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col gap-3 mb-6">
            <label className="font-semibold text-black">Quantity</label>
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
                onClick={() => handleQuantityChange(quantity + 1)}
                className="rounded-full"
                aria-label="Add Quantity"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Fabric/Texture</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {fabricTextures.slice(0, 5).map((fabric, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedFabric.name === fabric.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleFabricChange(fabric)}
                  onMouseEnter={() => setCurrentImage(fabric.image)}
                  onMouseLeave={() => setCurrentImage(selectedFabric.image)}
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
                  <div className="p-1 text-xs text-center truncate">
                    {fabric.name}
                  </div>
                  {selectedFabric.name === fabric.name ? (
                    <div className="text-pink-500 bg-pink-50 mt-1 text-center">
                      ${fabric.price.toFixed(2)}
                    </div>
                  ) : null}
                </div>
              ))}
              <div
                className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                  selectedFabric.name === fabricTextures[5].name
                    ? "border-pink-500"
                    : "border-gray-200"
                }`}
                onClick={() => setShowFabricSheet(true)}
              >
                <div className="aspect-square flex items-center justify-center relative">
                  <Image
                    src={fabricTextures[5].image}
                    alt={fabricTextures[5].name}
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Info className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-1 text-xs text-center">More</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Heading Style</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 overflow-x-auto">
              {headingStyles.slice(0, 5).map((style, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedHeading.name === style.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedHeading(style);
                    setCurrentImage(style.image);
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
                  <div className="p-1 text-xs text-center truncate">
                    {style.name}
                  </div>
                </div>
              ))}
              <div
                className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                  selectedHeading.name === headingStyles[5].name
                    ? "border-pink-500"
                    : "border-gray-200"
                }`}
                onClick={() => setShowHeadingSheet(true)}
              >
                <div className="aspect-square flex items-center justify-center relative">
                  <Image
                    src={headingStyles[5].image}
                    alt={headingStyles[5].name}
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Info className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-1 text-xs text-center">More</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Placement of Curtain
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {placementOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedPlacement.name === option.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedPlacement(option);
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
                  <div className="p-1 text-xs text-center">{option.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Mount Option</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {mountOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedMount.name === option.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedMount(option);
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
                  <div className="p-1 text-xs text-center">{option.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Panel Selection</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {panelOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedPanel.name === option.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedPanel(option);
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
                  <div className="p-1 text-xs text-center">{option.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Tiebacks</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {tiebackOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedTieback.name === option.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedTieback(option);
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
                  <div className="p-1 text-xs text-center">{option.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Valance</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-4">
              {valanceOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-md cursor-pointer overflow-hidden ${
                    selectedValance.name === option.name
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedValance(option);
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
                  <div className="p-1 text-xs text-center">{option.name}</div>
                </div>
              ))}
            </div>
            {selectedValance.hasValance && (
              <div className="mt-4">
                <label className="block text-gray-700 mb-2">
                  Valance Height
                </label>
                <div className="flex gap-2">
                  {measurementUnit === "Ft" ? (
                    <>
                      <Input
                        type="number"
                        value={valanceHeight}
                        onChange={(e) =>
                          setValanceHeight(parseInt(e.target.value) || 0)
                        }
                        className="w-full"
                      />
                      <div className="ml-2 text-gray-500 w-10">(Ft)</div>
                    </>
                  ) : (
                    <>
                      <Input
                        type="number"
                        value={valanceHeight}
                        onChange={(e) =>
                          setValanceHeight(parseInt(e.target.value) || 0)
                        }
                        className="w-full"
                      />
                      <div className="ml-2 text-gray-500 w-10">(Inch)</div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Liner</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {linerOptions.map((option, index) => (
                <div
                  key={index}
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
                  <div className="p-1 text-xs text-center">{option.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white py-4 border-t border-gray-200 z-10 mt-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">${price.toFixed(2)}</div>
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent className="sm:max-w-3xl">
          <div className="relative w-full aspect-video">
            {showImageDialog && (
              <canvas
                ref={zoomedCanvasRef}
                className="w-full h-full object-contain border rounded-lg"
              />
            )}
            {!showImageDialog && (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                <p>Loading preview...</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={showFabricSheet} onOpenChange={setShowFabricSheet}>
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
  );
}
