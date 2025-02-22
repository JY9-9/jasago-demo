import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
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
