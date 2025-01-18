import { LinkField } from "@prismicio/client"
import { PrismicLink } from "@prismicio/react"
import clsx from "clsx";

interface Props {
    buttonLink : LinkField;
    buttonText: string | null ;
    className?: string;
}

export const Button = ({buttonLink , buttonText , className} : Props) => {
    return (
        <PrismicLink className={clsx( "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase  tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl" , className)} field={buttonLink}>
            {buttonText}
        </PrismicLink>
    )
}
