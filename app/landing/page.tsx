import {Poppins} from "next/font/google";

const poppins = Poppins({subsets: ["latin"], weight: ["400", "600", "900"]})


export default function LadingPage() {

    return (
        <div className={`${poppins.className} bg-neutral-900 w-full h-screen flex place-items-center justify-center`}>
            <section>
                <div></div>
            </section>
        </div>
    )

}