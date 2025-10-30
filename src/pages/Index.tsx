import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SportSection from '@/components/SportSection';

interface Product {
  id: number;
  name: string;
  flavor: string;
  category: string;
  energy: number;
  volume: string;
  image: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Hasky Arctic',
    flavor: 'Арктическая мята',
    category: 'classic',
    energy: 150,
    volume: '500мл',
    image: 'https://cdn.poehali.dev/files/fb233b4e-a3a4-4668-9584-cbd9a57baffc.jpg',
    gradient: 'from-primary to-secondary'
  }
];

const categories = [
  { id: 'all', label: 'Арктическая серия', icon: 'Snowflake' }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('home');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/5d210b2a-31bc-47ba-a80c-c5c76ab3ffa8.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/60 via-background/75 to-background/90" />
      <div className="fixed inset-0 z-0" style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(0, 170, 255, 0.15) 0%, transparent 50%)'
      }} />
      
      <div className="relative z-10">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-heading font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                HASKY
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['home', 'products', 'about', 'stores', 'news', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'products' && 'Продукция'}
                  {section === 'about' && 'О бренде'}
                  {section === 'stores' && 'Где купить'}
                  {section === 'news' && 'Новости'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-lg px-4 py-2">
                  🐺 Дух арктических хаски
                </Badge>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-heading font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  HASKY
                </span>
                <br />
                АРКТИЧЕСКАЯ СИЛА
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Как упряжка хаски преодолевает арктические просторы, так и ты преодолеешь любые преграды. 
                Ледяная свежесть мяты и энергия северного сияния в каждом глотке.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                  onClick={() => scrollToSection('products')}
                >
                  Выбрать вкус
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 text-lg px-8"
                  onClick={() => scrollToSection('about')}
                >
                  О бренде
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-heading font-black text-primary">150</div>
                  <div className="text-sm text-muted-foreground">мг кофеина</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-black text-secondary">0</div>
                  <div className="text-sm text-muted-foreground">сахара</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-black text-accent">500</div>
                  <div className="text-sm text-muted-foreground">мл</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/files/fb233b4e-a3a4-4668-9584-cbd9a57baffc.jpg"
                alt="Hasky Arctic - Арктическая мята"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-heading font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                АРКТИЧЕСКАЯ СЕРИЯ
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Ледяная свежесть с мощным зарядом энергии</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={`${
                  selectedCategory === cat.id 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : ''
                } transition-all duration-300`}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-muted">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`} />
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent/90">
                      {product.energy} мг
                    </Badge>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground">{product.flavor}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="text-sm">
                        {product.volume}
                      </Badge>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      >
                        Подробнее
                        <Icon name="ChevronRight" size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/ed6f3fc6-d2f8-4c50-9d45-d50a2f28e387.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl font-heading font-black">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  О БРЕНДЕ HASKY
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Hasky — это бренд, вдохновлённый легендарными собаками породы хаски, которые веками помогали людям 
                  преодолевать арктические просторы. Их невероятная выносливость, сила духа и верность стали нашим символом.
                </p>
                <p>
                  Как упряжка хаски мчится сквозь снежные бури, преодолевая сотни километров без остановки, 
                  так и Hasky Arctic даёт тебе энергию идти к своим целям несмотря ни на что. 
                  Ледяная свежесть арктической мяты — это вкус настоящей северной силы.
                </p>
                <p>
                  Присоединяйся к стае! Покоряй вершины вместе с духом арктических хаски!
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                  <Icon name="Snowflake" size={20} className="mr-2" />
                  Арктическая сила
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Mountain" size={20} className="mr-2" />
                  Истории
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'Snowflake', title: 'Арктическая мята', desc: 'Ледяная свежесть севера' },
                { icon: 'Zap', title: '150 мг кофеина', desc: 'Энергия северного сияния' },
                { icon: 'Wind', title: 'Быстрый эффект', desc: 'Как арктический ветер' },
                { icon: 'Mountain', title: 'Выносливость', desc: 'Дух хаски в каждом глотке' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon name={item.icon as any} size={32} className="text-primary mb-3" />
                  <h4 className="font-heading font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SportSection />

      <section id="stores" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ГДЕ КУПИТЬ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hasky доступен в спортивных магазинах, фитнес-клубах и онлайн
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Dumbbell', title: 'Фитнес-клубы', desc: 'В лучших тренажёрных залах' },
              { icon: 'Store', title: 'Спортпит магазины', desc: 'Сеть магазинов спортивного питания' },
              { icon: 'ShoppingBag', title: 'Онлайн', desc: 'Быстрая доставка для спортсменов' }
            ].map((item, index) => (
              <Card key={index} className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <Icon name={item.icon as any} size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Button size="lg" className="mt-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="MapPin" size={20} className="mr-2" />
            Найти ближайший магазин
          </Button>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-black text-center mb-12">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              НОВОСТИ
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: '15 окт 2025',
                title: 'Новый вкус Hasky Tropical уже в продаже!',
                desc: 'Попробуй взрывной тропический микс',
                image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/dfcce0ec-581b-42e2-9086-ebf3d016e6c0.jpg'
              },
              {
                date: '10 окт 2025',
                title: 'Hasky — спонсор киберспортивного турнира',
                desc: 'Следи за трансляцией и выигрывай призы',
                image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/927f3296-d06c-463b-8ef1-a2d8d07d5f23.jpg'
              },
              {
                date: '5 окт 2025',
                title: 'Фестиваль Hasky Energy Fest 2025',
                desc: 'Музыка, спорт, энергия — будь с нами!',
                image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/e68e088c-7df0-45a2-a573-71a84caf5407.jpg'
              }
            ].map((news, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <Badge variant="outline">{news.date}</Badge>
                    <h3 className="text-xl font-heading font-bold">{news.title}</h3>
                    <p className="text-muted-foreground">{news.desc}</p>
                    <Button variant="link" className="p-0 text-primary">
                      Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Есть вопросы? Свяжись с нами удобным способом
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'Mail', title: 'Email', value: 'info@hasky.energy' },
              { icon: 'Phone', title: 'Телефон', value: '+7 (800) 555-35-35' },
              { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Энергетиков, 24' }
            ].map((contact, index) => (
              <Card key={index} className="p-6 border-2">
                <Icon name={contact.icon as any} size={32} className="text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">{contact.title}</div>
                <div className="font-semibold">{contact.value}</div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-heading font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HASKY
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Hasky Energy. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;