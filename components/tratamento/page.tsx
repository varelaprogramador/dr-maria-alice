import Image from "next/image";
import { Button } from "../ui/button";

export default function Tratamento({ url, titulo, descricao }: { url: string, titulo: string, descricao: string }) {
    console.log("url prop:", url);
    return (
        <div className="flex-col w-3xs gap-2 border border-[var(--e-global-color-astglobalcolor8)] rounded-[16px_16px_16px_0px] transition-colors duration-300 p-4">
            <Image src={url} alt="Imagem" className="w-3xl h-3x1 rounded" width={768} height={768} />
            <div>
                <h3 className="text-lg font-bold">{titulo}</h3>
                <p className="text-sm text-gray-600">{descricao}</p>
                <Button variant="ghost" className="px-0 font-light">Saiba Mais</Button>
            </div>
        </div>
    );
}