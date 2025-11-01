import { PrismaClient } from './generated/prisma/index.js';


const prisma = new PrismaClient();

async function getUsers(){
    const user = await prisma.user.findMany();
    console.log(user)
}

getUsers();