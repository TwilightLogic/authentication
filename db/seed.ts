import { InsertUser } from "./schema/schema";
import { createUser } from "./queries/insertQueries";

async function seed() {
  const users: InsertUser[] = [
    {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'Password123!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bob',
      email: 'bob@example.com',
      password: 'Password123!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Charlie',
      email: 'charlie@example.com',
      password: 'Password123!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  for (const user of users) {
    await createUser(user);
  }

  console.log('Seeding completed.');
  console.log('Please use `commadn + C` to exit the program.');
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
});
