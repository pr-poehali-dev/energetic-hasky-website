import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SportSection = () => {
  const activities = [
    {
      icon: 'Bike',
      title: 'Велоспорт',
      desc: 'Выносливость на длинных дистанциях',
      color: 'from-primary to-secondary'
    },
    {
      icon: 'Dumbbell',
      title: 'Тренажёрный зал',
      desc: 'Энергия для силовых тренировок',
      color: 'from-secondary to-accent'
    },
    {
      icon: 'Footprints',
      title: 'Бег',
      desc: 'Скорость и выносливость',
      color: 'from-accent to-primary'
    },
    {
      icon: 'Mountain',
      title: 'Экстрим',
      desc: 'Для экстремальных видов спорта',
      color: 'from-primary to-accent'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/51113f5e-2078-4a14-9a9f-ec4fd8c4825f.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-lg px-6 py-2 mb-6">
            🏃 Активный образ жизни
          </Badge>
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ТВОЙ ИСТОЧНИК ЭНЕРГИИ
            </span>
            <br />
            ДЛЯ ЛЮБОГО СПОРТА
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hasky Arctic — это не просто энергетик. Это твой надёжный партнёр в достижении спортивных целей.
            Почувствуй мощь арктической свежести перед любой тренировкой.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={activity.icon as any} size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-2 text-center hover:border-primary transition-all duration-300">
            <div className="text-5xl font-heading font-black text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">минут до эффекта</div>
          </Card>
          <Card className="p-8 border-2 text-center hover:border-secondary transition-all duration-300">
            <div className="text-5xl font-heading font-black text-secondary mb-2">4-6</div>
            <div className="text-sm text-muted-foreground">часов действия</div>
          </Card>
          <Card className="p-8 border-2 text-center hover:border-accent transition-all duration-300">
            <div className="text-5xl font-heading font-black text-accent mb-2">+30%</div>
            <div className="text-sm text-muted-foreground">выносливости</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SportSection;
