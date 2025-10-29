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
              className="btn-primary text-lg"
            >
              <Home className="mr-2 h-5 w-5" />
              Encontrar Meu Imóvel Ideal
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg"
            >
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
              className="p-8 text-center card-hover border-border/50 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-body">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* About Thay - Storytelling */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src={thayProfile} 
              alt="Thay Carvas - Corretora de Imóveis" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
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

            <Button onClick={scrollToContact} className="btn-primary mt-6">
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
              className="p-8 card-hover border-border/50 bg-card"
            >
              <div className="mb-4 text-accent">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-body mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="w-full border-primary/20 hover:bg-primary/5"
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
              className="group relative overflow-hidden rounded-2xl card-hover cursor-pointer"
            >
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-sm">{property.type}</p>
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
            <Card key={index} className="p-8 border-border/50 bg-card">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-body italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-container bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Transformar Seu Sonho em Realidade?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Clique abaixo e vamos conversar sobre o que você precisa e o que realmente faz sentido para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://wa.me/5521999999999?text=Olá%20Thay,%20gostaria%20de%20conversar%20sobre%20imóveis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
            <a 
              href="https://instagram.com/carvasconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-accent hover:bg-accent/90 inline-flex items-center justify-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Telefone</p>
                <a href="tel:+5521999999999" className="font-semibold hover:text-accent transition-colors">
                  (21) 99999-9999
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Email</p>
                <a href="mailto:contato@thaycarvas.com.br" className="font-semibold hover:text-accent transition-colors">
                  contato@thaycarvas.com.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Localização</p>
                <p className="font-semibold">Rio de Janeiro, RJ</p>
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
