import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    try {
      const url = process.env.MONGODB_URL || "mongodb://localhost:27017";

      const client = new Mongo(url);
      const db = client.db("users-db");

      this.client = client;
      this.db = db;

      console.log("Conectado ao MongoDB");
    } catch (error) {
      console.error("Erro ao conectar ao MongoDB:", error);
    }
  },
};
