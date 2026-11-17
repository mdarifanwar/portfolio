import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ color: "#888", marginBottom: "1.5rem" }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{ padding: "0.6rem 1.2rem", background: "#008767", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 500 }}>
        Return Home
      </Link>
    </div>
  );
}
