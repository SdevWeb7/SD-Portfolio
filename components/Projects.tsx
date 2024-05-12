import payApiImage from '@/public/images/payApi.png';
import youtubeReloadImage from '@/public/images/youtube_reload.jpg';
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {


    return <section id={'projects'}>
        <h2>Projets</h2>

        <div className="container">
            <Image src={payApiImage} alt={'project front-end payApi'}/>

            <article className="description">
                <h3>PayApi</h3>
                <p>Challenge Front-End</p>
                <p className={'badges'}><span className="badge">ViteJS</span><span className={'badge'}>React</span><span
                    className={'badge'}>TailwindCSS</span></p>

                <Link href={'https://sdevweb7.github.io/PayApi/'}>Live preview</Link>
                <Link href={'https://github.com/SdevWeb7/PayApi'}>Code source</Link>
            </article>
        </div>


        <div className="container second-project">
            <Image src={youtubeReloadImage} alt={'project fullstack youtube reload'}/>

            <article className="description">
                <h3>Youtube Reload</h3>
                <p>Challenge Full-Stack</p>
                <p className={'badges'}><span className="badge">Next.js</span><span
                    className={'badge'}>Server-actions</span><span className="badge">Sass</span></p>

                <Link href={'https://github.com/SdevWeb7/youtube_reload'}>Code source</Link>
            </article>
        </div>
    </section>;
}