import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DisturbiosDoSono() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/sono.png"
                        alt="Distúrbios do sono"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">DISTÚRBIOS DO SONO</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        Estar com o sono em dia torna o organismo mais forte e aumenta a imunidade contra doenças.
                        <br /><br />
                        A dificuldade para dormir aflige muitas pessoas, o que aumenta a propensão para adoecer, uma vez que o sono tem a capacidade de regular todas as funções fisiológicas e os demais comportamentos do ser humano, portanto se este fator não for levado em conta não há como evitar o comprometimento do sistema imunológico.
                        <br /><br />
                        A quantidade ideal de horas de sono depende do estilo de vida e da saúde de cada um. A maioria sente-se satisfeita com cerca de 7 a 8 horas de sono, porém o que define se a pessoa dormiu satisfatoriamente é o estado em que ela se encontra no dia seguinte.
                        <br /><br />
                        O sono não é apenas um momento em que o corpo e o cérebro estão desligados. Enquanto a pessoa descansa, o cérebro fica ocupado com uma variedade de tarefas biológicas de manutenção que preparam o indivíduo para o dia seguinte. Sem horas suficientes de sono reparador, não é possível trabalhar, aprender, criar e comunicar-se com qualidade.
                        <br /><br />
                        A dificuldade em adormecer ou manter um sono contínuo aparece com o estresse, causando depressão e ansiedade.
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