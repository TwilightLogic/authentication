import { getUserByEmail } from "./queries/selectQueries";

async function testQuery() {
  try {
    const user = await getUserByEmail('alice@example.com');
    console.log('Queried User:', user);
    process.exit(0); // 成功退出
  } catch (error) {
    console.error('Query failed:', error);
    process.exit(1); // 失败退出
  }
}

testQuery();
