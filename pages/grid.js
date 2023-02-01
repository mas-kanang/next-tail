import Image from "next/image";
import Layout from "../components/layout";

export default function Grid() {
  return (
    <Layout pageTitle="Grid Page">
      <div class="font-bold uppercase underline underline-offset-3 text-2xl">
        <h1 class="mb-3 ml-3 text-xl font-bold">Halaman Grid</h1>
      </div>
      <div class="mx-3 w-full text-center">
        {/* <span class=" grid grid-cols-6 gap-5 w-11/12 ml-3">
          <span class=" p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full">
            01
          </span>
          <span class=" p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full">
            02
          </span>
          <span class=" p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full">
            03
          </span>
          <span class=" p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full">
            04
          </span>
          <span class=" p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full">
            05
          </span>
          <span class=" p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full">
            06
          </span>
        </span>
        <div class="grid grid-cols-6 col-end-7 gap-4 w-11/12 m-3">
          <div class="col-start-2 col-span-4 p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            01
          </div>
          <div class="col-start-1 col-end-3 p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            02
          </div>
          <div class="col-end-7 col-span-2 p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            03
          </div>
          <div class="col-start-1 col-end-7 p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            04
          </div>
        </div>
        <div class="grid grid-flow-col auto-cols-min">
          <div class="p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            0101101
          </div>
          <div class="p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            0101101
          </div>
          <div class="p-5 bg-blue-300 text-blue-800 text-5xl border border-blue-900 rounded-full ">
            010101
          </div>
        </div> */}
        <div class="grid grid-cols-6 justify-items-center ">
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            01
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            02
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            03
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            04
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            05
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            06
          </div>
        </div>
        <div class="flex justify-evenly ">
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            01
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            02
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            03
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            04
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            05
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            06
          </div>
        </div>
        <div class="flex justify-center ">
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            01
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            02
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            03
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            04
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            05
          </div>
          <div class="p-5 bg-orange-300 text-orange-800 text-5xl border border-orange-900 rounded-full">
            06
          </div>
        </div>
      </div>
    </Layout>
  );
}
