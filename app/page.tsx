import SectionWelcome from './ui/sectionWelcome/SectionWelcome';
import SectionAbout from './ui/sectionAbout/sectionAbout';
import SectionExpertise from './ui/sectionExpertise/SectionExpertise';

export default function Home() {
  
  
  return (
    <>  
      <main className="flex flex-col justify-between bg-slate-300 dark:bg-[#232325] text-slate-800 dark:text-slate-50 " id="home">
        <div className="scroll-container">
          <SectionWelcome />
          <SectionAbout />
          <SectionExpertise />
        </div>
      </main>
    </>
  );
}
