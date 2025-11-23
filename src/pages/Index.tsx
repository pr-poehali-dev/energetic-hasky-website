import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-amber-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Scissors" size={32} className="text-amber-700" />
              <div className="text-3xl font-bold text-amber-900">Ателье Элегант</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">О нас</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Работы</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">Контакты</a>
            </div>

            <Button className="bg-gradient-to-r from-amber-600 to-rose-600 hover:opacity-90 text-white font-semibold px-6">
              <Icon name="Phone" size={18} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Индивидуальный пошив<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                    с душой
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Создаём одежду, которая подчёркивает вашу уникальность. 
                  Более 15 лет опыта в искусстве кроя и шитья.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-amber-600 to-rose-600 hover:opacity-90 text-white font-semibold px-8 py-6 text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на примерку
                </Button>
                <Button variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-6 text-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-700">15+</div>
                  <div className="text-gray-600 text-sm mt-1">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-700">2000+</div>
                  <div className="text-gray-600 text-sm mt-1">изделий</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-700">500+</div>
                  <div className="text-gray-600 text-sm mt-1">клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-rose-400/30 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/bb8b9fac-0dd4-4764-95a3-d347a69c2b29.jpg"
                alt="Ателье интерьер"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр швейных услуг для вас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200 hover:shadow-xl transition-all space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center">
                <Icon name="Shirt" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Пошив одежды</h3>
              <p className="text-gray-600 leading-relaxed">
                Платья, костюмы, блузки, юбки — создаём одежду по вашим меркам и пожеланиям
              </p>
              <div className="text-amber-700 font-semibold">от 3 000 ₽</div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200 hover:shadow-xl transition-all space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center">
                <Icon name="Scissors" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ремонт и подгонка</h3>
              <p className="text-gray-600 leading-relaxed">
                Подшив, ушивание, замена молний — вернём вашей одежде идеальную посадку
              </p>
              <div className="text-amber-700 font-semibold">от 500 ₽</div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200 hover:shadow-xl transition-all space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Декор и украшение</h3>
              <p className="text-gray-600 leading-relaxed">
                Вышивка, аппликации, стразы — добавим уникальные детали вашей одежде
              </p>
              <div className="text-amber-700 font-semibold">от 1 500 ₽</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 to-amber-400/30 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/61474fdb-0db0-4bb2-9b70-f21d9c43d35b.jpg"
                alt="Мастер за работой"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-5xl font-bold text-gray-900">
                Мастерство в каждом стежке
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Наше ателье — это место, где рождается красота. Мы работаем только с качественными 
                материалами и используем современное оборудование.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Каждое изделие создаётся с вниманием к деталям и любовью к своему делу. 
                Наши мастера имеют профессиональное образование и постоянно повышают квалификацию.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Индивидуальный подход</h4>
                    <p className="text-gray-600">Учитываем особенности фигуры и ваши пожелания</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Качественные материалы</h4>
                    <p className="text-gray-600">Работаем только с проверенными тканями</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Гарантия качества</h4>
                    <p className="text-gray-600">Бесплатная корректировка в течение месяца</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600">Примеры выполненных заказов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/6aec7ae3-39aa-4acc-9ffa-2c27059ee4bc.jpg"
                alt="Работа 1"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/bb8b9fac-0dd4-4764-95a3-d347a69c2b29.jpg"
                alt="Работа 2"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/bc2d0cee-fd87-4268-9780-b1dfa07500dd/files/61474fdb-0db0-4bb2-9b70-f21d9c43d35b.jpg"
                alt="Работа 3"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-6 text-lg">
              <Icon name="Image" size={20} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-amber-600 to-rose-600">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold text-white mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-white/90 mb-12">Что говорят о нашей работе</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 space-y-4">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed">
                "Сшили мне платье для торжества — я в восторге! Идеальная посадка, 
                качество на высоте. Рекомендую!"
              </p>
              <div className="flex items-center gap-3 justify-center pt-4 border-t border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  Е
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Елена</div>
                  <div className="text-white/70 text-sm">Москва</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 space-y-4">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed">
                "Быстро подогнали костюм перед важной встречей. 
                Профессионалы своего дела, спасибо!"
              </p>
              <div className="flex items-center gap-3 justify-center pt-4 border-t border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  А
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Андрей</div>
                  <div className="text-white/70 text-sm">Москва</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 space-y-4">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed">
                "Обращаюсь сюда уже несколько лет. 
                Всегда довольна результатом — мастера знают своё дело!"
              </p>
              <div className="flex items-center gap-3 justify-center pt-4 border-t border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  О
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">Ольга</div>
                  <div className="text-white/70 text-sm">Москва</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600">Ответим на все вопросы и запишем на примерку</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 10:00 - 20:00<br/>Сб-Вс: 11:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Записаться на примерку</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Что хотите сшить или изменить?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 hover:opacity-90 text-white font-semibold py-6 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Scissors" size={32} className="text-amber-500" />
            <div className="text-3xl font-bold text-white">Ателье Элегант</div>
          </div>
          <p className="text-gray-400 mb-6">Индивидуальный пошив с душой</p>
          <p className="text-gray-500 text-sm">© 2024 Ателье Элегант. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
