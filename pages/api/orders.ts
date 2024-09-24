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
        const orders_read =
          await client.sql`select * from orders where user_id=${user_id}`;
        res.status(200).json({ orders: orders_read.rows });
        break;
      case "create":
        const orders_create = await client.sql`select * from orders;`;
        res.status(200).json({ orders: orders_create.rows });
        break;
      case "update":
        const orders_update = await client.sql`select * from orders;`;
        res.status(200).json({ orders: orders_update.rows });
        break;
      case "delete":
        const orders_delete = await client.sql`select * from orders;`;
        res.status(200).json({ orders: orders_delete.rows });
        break;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
