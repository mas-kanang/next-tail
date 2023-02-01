import Image from "next/image";
import Layout from "../components/layout";

export default function Card() {
  const arrays = [];
  return (
    <Layout pageTitle="Card Page">
      <div class="font-bold uppercase underline underline-offset-3 text-2xl">
        <h1 class="mb-3 ml-3 text-xl font-bold">Halaman Tabel</h1>
      </div>
      <div class="shadow-2xl bg-blue-100 rounded-2xl p-4 m-4 w-1/2">
        <table class="table-auto border border-collapse border-slate-500 w-full">
          <thead>
            <tr class="text-left">
              <th class="border border-slate-500 px-4 ">Artist</th>
              <th class="border border-slate-500 px-4 ">Song</th>
              <th class="border border-slate-500 px-4 ">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-500 px-4 ">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td class="border border-slate-500 px-4 ">Malcolm Lockyer</td>
              <td class="border border-slate-500 px-4 ">1961</td>
            </tr>
            <tr>
              <td class="border border-slate-500 px-4 ">Witchy Woman</td>
              <td class="border border-slate-500 px-4 ">The Eagles</td>
              <td class="border border-slate-500 px-4 ">1972</td>
            </tr>
            <tr>
              <td class="border border-slate-500 px-4 ">Shining Star</td>
              <td class="border border-slate-500 px-4 ">
                Earth, Wind, and Fire
              </td>
              <td class="border border-slate-500 px-4 ">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
