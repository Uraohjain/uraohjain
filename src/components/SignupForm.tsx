export function SignupForm() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      <form className="p-8 md:p-14">
        <h3 className="mb-20 mt-0">Henkilötiedot</h3>

        <div className="mb-8 flex flex-wrap">
          <div className="group relative z-0 mb-6 w-full md:w-1/2 md:pr-6">
            <label
              className="top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg font-bold text-red-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-white dark:text-gray-400 peer-focus:dark:text-white"
              htmlFor="first-name"
            >
              Etunimi
            </label>
            <input
              className="peer block w-full appearance-none border-0 border-b-2 border-red-900 bg-transparent px-0 py-2.5 text-lg font-semibold text-gray-950 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-white"
              id="first-name"
              type="text"
              required
            />
          </div>
          <div className="group relative z-0 mb-6 w-full md:w-1/2">
            <label
              className="top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg font-bold text-red-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-white dark:text-gray-400 peer-focus:dark:text-white"
              htmlFor="last-name"
            >
              Sukunimi
            </label>
            <input
              className="peer block w-full appearance-none border-0 border-b-2 border-red-900 bg-transparent px-0 py-2.5 text-lg font-semibold text-gray-950 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-white"
              id="last-name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="mb-8 flex flex-wrap">
          <div className="group relative z-0 mb-6 w-full md:w-2/3 md:pr-6">
            <label
              className="top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg font-bold text-red-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-white dark:text-gray-400 peer-focus:dark:text-white"
              htmlFor="email"
            >
              Sähköposti
            </label>
            <input
              className="peer block w-full appearance-none border-0 border-b-2 border-red-900 bg-transparent px-0 py-2.5 text-lg font-semibold text-gray-950 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-white"
              id="email"
              type="text"
              required
            />
          </div>
          <div className="group relative z-0 mb-6 w-full md:w-1/3">
            <label
              className="top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg font-bold text-red-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-white dark:text-gray-400 peer-focus:dark:text-white"
              htmlFor="age"
            >
              Ikä
            </label>
            <input
              className="peer block w-full appearance-none border-0 border-b-2 border-red-900 bg-transparent px-0 py-2.5 text-lg font-semibold text-gray-950 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-white"
              id="age"
              type="text"
              required
            />
          </div>
        </div>
        <div className="mb-8 flex flex-wrap">
          <div className="group relative z-0 mb-6 w-full">
            <label
              className="top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg font-bold text-red-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-white dark:text-gray-400 peer-focus:dark:text-white"
              htmlFor="description"
            >
              Kerro lyhyesti työkokemuksestasi; Millaisia työnimikkeitä ja
              tehtäviä sinulla on ollut?
            </label>
            <textarea
              className="peer mt-6 block w-full appearance-none border-2 border-red-900 bg-transparent p-4  text-lg font-semibold text-gray-950 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-white"
              id="description"
              rows={4}
              required
            />
          </div>
        </div>
        <div className="mb-8 flex flex-wrap">
          <div className="group relative z-0 mb-6 w-full">
            <label
              className="top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg font-bold text-red-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-white dark:text-gray-400 peer-focus:dark:text-white"
              htmlFor="cv"
            >
              CV, Linkedin (vapaaehtoinen)
            </label>
            <input
              className="peer block w-full appearance-none border-0 border-b-2 border-red-900 bg-transparent px-0 py-2.5 text-lg font-semibold text-gray-950 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-white"
              id="cv"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-outline">Lähetä</button>
        </div>
      </form>
      <img
        src="https://images.unsplash.com/photo-1519070543065-ac1764985512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6095&q=80"
        alt=""
        className="hidden md:block md:h-full md:w-full"
      />
    </div>
  );
}
