import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto, agencyId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        category: import("@prisma/client").$Enums.ServiceCategory;
        published: boolean;
        agencyId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(agencyId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        category: import("@prisma/client").$Enums.ServiceCategory;
        published: boolean;
        agencyId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        category: import("@prisma/client").$Enums.ServiceCategory;
        published: boolean;
        agencyId: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateServiceDto: Partial<CreateServiceDto>): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        category: import("@prisma/client").$Enums.ServiceCategory;
        published: boolean;
        agencyId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        category: import("@prisma/client").$Enums.ServiceCategory;
        published: boolean;
        agencyId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
