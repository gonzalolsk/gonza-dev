import SectionWelcome from './ui/sectionWelcome/SectionWelcome';
import SectionAbout from './ui/sectionAbout/sectionAbout';
import SectionExpertise from './ui/sectionExpertise/SectionExpertise';
import Contact from './ui/contact/Contact';
import ShowScrollProgress from './ui/showScrollProgress/ShowScrollProgress';

export default function Home() {
  
  
  return (
    <>  
      <main className="flex flex-col justify-between bg-slate-200 dark:bg-[#2c1338] text-slate-800 dark:text-slate-50 " id="home">
          <ShowScrollProgress />
          <SectionWelcome />
          <div className='diagonal-border bg-white dark:bg-slate-400'></div>
          <SectionAbout />
          <SectionExpertise />
          <Contact />
      </main>
    </>
  );
}
