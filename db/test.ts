import { getUserByEmail } from "./queries/selectQueries";

async function testQuery() {
  const user = await getUserByEmail('alice@example.com');
  console.log('Queried User:', user);
}

testQuery().catch((error) => {
  console.error('Query failed:', error);
});
