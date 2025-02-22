import { ServiceCategory } from '@prisma/client';
export declare class CreateServiceDto {
    title: string;
    description: string;
    price: number;
    category: ServiceCategory;
    published?: boolean;
}
