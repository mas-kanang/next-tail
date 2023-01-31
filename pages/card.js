import Image from "next/image";
import Layout from "../components/layout";

export default function Card() {
  const arrays = [];
  return (
    <Layout pageTitle="Card Page">
      <div class="font-bold uppercase underline underline-offset-3 text-2xl">
        <h1 class="mb-3 ml-3 text-xl font-bold">Halaman Kartu</h1>
      </div>
      <div class="flex gap-3">
        <div class="p-4 w-80 bg-blue-100 shadow-md rounded-xl">
          <picture class="rounded-lg block">
            <Image src="/bg-01.jpg" height={300} width={300} alt="background" />
          </picture>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugi
          </p>
        </div>
        <div class="p-4 w-80 bg-blue-100 shadow-md rounded-xl">
          <picture class="rounded-lg block">
            <Image src="/bg-01.jpg" height={300} width={300} alt="background" />
          </picture>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugi
          </p>
        </div>
        <div class="p-4 w-80 bg-blue-100 shadow-md rounded-xl">
          <picture class="rounded-lg block">
            <Image src="/bg-01.jpg" height={300} width={300} alt="background" />
          </picture>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugi
          </p>
        </div>
      </div>
    </Layout>
  );
}
