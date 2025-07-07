import { HeaderCustom } from "@/components/header-custom";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen mx-auto ">
            <section
                className="flex flex-col px-[18%] relative"
                style={{
                    backgroundImage: 'url("/default-section-1.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#1a8ca811] pointer-events-none" />
                <div className="relative z-10">
                    <HeaderCustom />
                    <div className="flex gap-10 py-10 ">
                        <div className="flex flex-col w-full text-gray-700">
                            <h2 className="text-blue-300 font-semibold text-lg mb-1">CONHEÇA UM POUCO DA</h2>
                            <h2 className="font-semibold text-2xl mb-6">DRA. MARIA ALICE</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base">
                                <li>Formada em 1979 pela Faculdade de Medicina de Teresópolis</li>
                                <li>Título de Especialista em Nefrologia pela Sociedade Brasileira de Nefrologia e Associação Médica Brasileira</li>
                                <li>Curso de Iniciação ao Bigliardi Org Test</li>
                                <li>Pós Graduação em Nutriendocrinologia Funcional - Prevenção e Tratamento dos Distúrbios Relacionados à Idade</li>
                                <li>Curso prático em Diagnóstico através da Bio ressonância - Módulos 1 e 2</li>
                                <li>Curso Semeiotica & DNA: avaliação personalizada baseada no DNA</li>
                                <li>Curso Monitoramento de Hormônios e Imunidade</li>
                                <li>Curso Dosagens Hormonais e Modulação Hormonal</li>
                                <li>Curso Intensivo Teórico Prático de Biopuntura</li>
                                <li>Curso Laserterapia Clínica</li>
                                <li>Curso Dosagem Hormonal na Saliva</li>
                                <li>Curso Wellness: Diet and Wellness Project</li>
                                <li>Habilitação em práticas integrativas de laboratório e tratamento</li>
                                <li>Atua na Medicina Integrativa e nos tratamentos de doenças e desordens metabólicas</li>
                                <li>Membro da Associação Brasileira de Nutrologia</li>
                                <li>Membro da Associação Brasileira de Fitoterapia</li>
                                <li>Certificação em Fitoterapia e Medicina Ortomolecular e Funcional</li>
                            </ul>
                            <div className="flex mt-8">
                                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 font-light">
                                    Agendar uma consulta
                                </Button>
                            </div>
                        </div>
                        <div className="w-full">
                            <Image
                                src="/dra.jpg"
                                alt="Dra. Maria Alice"
                                height={480}
                                width={600}
                                className="rounded-xl object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
