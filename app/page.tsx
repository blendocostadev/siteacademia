import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Users, Clock, Trophy, Star, CheckCircle, Phone, MapPin, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AcademiaWebsite() {
  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos da academia."

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-900/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold">PowerGym</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="hover:text-red-500 transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="hover:text-red-500 transition-colors">
              Serviços
            </Link>
            <Link href="#planos" className="hover:text-red-500 transition-colors">
              Planos
            </Link>
            <Link href="#contato" className="hover:text-red-500 transition-colors">
              Contato
            </Link>
          </nav>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
              Matricule-se
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <Image
          src="/banner.png"
          alt="Academia PowerGym"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30">#1 Academia da Região</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            TRANSFORME SEU
            <br />
            <span className="text-red-500">CORPO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Equipamentos de última geração, personal trainers qualificados e ambiente motivador para você alcançar seus
            objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
              >
                Comece Agora
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              Conheça a Academia
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-red-500">Serviços</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para você alcançar seus objetivos fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <Dumbbell className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-white">Musculação</CardTitle>
                <CardDescription className="text-gray-400">
                  Equipamentos de última geração para todos os níveis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Equipamentos modernos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Acompanhamento profissional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Treinos personalizados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-white">Aulas em Grupo</CardTitle>
                <CardDescription className="text-gray-400">
                  Diversas modalidades para você se exercitar em grupo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Zumba e Dança
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Spinning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Funcional
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <Trophy className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-white">Personal Trainer</CardTitle>
                <CardDescription className="text-gray-400">
                  Acompanhamento individual com profissionais qualificados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Treino personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Acompanhamento nutricional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                    Resultados garantidos
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              PRIMEIRA SEMANA
              <br />
              <span className="text-yellow-400">GRÁTIS!</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Experimente todos os nossos serviços sem compromisso</p>
            <Button size="lg" asChild className="bg-white text-red-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero aproveitar a primeira semana grátis!")}`}
                target="_blank"
              >
                Aproveitar Oferta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha seu <span className="text-red-500">Plano</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Planos flexíveis que se adaptam ao seu estilo de vida e objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-600/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Mensal</CardTitle>
                <div className="text-4xl font-bold text-red-500 mt-4">
                  R$ 89
                  <span className="text-lg text-gray-400">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Acesso completo à academia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Todas as aulas em grupo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Avaliação física
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    App exclusivo
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Tenho interesse no plano mensal.")}`}
                    target="_blank"
                  >
                    Escolher Plano
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-red-900/20 to-gray-800/50 border-red-600 hover:border-red-500 transition-all duration-300 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white">
                Mais Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Trimestral</CardTitle>
                <div className="text-4xl font-bold text-red-500 mt-4">
                  R$ 69
                  <span className="text-lg text-gray-400">/mês</span>
                </div>
                <p className="text-sm text-gray-400">Economize R$ 60</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Tudo do plano mensal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />2 sessões de personal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Plano nutricional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Desconto em suplementos
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Tenho interesse no plano trimestral.")}`}
                    target="_blank"
                  >
                    Escolher Plano
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-600/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Anual</CardTitle>
                <div className="text-4xl font-bold text-red-500 mt-4">
                  R$ 49
                  <span className="text-lg text-gray-400">/mês</span>
                </div>
                <p className="text-sm text-gray-400">Economize R$ 480</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Tudo do plano trimestral
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Personal ilimitado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Convidado grátis 2x/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Acesso a outras unidades
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Tenho interesse no plano anual.")}`}
                    target="_blank"
                  >
                    Escolher Plano
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que dizem nossos <span className="text-red-500">Alunos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Melhor academia da região! Equipamentos novos, ambiente limpo e profissionais super qualificados.
                  Recomendo!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Maria Silva</p>
                    <p className="text-gray-400 text-sm">Aluna há 2 anos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Consegui os resultados que sempre quis! O acompanhamento do personal fez toda a diferença. Super
                  indico!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">J</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">João Santos</p>
                    <p className="text-gray-400 text-sm">Aluno há 1 ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Ambiente motivador e acolhedor. As aulas em grupo são incríveis e me ajudaram a manter a constância
                  nos treinos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ana Costa</p>
                    <p className="text-gray-400 text-sm">Aluna há 6 meses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para <span className="text-yellow-400">Começar?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Não perca mais tempo! Sua transformação começa hoje. Entre em contato e garante sua matrícula.
          </p>
          <Button size="lg" asChild className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold">
            <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
              <Phone className="mr-2 h-6 w-6" />
              Falar no WhatsApp
            </Link>
          </Button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-red-500">Contato</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                <p className="text-gray-400">
                  Rua das Academias, 123
                  <br />
                  Centro - São Paulo/SP
                  <br />
                  CEP: 01234-567
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                <p className="text-gray-400">
                  (11) 99999-9999
                  <br />
                  (11) 3333-3333
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Horários</h3>
                <p className="text-gray-400">
                  Segunda a Sexta: 5h às 23h
                  <br />
                  Sábado: 6h às 20h
                  <br />
                  Domingo: 8h às 18h
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold text-white">PowerGym</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através do fitness. Sua jornada de transformação começa aqui.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#inicio" className="hover:text-red-500 transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-red-500 transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#planos" className="hover:text-red-500 transition-colors">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-red-500 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Musculação</li>
                <li>Aulas em Grupo</li>
                <li>Personal Trainer</li>
                <li>Avaliação Física</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-red-500" />
                  (11) 99999-9999
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-red-500" />
                  contato@powergym.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 PowerGym. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Desenvolvido por</span>
              <Link
                href="https://www.instagram.com/blendocosta1"
                target="_blank"
                className="text-red-500 hover:text-red-400 transition-colors flex items-center space-x-1"
              >
                <Instagram className="h-4 w-4" />
                <span className="font-semibold">Blendo Costa</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
