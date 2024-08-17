import Link from "next/link";

export default function SectionWelcome(){
    return(
        <section id="welcome" className={`section `}>
            <article className="text-center">
                <h1 className="text-5xl font-bold">HEY, I´M GONZALO LORENZO</h1>
                <p className="text-2xl ">Full Stack Web Developer</p>
                <p className="text-slate-500 dark:text-[#94a3b8] max-w-96 m-auto">Crafting Websites and Web Applications that Drive Overall Product Success</p>
                <Link 
                href="/downloads/CV-eng-Gonzalo-Lorenzo.pdf"
                className="text-slate-50 dark:text-slate-50 bg-[#00a388] px-6 py-2 rounded-full inline-block my-10 mx-auto"
                target="_blank"
                >
                        Download my CV!
                </Link>
            </article>
        </section>
    )
}

