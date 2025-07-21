import Image from "next/image";
import { HeaderCustom } from "@/components/header-custom";
import { ArrowLeft } from "lucide-react";

export default function Emagrecimento() {
  return (
    <div className="min-h-screen bg-[#eaf6fd]">
      <HeaderCustom />
      <section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-54 py-8 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-8 w-full md:w-1/2">
          <Image
            src="/pagina-emagrecimento-image.png"
            alt="Emagrecimento"
            width={250}
            height={250}
            className="rounded-2xl object-cover w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full h-auto"
          />
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="bg-blue-600 text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg">
              <ArrowLeft className="w-8 h-8 flex-shrink-0 mt-1" />
              <span>
                É possível tratar uma pessoa com estresse antes que o quadro evolua para uma hipertensão arterial, assim como tratar obesidade antes que ocasione diabetes.
              </span>
            </div>
            <div className="bg-blue-600 text-white rounded-2xl p-6 flex items-start gap-4 shadow-lg border border-blue-400">
              <ArrowLeft className="w-8 h-8 flex-shrink-0 mt-1" />
              <span>
                O tratamento visa restabelecer a nutrição funcional com a correção da dieta e suplementação nutricional, afastando as causas tóxicas e eliminando toxinas.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#151c2c]">Emagrecimento</h1>
          <div className="flex flex-col gap-6 text-lg text-[#222]">
            <p>
                A Ortomolecular é um ramo da ciência com o objetivo de restabelecer o equilíbrio químico do organismo, que se dá por meio do uso de substâncias e elementos naturais, como vitaminas, minerais ou aminoácidos. Estes elementos proporcionam um reequilíbrio bioquímico e combatem os radicais livres.
            </p>
            <p>
                A Ortomolecular é um ramo da ciência com o objetivo de restabelecer o equilíbrio químico do organismo, que se dá por meio do uso de substâncias e elementos naturais, como vitaminas, minerais ou aminoácidos. Estes elementos proporcionam um reequilíbrio bioquímico e combatem os radicais livres.
            </p>
            <p>
            A Ortomolecular oferece às células o que elas necessitam do ponto de vista nutracêutico, o que vai depender do estilo de vida do paciente e seu histórico alimentar, da quantificação laboratorial de parâmetros específicos, à prescrição de suplementos alimentares quando identificada determinada carência nutricional ou mesmo na prevenção de doenças, proporcionando benefícios à saúde. Geralmente, a alimentação por si só não “dá conta do recado”, do que o organismo precisa. É aí que a Prática Ortomolecular mostra a sua eficácia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}