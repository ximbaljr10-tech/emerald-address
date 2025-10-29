import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Home, TrendingUp, Heart, Building2, Key, LineChart, Instagram, Send } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import thayProfile from "@/assets/thay-profile.png";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Luxury real estate Rio de Janeiro" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95"></div>
        </div>
        
        <div className="relative z-10 section-container text-center animate-fade-in">
          <h1 className="heading-display mb-6 text-primary-foreground">
            Transforme Sonhos em<br />Endereços Reais
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Consultoria imobiliária humanizada no Rio de Janeiro.<br />
            Acompanho você do primeiro olhar até a chave na mão — e continuo ao seu lado depois dela também.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              variant="premium"
              size="lg"
              className="text-lg px-10 py-6"
            >
              <Home className="mr-2 h-5 w-5" />
              Encontrar Meu Imóvel Ideal
            </Button>
            <Button 
              variant="glass"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-6"
            >
              <Key className="mr-2 h-5 w-5" />
              Quero Vender Meu Imóvel
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition - 3 Pillars */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section mb-4">Por Que Escolher a Thay Carvas?</h2>
          <p className="text-body max-w-2xl mx-auto">
            Mais do que corretora, sou sua parceira estratégica na decisão mais importante da sua vida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <LineChart className="h-12 w-12 text-accent" />,
              title: "Visão Estratégica",
              description: "Analiso localização, valorização e potencial. Sua decisão será respaldada por dados reais e experiência de mercado."
            },
            {
              icon: <Heart className="h-12 w-12 text-accent" />,
              title: "Acompanhamento Humanizado",
              description: "Do primeiro contato à chave — e além. Eu entendo que cada jornada é única e merece atenção real."
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-accent" />,
              title: "Comprometimento Total",
              description: "Não trabalho com volume, trabalho com resultado. Cada cliente recebe estratégia personalizada e dedicação exclusiva."
            }
          ].map((pillar, index) => (
            <Card 
              key={index}
              className={`p-8 text-center card-hover border-border/50 bg-card animate-fade-in animate-delay-${index + 1}00`}
            >
              <div className="mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-body">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* About Thay - Storytelling */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
            <img 
              src={thayProfile} 
              alt="Thay Carvas - Corretora de Imóveis" 
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <h2 className="heading-section">Prazer, sou a Thay Carvas 👋</h2>
            <p className="text-body">
              Corretora de imóveis de alto padrão, representante de soluções estratégicas e apaixonada por transformar realidades.
            </p>
            <p className="text-body">
              Me move aquilo que importa de verdade: <strong className="text-primary">cuidar de pessoas, facilitar escolhas e realizar sonhos.</strong>
            </p>
            
            <div className="space-y-4 pl-4 border-l-4 border-accent">
              <div className="flex items-start gap-3">
                <Home className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-body">
                  <strong>No mercado imobiliário,</strong> te ajudo a encontrar o imóvel ideal para viver, investir ou prosperar. Com escuta ativa, visão estratégica e compromisso real.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Building2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-body">
                  <strong>Especialidade:</strong> Imóveis de alto padrão no Rio de Janeiro e região. Atendimento humanizado e consultivo.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Key className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-body">
                  Acompanhamento completo desde a escolha até a chave — e depois dela também!
                </p>
              </div>
            </div>

            <Button 
              onClick={scrollToContact} 
              variant="premium"
              size="lg"
              className="mt-6"
            >
              Vamos Dar o Primeiro Passo Juntos
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Como Posso Te Ajudar?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Compra de Imóvel",
              description: "Encontre o lar perfeito ou o investimento ideal. Análise completa de localização, documentação e potencial de valorização.",
              icon: <Home className="h-8 w-8" />
            },
            {
              title: "Venda de Imóvel",
              description: "Estratégia de precificação, marketing premium e negociação especializada para vender seu imóvel pelo melhor valor.",
              icon: <Key className="h-8 w-8" />
            },
            {
              title: "Consultoria de Investimento",
              description: "Análise de mercado, ROI e potencial de valorização. Decisões baseadas em dados reais e experiência.",
              icon: <LineChart className="h-8 w-8" />
            }
          ].map((service, index) => (
            <Card 
              key={index}
              className={`p-8 card-hover border-border/50 bg-card group animate-slide-up animate-delay-${index + 1}00`}
            >
              <div className="mb-6 text-accent transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-body mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                Saber Mais
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Imóveis de Alto Padrão</h2>
          <p className="text-body max-w-2xl mx-auto">
            Conheça alguns dos empreendimentos exclusivos que ajudei clientes a conquistar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { image: portfolio1, title: "Vista Mar - Leblon", type: "Apartamento de Luxo" },
            { image: portfolio2, title: "Cobertura Premium", type: "Infinity Pool" },
            { image: portfolio3, title: "Design Contemporâneo", type: "Alto Padrão" }
          ].map((property, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl card-hover cursor-pointer animate-fade-in animate-delay-${index + 1}00`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8 z-20">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{property.type}</p>
                  <div className="w-12 h-1 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container bg-secondary/20">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">O Que Dizem Meus Clientes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Maria Silva",
              location: "Ipanema",
              text: "A Thay não apenas encontrou meu apartamento dos sonhos, ela me guiou em cada etapa com paciência e profissionalismo. Senti que tinha uma amiga ao meu lado."
            },
            {
              name: "Roberto Costa",
              location: "Barra da Tijuca",
              text: "Investimento certeiro! A análise de mercado que a Thay fez foi fundamental. Hoje meu imóvel já valorizou 15% e estou extremamente satisfeito."
            }
          ].map((testimonial, index) => (
            <Card 
              key={index} 
              className={`p-8 border-border/50 bg-card card-hover animate-slide-up animate-delay-${index + 1}00`}
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-accent font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-body italic mb-4 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-container gradient-overlay text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Pronto Para Transformar Seu Sonho em Realidade?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 leading-relaxed animate-fade-in animate-delay-100">
            Clique abaixo e vamos conversar sobre o que você precisa e o que realmente faz sentido para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animate-delay-200">
            <a 
              href="https://wa.me/5521999999999?text=Olá%20Thay,%20gostaria%20de%20conversar%20sobre%20imóveis"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-500 transform hover:scale-110 inline-flex items-center justify-center"
            >
              <Send className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Falar no WhatsApp
            </a>
            <a 
              href="https://instagram.com/carvasconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent text-accent-foreground px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-500 transform hover:scale-110 inline-flex items-center justify-center"
            >
              <Instagram className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
              Seguir no Instagram
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-left glass-effect rounded-2xl p-10 animate-fade-in animate-delay-300">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">Telefone</p>
                <a href="tel:+5521999999999" className="font-bold text-lg hover:text-accent transition-colors duration-300">
                  (21) 99999-9999
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">Email</p>
                <a href="mailto:contato@thaycarvas.com.br" className="font-bold text-lg hover:text-accent transition-colors duration-300 break-all">
                  contato@thaycarvas.com.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">Localização</p>
                <p className="font-bold text-lg">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="section-container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Thay Carvas Consultoria Imobiliária</h3>
            <p className="text-primary-foreground/80 mb-6">
              CRECI-RJ 123456 • Transformando sonhos em endereços desde 2020
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://instagram.com/carvasconsultoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/5521999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <Send className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contato@thaycarvas.com.br"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Thay Carvas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
