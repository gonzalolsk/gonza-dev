import { cookies } from "next/headers";

export default function IntroPage(){
  const v = cookies().get('visitor')?.value;
if(!v) return null;
    return(
        <div className="pt-20">
            <h4 className="bg-primary-700 rounded-md p-4">Hello <b className="capitalize">{v}</b>, welcome to my portfolio.</h4>           
        </div>
            
    )    
}