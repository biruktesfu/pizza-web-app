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
        const topping_read = await client.sql`select * from topping;`;
        res.status(200).json({ topping: topping_read.rows });
        break;
      case "create":
        const topping_create = await client.sql`select * from topping;`;
        res.status(200).json({ topping: topping_create.rows });
        break;
      case "update":
        const topping_update = await client.sql`select * from topping;`;
        res.status(200).json({ topping: topping_update.rows });
        break;
      case "delete":
        const topping_delete = await client.sql`select * from topping;`;
        res.status(200).json({ topping: topping_delete.rows });
        break;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
