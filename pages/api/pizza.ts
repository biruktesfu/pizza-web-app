import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@vercel/postgres";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await db.connect();
  const { body } = req;
  const { request_type, user_id } = body;
  try {
    switch (request_type) {
      case "read":
        const pizza_read = await client.sql`select * from pizza;`;
        res.status(200).json({ pizza: pizza_read.rows });
        break;
      case "create":
        const pizza_create = await client.sql`select * from pizza;`;
        res.status(200).json({ pizza: pizza_create.rows });
        break;
      case "update":
        const pizza_update = await client.sql`select * from pizza;`;
        res.status(200).json({ pizza: pizza_update.rows });
        break;
      case "delete":
        const pizza_delete = await client.sql`select * from pizza;`;
        res.status(200).json({ pizza: pizza_delete.rows });
        break;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
