import {useInView} from "react-intersection-observer";
import {useTheme} from "next-themes";
import {useEffect} from "react";

export const Part2 = () => {
    const {setTheme} = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [inView]);


    return <article ref={ref}>
        <h1>Part2</h1>
    </article>;
}