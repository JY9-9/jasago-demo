import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createAgency() {
  try {
    const agency = await prisma.user.create({
      data: {
        email: 'agency@test.com',
        password: 'password123', // 실제로는 해시된 비밀번호를 사용해야 합니다
        role: 'AGENCY',
      },
    });
    console.log('Created agency:', agency);
  } catch (error) {
    console.error('Error creating agency:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAgency();
