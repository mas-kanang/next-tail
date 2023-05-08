import Image from "next/image";
import Layout from "../components/layout";

export default function Layoutjs() {
  return (
    <Layout pageTitle="Animate Page">
      <div class="container mx-auto mt-10">
        <div class="border rounded-md p-5 shadow-lg text-justify relative">
          <div class="w-8 h-8 rounded-full bg-pink-200 flex absolute -top-5 -right-5 cursor-pointer">
            <span class="text-sm m-auto">❌️</span>
          </div>
          <img
            class="float-left mr-3"
            src="/bg-01.jpg"
            width="150"
            alt="background"
          />

          <p>
            Duis proident amet ut consequat commodo fugiat deserunt cupidatat
            excepteur. Eu aute fugiat ullamco voluptate id ad. Est dolore cillum
            ad excepteur sunt aliqua et in eu sint Lorem dolor. Consectetur
            dolor enim proident consequat Lorem culpa tempor. Sint consequat
            sint et exercitation minim cillum veniam adipisicing est anim sint.
            Mollit ut exercitation laborum amet ullamco nostrud.
          </p>
          <p>
            Duis proident amet ut consequat commodo fugiat deserunt cupidatat
            excepteur. Eu aute fugiat ullamco voluptate id ad. Est dolore cillum
            ad excepteur sunt aliqua et in eu sint Lorem dolor. Consectetur
            dolor enim proident consequat Lorem culpa tempor. Sint consequat
            sint et exercitation minim cillum veniam adipisicing est anim sint.
            Mollit ut exercitation laborum amet ullamco nostrud.
          </p>
        </div>
      </div>
      <div class="container mx-auto mt-10 rounded-lg columns-3">
        <img
          src="https://source.unsplash.com/600x400"
          alt="image"
          class="mb-3"
        ></img>
        <img
          src="https://source.unsplash.com/600x400"
          alt="image"
          class="mb-3"
        ></img>
        <img
          src="https://source.unsplash.com/600x400"
          alt="image"
          class="mb-3"
        ></img>
        <img
          src="https://source.unsplash.com/600x400"
          alt="image"
          class="mb-3"
        ></img>
        <img
          src="https://source.unsplash.com/600x400"
          alt="image"
          class="mb-3"
        ></img>
        <img
          src="https://source.unsplash.com/600x400"
          alt="image"
          class="mb-3"
        ></img>
      </div>
    </Layout>
  );
}
