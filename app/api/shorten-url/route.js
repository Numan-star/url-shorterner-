import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("url-shortner");
    const collection = db.collection("urls");

    const body = await req.json();
    const { longUrl, customShortUrl } = body;

    // Validate input
    if (!longUrl || !customShortUrl) {
      return new Response(
        JSON.stringify({ message: "Invalid input: both fields are required." }),
        { status: 400 }
      );
    }

    // Check if the short URL already exists
    const existing = await collection.findOne({ shortUrl: customShortUrl });
    if (existing) {
      return new Response(
        JSON.stringify({
          message:
            "The preferred short URL is already in use. Try another one.",
        }),
        { status: 409 }
      );
    }

    // Insert the new URL into the database
    await collection.insertOne({
      longUrl,
      shortUrl: customShortUrl,
      createdAt: new Date(),
    });

    const shortUrl = `http://localhost:3000/api/${customShortUrl}`;

    return new Response(JSON.stringify({ shortUrl }), { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
