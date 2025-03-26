import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import Image1 from "/scene 4.png";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "@/features/AuthSlice";
import { AppDispatch } from "@/store";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // check password and email

    dispatch(userLogin({ email, password }))
      .unwrap()
      .then((res) => {
        console.log(res);
        navigate("/dashboard/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <h1 className="text-6xl font-bold">Hola 👋</h1>
          <p className="text-gray-500">
            <Link
              to="/register"
              className="underline underline-offset-1 font-normal"
            >
              Doesn't have account ?
            </Link>{" "}
            or Sign in with
          </p>
          <div className="flex gap-4">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />{" "}
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />{" "}
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </section>
      </Card>
    </div>
  );
}
