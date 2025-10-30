import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/d343d65d-4942-46ce-97a3-eabbb5b86e1a.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-4xl font-black text-white tracking-widest">
                HUSKY
              </div>
              
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white font-bold px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                КОНТАКТЫ
              </Button>
            </div>
          </div>
        </nav>

        <section className="pt-24 pb-12 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="space-y-12 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 leading-none">
                    HUSKY
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-white/90">
                    Для настоящих экстремалов
                  </div>
                  
                  <div className="text-xl text-white/70 max-w-lg">
                    Покоряй вершины, преодолевай границы, бросай вызов стихии. 
                    Арктическая энергия для тех, кто не знает слова "невозможно".
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white text-xl font-bold px-12 py-8 rounded-full"
                  >
                    <Icon name="Zap" size={28} className="mr-3" />
                    ПОПРОБОВАТЬ
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-6">
                  <div className="text-center">
                    <div className="text-5xl font-black text-blue-400">150</div>
                    <div className="text-white/60 mt-2 text-sm">мг кофеина</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-cyan-400">0</div>
                    <div className="text-white/60 mt-2 text-sm">сахара</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-blue-300">500</div>
                    <div className="text-white/60 mt-2 text-sm">мл</div>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="https://cdn.poehali.dev/files/916096f5-55a0-4efb-8199-3d2587635333.jpg"
                  alt="Husky Energy"
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Icon name="Snowflake" size={40} className="text-white" />
                </div>
                <div className="text-xl font-bold text-white">Ледяная Свежесть</div>
              </div>

              <div className="text-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={40} className="text-white" />
                </div>
                <div className="text-xl font-bold text-white">Максимум Энергии</div>
              </div>

              <div className="text-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Icon name="Mountain" size={40} className="text-white" />
                </div>
                <div className="text-xl font-bold text-white">Дух Арктики</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Экстремальные виды спорта
              </div>
              <p className="text-xl text-white/70">HUSKY — твой напарник в любом приключении</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Mountain" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Сноуборд</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Bike" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">BMX</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Wind" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Паркур</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Waves" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Скейт</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Dumbbell" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Воркаут</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Скалолазание</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Snowflake" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Лыжи</div>
              </div>

              <div className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Flame" size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-white">Мотокросс</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-6xl md:text-7xl font-black text-white">
                🐺
              </div>
              
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Напиток для экстремалов
              </div>
              
              <p className="text-2xl text-white/80 max-w-2xl mx-auto">
                Где бы ты ни был — HUSKY даёт силу преодолевать любые препятствия
              </p>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white text-xl font-bold px-16 py-8 rounded-full"
              >
                <Icon name="Phone" size={24} className="mr-3" />
                СВЯЗАТЬСЯ С НАМИ
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-8 px-6 border-t border-white/10">
          <div className="container mx-auto text-center">
            <div className="text-2xl font-black text-white mb-2">HUSKY</div>
            <p className="text-white/40 text-sm">© 2024</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;