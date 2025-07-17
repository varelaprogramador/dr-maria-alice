import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Histamina() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/histamina.png"
                        alt="Histamina – Estudo da Metilação"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">Histamina – Estudo da Metilação</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                    O aumento da conscientização que o processo de metilação adequado é fundamental para a saúde mental e o lançamento de um novo ensaio laboratorial (Lemos Laboratórios – Juiz de Fora – MG) que permite uma análise mais adequada do estado de metilação do paciente, tornam muito importante um conhecimento mais aprofundado desse processo bioquímico biológico fundamental para a vida.
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