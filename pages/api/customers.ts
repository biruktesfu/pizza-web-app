import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@vercel/postgres";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await db.connect();
  const { body } = req;
  const { request_type, email, password } = body;
  try {
    switch (request_type) {
      case "login":
        const customers_login =
          await client.sql`select * from customers where email=${email} and password=${password};`;
        const {
          email: temp_email,
          location,
          phone_number,
        }: any = customers_login.rows[0];
        customers_login.rows.length !== 0 &&
          res.status(200).json({ email: temp_email, location, phone_number });

        customers_login.rows.length === 0 &&
          res.status(400).json({ error: "Invalid credentials" });
        break;
      case "register":
        const customers_register =
          await client.sql`select * from customers where email=${email} and password=${password};`;
        customers_register.rows.length !== 0 &&
          res.status(200).json({ email: temp_email, location, phone_number });

        customers_register.rows.length === 0 &&
          res.status(400).json({ error: "Invalid credentials" });
        break;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
