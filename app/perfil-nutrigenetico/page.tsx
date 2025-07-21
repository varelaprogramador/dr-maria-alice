import { HeaderCustom } from "@/components/header-custom"
import Image from "next/image"

export default function PerfilNutrigenetico() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-8 md:gap-10 px-4 md:px-[12%] py-8 md:py-12 items-center">
                <div className="w-full md:w-[45%] flex flex-col items-start">
                    <Image
                        src="/perfil-nutrigenetico.png"
                        alt="Perfil nutrigenético"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full h-auto"
                        priority
                    />
                </div>
                <div className="w-full md:w-[55%] flex flex-col mt-8 md:mt-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">Perfil nutrigenético</h1>
                    <p className="text-base text-[#222B45] mb-6 leading-relaxed">
                        Estamos vivendo a era da Medicina Genômica que reúne prevenção e tratamento aliados a respostas de exames genéticos. Por meio desses exames é possível determinar a predisposição de cada pessoa a desenvolver problemas de saúde como diabetes e obesidade, a capacidade de metabolizar nutrientes e de reagir a processos inflamatórios.
                        <br /><br />
                        A Nutrigenética surge para unir genética e alimentação sendo parte fundamental da Medicina Genômica, que é preditiva e personalizada. Dessa forma é possível avaliar seu perfil genético e verificar qual a melhor dieta para você, com base nas variações presentes no seu DNA.
                    </p>
                </div>
            </section>
        </div>
    )
}