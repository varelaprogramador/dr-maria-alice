import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft } from "lucide-react"

const ParticaOrtomolecular = () => {
    return (
        <div className="min-h-screen bg-[#f5f9fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-center">
                    <Image
                        src="/pratica-ortomolecular.jpg"
                        alt="Prática Ortomolecular"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                    <div className="flex flex-col gap-4 mt-8 w-full">
                        <div className="flex items-start gap-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg p-4 shadow-md">
                            <ArrowRightLeft className="w-6 h-6 mt-1" />
                            <span className="text-sm">
                                É possível tratar uma pessoa com sintomas antes que o quadro evolua para uma hipertensão arterial, assim como tratar obesidade antes que ocasione diabetes.
                            </span>
                        </div>
                        <div className="flex items-start gap-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg p-4 shadow-md">
                            <ArrowRightLeft className="w-6 h-6 mt-1" />
                            <span className="text-sm">
                                O tratamento visa restabelecer a nutrição funcional com a correção da dieta e suplementação nutricional, atuando na causa (déficit) e eliminando toxinas.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">PRÁTICA ORTOMOLECULAR</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        A Ortomolecular é um ramo da ciência com o objetivo de restabelecer o equilíbrio original do organismo, que se dá por meio do uso de substâncias e elementos naturais, como vitaminas, minerais ou aminoácidos. Estes elementos proporcionam um equilíbrio bioquímico e combatem os radicais livres.
                        <br /><br />
                        O tratamento ortomolecular visa o diagnóstico dos fatores que estão envolvidos na nutrição e que influenciam no equilíbrio do organismo. Através de uma avaliação laboratorial e clínica, é possível identificar padrões de absorção, metabolismo e a presença de substâncias indesejadas no corpo. A partir disso, a correção de suplementos e ajustes funcionais equilibram deficiências e eliminam excessos, tratando a causa do problema e não apenas os sintomas.
                        <br /><br />
                        A abordagem é individualizada e visa a saúde integral, o que a diferencia da medicina tradicional. Se a Prática Ortomolecular mudou a sua vida, saiba mais!
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

export default ParticaOrtomolecular
