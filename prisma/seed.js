const bcrypt = require("bcryptjs");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("123456");
const userData = [
    {
        username: "nattasit1",
        password,
        email: "nattasit1@gmail.com",
        Phone: "0813202547",
    },
];
const run = async () => {
    try {
        await prisma.user.createMany({
            data: userData,
        });
        console.log("Seed successful!");
    } catch (error) {
        console.error("Seed failed with error:", error);
    } finally {
        await prisma.$disconnect(); // Disconnect Prisma Client after seeding
    }

    run();
};
