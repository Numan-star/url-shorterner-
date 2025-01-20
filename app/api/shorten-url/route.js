import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    // Parse request body
    const body = await req.json();
    const { longUrl, customShortUrl } = body;

    // Validate input early
    if (!longUrl || !customShortUrl) {
      return new Response(
        JSON.stringify({ message: "Invalid input: both fields are required." }),
        { status: 400 }
      );
    }

    // Connect to the database
    const client = await clientPromise;
    const collection = client.db("url-shortner").collection("urls");

    // Check for existing short URL and insert concurrently
    const existing = await collection.findOne({ shortUrl: customShortUrl });
    if (existing) {
      return new Response(
        JSON.stringify({
          message: "The preferred short URL is already in use. Try another one.",
        }),
        { status: 409 }
      );
    }

    // Insert the new short URL
    await collection.insertOne({
      longUrl,
      shortUrl: customShortUrl,
      createdAt: new Date(),
    });

    // Generate response URL
    const shortUrl = `https://url-shtnr.vercel.app/${customShortUrl}`;

    return new Response(JSON.stringify({ shortUrl }), { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
