import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
  const { shortUrl } = params; // Accessing the dynamic URL parameter

  console.log("Short URL:", shortUrl); // This will log to your server console

  try {
    const client = await clientPromise;
    const db = client.db("url-shortner");
    const collection = db.collection("urls");

    // Find the long URL associated with the short URL
    const result = await collection.findOne({ shortUrl });

    if (!result) {
      return new Response(JSON.stringify({ message: "Short URL not found." }), {
        status: 404,
      });
    }

    // Redirect to the long URL
    return new Response(null, {
      status: 301,
      headers: { Location: result.longUrl },
    });
  } catch (error) {
    console.error("Error in GET handler:", error); // Log server-side errors
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
