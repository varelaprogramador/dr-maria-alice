import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ModulacaoHormonal() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-center">
                    <Image
                        src="/modulacao.png"
                        alt="Modulação hormonal"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover w-full max-w-xs md:max-w-md"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">MODULAÇÃO HORMONAL</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        Modulação Hormonal Feminina e Masculina: é importante para a saúde do corpo, que funciona dentro de um sistema harmônico no qual tudo está conectado, por isso os hormônios devem atuar de maneira interligada e equilibrada. A correção dos níveis hormonais possibilita à pessoa um ganho de qualidade de vida muito grande.
                        <br /><br />
                        Nas mulheres, além de determinar o fim dos ciclos reprodutivos, também produz uma série de sintomas desagradáveis. Retenção hídrica, o ganho de peso e alteração do humor e etc. A modulação hormonal proporciona a mulher voltar a se sentir bem, mantendo a sua vitalidade.
                        <br /><br />
                        No caso dos homens, após os 40 ano de idade é normal haver um declínio lento e gradual na produção de testosterona, o quadro clínico é de queda da libido, disfunção erétil, fraqueza, tristeza, insônia e mau-humor. Uma maneira de equilibrar a vida é começando por equilibrar os hormônios, ganhando mais qualidade de vida, aumento da autoestima e bem-estar.
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