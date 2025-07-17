"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@/components/ui/popover"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export const HeaderCustom = () => {
    const router = useRouter()

    return (
        <header className="min-h-[80px] flex justify-between items-center py-6 px-4 md:px-10">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={160} height={40} />
            </div>
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-4 font-light">
                <Link href={"/"}>INICIO</Link>
                <Link href={"/bio"}>BIOGRAFIA</Link>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="px-0 font-light" onClick={() => router.push("/tratamentos")}>TRATAMENTOS</Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-64 p-0">
                        <div className="flex flex-col py-2">
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/emagrecimento")}>EMAGRECIMENTO</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/partica-ortomolecular")}>PRÁTICA ORTOMOLECULAR</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/envelhecimento-saudavel")}>ENVELHECIMENTO SAUDÁVEL</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/modulacao-hormonal")}>MODULAÇÃO HORMONAL</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/disturbios-do-sono")}>DISTÚRBIOS DO SONO</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/estresse-fisico-emocional")}>ESTRESSE FÍSICO E EMOCIONAL</Button>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="px-0 font-light">EXAMES ESPECIAIS</Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-64 p-0">
                        <div className="flex flex-col py-2">
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/dosagem-de-iodo")}>Dosagem de Iodo</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/perfil-nutrigenetico")}>Perfil Nutrigenético</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/microbioma-intestinal")}>Microbioma Intestinal</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/trombofilia")}>Trombofilia</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/histamina")}>Histamina – Estudo da Metilação</Button>
                            <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/alzheimer")}>Alzheimer</Button>
                        </div>
                    </PopoverContent>
                </Popover>
                <Link href={"/contato"}>CONTATO</Link>
                <Link className="p-4 bg-blue-600 rounded-md text-white hover:bg-blue-700 hover:text-white" href={"/contato"}>
                    AGENDAR CONSULTA
                </Link>
            </div>
            {/* Menu Mobile */}
            <div className="md:hidden flex items-center gap-2">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-0">
                        <div className="flex flex-col gap-2 p-6">
                            <Link href={"/"} className="py-2">INICIO</Link>
                            <Link href={"/bio"} className="py-2">BIOGRAFIA</Link>
                            <div className="py-2">
                                <div className="font-semibold mb-1">TRATAMENTOS</div>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Placeholder 1</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Placeholder 2</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Placeholder 3</Button>
                            </div>
                            <div className="py-2">
                                <div className="font-semibold mb-1">EXAMES ESPECIAIS</div>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Dosagem de Iodo</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Perfil Nutrigenético</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Microbioma Intestinal</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Trombofilia</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Histamina – Estudo da Metilação</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none">Alzheimer</Button>
                            </div>
                            <Link href={"/contato"} className="py-2">CONTATO</Link>
                            <Link className="mt-4 p-4 bg-blue-600 rounded-md text-white hover:bg-blue-700 hover:text-white text-center" href={"/contato"}>
                                AGENDAR CONSULTA
                            </Link>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}