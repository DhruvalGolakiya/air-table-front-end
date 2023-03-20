// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";
type Data = {
  name: string;
};

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyX4vJ3SDa3rAQjs",
});
var base = Airtable.base("appTzJljaRqwv72aU");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let table = base.table("PersonalData");
  let query = table._selectRecords();
  console.log(query);
}
