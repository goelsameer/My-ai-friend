import {PrismaClient} from '@prisma/client'
const prismadb=globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV!="production")globalThis.prisma=prismadb;
declare global{
    var prisma:PrismaClient|undefined;
};
export default prismadb;