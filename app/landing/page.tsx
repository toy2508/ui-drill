import {Poppins} from "next/font/google";

const poppins = Poppins({subsets: ["latin"], weight: ["400", "600", "900"]})


export default function LadingPage() {

    return (
        <div className={`${poppins.className} bg-neutral-900 w-full h-screen flex place-items-center justify-center`}>
            <section className={"w-[44rem] h-[26rem] bg-neutral-800 rounded-lg border-neutral-600 " +
                "flex flex-row p-8 absolute justify-between stroke-[0.1] hover:stroke-[0.2]"}>
                <div></div>
            </section>
        </div>
    )

}