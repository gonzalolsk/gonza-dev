export default function SectionExpertise(){
    return(
        <section id="expertise" className="section">
        <h2 className="text-4xl font-bold text-center mb-20"> Full Stack Web Developer</h2>

      <div className="grid grid-cols-3 gap-10">

      <div className="card bg-slate-800 p-10">
          <h3 className="text-2xl text-red-400">PHP</h3>
          <h5 className="text-slate-400 dark:text-slate-400">Back End and Front End: Laravel</h5>
      </div>

        <div className="card bg-slate-700 p-10 ">
          <h3 className="text-2xl text-yellow-400">Javascript</h3>
          <h5 className="text-slate-400 dark:text-slate-400">Front End: React, Next.js</h5>
          <h5 className="text-slate-400 dark:text-slate-400">Back End: Node, Express</h5>
        </div>

        <div className="card bg-slate-700 p-10">
          <h3  className="text-2xl text-green-400">Database</h3>
          <h5 className="text-slate-400 dark:text-slate-400">MySQL, PostgreSQL, MongoDB</h5>
        </div>
      </div>
      {/* <div className="card bg-green-700 p-10 mt-5 w-full">
        <h3 className="text-2xl text-blue-400"></h3>
        <h5 className="text-slate-400 dark:text-slate-400">Front End: React, Next.js</h5>
        <h5 className="text-slate-400 dark:text-slate-400">Back End: Node, Express</h5>
      </div> */}
      </section>
    )
}