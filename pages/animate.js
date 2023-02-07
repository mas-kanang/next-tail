import Image from "next/image";
import Layout from "../components/layout";

export default function Animate() {
  return (
    <Layout pageTitle="Animate Page">
      <div class="font-bold uppercase underline underline-offset-3 text-2xl">
        <h1 class="mb-3 ml-3 text-xl font-bold">Halaman Animate</h1>
        <hr class="my-20" />
        <div
          class="w-32 h-36 bg-sky-500 mx-auto rounded-lg shadow-lg hover:scale-150
         hover:rotate-90 hover:translate-x-20 hover:bg-lime-500 transition"
        ></div>
      </div>
    </Layout>
  );
}
