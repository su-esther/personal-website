import { Card, CardDescription, CardHeader } from "../components/ui/card";
import Navbar from "@/components/ui/nav-bar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Card>
        <CardHeader>HI</CardHeader>
      </Card>
      <p className="text-3xl font-bold underline">MY FIRST APP</p>
    </div>
  );
}
