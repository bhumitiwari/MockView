import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-60">
      <h1>Welcome to MockView </h1>
      <Link href={'/dashboard'}> 
  <Button className="bg-red-600">Get started</Button>
</Link>

     </div>
    );
}
