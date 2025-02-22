export enum ServiceCategory {
  MARKETING = 'MARKETING',
  DEVELOPMENT = 'DEVELOPMENT',
  DESIGN = 'DESIGN',
  CONSULTING = 'CONSULTING',
  OTHER = 'OTHER',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ServiceCategory;
  published: boolean;
  agencyId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateServiceInput {
  title: string;
  description: string;
  price: number;
  category: ServiceCategory;
  published?: boolean;
}
