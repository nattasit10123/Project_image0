const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
    await prisma.$executeRawUnsafe("DROP Database project_image0");
    await prisma.$executeRawUnsafe("CREATE Database project_image0");
}
console.log("Reset DB");
run();
