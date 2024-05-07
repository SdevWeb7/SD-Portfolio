import {Intro} from "@/components/Intro";
import {About} from "@/components/About";
import {Header} from "@/components/Header";
import {Projects} from "@/components/Projects";
import {Contact} from "@/components/Contact";


export default function Home() {

  return <>

      <Header />


      <main className={'main'}>

        <Intro />

        <About />

        <Projects />

        <Contact />

    </main></>;
}
