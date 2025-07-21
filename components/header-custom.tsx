"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@/components/ui/popover"
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const HeaderCustom = () => {
    const router = useRouter()
    const [openTratamentos, setOpenTratamentos] = useState(false)
    const [openExames, setOpenExames] = useState(false)

    return (
        <header className="min-h-[80px] flex justify-between items-center py-6 px-4 md:px-10">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={160} height={40} />
            </div>
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-4 font-light">
                <Link href={"/"}>INICIO</Link>
                <Link href={"/bio"}>BIOGRAFIA</Link>
                <div
                    onMouseEnter={() => setOpenTratamentos(true)}
                    onMouseLeave={() => setOpenTratamentos(false)}
                >
                    <Popover open={openTratamentos} onOpenChange={setOpenTratamentos}>
                        <PopoverTrigger asChild>
                            <Button onClick={() => router.push("/tratamentos")} variant="ghost" className="px-0 font-light">TRATAMENTOS</Button>
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
                </div>
                <div
                    onMouseEnter={() => setOpenExames(true)}
                    onMouseLeave={() => setOpenExames(false)}
                >
                    <Popover open={openExames} onOpenChange={setOpenExames}>
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
                </div>
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
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerContent className="p-0">
                        <div className="flex flex-col gap-2 p-6">
                            <Link href={"/"} className="py-2">INICIO</Link>
                            <Link href={"/bio"} className="py-2">BIOGRAFIA</Link>
                            <div className="py-2">
                                <div className="font-semibold mb-1">TRATAMENTOS</div>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/emagrecimento")}>EMAGRECIMENTO</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/partica-ortomolecular")}>PRÁTICA ORTOMOLECULAR</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/envelhecimento-saudavel")}>ENVELHECIMENTO SAUDÁVEL</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/modulacao-hormonal")}>MODULAÇÃO HORMONAL</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/disturbios-do-sono")}>DISTÚRBIOS DO SONO</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/estresse-fisico-emocional")}>ESTRESSE FÍSICO E EMOCIONAL</Button>
                            </div>
                            <div className="py-2">
                                <div className="font-semibold mb-1">EXAMES ESPECIAIS</div>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/dosagem-de-iodo")}>Dosagem de Iodo</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/perfil-nutrigenetico")}>Perfil Nutrigenético</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/microbioma-intestinal")}>Microbioma Intestinal</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/trombofilia")}>Trombofilia</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/histamina")}>Histamina – Estudo da Metilação</Button>
                                <Button variant="ghost" className="justify-start w-full rounded-none" onClick={() => router.push("/alzheimer")}>Alzheimer</Button>
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