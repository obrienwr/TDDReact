import Link from "next/link";

export default function NotFound() {
  return (
    <main className={"404-page"}>
      <h2>404 - Page Not Found</h2>
      <Link href={"/"}>Go Back</Link>
    </main>
  )
}

