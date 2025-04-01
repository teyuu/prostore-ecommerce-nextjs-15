import { buttonVariants } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl fontbold mb-4">Not found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Link href="/" className={`${buttonVariants()} mt-4`}>
          Back home
        </Link>
      </div>
    </div>
  );
}
