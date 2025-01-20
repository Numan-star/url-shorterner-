import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000, // Shortened timeout for quicker connection failures
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000, // Shortened timeout for quicker connection failures
  });
  clientPromise = client.connect();
}

export default clientPromise;
