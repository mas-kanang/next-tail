import Image from "next/image";
import Layout from "../components/layout";

export default function Flex() {
  return (
    <Layout pageTitle="Flex Page">
      <h2 class="mt-20 mb-10 text-center font-bold text-xl text-slate-700">
        My Gallery
      </h2>
      <div class="container mx-auto px-6 mb-10 sm:flex sm:flex-wrap gap-5">
        <div class="rounded-lg shadow-lg overflow-hidden sm:w-64">
          <img
            src="https://source.unsplash.com/600x400"
            alt="img caps"
            class="w-full"
          ></img>
          <div class="p-4">
            <div class="font-bold text-3xl mb-2 text-slate-800">
              Image Title
            </div>
            <p class="text-sm text-slate-700">
              Sit ut culpa aliquip anim sint ea consequat consectetur.
            </p>
          </div>
        </div>
        <div class="rounded-lg shadow-lg overflow-hidden sm:w-64">
          <img
            src="https://source.unsplash.com/600x400"
            alt="img caps"
            class="w-full"
          ></img>
          <div class="p-4">
            <div class="font-bold text-3xl mb-2 text-slate-800">
              Image Title
            </div>
            <p class="text-sm text-slate-700">
              Sit ut culpa aliquip anim sint ea consequat consectetur.
            </p>
          </div>
        </div>
        <div class="rounded-lg shadow-lg overflow-hidden sm:w-64">
          <img
            src="https://source.unsplash.com/600x400"
            alt="img caps"
            class="w-full"
          ></img>
          <div class="p-4">
            <div class="font-bold text-3xl mb-2 text-slate-800">
              Image Title
            </div>
            <p class="text-sm text-slate-700">
              Sit ut culpa aliquip anim sint ea consequat consectetur.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
