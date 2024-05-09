import {Intro} from "@/components/Intro";
import {Parcours} from "@/components/Parcours";
import {Header} from "@/components/Header";
import {Projects} from "@/components/Projects";
import {Footer} from "@/components/Footer";


export default function Home() {

  return <>

      <Header />


      <main className={'main'}>

        <Intro />

        <Parcours />

        <Projects />

        <Footer />

    </main></>;
}
