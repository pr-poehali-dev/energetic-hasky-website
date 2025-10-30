import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/d343d65d-4942-46ce-97a3-eabbb5b86e1a.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-900/60 via-slate-800/70 to-slate-900/90" />
      
      <div className="relative z-10">
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-white tracking-wider">
                🏔️ ARCTIC PEAKS
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('hero')} className="text-white/90 hover:text-white transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-white/90 hover:text-white transition-colors">
                  Галерея
                </button>
                <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white transition-colors">
                  О горах
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-white transition-colors">
                  Контакты
                </button>
              </div>

              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Забронировать
              </Button>
            </div>
          </div>
        </nav>

        <section id="hero" className="pt-32 pb-24 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-7xl md:text-8xl font-black text-white leading-tight">
                АРКТИЧЕСКИЕ
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  ВЕРШИНЫ
                </span>
              </h1>
              
              <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
                Величественные горы, покрытые вечным снегом. 
                Откройте для себя нетронутую красоту арктической природы.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6"
                  onClick={() => scrollToSection('gallery')}
                >
                  <Icon name="Mountain" size={24} className="mr-2" />
                  Смотреть галерею
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-400">-40°C</div>
                  <div className="text-slate-400 mt-2">Средняя температура</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-cyan-400">3000м</div>
                  <div className="text-slate-400 mt-2">Высота пиков</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-300">365</div>
                  <div className="text-slate-400 mt-2">Дней в снегу</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 px-6 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-white mb-4">
                СНЕЖНЫЕ ВЕРШИНЫ
              </h2>
              <p className="text-xl text-slate-300">Красота арктических гор в каждом кадре</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="group overflow-hidden border-slate-700 bg-slate-800/50 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/d343d65d-4942-46ce-97a3-eabbb5b86e1a.jpg"
                        alt="Арктические горы"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Снежный пик</h3>
                      <p className="text-slate-400">Величественная красота северных гор</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-6xl font-black text-white">
                  ОБ АРКТИЧЕСКИХ
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> ГОРАХ</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Арктические горы представляют собой одно из самых суровых и красивых мест на планете. 
                  Покрытые вечным снегом и льдом, эти величественные вершины возвышаются над бескрайней тундрой.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Здесь царит вечная зима, а температура опускается до -50°C. Но именно эта суровость 
                  придаёт арктическим горам особое очарование и неповторимую красоту.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <Card className="bg-slate-800/50 border-slate-700 p-6">
                    <Icon name="Snowflake" size={40} className="text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Вечный снег</h3>
                    <p className="text-slate-400">Круглый год покрыты снегом</p>
                  </Card>
                  <Card className="bg-slate-800/50 border-slate-700 p-6">
                    <Icon name="Wind" size={40} className="text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Ледяной ветер</h3>
                    <p className="text-slate-400">Сильные арктические ветры</p>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                <img 
                  src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/d343d65d-4942-46ce-97a3-eabbb5b86e1a.jpg"
                  alt="Арктические горы"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="space-y-8">
              <h2 className="text-6xl font-black text-white">
                ГОТОВЫ К
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> ПРИКЛЮЧЕНИЮ?</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Откройте для себя величие арктических гор. Забронируйте экспедицию уже сегодня.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-10 py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-slate-700/50">
          <div className="container mx-auto text-center">
            <div className="text-2xl font-bold text-white mb-4">🏔️ ARCTIC PEAKS</div>
            <p className="text-slate-400">© 2024 Arctic Peaks. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
