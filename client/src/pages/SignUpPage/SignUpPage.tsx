import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Image1 from "../../../public/scene 12.png"

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="flex flex-col md:flex-row gap-8 items-center max-w-5xl w-full p-5 m-5">
        <section
          id="illustration"
          className="w-full md:w-1/2 bg-gradient-to-r from-blue-500 to-teal-100 rounded-md"
        >
          <img src={Image1} className="" alt="" />
        </section>
        <section
          id="input_login"
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <Icons.logo className="h-4 w-4" />
            <h2 className="text-lg font-bold tracking-tight">Kosify</h2>
          </div>
          <h1 className="text-6xl font-bold">Register 😸</h1>
          <p className="text-gray-500">
            <Link
              to="/login"
              className="underline underline-offset-1 font-normal"
            >
              Have an account ?
            </Link>{" "}
            or Sign up with
          </p>
          <div className="flex gap-4 mb-2 ">
            <Button
              variant="outline"
              className="flex w-full items-center gap-2"
            >
              <FcGoogle />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex w-full items-center gap-2"
            >
              <FaXTwitter />
              Twitter
            </Button>
          </div>
          <hr />
          <p className="text-gray-500"></p>
          <Input type="email" placeholder="Email" />{" "}
          <Input type="password" placeholder="Password" />{" "}
          <Input type="password" placeholder="Confirm Password" />{" "}
          <Button className="w-full">Sign Up</Button>
        </section>
      </Card>
    </div>
  );
}
