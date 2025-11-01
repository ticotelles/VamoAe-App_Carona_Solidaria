import { PrismaClient } from './generated/prisma/index.js';


export const prisma = new PrismaClient();

async function getRide(){
    const createRide = await prisma.createRide.findMany();
    console.log(createRide)
}

getRide();