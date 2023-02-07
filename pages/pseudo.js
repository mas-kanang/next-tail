import Layout from "../components/layout";

export default function Pseudo() {
  return (
    <Layout pageTitle="Pseudo Page">
      <div class=" dark:bg-slate-800 dark:text-slate-200">
        <hr class="my-10" />
        {/* <div class="flex justify-center">
        <span class="text-sm text-slate-500 mr-2">Light</span>
        <input type="checkbox" id="toggle" class="hidden" />
        <label for="toggle">
          <div class="w-9 h-5 bg-slate-500 rounded-full flex items-center cursor-pointer">
            <div class="w-4 h-4 bg-white rounded-full p-1 "></div>
          </div>
        </label>
        <span class="text-sm text-slate-500 ml-2">Dark</span>
      </div> */}
        <button
          class="m-10 bg-blue-500 hover:bg-blue-700 active:bg-blue-800
        p-2 rounded-xl text-white
        font-semibold font-mono mx-auto block"
        >
          Simpan
        </button>
        <div
          class="max-w-lg my-10 border border-slate-200 rounded-lg
       mx-auto p-5 shadow-md hover:bg-blue-400 group"
        >
          <h5 class="font-bold text-slate-700 text-lg mb-3 group-hover:text-white">
            Card
          </h5>
          <p
            class="text-slate-600 text-justify group-hover:text-white selection:bg-pink-500
         first-line:uppercase first-line:tracking-wider first-letter:text-5xl first-letter:float-left
         first-letter:mr-2
        "
          >
            Nostrud aliquip esse mollit fugiat ut in veniam aute exercitation
            amet velit dolor irure. Occaecat laborum ex esse aute voluptate sit
            consequat duis pariatur do adipisicing veniam sint. Minim in
            pariatur id incididunt. Aliqua mollit consequat ipsum esse veniam
            dolor dolor Lorem enim eiusmod sint pariatur nisi proident. Duis
            Lorem eu ipsum id in Lorem cillum occaecat proident ullamco enim
            ipsum excepteur.
          </p>
        </div>
        <div
          class="max-w-lg my-10 border border-slate-200 rounded-lg
       mx-auto p-5 shadow-md group"
        >
          <form action="">
            <label for="email">
              <span class="block font-semibold mb-3">Email</span>
            </label>
            <input
              type="email"
              placeholder=" masukan email"
              class="px-3 py-2 border shadow rounded w-full block text-sm focus:outline-none focus:ring-1
            focus:border-blue-400 invalid:text-pink-400 invalid:focus:ring-pink-400 
            invalid:focus:border-pink-400 placeholder:text-slate-400 peer "
            />
            <p class="text-sm m-1 text-pink-400 invisible peer-invalid:visible ">
              email tidak valid
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
