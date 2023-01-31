export default function Home() {
  return (
    <div>
      <div class="p-7 max-w-sm mx-auto bg-green-400 rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img
            class="h-12 w-16 md:w-32 lg:w-48 rounded-full bg-bl"
            src="next.svg"
            alt="Next Logo"
          />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Next</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div class="py-8 px-8 max-w-sm mx-auto bg-blue-400 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="h-24 w-24 rounded-full sm:mx-0 sm:shrink-0 bg-indigo-400"
          src="next.svg"
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="basis-1/4">01</div>
        <div class="basis-1/4 hover:basis-1/2">02</div>
        <div class="basis-1/2">03</div>
      </div>
    </div>
  );
}
