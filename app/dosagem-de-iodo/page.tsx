import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DosagemDeIodo() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/dosagemIodo.png"
                        alt="Dosagem de iodo"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">Dosagem de Iodo</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        Níveis adequados de Iodo são importantes não somente para a manutenção da saúde tiroidiana, como de todo sistema glandular encontrado no corpo, como mama, próstata e ovários. E assim evitando o surgimento de nódulos, cistos, e câncer no sistema glandular relacionado à deficiência de iodo.
                        <br /><br />
                        Avaliação de níveis de Iodo na tireoide, através do iodo salivar, é importante como parte do diagnóstico de bócio, hipotireoidismo, Tireoidite de Hashimoto e Doença de Graves, e hipotireoidismo congênito.
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