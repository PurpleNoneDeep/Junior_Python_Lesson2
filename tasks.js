// ======================================================
// === ФАЙЛ С ЗАДАЧАМИ ===
// ======================================================
// Каждая задача — объект:
//   id               — уникальный номер
//   title            — название карточки
//   shortDescription — краткое описание для карточки
//   fullDescription  — полное условие в модалке (с подсказкой про переменные)
//   correctAnswer    — эталонный код (в одну строку через \n)
//   points           — сколько баллов за верное решение

const TASKS = [
  // ====================================================
  // ЧАСТЬ 1. ПРОСТЫЕ ЗАДАЧИ С if (1 балл)
  // ====================================================
  {
    id: 1,
    title: "Дождливый день",
    shortDescription: "Совет на случай дождя",
    fullDescription: "Если на улице идёт дождь — посоветуй взять зонтик.\n\nПодсказка: используй переменную rain",
    correctAnswer: `rain = True\nif rain:\n    print("Возьми зонтик!")`,
    points: 1
  },
  {
    id: 2,
    title: "Кот дома",
    shortDescription: "Что сказать коту",
    fullDescription: "Если у тебя есть кот — скажи «Мяу!».\n\nПодсказка: используй переменную cat",
    correctAnswer: `cat = True\nif cat:\n    print("Мяу!")`,
    points: 1
  },
  {
    id: 3,
    title: "Понедельник",
    shortDescription: "Пожалей себя в понедельник",
    fullDescription: "Если сегодня понедельник — пожалей себя.\n\nПодсказка: используй переменную monday",
    correctAnswer: `monday = True\nif monday:\n    print("Бедняга...")`,
    points: 1
  },
  {
    id: 4,
    title: "Голод",
    shortDescription: "Предложи пиццу, если голоден",
    fullDescription: "Если ты голоден — предложи пиццу.\n\nПодсказка: используй переменную hungry",
    correctAnswer: `hungry = True\nif hungry:\n    print("Пицца уже едет!")`,
    points: 1
  },
  {
    id: 5,
    title: "Снег",
    shortDescription: "Совет на снежный день",
    fullDescription: "Если на улице снег — посоветуй лепить снеговика.\n\nПодсказка: используй переменную snow",
    correctAnswer: `snow = True\nif snow:\n    print("Слепи снеговика!")`,
    points: 1
  },
  {
    id: 6,
    title: "Конфета",
    shortDescription: "Что делать с конфетой",
    fullDescription: "Если у тебя есть конфета — посоветуй её съесть.\n\nПодсказка: используй переменную candy",
    correctAnswer: `candy = True\nif candy:\n    print("Съешь конфету!")`,
    points: 1
  },
  {
    id: 7,
    title: "Усталость",
    shortDescription: "Совет при усталости",
    fullDescription: "Если ты устал — посоветуй поспать.\n\nПодсказка: используй переменную tired",
    correctAnswer: `tired = True\nif tired:\n    print("Иди поспи, соня!")`,
    points: 1
  },
  {
    id: 8,
    title: "Брат",
    shortDescription: "Поздоровайся с братом",
    fullDescription: "Если у тебя есть брат — поздоровайся с ним.\n\nПодсказка: используй переменную brother",
    correctAnswer: `brother = True\nif brother:\n    print("Привет, братишка!")`,
    points: 1
  },
  {
    id: 9,
    title: "Жара",
    shortDescription: "Совет в жаркий день",
    fullDescription: "Если на улице жара — посоветуй мороженое.\n\nПодсказка: используй переменную hot",
    correctAnswer: `hot = True\nif hot:\n    print("Съешь мороженое!")`,
    points: 1
  },
  {
    id: 10,
    title: "Победа",
    shortDescription: "Похвастайся победой",
    fullDescription: "Если ты выиграл в игре — похвастайся.\n\nПодсказка: используй переменную win",
    correctAnswer: `win = True\nif win:\n    print("Я чемпион!")`,
    points: 1
  },
  {
    id: 11,
    title: "Домашка",
    shortDescription: "Вздохни про домашнее задание",
    fullDescription: "Если у тебя есть домашнее задание — вздохни.\n\nПодсказка: используй переменную homework",
    correctAnswer: `homework = True\nif homework:\n    print("Эх... опять уроки.")`,
    points: 1
  },
  {
    id: 12,
    title: "Темнота",
    shortDescription: "Включи свет в тёмной комнате",
    fullDescription: "Если в комнате темно — посоветуй включить свет.\n\nПодсказка: используй переменную dark",
    correctAnswer: `dark = True\nif dark:\n    print("Включи свет!")`,
    points: 1
  },
  {
    id: 13,
    title: "Друг",
    shortDescription: "Поиграй с другом",
    fullDescription: "Если у тебя есть друг — посоветуй поиграть с ним.\n\nПодсказка: используй переменную friend",
    correctAnswer: `friend = True\nif friend:\n    print("Позови друга играть!")`,
    points: 1
  },
  {
    id: 14,
    title: "Монетка",
    shortDescription: "Сохрани найденную монетку",
    fullDescription: "Если ты нашёл монетку — посоветуй её сохранить.\n\nПодсказка: используй переменную coin",
    correctAnswer: `coin = True\nif coin:\n    print("В копилку её!")`,
    points: 1
  },
  {
    id: 15,
    title: "Лето",
    shortDescription: "Совет летом",
    fullDescription: "Если сейчас лето — посоветуй идти купаться.\n\nПодсказка: используй переменную summer",
    correctAnswer: `summer = True\nif summer:\n    print("Бегом на речку!")`,
    points: 1
  },
  {
    id: 16,
    title: "Живот болит",
    shortDescription: "Совет при боли в животе",
    fullDescription: "Если у тебя болит живот — посоветуй попить чай.\n\nПодсказка: используй переменную stomach",
    correctAnswer: `stomach = True\nif stomach:\n    print("Попей чай с мятой.")`,
    points: 1
  },
  {
    id: 17,
    title: "Недосып",
    shortDescription: "Посоветуй зевнуть",
    fullDescription: "Если ты не выспался — посоветуй зевнуть.\n\nПодсказка: используй переменную sleepy",
    correctAnswer: `sleepy = True\nif sleepy:\n    print("Зевни хорошенько!")`,
    points: 1
  },
  {
    id: 18,
    title: "Ветер",
    shortDescription: "Застегни куртку в ветер",
    fullDescription: "Если на улице ветер — посоветуй застегнуть куртку.\n\nПодсказка: используй переменную wind",
    correctAnswer: `wind = True\nif wind:\n    print("Застегни куртку!")`,
    points: 1
  },
  {
    id: 19,
    title: "Кошка",
    shortDescription: "Погладь кошку",
    fullDescription: "Если у тебя есть кошка — погладь её.\n\nПодсказка: используй переменную cat_home",
    correctAnswer: `cat_home = True\nif cat_home:\n    print("Погладь кошку!")`,
    points: 1
  },
  {
    id: 20,
    title: "Баг",
    shortDescription: "Найди и исправь баг",
    fullDescription: "Если ты нашёл ошибку в коде — посоветуй её исправить.\n\nПодсказка: используй переменную bug",
    correctAnswer: `bug = True\nif bug:\n    print("Лови бага!")`,
    points: 1
  },

  // ====================================================
  // ЧАСТЬ 2. ЗАДАЧИ С if / elif / else (5 баллов)
  // ====================================================
  {
    id: 21,
    title: "Погода",
    shortDescription: "Зонтик, шарф или гуляй",
    fullDescription: "Если на улице дождь — зонтик, если снег — шарф, иначе — гуляй.\n\nПодсказка: используй переменную weather",
    correctAnswer: `weather = "снег"\nif weather == "дождь":\n    print("Возьми зонтик!")\nelif weather == "снег":\n    print("Надень шарф!")\nelse:\n    print("Иди гуляй!")`,
    points: 5
  },
  {
    id: 22,
    title: "Температура",
    shortDescription: "Мороженое, чай или гуляй",
    fullDescription: "Если температура больше 30 — мороженое, если меньше 0 — чай, иначе — гуляй.\n\nПодсказка: используй переменную t",
    correctAnswer: `t = 35\nif t > 30:\n    print("Мороженое!")\nelif t < 0:\n    print("Горячий чай!")\nelse:\n    print("Норм погодка!")`,
    points: 5
  },
  {
    id: 23,
    title: "Еда",
    shortDescription: "Пицца, салат или голод",
    fullDescription: "Если съел пиццу — доволен, если салат — грустный, иначе — голодный.\n\nПодсказка: используй переменную food",
    correctAnswer: `food = "салат"\nif food == "пицца":\n    print("Я счастлив!")\nelif food == "салат":\n    print("Фу-у-у...")\nelse:\n    print("Хочу есть!")`,
    points: 5
  },
  {
    id: 24,
    title: "Оценка",
    shortDescription: "Реакция на оценку",
    fullDescription: "Если получил 5 — радуйся, если 2 — плачь, иначе — норм.\n\nПодсказка: используй переменную mark",
    correctAnswer: `mark = 5\nif mark == 5:\n    print("Ура-а-а!")\nelif mark == 2:\n    print("А-а-а!")\nelse:\n    print("Ну ладно.")`,
    points: 5
  },
  {
    id: 25,
    title: "Кот",
    shortDescription: "Спит, играет или кушать",
    fullDescription: "Если кот спит — не буди, если играет — играй, иначе — корми.\n\nПодсказка: используй переменную cat",
    correctAnswer: `cat = "играет"\nif cat == "спит":\n    print("Тссс...")\nelif cat == "играет":\n    print("Достаю бантик!")\nelse:\n    print("Даю корм!")`,
    points: 5
  },
  {
    id: 26,
    title: "Время суток",
    shortDescription: "Спать, в школу или играть",
    fullDescription: "Если час ночи — спать, если утро — в школу, иначе — играть.\n\nПодсказка: используй переменную hour",
    correctAnswer: `hour = 1\nif hour >= 23 or hour < 6:\n    print("Спа-а-ать!")\nelif hour < 9:\n    print("В школу!")\nelse:\n    print("Играть!")`,
    points: 5
  },
  {
    id: 27,
    title: "Результат игры",
    shortDescription: "Кубок, реванш или ничья",
    fullDescription: "Если ты выиграл — кубок, если проиграл — реванш, иначе — ничья.\n\nПодсказка: используй переменную result",
    correctAnswer: `result = "ничья"\nif result == "победа":\n    print("Кубок мой!")\nelif result == "проигрыш":\n    print("Ещё разок!")\nelse:\n    print("Ничья!")`,
    points: 5
  },
  {
    id: 28,
    title: "Праздник",
    shortDescription: "Торт, салют или обычный день",
    fullDescription: "Если день рождения — торт, если праздник — салют, иначе — обычный день.\n\nПодсказка: используй переменную day",
    correctAnswer: `day = "праздник"\nif day == "день рождения":\n    print("Тортик!")\nelif day == "праздник":\n    print("Салют!")\nelse:\n    print("Обычный денёк.")`,
    points: 5
  },
  {
    id: 29,
    title: "Монстр",
    shortDescription: "Беги, атакуй или прячься",
    fullDescription: "Если монстр близко — беги, если далеко — атакуй, иначе — прячься.\n\nПодсказка: используй переменную distance",
    correctAnswer: `distance = 5\nif distance < 3:\n    print("Беги!")\nelif distance > 10:\n    print("Атакуй!")\nelse:\n    print("Прячься!")`,
    points: 5
  },
  {
    id: 30,
    title: "Конфеты",
    shortDescription: "Сколько конфет съедено",
    fullDescription: "Если съел много конфет — болит живот, если мало — хочется ещё, иначе — счастлив.\n\nПодсказка: используй переменную candies",
    correctAnswer: `candies = 10\nif candies > 7:\n    print("Ой, живот...")\nelif candies < 3:\n    print("Хочу ещё!")\nelse:\n    print("В самый раз!")`,
    points: 5
  },
  {
    id: 31,
    title: "Дождь и зонт",
    shortDescription: "Гулять или сидеть дома",
    fullDescription: "Если идёт дождь и есть зонт — гуляй, если дождь и нет зонта — сиди дома.\n\nПодсказка: используй переменные rain, umbrella",
    correctAnswer: `rain = True\numbrella = False\nif rain and umbrella:\n    print("Гуляю!")\nelif rain and not umbrella:\n    print("Сижу дома.")\nelse:\n    print("Иду гулять!")`,
    points: 5
  },
  {
    id: 32,
    title: "Робот",
    shortDescription: "Привет, поворот или прямо",
    fullDescription: "Если робот видит человека — скажи «Привет», если стену — поверни, иначе — иди прямо.\n\nПодсказка: используй переменную see",
    correctAnswer: `see = "стена"\nif see == "человек":\n    print("Привет!")\nelif see == "стена":\n    print("Поворот!")\nelse:\n    print("Иду прямо.")`,
    points: 5
  },
  {
    id: 33,
    title: "Где ты",
    shortDescription: "Учись, отдыхай или гуляй",
    fullDescription: "Если ты в школе — учись, если дома — отдыхай, иначе — гуляй.\n\nПодсказка: используй переменную where",
    correctAnswer: `where = "дома"\nif where == "школа":\n    print("Учись!")\nelif where == "дома":\n    print("Отдыхай!")\nelse:\n    print("Гуляй!")`,
    points: 5
  },
  {
    id: 34,
    title: "Пицца",
    shortDescription: "С ананасом, сыром или странная",
    fullDescription: "Если пицца с ананасом — фу, если с сыром — вкусно, иначе — странно.\n\nПодсказка: используй переменную pizza",
    correctAnswer: `pizza = "сыр"\nif pizza == "ананас":\n    print("Фу-у-у!")\nelif pizza == "сыр":\n    print("Ням-ням!")\nelse:\n    print("Странная пицца...")`,
    points: 5
  },
  {
    id: 35,
    title: "Батарейка",
    shortDescription: "Играй, жди или скучай",
    fullDescription: "Если батарейка есть — играй, если заряжается — жди, иначе — скучай.\n\nПодсказка: используй переменную battery",
    correctAnswer: `battery = "заряжается"\nif battery == "есть":\n    print("Играю!")\nelif battery == "заряжается":\n    print("Жду...")\nelse:\n    print("Скучно...")`,
    points: 5
  },
  {
    id: 36,
    title: "Урок",
    shortDescription: "Считай, бегай или слушай",
    fullDescription: "Если урок математики — считай, если физкультура — бегай, иначе — слушай.\n\nПодсказка: используй переменную lesson",
    correctAnswer: `lesson = "физкультура"\nif lesson == "математика":\n    print("2+2=4!")\nelif lesson == "физкультура":\n    print("Бегом!")\nelse:\n    print("Слушаю.")`,
    points: 5
  },
  {
    id: 37,
    title: "Действие",
    shortDescription: "Доволен, бодрый или сонный",
    fullDescription: "Если ты поел — доволен, если поспал — бодрый, иначе — сонный.\n\nПодсказка: используй переменную action",
    correctAnswer: `action = "поспал"\nif action == "поел":\n    print("Доволен!")\nelif action == "поспал":\n    print("Бодрый!")\nelse:\n    print("Сонный...")`,
    points: 5
  },
  {
    id: 38,
    title: "Ветер и дождь",
    shortDescription: "Дома, куртка или гуляй",
    fullDescription: "Если на улице ветер и дождь — сиди дома, если только ветер — куртка.\n\nПодсказка: используй переменные rain, wind",
    correctAnswer: `rain = True\nwind = False\nif rain and wind:\n    print("Сижу дома!")\nelif wind and not rain:\n    print("Куртку застегни!")\nelse:\n    print("Гуляю!")`,
    points: 5
  },
  {
    id: 39,
    title: "Кот и его настроение",
    shortDescription: "Корми, не трогай или играй",
    fullDescription: "Если кот мяукает — покорми, если спит — не трогай, иначе — играй.\n\nПодсказка: используй переменную cat",
    correctAnswer: `cat = "мяукает"\nif cat == "мяукает":\n    print("Кормлю!")\nelif cat == "спит":\n    print("Не трогаю.")\nelse:\n    print("Играю!")`,
    points: 5
  },
  {
    id: 40,
    title: "Место",
    shortDescription: "Зоопарк, кино или дома",
    fullDescription: "Если ты в зоопарке — смотри, если в кино — ешь попкорн, иначе — дома.\n\nПодсказка: используй переменную place",
    correctAnswer: `place = "кино"\nif place == "зоопарк":\n    print("Смотрю на слона!")\nelif place == "кино":\n    print("Хрум-хрум!")\nelse:\n    print("Дома сижу.")`,
    points: 5
  },

  // ====================================================
  // ЧАСТЬ 3. ЗАДАЧИ С and / or (10 баллов)
  // ====================================================
  {
    id: 41,
    title: "Дождь без зонта",
    shortDescription: "Условие с and и not",
    fullDescription: "Если дождь И нет зонта — сиди дома, иначе — гуляй.\n\nПодсказка: используй переменные rain, umbrella",
    correctAnswer: `rain = True\numbrella = False\nif rain and not umbrella:\n    print("Сиди дома!")\nelse:\n    print("Гуляй!")`,
    points: 10
  },
  {
    id: 42,
    title: "Мороженое",
    shortDescription: "Жарко ИЛИ хочется",
    fullDescription: "Если жарко ИЛИ хочется мороженого — иди за мороженым.\n\nПодсказка: используй переменные hot, want_ice",
    correctAnswer: `hot = True\nwant_ice = False\nif hot or want_ice:\n    print("За мороженым!")`,
    points: 10
  },
  {
    id: 43,
    title: "Кино-вечер",
    shortDescription: "Чипсы И газировка",
    fullDescription: "Если есть чипсы И газировка — устраивай кино.\n\nПодсказка: используй переменные chips, cola",
    correctAnswer: `chips = True\ncola = True\nif chips and cola:\n    print("Кино-вечер!")`,
    points: 10
  },
  {
    id: 44,
    title: "Радость",
    shortDescription: "Пятёрка ИЛИ похвала",
    fullDescription: "Если получил 5 ИЛИ похвалили — радуйся!\n\nПодсказка: используй переменные got_five, praised",
    correctAnswer: `got_five = False\npraised = True\nif got_five or praised:\n    print("Ура-а-а!")`,
    points: 10
  },
  {
    id: 45,
    title: "Спать пора",
    shortDescription: "Устал ИЛИ хочешь спать",
    fullDescription: "Если устал ИЛИ хочешь спать — иди спать.\n\nПодсказка: используй переменные tired, sleepy",
    correctAnswer: `tired = True\nsleepy = False\nif tired or sleepy:\n    print("В кроватку!")`,
    points: 10
  },
  {
    id: 46,
    title: "Санки",
    shortDescription: "Снег И санки",
    fullDescription: "Если идёт снег И есть санки — беги кататься!\n\nПодсказка: используй переменные snow, sled",
    correctAnswer: `snow = True\nsled = True\nif snow and sled:\n    print("На горку!")`,
    points: 10
  },
  {
    id: 47,
    title: "Покорми кота",
    shortDescription: "Кот И корм",
    fullDescription: "Если есть кот И есть корм — покорми кота.\n\nПодсказка: используй переменные cat, food",
    correctAnswer: `cat = True\nfood = True\nif cat and food:\n    print("Кис-кис, кушать!")`,
    points: 10
  },
  {
    id: 48,
    title: "На кухню",
    shortDescription: "Голоден ИЛИ скучно",
    fullDescription: "Если голоден ИЛИ скучно — иди на кухню.\n\nПодсказка: используй переменные hungry, bored",
    correctAnswer: `hungry = False\nbored = True\nif hungry or bored:\n    print("Иду на кухню!")`,
    points: 10
  },
  {
    id: 49,
    title: "Дождь и ветер",
    shortDescription: "Сиди дома",
    fullDescription: "Если идёт дождь И дует ветер — сиди дома.\n\nПодсказка: используй переменные rain, wind",
    correctAnswer: `rain = True\nwind = True\nif rain and wind:\n    print("Дома уютнее!")`,
    points: 10
  },
  {
    id: 50,
    title: "Везунчик",
    shortDescription: "Победа ИЛИ монетка",
    fullDescription: "Если ты выиграл ИЛИ нашёл монетку — ты счастливчик!\n\nПодсказка: используй переменные win, coin",
    correctAnswer: `win = False\ncoin = True\nif win or coin:\n    print("Везунчик!")`,
    points: 10
  },
  {
    id: 51,
    title: "Супербодрый",
    shortDescription: "Поел И поспал",
    fullDescription: "Если ты поел И поспал — ты супербодрый!\n\nПодсказка: используй переменные ate, slept",
    correctAnswer: `ate = True\nslept = True\nif ate and slept:\n    print("Энергия на максимум!")`,
    points: 10
  },
  {
    id: 52,
    title: "Удобства",
    shortDescription: "Темно ИЛИ холодно",
    fullDescription: "Если в комнате темно ИЛИ холодно — включи свет и обогрев.\n\nПодсказка: используй переменные dark, cold",
    correctAnswer: `dark = True\ncold = False\nif dark or cold:\n    print("Включаю удобства!")`,
    points: 10
  },
  {
    id: 53,
    title: "Игра вдвоём",
    shortDescription: "Друг И игра",
    fullDescription: "Если у тебя есть друг И есть игра — играйте вместе.\n\nПодсказка: используй переменные friend, game",
    correctAnswer: `friend = True\ngame = True\nif friend and game:\n    print("Вдвоём веселее!")`,
    points: 10
  },
  {
    id: 54,
    title: "Объелся",
    shortDescription: "Пицца И кола",
    fullDescription: "Если съел пиццу И выпил колу — ты довольный.\n\nПодсказка: используй переменные pizza, cola",
    correctAnswer: `pizza = True\ncola = True\nif pizza and cola:\n    print("Объелся!")`,
    points: 10
  },
  {
    id: 55,
    title: "Грустный денёк",
    shortDescription: "Понедельник ИЛИ дождь",
    fullDescription: "Если понедельник ИЛИ дождь — грустный денёк.\n\nПодсказка: используй переменные monday, rain",
    correctAnswer: `monday = False\nrain = True\nif monday or rain:\n    print("Хнык...")`,
    points: 10
  },
  {
    id: 56,
    title: "Спящая кошка",
    shortDescription: "Кошка И сон",
    fullDescription: "Если у тебя есть кошка И она спит — не буди.\n\nПодсказка: используй переменные cat, sleeping",
    correctAnswer: `cat = True\nsleeping = True\nif cat and sleeping:\n    print("Тссс...")`,
    points: 10
  },
  {
    id: 57,
    title: "Сосредоточься",
    shortDescription: "Школа ИЛИ уроки",
    fullDescription: "Если ты в школе ИЛИ делаешь уроки — не отвлекайся.\n\nПодсказка: используй переменные school, homework",
    correctAnswer: `school = False\nhomework = True\nif school or homework:\n    print("Сосредоточься!")`,
    points: 10
  },
  {
    id: 58,
    title: "Поделись",
    shortDescription: "Конфета И друг",
    fullDescription: "Если есть конфета И есть друг — поделись!\n\nПодсказка: используй переменные candy, friend",
    correctAnswer: `candy = True\nfriend = True\nif candy and friend:\n    print("Держи половинку!")`,
    points: 10
  },
  {
    id: 59,
    title: "Смена занятия",
    shortDescription: "Батарейка села ИЛИ надоело",
    fullDescription: "Если батарейка села ИЛИ игра надоела — переключись.\n\nПодсказка: используй переменные battery_dead, bored_game",
    correctAnswer: `battery_dead = False\nbored_game = True\nif battery_dead or bored_game:\n    print("Меняю занятие!")`,
    points: 10
  },
  {
    id: 60,
    title: "Будущий программист",
    shortDescription: "Молодец И учишь Python",
    fullDescription: "Если ты молодец И учишь Python — ты будущий программист!\n\nПодсказка: используй переменные smart, learning",
    correctAnswer: `smart = True\nlearning = True\nif smart and learning:\n    print("Ты станешь крутым кодером!")`,
    points: 10
  }
];
