import { HeaderCustom } from "@/components/header-custom";
import Tratamento from "@/components/tratamento/page";

export default function Tratamentos() {

    const tratamentos = [
        {
            url: "/ortomolcular.png",
            titulo: "PRÁTICA ORTOMOLECULAR",
            descricao: "A Ortomolecular é um ramo da ciência com o objetivo de restabelecer o equilíbrio químico do organismo, que se dá por meio do uso de substâncias e elementos naturais, como…",
            link: "/partica-ortomolecular"
        },
        {
            url: "/tratamento-emagrecimento.jpg",
            titulo: "EMAGRECIMENTO",
            descricao: "A Ortomolecular é um ramo da ciência com o objetivo de restabelecer o equilíbrio químico do organismo, que se dá por meio do uso de substâncias e elementos naturais, como vitaminas, minerais ou aminoácidos…",
            link: "/emagrecimento"
        },
        {
            url: "/modulacao.png",
            titulo: "MODULAÇÃO HORMONAL",
            descricao: "Modulação Hormonal Feminina e Masculina: é importante para a saúde do corpo, que funciona dentro de um sistema harmônico no qual tudo está conectado, por isso ..",
            link: "/modulacao-hormonal"
        },
        {
            url: "/envelhecimento.png",
            titulo: "ENVELHECIMENTO SAUDÁVEL",
            descricao: "O envelhecimento é um processo que influi na queda das capacidades físicas e mentais afetando todas as pessoas, mas o retardamento desse processo e o consequente aumento do tempo médio de vida…",
            link: "/envelhecimento-saudavel"
        },
        {
            url: "/sono.png",
            titulo: "DISTÚRBIOS DO SONO",
            descricao: "Estar com o sono em dia torna o organismo mais forte e aumenta a imunidade  contra doenças. A dificuldade para dormir aflige muitas pessoas, o que aumenta a propensão para adoecer, uma vez que…",
            link: "/disturbios-do-sono"
        },
        {
            url: "/estresse.png",
            titulo: "ESTRESSE FÍSICO E EMOCIONAL",
            descricao: "O stress está ligado ao aumento dos níveis de cortisol na corrente sanguínea, afetando a mente e contribuindo para as doenças físicas, como: queda de cabelo, problemas de pele, dor de cabeça, insônia, entre …",
            link: "/estresse-fisico-emocional"
        }
    ]
    
    return (
        <div className="min-h-screen mx-auto ">
            <section
                className="flex flex-col px-4 sm:px-8 md:px-[18%] relative"
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
                    <div className="container mx-auto px-0 sm:px-4 py-8 md:py-12 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Tratamentos</h1>
                        <p className="text-base md:text-lg text-slate-700">
                            MEDICINA FUNCIONAL INTEGRATIVA – <span className="font-bold">Diagnóstico e Tratamento</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-start items-start p-0 sm:p-4">
                        {tratamentos.map((tratamento) => (
                            <Tratamento key={tratamento.titulo} url={tratamento.url} titulo={tratamento.titulo} descricao={tratamento.descricao} link={tratamento.link} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}