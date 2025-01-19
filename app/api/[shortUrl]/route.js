import clientPromise from "@/lib/mongodb";

export async function GET(req, context) {
  const { shortUrl } = context.params;

  try {
    const client = await clientPromise;
    const db = client.db("url-shortner");
    const collection = db.collection("urls");
    const result = await collection.findOne({ shortUrl });
    if (!result) {
      return new Response(JSON.stringify({ message: "Short URL not found." }), {
        status: 404,
      });
    }

    return new Response(null, {
      status: 301,
      headers: { Location: result.longUrl },
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
