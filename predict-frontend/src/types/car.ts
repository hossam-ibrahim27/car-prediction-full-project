export interface CarInputData {
  Levy: number
  Manufacturer: string;
  Model: string;
  Prod_year: number;
  Category: string;
  Color: string;
  Fuel_type: string;
  Gear_box_type: string;
  Drive_wheels: string;
  Wheel: string;
  Airbags: string;
  Mileage: number;
  Engine_volume: number;
  Leather_interior: string;
}

export interface PredictionResponse {
  predicted_price: number;
  currency?: string;
  confidence?: number;
  negotiation_low?: number;
  negotiation_high?: number;
  condition_score?: number;
  recommendation?: string;
}

export const EMPTY_CAR_INPUT: CarInputData = {
  Levy: 0,
  Manufacturer: "",
  Model: "",
  Prod_year: 0,
  Category: "",
  Color: "",
  Fuel_type: "",
  Gear_box_type: "",
  Drive_wheels: "",
  Wheel: "",
  Airbags: "",
  Mileage: 0,
  Engine_volume: 0,
  Leather_interior: "",
};

export const MANUFACTURERS = [
  "TOYOTA",
  "HYUNDAI",
  "MERCEDES-BENZ",
  "CHEVROLET",
  "HONDA",
  "FORD",
  "BMW",
  "NISSAN",
  "LEXUS",
  "VOLKSWAGEN",
  "SSANGYONG",
  "KIA",
  "SUBARU",
  "AUDI",
  "MITSUBISHI"
];
export const Model = [
  "Prius",
  "Elantra",
  "Camry",
  "Sonata",
  "E 350",
  "FIT",
  "H1",
  "Tucson",
  "Santa FE",
  "Aqua",
  "Cruze",
  "Fusion",
  "X5",
  "Optima",
  "Highlander"
];
export const CATEGORIES = [
  "Sedan",
  "Jeep",
  "Hatchback",
  "Universal",
  "Coupe",
  "Minivan",
  "Pickup",
  "Cabriolet",
  "Microbus",
  "Goods wagon"
];
export const Leather_OPTIONS = [
  "Yes", "No"
]
export const FUEL_TYPES = [
  "Petrol", "Diesel", "Hybrid", "Plug-in Hybrid", "LPG", "CNG"
];

export const GEAR_BOX_TYPES = [
  "Automatic", "Tiptronic", "Manual", "Variator"
];
export const DRIVE_WHEELS = [
  "Front", "Rear", "4x4"

];
export const COLORS = [
  "Black",
  "White",
  "Silver",
  "Grey",
  "Blue",
  "Red",
  "Green",
  "Brown",
  "Beige",
  "Carnelian red",
  "Golden",
  "Sky blue",
  "Yellow",
  "Orange",
  "Purple"
];
export const WHEEL_OPTIONS = [
  "Left wheel", "Right-hand drive"
];
