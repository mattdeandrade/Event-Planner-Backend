const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed = async (numUsers = 80, numEvents = 20) => {
  const users = Array.from({ length: numUsers }, () => ({
    username: faker.internet.username(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
  }));
  await prisma.user.createMany({ data: users });

  const partyFiller = Array.from({ length: 20 }, () => ({
    guestIds: Array.from(
      { length: Math.floor(Math.random() * 80) - 1 },
      (j) => j
    ),
  }));
  const events = Array.from({ length: numEvents }, () => ({
    name: faker.person.firstName + "'s " + faker.commerce.product(),
    date: faker.date.future(),
    location: faker.location.streetAddress(),
    description: faker.lorem.paragraphs(),
  }));
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
