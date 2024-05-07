"use client"

import logo from '@/public/images/Logo_1.svg';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {Menu} from "@/components/Menu";


export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return <header
            className={`header`}>

        <Link href={"#intro"}>
            <Image
                src={logo}
                alt={'logo SD-Portfolio'}
                id={'logo'}
                className={'logo'} />
        </Link>


        <nav
            className={`burger ${isOpenMenu ? 'burger-close' : ''}`}
            onClick={() => setIsOpenMenu(v => !v)}>
            <div></div>
            <div></div>
            <div></div>
        </nav>

        <nav className="navbar">
            <Link href={'#about'}><span>01.</span>About</Link>
            <Link href={'#projects'}><span>02.</span>Projects</Link>
            <Link href={'#contact'}><span>03.</span>Contact</Link>
        </nav>

        {isOpenMenu && <Menu setIsOpenMenu={setIsOpenMenu} />}

    </header>;
}