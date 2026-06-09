export interface Review {
  rating: number;
  comment: string;
  reviewerName: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  brand: string;
  shippingInformation: string;
  returnPolicy: string;
  reviews: Review[];
  thumbnail: string;
  images: string[];
}
