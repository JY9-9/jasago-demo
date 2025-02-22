export enum ServiceCategory {
  MARKETING = "MARKETING",
  DEVELOPMENT = "DEVELOPMENT",
  DESIGN = "DESIGN",
  CONSULTING = "CONSULTING",
  OTHER = "OTHER",
}

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  price: number;
  description: string;
  agencyId: string;
}

export interface CreateServiceInput {
  title: string;
  category: ServiceCategory;
  price: number;
  description: string;
}
