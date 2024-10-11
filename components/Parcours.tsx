"use client"


import IconCloudDemo from "@/components/IconCloudDemo";

export const Parcours = () => {



    return <section id={"parcours"}>
        <h2>Parcours</h2>


        <div className="container">
        <article className={'p-8'}>
            <ul>Auto-formation:
                <li>C, C++, Python</li>
                <li>HTML, CSS, Sass</li>
                <li>SQL, Git, Mysql, Postgresql</li>
                <li>Javascript, Php</li>
                <li>Symfony, React.js</li>
                <li>ExpressJS, ReactJS</li>
                <li>Next.js, Prisma</li>
                <li>TailwindCSS, Shadcn-ui</li>
                <li>Typescript</li>

            </ul>

            <ul>Stacks 💜💜💜:
                <li>Next.js, Prisma</li>
                <li>Symfony, React</li>
                <li>Sass ou TailwindCSS</li>
            </ul>
        </article>



        <IconCloudDemo />

        </div>
    </section>;
}