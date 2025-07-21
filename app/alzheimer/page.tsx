import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Alzheimer() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-8 md:gap-10 px-4 md:px-[12%] py-8 md:py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/alzheimer.png"
                        alt="Alzheimer"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full h-auto"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col mt-8 md:mt-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">Alzheimer</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        A Doença de Alzheimer é uma doença neurodegenerativa e é a causa mais comum de demência em pessoas idosas, representando 50-80% dos casos. Apresenta manifestação clínica lenta, porém progressiva, com perda de função cognitiva como memória, raciocínio lógico, linguagem, atenção e habilidade visual e espacial.
                        <br /><br />
                        Estima-se que no Brasil meio milhão de idosos tenham a Doença de Alzheimer, que pode ser causada por fatores ambientais ou hereditários, ou seja, transmitidos de geração pra geração dentro das famílias. O Painel para Doença de Alzheimer avalia mutações nos genes APOE, APOC1, GAB2 e LTA, todas relacionadas a predisposição genética do paciente desenvolver a doença.
                    </p>
                    <Button
                        asChild
                        className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-light px-6 py-3 mt-2"
                    >
                        <a href="/contato">ENTRE EM CONTATO</a>
                    </Button>
                </div>
            </section>
        </div>
    )
}