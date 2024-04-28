import Header from "@/app/ui/header/Header";
// import Image from "next/image";
// import Tabs from "./ui/tabs/Tabs";
import styles from "./homeStyles.module.css"


export default function Home() {
  
  return (
    <>  
      <main className="flex flex-col min-h-screen justify-between p-24 bg-slate-300 dark:bg-[#232325] text-slate-800 dark:text-slate-50 " id="home">
        <section id="home" className={styles.welcomeSection}>
          <article className=" text-center">
            <h1 className="text-5xl font-bold">HEY, I´M GONZALO LORENZO</h1>
            <p className="text-2xl ">Full Stack Web Developer</p>
            <p className="text-slate-500 dark:text-[#94a3b8] max-w-96 m-auto">Crafting Websites and Web Applications that Drive Overall Product Success</p>
            <button className="text-slate-50 dark:text-slate-50 bg-[#00a388] px-6 py-2 rounded-full my-10 mx-auto">PROYECTS</button>
          </article>
        </section>

        <section id="about" className=" section mb-20 ">
          <h2 className="text-4xl font-bold text-center my-5">ABOUT ME</h2>
          <p className="max-w-2xl">
          I´m Gonzalo Lorenzo, based in La Plata, Argentina. Currently, I´m employed at Xyclon, where I´ve been working since 2021. My journey into the world of programming also began in 2021, and it has been an exhilarating ride ever since. As a full stack developer, I thrive on tackling challenges on both the frontend and backend. My dedication to honing my programming skills and exploring the vast possibilities of technology has been unwavering. I´m excited about the opportunities ahead in the tech industry and am committed to continuous growth and learning.
          </p>
        </section>

        {/* <section id="experience-education" className="my-10 text-slate-800 dark:text-slate-50">
          <h2 className="text-4xl font-bold text-center my-5">Experience &amp; Education</h2>
          <Tabs />
        </section> */}

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

      </main>
    </>
  );
}
