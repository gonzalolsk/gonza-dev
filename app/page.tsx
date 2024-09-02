import SectionWelcome from './ui/sectionWelcome/SectionWelcome';
import SectionAbout from './ui/sectionAbout/sectionAbout';
import SectionExpertise from './ui/sectionExpertise/SectionExpertise';
import Contact from './ui/contact/Contact';
import ShowScrollProgress from './ui/showScrollProgress/ShowScrollProgress';
import Image from 'next/image';
export default function Home() {
  
  
  return (
    <>        

      <main className="flex flex-col justify-between bg-slate-200 dark:bg-firstColor text-slate-800 dark:text-slate-50 " id="home">
          <ShowScrollProgress />
          <SectionWelcome />
          <SectionAbout />
          <div className='diagonal-border bg-[#0c3056]'></div>
          <SectionExpertise />
          <Contact />
      </main>
    </>
  );
}
