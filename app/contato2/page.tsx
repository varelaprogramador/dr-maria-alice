import { HeaderCustom } from "@/components/header-custom"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Contato2() {
    return (
        <div className="min-h-screen bg-[#eaf6fd]">
            <HeaderCustom />
            <section className="flex flex-col md:flex-row gap-20 px-4 md:px-[12%] py-12 items-center">
                <div className="w-full md:w-[100%] flex bg-white rounded-xl p-4">
                    <div className="w-full md:w-[50%]">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222B45] mb-4">Agende sua consulta</h1>
                        <p className="text-base text-[#7d9dfe] mb-6 leading-relaxed">
                            A Clínica Dra. Maria Alice Fernandes de Miranda busca através da Medicina Integrativa oferecer saúde e bem-estar aos pacientes, utilizando recursos eficazes para o diagnóstico e tratamentos.
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="text-base text-[#222B45] mb-6 leading-relaxed"></p>
                        </div>
                        <span className="text-base text-[#222B45] mb-6 leading-relaxed">
                            Os campos marcados com * são obrigatórios
                        </span>
                        <form className="flex flex-col gap-4">
                            <Input type="text" placeholder="Nome" />
                            <Input type="email" placeholder="E-mail" />
                            <Input type="tel" placeholder="Telefone" />
                            <Textarea placeholder="Mensagem" />
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="flex items-center gap-2">
                                    <Checkbox id="Google" />
                                    Google
                                </label>
                                <label className="flex items-center gap-2">
                                    <Checkbox id="Facebook" />
                                    Facebook
                                </label>
                                <label className="flex items-center gap-2">
                                    <Checkbox id="Instagram" />
                                    Instagram
                                </label>
                                <label className="flex items-center gap-2">
                                    <Checkbox id="indicacao" />
                                    Indicação
                                </label>
                            </div>
                            <Button type="submit" className="mt-6">Enviar</Button>
                        </form>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col w-full gap-6 items-start justify-start p-4">
                      <div className="flex flex-wrap gap-6 w-full">
                        {/* Telefone */}
                        <div className="flex flex-col items-center min-w-[180px] flex-1">
                          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                            <span role="img" aria-label="Telefone">📞</span> Telefone
                          </div>
                          <span className="mt-1 text-base text-center">11 4323-0042</span>
                        </div>
                        {/* Horário */}
                        <div className="flex flex-col items-center min-w-[180px] flex-1">
                          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                            <span role="img" aria-label="Horário">⏰</span> Horário De Atendimento
                          </div>
                          <div className="mt-1 text-base text-center">
                            Segunda – Quinta 08:00 / 18:00<br />
                            Sexta 08:00 / 17:00<br />
                            Sábado 08:00 / 16:00
                          </div>
                        </div>
                        {/* WhatsApp */}
                        <div className="flex flex-col items-center min-w-[180px] flex-1">
                          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                            <span role="img" aria-label="WhatsApp">💬</span> WhatsApp
                          </div>
                          <span className="mt-1 text-base text-center">11 9 9304-9032</span>
                        </div>
                      </div>
                      {/* Título acima do mapa */}
                      <h3 className="block text-2xl font-bold text-[#5980f7] mt-6">Leve-me até a clínica!</h3>
                      {/* iFrame do mapa */}
                      <div className="w-full mt-2 rounded-xl overflow-hidden shadow-lg" style={{ maxWidth: 400 }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468385.40011773224!2d-46.626561!3d-23.487109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef649f2b65a11%3A0x15da5e96eaae10bc!2sR.%20Volunt%C3%A1rios%20da%20P%C3%A1tria%2C%203744%20-%20cj.%2033%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002402-400%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1752789661585!5m2!1spt-BR!2sus"
                          width="100%"
                          height="300"
                          className="border-0 w-full h-[300px]"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                      {/* Imagem abaixo do mapa */}
                      <Image src="/clinica.jpg" alt="Mapa" width={400} height={300} className="rounded-xl shadow mt-4" />
                    </div>
                </div>
            </section>
        </div>
    )
}