const frameworkItems = [
  {
    title: "Разработка с ИИ в Приоритете:",
    description: "Как общаться с ИИ, чтобы он создавал приложение за вас."
  },
  {
    title: "Масштабирование Без Кода:",
    description: "Подход 'документация в первую очередь', который экономит недели проб и ошибок."
  },
  {
    title: "Мышление Предпринимателя:",
    description: "Как думать как разработчик, дизайнер И предприниматель одновременно."
  },
  {
    title: "Реальный Продукт:",
    description: "Создание и запуск рабочего приложения, которое решает реальные проблемы."
  }
];

export const FrameworkList = () => {
  return (
    <div className="grid gap-6 mt-12">
      {frameworkItems.map((item, index) => (
        <div 
          key={index}
          className="flex items-start group"
        >
          <div className="w-3 h-3 rounded-full bg-accent mt-2 mr-6 group-hover:shadow-glow transition-all duration-300"></div>
          <div>
            <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
              {item.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};