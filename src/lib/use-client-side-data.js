"use client";

import { useEffect, useState } from "react";
import { api_url } from "./api-calls";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      async function getData() {
        const res = await fetch(api_url + url, {
          headers: {
            Authorization:
              "Bearer 7678e19c43e8b9ef56d233ebe382bb40faae5d9e5dfa062b2992232b6c54866e",
          },
        });

        const val = await res.json();

        if (val.status == "") {
          setError("An error occured.");
          return;
        }

        setData(val);
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return data;
}
