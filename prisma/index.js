const { PrismaClient } = require("@prisma/client");
module.exports = prisma;

const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async register(username, password, firstName, lastName, email, admin) {
        return user;
      },

      async login(username, password) {
        const user = await prisma.user.findUniqueOrThrow({
          where: { username },
        });

        if (password != user.password) throw Error("Invalid password");
        return user;
      },
    },
  },
});
