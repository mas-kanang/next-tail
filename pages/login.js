import Image from "next/image";
import Layout from "../components/layout";

export default function Login() {
  return (
    <Layout pageTitle="Login Page">
      <div class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="border border-pink-800 p-5 flex flex-col items-start">
          <div class=" font-bold uppercase underline underline-offset-3 ">
            <h1 class="mb-3 text-xl">Halaman Login</h1>
          </div>
          <div class=" flex flex-col items-start">
            <p>User :</p>
            <p>Password :</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
