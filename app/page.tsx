import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lpage from "./(components)/lpage";
import Header from "./(components)/header"

export default function Home() {
  return (
   
    <div>
      <Header/>
      <Lpage/>
    </div>
  );
}
