import payApiImage from '@/public/images/payApi.png';
import youtubeReloadImage from '@/public/images/youtube_reload.jpg';
import devjsImage from '@/public/images/dev-js.jpg';
import Image from "next/image";
import Link from "next/link";
import IconLink from "@/svg/IconLink";

export const Projects = () => {


    return <section id={'projects'}>
        <h2>Projets</h2>


        <div className="container">
            <Image src={youtubeReloadImage} alt={'project fullstack youtube reload'}/>

            <article className="description-1">
                <h3>Youtube Reload</h3>
                <p>Reproduction d&apos;une maquette du site <Link target={"_blank"} href={"https://www.frontendmentor.io/home"}>Front-end Mentor</Link> en full-stack.</p>
                <p className={'badges'}><span className="badge">Next.js</span><span
                    className={'badge'}>Server-actions</span><span className="badge">Prisma</span><span className="badge">Next-Auth</span><span className="badge">OAuth2</span><span className="badge">Sass</span><span className="badge">Resend</span></p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link target={'_blank'} className={'btn-link'} href={'https://github.com/SdevWeb7/youtube_reload'}>Code
                        source <IconLink className={"inline"} /></Link>
                    <Link className={'btn-link'} target={'_blank'} href={'https://sdevnext2.vercel.app/'}>Site <IconLink className={"inline"}/></Link>
                </div>
            </article>
        </div>


        <div className="container container-2 second-project">

            <article className="description-2">
                <h3>PayApi</h3>
                <p>Reproduction d&apos;une maquette du site <Link target={"_blank"} href={"https://www.frontendmentor.io/home"}>Front-end Mentor</Link> en front-end.</p>
                <p className={'badges'}><span className="badge">Vite.js</span><span className={'badge'}>React.js</span><span
                    className={'badge'}>TailwindCSS</span></p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link target={'_blank'} className={'btn-link'} href={'https://github.com/SdevWeb7/PayApi'}>Code source <IconLink
                        className={"inline"}/></Link>
                    <Link target={'_blank'} className={'btn-link'} href={'https://sdevweb7.github.io/PayApi/'}>Site <IconLink
                        className={"inline"}/></Link>
                </div>
            </article>
            <Image src={payApiImage} alt={'project front-end payApi'}/>
        </div>


        <div className="container second-project">
            <Image src={devjsImage} alt={'project fullstack dev-js plateforme e-learning'}/>

            <article className="description-1">
                <h3>Dev-js</h3>
                <p>Création d&apos;une plateforme d&apos;apprentissage du HTML, CSS, Javascript et Next.js (en cours de réalisation).</p>
                <p className={'badges'}><span className="badge">Next.js</span><span
                    className={'badge'}>Server-actions</span><span className="badge">Prisma</span><span className="badge">Next-Auth</span><span className={'badge'}>TailwindCSS</span><span className={"badge"}>Shadcn-ui</span><span className="badge">Stripe (webhooks)</span><span className="badge">Resend</span></p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link target={'_blank'} className={'btn-link'} href={'https://github.com/SdevWeb7/Dev-js'}>Code source <IconLink className={"inline"} /></Link>
                    <Link target={'_blank'} className={'btn-link'} href={'https://dev-js7.vercel.app/'}>Site <IconLink className={"inline"} /></Link>
                </div>
            </article>
        </div>

    </section>;
}