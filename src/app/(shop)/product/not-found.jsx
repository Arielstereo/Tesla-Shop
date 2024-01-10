import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
    <Image
      alt="404"
      className="w-80 h-80 md:w-96 md:h-96"
      height="400"
      src="/next.svg"
      width="400"
    />
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 mb-16">Oops! Page not found.</h1>
    <Link href="/">
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to Homepage
      </Button>
    </Link>
  </main>
  )
}

