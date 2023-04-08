import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", padding: "1rem" }}>
      <Image
        src='https://media.tenor.com/OyUVgQi-l-QAAAAC/404.gif'
        height='400'
        width='400'
        style={{ borderRadius: "20px", objectFit: "cover" }}
        alt='not found'
      />
      <p style={{ textTransform: "capitalize", fontSize: "5rem" }}>not found</p>
    </div>
  );
};

export default NotFound;
