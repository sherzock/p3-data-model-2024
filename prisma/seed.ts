import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

async function main() {
    const student1 = await db.person.create({
        data: {
            firstName: "Jacob",
            lastName:  "Galofre Calbeto",
            email: "jacobo.galofre@test.com",
            role: "TEACHER"
        },
    });

    console.log("you created person:", student1);
}

await main();