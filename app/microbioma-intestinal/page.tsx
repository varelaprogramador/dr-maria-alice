import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MicrobiomaIntestinal() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/microbioma-intestinal.png"
                        alt="Microbioma intestinal"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">Microbioma Intestinal</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        O trato gastrointestinal humano é composto por uma vasta diversidade de bactérias, archaea, fungos, vírus e fagos. Essa complexa comunidade de microrganismos é denominada MICROBIOTA INTESTINAL e o conjunto de todos os seus genomas e as condições ambientais circundantes representam o MICROBIOMA INTESTINAL.
                        <br /><br />
                        MICROBIOMA é um teste molecular capaz de detectar a complexa comunidade de bactérias que compõem a Microbiota Intestinal, através do sequenciamento do DNA dessas bactérias.
                    </p>
                    <Button
                        asChild
                        className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-light px-6 py-3 mt-2"
                    >
                        <a href="/contato">AGENDE UMA CONSULTA</a>
                    </Button>
                </div>
            </section>
        </div>
    )
}