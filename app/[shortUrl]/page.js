import clientPromise from "@/lib/mongodb";

export default async function ShortUrlPage({ params }) {
  const { shortUrl } = params; // Extract the short URL from the route parameter

  console.log("Short URL:", shortUrl); // For debugging, to ensure the URL is being captured

  try {
    const client = await clientPromise;
    const db = client.db("url-shortner");
    const collection = db.collection("urls");

    // Look for the long URL associated with the short URL
    const result = await collection.findOne({ shortUrl });

    if (!result) {
      return (
        <div>
          <h1>Short URL not found</h1>
          <p>The short URL "{shortUrl}" does not exist in our database.</p>
        </div>
      );
    }

    // Redirect to the long URL
    if (typeof window !== "undefined") {
      // Perform client-side redirect using window.location.replace
      window.location.replace(result.longUrl);
    }

    return null; // Nothing to render as the redirect will happen
  } catch (error) {
    console.error("Error in ShortUrlPage:", error);
    return (
      <div>
        <h1>Internal server error</h1>
        <p>There was an error while processing your request.</p>
      </div>
    );
  }
}
