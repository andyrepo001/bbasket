"use client";

import { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const key = "myDataKey";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        setData(JSON.parse(storedData));
      }

      // Add event listener for storage changes
      window.addEventListener("storage", handleStorageChange);

      // Cleanup function to remove listener on unmount
      return () => window.removeEventListener("storage", handleStorageChange);
    }
  }, [key]); // Dependency array includes the key

  const handleDataChange = (newData) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
    // Simulate an event to notify other tabs (not real storage event)
    dispatchEvent(new CustomEvent("dataUpdated"));
  };

  const handleStorageChange = (event) => {
    if (event.key === key) {
      const updatedData = JSON.parse(event.newValue);
      setData(updatedData);
    }
  };

  return (
    <div>
      {/* Your UI elements that display data */}
      <p>Current Data: {data}</p>
      <button onClick={() => handleDataChange("New Data")}>Update Data</button>
    </div>
  );
}

export default MyComponent;
