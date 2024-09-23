// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@vercel/postgres";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await db.connect();
  try {
    await client.sql`DROP TABLE IF EXISTS testing`;
    await client.sql`CREATE TABLE IF NOT EXISTS testing (Name varchar(100), Age int)`;
    const names = [
      {
        name: "biruk",
        age: 24,
      },
      {
        name: "Ermiyas",
        age: 21,
      },
    ];

    names.map(({ name, age }: any) => {
      client.sql`insert into testing (Name, Age) values (${name}, ${age})`;
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
  const users = await client.sql`select * from testing`;
  console.log({ users });
  return res.status(200).json({ users: users.rows });
}
