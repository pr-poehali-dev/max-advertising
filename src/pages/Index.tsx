import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cases = [
    {
      title: "Рост продаж на 340%",
      client: "TechStart",
      description: "Комплексная digital-стратегия для IT-стартапа",
      result: "+340% продаж за 3 месяца",
      icon: "TrendingUp"
    },
    {
      title: "Узнаваемость бренда",
      client: "FashionHub",
      description: "SMM-кампания для fashion-ритейлера",
      result: "2.5М охват за месяц",
      icon: "Sparkles"
    },
    {
      title: "Лидогенерация",
      client: "BuildPro",
      description: "Контекстная реклама для строительной компании",
      result: "500+ заявок в месяц",
      icon: "Target"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "TechStart",
      text: "Макс превзошёл все ожидания! За 3 месяца наши продажи выросли в 3.4 раза. Профессиональный подход и впечатляющие результаты.",
      rating: 5
    },
    {
      name: "Елена Соколова",
      company: "FashionHub",
      text: "Работать с Максом — одно удовольствие. Креативные решения, чёткое выполнение сроков и отличное понимание нашей аудитории.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      company: "BuildPro",
      text: "Благодаря рекламной кампании от Макса мы получили более 500 качественных заявок. ROI превысил все прогнозы!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                ⚡ Реклама нового поколения
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight animate-scale-in">
              Макс
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Превращаю клики в клиентов, а бюджеты — в прибыль
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/50">
                <Icon name="Rocket" className="mr-2" size={24} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:scale-105 transition-transform duration-300">
                <Icon name="FileText" className="mr-2" size={24} />
                Посмотреть кейсы
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-black text-accent">150+</div>
                <div className="text-muted-foreground mt-2">Проектов</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-black text-primary">340%</div>
                <div className="text-muted-foreground mt-2">Средний рост</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-black text-secondary">98%</div>
                <div className="text-muted-foreground mt-2">Довольных клиентов</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-black text-accent">24/7</div>
                <div className="text-muted-foreground mt-2">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Кейсы успеха
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные результаты для реального бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {cases.map((caseItem, index) => (
            <Card 
              key={index}
              className="p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card border-2 hover:border-primary cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Icon name={caseItem.icon as any} size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
              <div className="text-primary font-semibold mb-4">{caseItem.client}</div>
              <p className="text-muted-foreground mb-6">{caseItem.description}</p>
              
              <div className="pt-4 border-t border-border">
                <div className="text-accent font-bold text-xl">{caseItem.result}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Что говорят те, кто уже работал со мной
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 bg-card border-2 hover:border-secondary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-primary text-sm">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary via-secondary to-accent py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Готовы взлететь?
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Начните работу над проектом уже сегодня и получите первые результаты через неделю
          </p>
          <Button size="lg" className="text-lg px-10 py-7 bg-background text-primary hover:scale-110 transition-transform duration-300 shadow-2xl">
            <Icon name="MessageCircle" className="mr-2" size={24} />
            Связаться со мной
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
