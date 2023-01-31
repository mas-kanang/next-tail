import Image from "next/image";
import Layout from "../components/layout";

export default function Card() {
  const arrays = [];
  return (
    <Layout pageTitle="Card Page">
      <table class="table-auto border border-collapse border-slate-500">
        <thead>
          <tr>
            <th class="border border-slate-500">Song</th>
            <th class="border border-slate-500">Artist</th>
            <th class="border border-slate-500">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-500">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td class="border border-slate-500">Malcolm Lockyer</td>
            <td class="border border-slate-500">1961</td>
          </tr>
          <tr>
            <td class="border border-slate-500">Witchy Woman</td>
            <td class="border border-slate-500">The Eagles</td>
            <td class="border border-slate-500">1972</td>
          </tr>
          <tr>
            <td class="border border-slate-500">Shining Star</td>
            <td class="border border-slate-500">Earth, Wind, and Fire</td>
            <td class="border border-slate-500">1975</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
