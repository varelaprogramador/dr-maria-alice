import { HeaderCustom } from "@/components/header-custom";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EnvelhecimentoSaudavel() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="container mx-auto px-54 py-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex flex-col items-center gap-8 w-full md:w-1/2">
                    <Image
                        src="/envelhecimento.png"
                        alt="Envelhecimento saudável"
                        width={420}
                        height={420}
                        className="rounded-2xl object-cover w-full max-w-md"
                    />
                    <div className="flex flex-col gap-6 w-full max-w-md">
                        A preparação e a prevenção do envelhecimento saudável devem começar muitos anos antes, através de um modo saudável de viver. Daí a importância da mudança no estilo de vida, a prática regular de atividades físicas, o controle do estresse, a detoxificação hepática e intestinal, a inibição dos radicais livres, a correção da fadiga mitocondrial, a suplementação nutracêutica funcional, a dieta equilibrada, a modulação hormonal bioidêntica, etc. Faz parte dessa vida saudável uma atitude otimista diante da vida!
                    </div>
                </div>
                <div className="w-full md:w-[55%] flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">ENVELHECIMENTO SAUDÁVEL</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        O envelhecimento é um processo que influi na queda das capacidades físicas e mentais afetando todas as pessoas, mas o retardamento desse processo e o consequente aumento do tempo médio de vida constitui uma das incríveis mudanças sociais dos últimos tempos. O equilíbrio entre saúde física e mental, integração social e o suporte familiar relacionam-se com o bem-estar na Terceira Idade.
                        <br /><br />
                        As doenças do envelhecimento ainda são compreendidas como processos inevitáveis. O sedentarismo, estresse, carências nutricionais e vitamínico,  toxidade alimentar, produção de radicais livres, disfunções mitocondriais, deficiências hormonais, entre outros fatores, geram múltiplos distúrbios nos órgãos e com o tempo dão lugar ao surgimento de doenças associadas a essa fase da vida.
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