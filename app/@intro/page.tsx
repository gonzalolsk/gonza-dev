import { cookies } from "next/headers";

export default function IntroPage(){
  const v = cookies().get('visitor')?.value;
if(!v) return null;
    return(
        <div className="relative top-[84px] px-1 text-sm sm:text-base sm:px-20 bg-[#232325] dark:bg-slate-200 ">
            <h4 className=" text-white dark:text-[#232325] px-4 py-2">Hello <b className="capitalize">{v}</b>, welcome to my portfolio.</h4>           
        </div>
            
    )    
}