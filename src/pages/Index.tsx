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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background with parallax */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Luxury real estate Rio de Janeiro" 
            className="w-full h-full object-cover scale-105 animate-[zoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-background/98"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-[floating_6s_ease-in-out_infinite]"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-[floating_8s_ease-in-out_infinite_1s]"></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full animate-[floating_7s_ease-in-out_infinite_2s]"></div>
            <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white rounded-full animate-[floating_9s_ease-in-out_infinite_1.5s]"></div>
          </div>
        </div>
        
        <div className="relative z-10 section-container text-center">
          <div className="animate-fade-in">
            <h1 className="heading-display mb-6 sm:mb-8 text-primary-foreground px-2">
              Transforme Sonhos em<br />Endereços Reais
            </h1>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/95 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Consultoria imobiliária humanizada no Rio de Janeiro.<br className="hidden sm:block" />
              <span className="block sm:inline">Acompanho você do primeiro olhar até a chave na mão — </span>
              <span className="block sm:inline">e continuo ao seu lado depois dela também.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 animate-fade-in animate-delay-400">
            <Button 
              onClick={scrollToContact}
              variant="premium"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg shadow-2xl hover:shadow-accent/60 min-w-[280px] sm:min-w-0"
            >
              <Home className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">Encontrar Meu Imóvel Ideal</span>
              <span className="sm:hidden">Encontrar Imóvel</span>
            </Button>
            <Button 
              variant="glass"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto text-base sm:text-lg shadow-2xl min-w-[280px] sm:min-w-0"
            >
              <Key className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Quero Vender Meu Imóvel
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-[scroll_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - 3 Pillars */}
      <section className="section-container bg-gradient-to-b from-muted/40 via-background to-muted/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="heading-section mb-4 sm:mb-6 animate-fade-in">Por Que Escolher a Thay Carvas?</h2>
            <p className="text-body max-w-2xl mx-auto animate-fade-in animate-delay-100">
              Mais do que corretora, sou sua parceira estratégica na decisão mais importante da sua vida
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <LineChart className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />,
                title: "Visão Estratégica",
                description: "Analiso localização, valorização e potencial. Sua decisão será respaldada por dados reais e experiência de mercado."
              },
              {
                icon: <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />,
                title: "Acompanhamento Humanizado",
                description: "Do primeiro contato à chave — e além. Eu entendo que cada jornada é única e merece atenção real."
              },
              {
                icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />,
                title: "Comprometimento Total",
                description: "Não trabalho com volume, trabalho com resultado. Cada cliente recebe estratégia personalizada e dedicação exclusiva."
              }
            ].map((pillar, index) => (
              <Card 
                key={index}
                className={[
                  "p-6 sm:p-8 text-center card-hover border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in group sm:col-span-1",
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : "",
                  ["animate-delay-100", "animate-delay-200", "animate-delay-300"][index] || ""
                ].filter(Boolean).join(" ")}
              >
                <div className="mb-5 sm:mb-6 flex justify-center">
                  <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">{pillar.title}</h3>
                <p className="text-body">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Thay - Storytelling */}
      <section className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl animate-pulse-slow"></div>
            
            {/* Image container with border gradient */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-accent/50 via-primary/30 to-accent/50">
              <img 
                src={thayProfile} 
                alt="Thay Carvas - Corretora de Imóveis" 
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-[1.02] transition-all duration-700 hover:shadow-accent/30"
              />
            </div>
            
            {/* Decorative floating element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-[floating_4s_ease-in-out_infinite] hidden lg:block"></div>
          </div>
          
          <div className="space-y-5 sm:space-y-6 animate-slide-up order-1 lg:order-2 px-2">
            <h2 className="heading-section">Prazer, sou a Thay Carvas 👋</h2>
            <p className="text-body text-base sm:text-lg">
              Corretora de imóveis de alto padrão, representante de soluções estratégicas e apaixonada por transformar realidades.
            </p>
            <p className="text-body text-base sm:text-lg">
              Me move aquilo que importa de verdade: <strong className="text-primary font-bold">cuidar de pessoas, facilitar escolhas e realizar sonhos.</strong>
            </p>
            
            <div className="space-y-4 sm:space-y-5 pl-4 sm:pl-6 border-l-4 border-accent mt-6 sm:mt-8">
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="p-2 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Home className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                </div>
                <p className="text-body text-sm sm:text-base">
                  <strong className="block mb-1">No mercado imobiliário,</strong> te ajudo a encontrar o imóvel ideal para viver, investir ou prosperar. Com escuta ativa, visão estratégica e compromisso real.
                </p>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="p-2 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                </div>
                <p className="text-body text-sm sm:text-base">
                  <strong className="block mb-1">Especialidade:</strong> Imóveis de alto padrão no Rio de Janeiro e região. Atendimento humanizado e consultivo.
                </p>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="p-2 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Key className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                </div>
                <p className="text-body text-sm sm:text-base">
                  Acompanhamento completo desde a escolha até a chave — e depois dela também!
                </p>
              </div>
            </div>

            <Button 
              onClick={scrollToContact} 
              variant="premium"
              size="lg"
              className="mt-6 sm:mt-8 w-full sm:w-auto"
            >
              Vamos Dar o Primeiro Passo Juntos
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-container bg-gradient-to-b from-muted/20 via-muted/40 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="heading-section mb-4 sm:mb-6">Como Posso Te Ajudar?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Compra de Imóvel",
                description: "Encontre o lar perfeito ou o investimento ideal. Análise completa de localização, documentação e potencial de valorização.",
                icon: <Home className="h-7 w-7 sm:h-8 sm:w-8" />,
                gradient: "from-primary/10 to-primary-glow/10"
              },
              {
                title: "Venda de Imóvel",
                description: "Estratégia de precificação, marketing premium e negociação especializada para vender seu imóvel pelo melhor valor.",
                icon: <Key className="h-7 w-7 sm:h-8 sm:w-8" />,
                gradient: "from-accent/10 to-accent/5"
              },
              {
                title: "Consultoria de Investimento",
                description: "Análise de mercado, ROI e potencial de valorização. Decisões baseadas em dados reais e experiência.",
                icon: <LineChart className="h-7 w-7 sm:h-8 sm:w-8" />,
                gradient: "from-primary/10 to-accent/10"
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className={[
                  "p-6 sm:p-8 card-hover border-border/50 bg-card/80 backdrop-blur-sm group animate-slide-up relative overflow-hidden sm:col-span-1",
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : "",
                  ["animate-delay-100", "animate-delay-200", "animate-delay-300"][index] || ""
                ].filter(Boolean).join(" ")}
              >
                {/* Gradient background on hover */}
                <div className={["absolute inset-0 bg-gradient-to-br", service.gradient, "opacity-0 group-hover:opacity-100 transition-opacity duration-500"].join(" ")}></div>
                
                <div className="relative z-10">
                  <div className="mb-5 sm:mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                      <div className="text-accent">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-body mb-6 text-sm sm:text-base">{service.description}</p>
                  
                  <Button 
                    variant="outline" 
                    onClick={scrollToContact}
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    Saber Mais
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-container">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="heading-section mb-4 sm:mb-6">Imóveis de Alto Padrão</h2>
          <p className="text-body max-w-2xl mx-auto">
            Conheça alguns dos empreendimentos exclusivos que ajudei clientes a conquistar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { image: portfolio1, title: "Vista Mar - Leblon", type: "Apartamento de Luxo" },
            { image: portfolio2, title: "Cobertura Premium", type: "Infinity Pool" },
            { image: portfolio3, title: "Design Contemporâneo", type: "Alto Padrão" }
          ].map((property, index) => (
            <div 
              key={index}
              className={[
                "group relative overflow-hidden rounded-2xl sm:rounded-3xl card-hover cursor-pointer animate-fade-in shadow-xl hover:shadow-2xl sm:col-span-1",
                index === 2 ? "sm:col-span-2 lg:col-span-1" : "",
                ["animate-delay-100", "animate-delay-200", "animate-delay-300"][index] || ""
              ].filter(Boolean).join(" ")}
            >
              {/* Overlay gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary/30 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
              
              {/* Image with zoom effect */}
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-700 flex items-end p-6 sm:p-8 z-20">
                <div className="text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">{property.title}</h3>
                  <p className="text-sm sm:text-base opacity-90 mb-3 sm:mb-4 drop-shadow-md">{property.type}</p>
                  <div className="w-16 h-1.5 bg-accent rounded-full shadow-lg group-hover:w-24 transition-all duration-500"></div>
                  
                  {/* Additional info on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={scrollToContact}
                      className="text-xs sm:text-sm"
                    >
                      Quero Saber Mais
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/50 group-hover:border-accent transition-colors duration-500 z-30"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container bg-gradient-to-b from-secondary/10 via-secondary/20 to-secondary/10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="heading-section mb-4 sm:mb-6">O Que Dizem Meus Clientes</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Silva",
                location: "Ipanema",
                text: "A Thay não apenas encontrou meu apartamento dos sonhos, ela me guiou em cada etapa com paciência e profissionalismo. Senti que tinha uma amiga ao meu lado.",
                rating: 5
              },
              {
                name: "Roberto Costa",
                location: "Barra da Tijuca",
                text: "Investimento certeiro! A análise de mercado que a Thay fez foi fundamental. Hoje meu imóvel já valorizou 15% e estou extremamente satisfeito.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className={[
                  "p-6 sm:p-8 border-border/50 bg-card/80 backdrop-blur-sm card-hover animate-slide-up group relative overflow-hidden",
                  index === 0 ? "animate-delay-100" : "animate-delay-200"
                ].filter(Boolean).join(" ")}
              >
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/20 transition-colors duration-500">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <span className="text-accent font-bold text-xl sm:text-2xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-primary text-lg sm:text-xl group-hover:text-accent transition-colors duration-300">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mb-2">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </p>
                      {/* Star rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-body italic text-base sm:text-lg leading-relaxed border-l-4 border-accent/30 pl-4 group-hover:border-accent/60 transition-colors duration-500">
                    "{testimonial.text}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-container gradient-overlay text-primary-foreground relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-[floating_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-[floating_10s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
              Pronto Para Transformar<br className="hidden sm:block" /> Seu Sonho em Realidade?
            </h2>
            <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-primary-foreground/95 leading-relaxed animate-fade-in animate-delay-100 max-w-3xl mx-auto">
              Clique abaixo e vamos conversar sobre o que você precisa e o que realmente faz sentido para você.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-fade-in animate-delay-200">
            <a 
              href="https://wa.me/5521999999999?text=Olá%20Thay,%20gostaria%20de%20conversar%20sobre%20imóveis"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-accent/60 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 inline-flex items-center justify-center btn-glow"
            >
              <Send className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-500" />
              Falar no WhatsApp
            </a>
            <a 
              href="https://instagram.com/carvasconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-accent/60 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 inline-flex items-center justify-center btn-glow"
            >
              <Instagram className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
              Seguir no Instagram
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-10 animate-fade-in animate-delay-300">
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 sm:col-span-1">
              <div className="p-3 rounded-xl sm:rounded-2xl bg-accent/20 group-hover:bg-accent/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-primary-foreground/70 mb-1">Telefone</p>
                <a href="tel:+5521999999999" className="font-bold text-sm sm:text-lg hover:text-accent transition-colors duration-300 block truncate">
                  (21) 99999-9999
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 sm:col-span-1">
              <div className="p-3 rounded-xl sm:rounded-2xl bg-accent/20 group-hover:bg-accent/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-primary-foreground/70 mb-1">Email</p>
                <a href="mailto:contato@thaycarvas.com.br" className="font-bold text-xs sm:text-sm lg:text-base hover:text-accent transition-colors duration-300 block truncate">
                  contato@thaycarvas.com.br
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="p-3 rounded-xl sm:rounded-2xl bg-accent/20 group-hover:bg-accent/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-primary-foreground/70 mb-1">Localização</p>
                <p className="font-bold text-sm sm:text-lg">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-primary via-primary-glow to-primary text-primary-foreground py-12 sm:py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Thay Carvas Consultoria Imobiliária</h3>
            <p className="text-primary-foreground/90 mb-6 sm:mb-8 text-sm sm:text-base">
              CRECI-RJ 123456 • Transformando sonhos em endereços desde 2020
            </p>
            
            <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <a 
                href="https://instagram.com/carvasconsultoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-accent transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-500" />
              </a>
              <a 
                href="https://wa.me/5521999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-accent transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <Send className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-500" />
              </a>
              <a 
                href="mailto:contato@thaycarvas.com.br"
                className="group p-3 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-accent transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-500" />
              </a>
            </div>
            
            <div className="w-32 h-1 bg-accent/50 rounded-full mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-xs sm:text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Thay Carvas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
