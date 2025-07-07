"use client"
import { HeaderCustom } from "@/components/header-custom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(1, "Telefone obrigatório"),
    message: z.string().min(1, "Mensagem obrigatória"),
    source: z.array(z.string()).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const sources = [
    { label: "Google", value: "google" },
    { label: "Instagram", value: "instagram" },
    { label: "Facebook", value: "facebook" },
    { label: "Indicação", value: "indicacao" },
];

const Contact = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            source: [],
        },
    });
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true);
        // Simulação de envio (substituir por chamada real com TanStack Query + Axios)
        setTimeout(() => {
            setLoading(false);
            toast.success("Mensagem enviada com sucesso!");
            form.reset();
        }, 1200);
    };

    return (
        <div className="min-h-screen mx-auto">
            <section
                className="flex flex-col px-[6%] py-10 relative"
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
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mt-10">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-2">Agende sua consulta</h2>
                            <p className="text-blue-700 text-sm mb-4">
                                A Clínica Dra. Maria Alice Fernandes de Miranda busca através da Medicina Integrativa oferecer saúde e bem-estar aos pacientes, utilizando recursos eficazes para o diagnóstico e tratamentos.
                            </p>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nome *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu nome" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>E-mail</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu e-mail" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Telefone *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Digite seu telefone" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mensagem *</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Digite sua mensagem" rows={4} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div>
                                        <FormLabel>Por onde nos encontrou?</FormLabel>
                                        <div className="flex flex-wrap gap-4 mt-2">
                                            {sources.map((src) => (
                                                <FormField
                                                    key={src.value}
                                                    control={form.control}
                                                    name="source"
                                                    render={({ field }) => (
                                                        <FormItem className="flex items-center space-x-2">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(src.value)}
                                                                    onCheckedChange={(checked) => {
                                                                        if (checked) {
                                                                            field.onChange([...(field.value || []), src.value]);
                                                                        } else {
                                                                            field.onChange((field.value || []).filter((v: string) => v !== src.value));
                                                                        }
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal cursor-pointer">{src.label}</FormLabel>
                                                        </FormItem>
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <Button type="submit" className="mt-2 w-32" disabled={loading}>
                                        {loading ? "Enviando..." : "Enviar"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-500 text-xl">📞</span>
                                        <span className="font-semibold">Telefone</span>
                                    </div>
                                    <div className="ml-7 text-sm">11 4323-0042</div>
                                    <div className="ml-7 text-sm">11 4323-0043</div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-blue-500 text-xl">💬</span>
                                        <span className="font-semibold">WhatsApp</span>
                                    </div>
                                    <div className="ml-7 text-sm">11 9 9304-9032</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-500 text-xl">⏰</span>
                                        <span className="font-semibold">Horário De Atendimento</span>
                                    </div>
                                    <div className="ml-7 text-sm">Segunda – Quinta 08:00 / 18:00</div>
                                    <div className="ml-7 text-sm">Sexta 08:00 / 17:00</div>
                                    <div className="ml-7 text-sm">Sábado 08:00 / 16:00</div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-blue-500 font-bold text-lg mb-2">Leve-me até a clínica!</h3>
                                <div className="rounded-lg overflow-hidden mb-2">
                                    <iframe
                                        src="https://www.google.com/maps?q=R.+Voluntários+da+Pátria,+3744+-+Santana,+São+Paulo+-+SP,+02402-400&output=embed"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Mapa da clínica"
                                    />
                                </div>
                                <Image
                                    src="/clinica.jpg"
                                    alt="Foto da clínica"
                                    width={400}
                                    height={120}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 