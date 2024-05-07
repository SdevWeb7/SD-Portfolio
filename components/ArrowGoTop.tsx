import {IconArrowToTop} from "@/svg/IconArrowToTop";
import Link from "next/link";

export const ArrowGoTop = () => {

    return <Link href={'#top'} className="arrow-go-top">

        <IconArrowToTop />
    </Link>
}