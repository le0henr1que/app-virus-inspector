import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>404 - Página Não Encontrada</h1>
      <p>Oops! Não conseguimos encontrar a página que você está procurando.</p>
    </div>
  );
}
