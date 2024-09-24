// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@vercel/postgres";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await db.connect();
  // console.log("request body is => ", req.body);
  const { body } = req;
  console.log("body is => ", { body });
  try {
    client.sql`insert into testing (Name, Age) values (${body.name}, ${parseInt(
      body.age
    )})`;
    // const names = [
    //   {
    //     name: "biruk",
    //     age: 24,
    //   },
    //   {
    //     name: "Ermiyas",
    //     age: 21,
    //   },
    // ];

    // names.map(({ name, age }: any) => {
    //   client.sql`insert into testing (Name, Age) values (${name}, ${age})`;
    // });
  } catch (error) {
    return res.status(500).json({ error });
  }
  const users = await client.sql`select * from testing`;
  console.log({ users });
  return res.status(200).json({ users: users.rows });
}
