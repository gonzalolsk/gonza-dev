
import Link from "next/link"

export default function Component() {
  return (
    <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className="container grid items-start gap-6 px-4 text-gray-900 dark:text-gray-100 md:gap-12 md:px-6 lg:grid-cols-3">
        <div className="space-y-2 lg:col-span-2">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gonzalo Lorenzo</h1>
            <p className="text-sm font-medium tracking-wide sm:text-base">
              Full Stack Developer | Creative Problem Solver | Team Player
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <MailIcon className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide sm:text-base">gonzalolsk@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide sm:text-base">+54 223 5775702</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <GlobeIcon className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide sm:text-base">gonzadev.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LocateIcon className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide sm:text-base">La Plata, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <div className="grid gap-1.5">
            <p className="text-sm font-medium tracking-wide sm:text-base">
              Innovative software engineer with a passion for leveraging technology to solve complex problems.
              Experienced in full-stack web development and dedicated to writing clean, efficient code. Proven ability
              to work collaboratively in fast-paced environments, delivering high-quality solutions that meet customer
              needs.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="space-y-2">
              <div className="space-y-0.5">
                <h2 className="text-lg font-bold">Master of Science in Computer Science</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Harvard University | 2016 - 2018</p>
              </div>
              <div className="space-y-0.5">
                <h2 className="text-lg font-bold">Bachelor of Science in Information Technology</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  University of California, Berkeley | 2012 - 2016
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="space-y-0.5">
                <h2 className="text-lg font-bold">Senior Software Engineer</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tech Innovators Inc. | 2018 - Present</p>
              </div>
              <ul className="pl-4 list-disc list-outside grid gap-2 text-sm sm:gap-1">
                <li>
                  Led the development of a new microservices architecture, improving system scalability and reducing
                  response times.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver high-impact features, ensuring seamless
                  integration with existing platforms.
                </li>
                <li>
                  Implemented automated testing procedures, resulting in a 30% reduction in the number of production
                  defects.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">HTML5</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">CSS3</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">JavaScript</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">React</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">Next.js</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">Node.js</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">Express</span>
            <span className="inline-block rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800">MongoDB</span>
          </div>
        </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="grid items-start grid-cols-1 md:grid-cols-3 md:gap-4">
        <div className="space-y-2 md:col-span-2">
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">1234 Elm Street, Anytown, USA</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold tracking-wide uppercase">Connect</h3>
          <div className="flex items-center gap-2 text-sm">
            <GithubIcon className="w-4 h-4" />
            <Link href="www.github.com">GitHub</Link>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <LinkedinIcon className="w-4 h-4" />
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
        
        <a href="javascript:window.print()">Download this as a PDF</a>
      </div>
          
        </div>
        <div className="flex items-center justify-center w-full max-w-sm mx-auto lg:order-1 lg:max-w-none lg:mx-0">
          <div className="card w-full max-w-sm p-0 overflow-hidden border-0 shadow-lg lg:w-80">
            <div className="card-content p-6">
              <div className="flex items-center justify-center w-full">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>

    
  )
}




function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
