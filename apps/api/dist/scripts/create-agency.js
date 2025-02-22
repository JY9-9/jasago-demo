"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createAgency() {
    try {
        const agency = await prisma.user.create({
            data: {
                email: 'agency@test.com',
                password: 'password123',
                role: 'AGENCY',
            },
        });
        console.log('Created agency:', agency);
    }
    catch (error) {
        console.error('Error creating agency:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
createAgency();
//# sourceMappingURL=create-agency.js.map