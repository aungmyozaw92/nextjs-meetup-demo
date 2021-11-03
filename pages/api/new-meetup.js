import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    //const { title, description, address, image } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://aungmyo:m0ng0db@cluster0.2ls37.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Successful created!" });
  }
}

export default handler;
