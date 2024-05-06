export const api_url = "http://api.boroapi.com/";

export async function getServerSideData(url, cache) {
  try {
    const res = await fetch(api_url + url, {
      cache: cache ? cache : "force-cache",
      headers: {
        Authorization:
          "Bearer 7678e19c43e8b9ef56d233ebe382bb40faae5d9e5dfa062b2992232b6c54866e",
      },
    });

    const data = await res.json();

    if (data.status == "") {
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
