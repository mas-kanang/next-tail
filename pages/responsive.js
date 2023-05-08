import Image from "next/image";
import Layout from "../components/layout";

export default function Responsive() {
  return (
    <Layout pageTitle="Responsive Page">
      <div class="container px-4 mt- max-w-xl lg:max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold text-slate-800 mb-4 first-letter:text-6xl">
          Responsive Page
        </h3>
        <img
          src="https://source.unsplash.com/600x400"
          class="rounded-xl shadow-xl"
        />
        <h2 class="mt-6 text-2xl font-semibold text-slate-700">
          Learn Programming
        </h2>
        <p class="mt-2 text-slate-600 text-justify">
          Exercitation sint Lorem exercitation consequat velit exercitation
          fugiat. Aliqua Lorem sit Lorem qui nisi sit esse irure fugiat
          incididunt. Et in ea aute anim mollit et enim excepteur qui. Laborum
          exercitation et mollit ut duis mollit ullamco. Exercitation consequat
          sint duis consequat tempor exercitation ullamco velit laborum
          reprehenderit sint proident incididunt quis. Exercitation sint Lorem
          exercitation consequat velit exercitation fugiat. Aliqua Lorem sit
          Lorem qui nisi sit esse irure fugiat incididunt. Et in ea aute anim
          mollit et enim excepteur qui. Laborum exercitation et mollit ut duis
          mollit ullamco. Exercitation consequat sint duis consequat tempor
          exercitation ullamco velit laborum reprehenderit sint proident
          incididunt quis.
        </p>
        <div class="my-4">
          <a
            href="#"
            class="inline-block px-5 py-2 bg-red-500 text-white rounded-full"
          >
            Subscribe
          </a>
        </div>
      </div>
    </Layout>
  );
}
