import { PrismaClient } from './generated/prisma/index.js';


export const prisma = new PrismaClient();

async function getRide(){
    const ride = await prisma.ride.findMany();
    console.log(ride)
}

getRide();