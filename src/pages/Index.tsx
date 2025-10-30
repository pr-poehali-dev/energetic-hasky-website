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

                <div className="grid grid-cols-4 gap-6 pt-6">
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
                  <div className="text-center">
                    <div className="text-5xl font-black text-cyan-300">300₽</div>
                    <div className="text-white/60 mt-2 text-sm">цена</div>
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

        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Арктическая мята
              </div>
              <p className="text-xl text-white/70">Взрыв свежести для максимальной концентрации</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="Snowflake" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Ледяная свежесть</h3>
                      <p className="text-white/70">Ощущение арктического холода с первого глотка</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <Icon name="Sparkles" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Натуральный экстракт</h3>
                      <p className="text-white/70">Только настоящая перечная мята высшего качества</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Мгновенный эффект</h3>
                      <p className="text-white/70">Бодрость и концентрация в течение 5 секунд</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
                  <img 
                    src="https://cdn.poehali.dev/files/916096f5-55a0-4efb-8199-3d2587635333.jpg"
                    alt="Husky Arctic Mint"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-xl text-white/80 leading-relaxed">
                  "Вкус, который разбудит твои инстинкты. Как глоток ледяного арктического воздуха — 
                  освежает, тонизирует и даёт мощный заряд энергии. Идеально для экстремальных нагрузок."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Отзывы покупателей
              </div>
              <p className="text-xl text-white/70">Что говорят те, кто уже попробовал</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  "Пью перед тренировками — эффект мощнейший! Энергия бьёт ключом, 
                  концентрация на максимуме. Вкус освежающий, не приторный."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                    А
                  </div>
                  <div>
                    <div className="text-white font-bold">Алексей</div>
                    <div className="text-white/60 text-sm">Спортсмен</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  "Работаю в ночные смены — Husky настоящее спасение. 
                  Без сахара, без лишних калорий, а бодрости хватает на всю ночь!"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                    М
                  </div>
                  <div>
                    <div className="text-white font-bold">Мария</div>
                    <div className="text-white/60 text-sm">Программист</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  "Лучший энергетик для экстрима! Беру с собой на сноуборд — 
                  заряжает на весь день. Дизайн банки тоже огонь 🔥"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-white font-bold text-lg">
                    Д
                  </div>
                  <div>
                    <div className="text-white font-bold">Дмитрий</div>
                    <div className="text-white/60 text-sm">Сноубордист</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                О бренде HUSKY
              </div>
              <p className="text-xl text-white/70">История, рождённая в Арктике</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-white">Дух настоящих хаски</h3>
                  <p className="text-xl text-white/80 leading-relaxed">
                    Всё началось с наблюдения за упряжкой хаски в арктической экспедиции. 
                    Эти невероятные собаки преодолевали сотни километров по снегу, 
                    не зная усталости. Их неукротимый дух и безграничная энергия 
                    вдохновили нас создать напиток для настоящих экстремалов.
                  </p>
                  <p className="text-xl text-white/80 leading-relaxed">
                    HUSKY — это не просто энергетик. Это философия преодоления, 
                    стремление к цели несмотря ни на что. Как хаски бегут вперёд 
                    в самую суровую метель, так и ты можешь преодолеть любые препятствия.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-7xl mb-6 text-center">🐺</div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-cyan-400">2020</div>
                        <div className="text-white/80">Год основания бренда</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-blue-400">15+</div>
                        <div className="text-white/80">Стран присутствия</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-cyan-300">1M+</div>
                        <div className="text-white/80">Довольных экстремалов</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center space-y-4">
                  <Icon name="Award" size={48} className="text-cyan-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Премиальное качество</h4>
                  <p className="text-white/70">Только натуральные ингредиенты высшего качества</p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center space-y-4">
                  <Icon name="Target" size={48} className="text-blue-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Для экстремалов</h4>
                  <p className="text-white/70">Создан спортсменами для спортсменов</p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center space-y-4">
                  <Icon name="Heart" size={48} className="text-cyan-300 mx-auto" />
                  <h4 className="text-xl font-bold text-white">С душой</h4>
                  <p className="text-white/70">Каждая банка — результат страсти к экстриму</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Экстремальные моменты
              </div>
              <p className="text-xl text-white/70">HUSKY в действии — реальные кадры спортсменов</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="group relative overflow-hidden rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/a0d83c62-7961-42b3-af51-6435d1063b69.jpg"
                  alt="Сноуборд"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white mb-2">Горные вершины</h3>
                  <p className="text-white/80">Покоряй снежные склоны</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/6b3fdb14-288d-44a0-9259-c8c8dec2acf7.jpg"
                  alt="BMX"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white mb-2">Городские джунгли</h3>
                  <p className="text-white/80">Трюки на пределе возможного</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/ab2ddad9-aaa1-4b64-a507-6f7c9bf7eee8.jpg"
                  alt="Паркур"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white mb-2">Свобода движения</h3>
                  <p className="text-white/80">Паркур без границ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Отзывы спортсменов
              </div>
              <p className="text-xl text-white/70">Что говорят настоящие экстремалы</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-2xl font-black text-white">
                    АК
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Алексей Ковалёв</h4>
                    <p className="text-cyan-400 text-sm">Профессиональный сноубордист</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed">
                  "HUSKY — мой must-have перед каждым спуском. Арктическая мята даёт невероятный заряд, 
                  концентрация на максимуме. Рекомендую всем райдерам!"
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center text-2xl font-black text-white">
                    МС
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Мария Соколова</h4>
                    <p className="text-cyan-400 text-sm">BMX райдер, чемпионка России</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed">
                  "Пробовала много энергетиков, но HUSKY — лучший! Нет сахара, отличный вкус 
                  и реально работает. Перед соревнованиями — только он."
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-black text-white">
                    ДР
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Дмитрий Рогов</h4>
                    <p className="text-cyan-400 text-sm">Трейсер, основатель команды FreeWay</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed">
                  "Паркур требует максимальной концентрации и выносливости. HUSKY помогает 
                  сохранять фокус даже после часовой тренировки. Вся команда пьёт только его!"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Промо-видео
              </div>
              <p className="text-xl text-white/70">Почувствуй энергию HUSKY</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800/50 border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Play" size={40} className="text-white ml-2" />
                    </div>
                    <p className="text-white/80 text-xl">Нажми, чтобы посмотреть промо</p>
                  </div>
                </div>
                <img 
                  src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/a0d83c62-7961-42b3-af51-6435d1063b69.jpg"
                  alt="Промо"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-6xl md:text-7xl font-black text-white">
                🐺
              </div>
              
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Готов стать экстремалом?
              </div>
              
              <p className="text-2xl text-white/80 max-w-2xl mx-auto">
                Присоединяйся к сообществу HUSKY — где каждый день это новое приключение
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