//? Input
const rawApiData = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 79.99,
        brand: "SoundMax",
        inStock: true,
        rating: 4.5,
        description: "Noise-cancelling wireless headphones with 30-hour battery life",
        features: ["Bluetooth 5.0", "Noise Cancellation", "Quick Charge"],
        colors: ["Black", "White", "Blue"]
    },
    {
        id: 2,
        name: "Stainless Steel Water Bottle",
        category: "Sports & Outdoors",
        price: 24.99,
        brand: "HydroFlask",
        inStock: true,
        rating: 4.7,
        description: "Insulated water bottle that keeps drinks cold for 24 hours",
        features: ["Double Wall Insulation", "BPA Free", "Leak Proof"],
        colors: ["Silver", "Black", "Blue", "Green"]
    },
    {
        id: 3,
        name: "Organic Cotton T-Shirt",
        category: "Clothing",
        price: 19.99,
        brand: "EcoWear",
        inStock: true,
        rating: 4.3,
        description: "Soft organic cotton t-shirt in various colors",
        "sizes": ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Navy", "Gray"]
    },
    {
        id: 4,
        name: "Smart Fitness Watch",
        category: "Electronics",
        price: 199.99,
        brand: "FitTech",
        inStock: false,
        rating: 4.6,
        description: "Advanced fitness tracker with heart rate monitoring and GPS",
        features: ["Heart Rate Monitor", "GPS", "Sleep Tracking", "Water Resistant"]
    },
    {
        id: 5,
        name: "Ceramic Coffee Mug Set",
        category: "Home & Kitchen",
        price: 29.99,
        brand: "HomeEssentials",
        inStock: true,
        rating: 4.4,
        description: "Set of 4 ceramic mugs with comfortable handles",
        features: ["Dishwasher Safe", "Microwave Safe"],
        colors: ["White", "Cream"]
    },
    {
        id: 6,
        name: "Professional Chef's Knife",
        category: "Home & Kitchen",
        price: 89.99,
        brand: "CutPro",
        inStock: true,
        rating: 4.8,
        description: "8-inch high-carbon steel chef knife with ergonomic handle"
    },
    {
        id: 7,
        name: "Yoga Mat Premium",
        category: "Sports & Outdoors",
        price: 39.99,
        brand: "YogaLife",
        inStock: true,
        rating: 4.5,
        description: "Non-slip yoga mat with carrying strap",
        features: ["Non-slip Surface", "Eco-friendly", "6mm Thickness"]
    },
    {
        id: 8,
        name: "Wireless Phone Charger",
        category: "Electronics",
        price: 34.99,
        brand: "ChargeFast",
        inStock: true,
        rating: 4.2,
        description: "15W fast wireless charging pad compatible with most smartphones"
    },
    {
        id: 9,
        name: "Leather Wallet",
        category: "Accessories",
        price: 49.99,
        brand: "LeatherCraft",
        inStock: true,
        rating: 4.6,
        description: "Genuine leather bifold wallet with multiple card slots",
        colors: ["Brown", "Black"]
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 59.99,
        brand: "AudioWave",
        inStock: true,
        rating: 4.4,
        description: "Portable waterproof speaker with 12-hour battery life",
        features: ["Waterproof", "360° Sound", "Party Mode"]
    },
    {
        id: 11,
        name: "Running Shoes",
        category: "Footwear",
        price: 119.99,
        brand: "RunPro",
        inStock: true,
        rating: 4.7,
        description: "Lightweight running shoes with cushion technology",
        "sizes": ["7", "8", "9", "10", "11", "12"],
        colors: ["Black/Red", "White/Blue", "Gray/Orange"]
    },
    {
        id: 12,
        name: "Desk Lamp LED",
        category: "Home & Office",
        price: 45.99,
        brand: "BrightWorks",
        inStock: true,
        rating: 4.3,
        description: "Adjustable LED desk lamp with multiple brightness settings"
    },
    {
        id: 13,
        name: "Backpack Laptop",
        category: "Accessories",
        price: 69.99,
        brand: "TravelGear",
        inStock: true,
        rating: 4.5,
        description: "Water-resistant backpack with dedicated laptop compartment",
        features: ["Laptop Sleeve", "USB Charging Port", "Water Resistant"]
    },
    {
        id: 14,
        name: "Electric Toothbrush",
        category: "Personal Care",
        price: 79.99,
        brand: "OralClean",
        inStock: false,
        rating: 4.6,
        description: "Sonic electric toothbrush with multiple cleaning modes"
    },
    {
        id: 15,
        name: "Cast Iron Skillet",
        category: "Home & Kitchen",
        price: 39.99,
        brand: "CookMaster",
        inStock: true,
        rating: 4.8,
        description: "Pre-seasoned cast iron skillet for even heat distribution"
    },
    {
        id: 16,
        name: "Gaming Mouse",
        category: "Electronics",
        price: 49.99,
        brand: "GameZone",
        inStock: true,
        rating: 4.4,
        description: "RGB gaming mouse with programmable buttons",
        features: ["RGB Lighting", "Programmable Buttons", "High DPI"]
    },
    {
        id: 17,
        name: "Sunglasses Polarized",
        category: "Accessories",
        price: 89.99,
        brand: "SunShade",
        inStock: true,
        rating: 4.5,
        description: "UV protection polarized sunglasses with stylish frame"
    },
    {
        id: 18,
        name: "Resistance Bands Set",
        category: "Sports & Outdoors",
        price: 29.99,
        brand: "FitBand",
        inStock: true,
        rating: 4.2,
        description: "Set of 5 resistance bands for full-body workout"
    },
    {
        id: 19,
        name: "Air Purifier",
        category: "Home Appliances",
        price: 149.99,
        brand: "PureAir",
        inStock: true,
        rating: 4.7,
        description: "HEPA air purifier for rooms up to 500 sq ft"
    },
    {
        id: 20,
        name: "Cookbook Stand",
        category: "Home & Kitchen",
        price: 19.99,
        brand: "KitchenHelper",
        inStock: true,
        rating: 4.1,
        description: "Adjustable cookbook stand with page holder"
    }
]

//? Output => [{name: 'product name'}, {name: 'product name'}]

//* Process
//TODO Filter => Electronics
//TODO Sort by => Ratings
//TODO Slice => first 3 (top 3)
//TODO Map => transform object shape to {name: 'product name'}

// Create Pipeline
const electronicProducts = rawApiData
    .filter(product => product.category === 'Electronics')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map(product => {
        return { name: product.name }
    });

console.log(electronicProducts);

