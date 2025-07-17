import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EstresseFisicoEmocional() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/estresse.png"
                        alt="Estresse físico e emocional"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">ESTRESSE FÍSICO E EMOCIONAL</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        O stress está ligado ao aumento dos níveis de cortisol na corrente sanguínea, afetando a mente e contribuindo para as doenças físicas, como: queda de cabelo, problemas de pele, dor de cabeça, insônia, entre outros.
                        <br /><br />
                        No âmbito psicológico os hormônios estressores, como o cortisol e a adrenalina causam problemas de concentração e insegurança, que interferem nas atividades diárias.
                        <br /><br />
                        Uma pessoa emocionalmente saudável retorna rapidamente ao estado normal depois de um momento de tensão, já uma estressada entra em um ciclo vicioso de desequilíbrio, ficando cada vez mais adaptada a esse estado.
                        <br /><br />
                        O stress pode se manifestar em pessoas de todas as idades, inclusive em crianças e adolescentes quando passam por problemas, como bullying na escola, separação dos pais ou doenças graves na família.
                        <br /><br />
                        O médico identifica as causas do stress indicando um tratamento apropriado.
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