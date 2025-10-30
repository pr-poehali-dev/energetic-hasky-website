import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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
    name: 'Hasky Blue',
    flavor: 'Черника-Лайм',
    category: 'classic',
    energy: 150,
    volume: '500мл',
    image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/e68e088c-7df0-45a2-a573-71a84caf5407.jpg',
    gradient: 'from-primary to-secondary'
  },
  {
    id: 2,
    name: 'Hasky Purple',
    flavor: 'Ягодный микс',
    category: 'classic',
    energy: 150,
    volume: '500мл',
    image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/927f3296-d06c-463b-8ef1-a2d8d07d5f23.jpg',
    gradient: 'from-secondary to-accent'
  },
  {
    id: 3,
    name: 'Hasky Orange',
    flavor: 'Манго-Маракуйя',
    category: 'tropical',
    energy: 180,
    volume: '500мл',
    image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/dfcce0ec-581b-42e2-9086-ebf3d016e6c0.jpg',
    gradient: 'from-accent to-primary'
  },
  {
    id: 4,
    name: 'Hasky Ice',
    flavor: 'Арктический Цитрус',
    category: 'zero',
    energy: 120,
    volume: '330мл',
    image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/e68e088c-7df0-45a2-a573-71a84caf5407.jpg',
    gradient: 'from-primary to-primary/70'
  },
  {
    id: 5,
    name: 'Hasky Power',
    flavor: 'Энергия Красных Ягод',
    category: 'extreme',
    energy: 200,
    volume: '500мл',
    image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/927f3296-d06c-463b-8ef1-a2d8d07d5f23.jpg',
    gradient: 'from-accent to-secondary'
  },
  {
    id: 6,
    name: 'Hasky Tropical',
    flavor: 'Тропический Взрыв',
    category: 'tropical',
    energy: 160,
    volume: '500мл',
    image: 'https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/dfcce0ec-581b-42e2-9086-ebf3d016e6c0.jpg',
    gradient: 'from-secondary to-accent'
  }
];

const categories = [
  { id: 'all', label: 'Все вкусы', icon: 'Grid3x3' },
  { id: 'classic', label: 'Классика', icon: 'Star' },
  { id: 'tropical', label: 'Тропик', icon: 'Palmtree' },
  { id: 'zero', label: 'Zero', icon: 'Droplet' },
  { id: 'extreme', label: 'Экстрим', icon: 'Zap' }
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
    <div className="min-h-screen bg-background">
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
                  ⚡ Новая эра энергии
                </Badge>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-heading font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  ЗАРЯЖАЙСЯ
                </span>
                <br />
                ДОСТИГАЙ ЦЕЛЕЙ
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Hasky — это не просто энергетик. Это твой партнёр в достижении невозможного. 
                Яркие вкусы, мощная энергия, стильный дизайн.
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
                  <div className="text-4xl font-heading font-black text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">мг кофеина</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-black text-secondary">0</div>
                  <div className="text-sm text-muted-foreground">сахара</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-black text-accent">6</div>
                  <div className="text-sm text-muted-foreground">вкусов</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/e68e088c-7df0-45a2-a573-71a84caf5407.jpg"
                alt="Hasky Energy Drink"
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
                НАШИ ВКУСЫ
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Выбери свой идеальный заряд энергии</p>
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

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl font-heading font-black">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  О БРЕНДЕ HASKY
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Hasky — это бренд для тех, кто не боится вызовов и всегда идёт вперёд. 
                  Мы создали энергетик, который отражает дух современной молодёжи — яркий, дерзкий, инновационный.
                </p>
                <p>
                  Каждая банка Hasky — это взрыв энергии и вкуса. Мы используем только качественные ингредиенты 
                  и создаём уникальные вкусовые сочетания, которые вдохновляют на подвиги.
                </p>
                <p>
                  Присоединяйся к комьюнити Hasky и заряжайся энергией вместе с тысячами единомышленников!
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                  <Icon name="Users" size={20} className="mr-2" />
                  Комьюнити
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Award" size={20} className="mr-2" />
                  Награды
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'Zap', title: 'Мощная энергия', desc: 'До 200 мг кофеина' },
                { icon: 'Leaf', title: 'Натуральные вкусы', desc: 'Без искусственных добавок' },
                { icon: 'Heart', title: 'Витамины группы B', desc: 'Для твоего здоровья' },
                { icon: 'Sparkles', title: 'Яркий дизайн', desc: 'Выделись из толпы' }
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

      <section id="stores" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ГДЕ КУПИТЬ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hasky доступен в тысячах магазинов по всей стране
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Store', title: 'Розничные сети', desc: 'Во всех крупных супермаркетах' },
              { icon: 'Fuel', title: 'АЗС', desc: 'На заправочных станциях' },
              { icon: 'ShoppingBag', title: 'Онлайн', desc: 'Доставка на дом за 2 часа' }
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
  );
};

export default Index;
