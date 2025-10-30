import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SportSection = () => {
  const activities = [
    {
      icon: 'Snowflake',
      title: 'Выносливость',
      desc: 'Как хаски преодолевают сотни километров',
      color: 'from-primary to-secondary'
    },
    {
      icon: 'Wind',
      title: 'Скорость',
      desc: 'Быстрые как арктический ветер',
      color: 'from-secondary to-accent'
    },
    {
      icon: 'Mountain',
      title: 'Сила духа',
      desc: 'Несгибаемость северных собак',
      color: 'from-accent to-primary'
    },
    {
      icon: 'Zap',
      title: 'Энергия',
      desc: 'Мощь северного сияния',
      color: 'from-primary to-accent'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/f6f1f9aa-016f-45c5-a405-c5be78102cdf.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-lg px-6 py-2 mb-6">
            🐺 Дух арктики
          </Badge>
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              КАЧЕСТВА ХАСКИ
            </span>
            <br />
            В КАЖДОМ ГЛОТКЕ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Собаки породы хаски известны своей невероятной выносливостью и силой духа. 
            Hasky Arctic передаёт эти качества тебе — для покорения любых вершин.
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