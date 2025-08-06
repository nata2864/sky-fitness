type Course = {
  dailyDurationInMinutes: {
    from: number;
    to: number;
  };
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  difficulty: string;
  durationInDays: number;
  workouts: string[];
  __v: number;
};

const courses: Course[] = [
  {
    dailyDurationInMinutes: { from: 30, to: 45 },
    _id: 'kfpq8e',
    description:
      'это система упражнений, целью которых является разогрев и растяжка мышц и связок...',
    directions: ['статический', 'динамический', 'пассивный', 'активный'],
    fitting: [
      'Улучшить осанку и координацию',
      'Хотите подтянуть тело, смоделировать мышечный корсет',
      'Улучшить кровообращение и обмен веществ',
    ],
    nameEN: 'Stretching',
    nameRU: 'Стретчинг',
    order: 2,
    difficulty: 'начальный',
    durationInDays: 40,
    workouts: ['9mefwq', '9yolz2', 'pi5vtr'],
    __v: 0,
  },
  {
    dailyDurationInMinutes: { from: 20, to: 50 },
    _id: '6i67sm',
    description:
      'направление фитнеса, основанное на наборе аэробных упражнений...',
    directions: ['Для начинающих', 'Для похудения', 'Для детей'],
    fitting: [
      'Хотите укрепить дыхательную и сердечно-сосудистой системы',
      'Быстрый сбросить лишние килограммы',
      'Улучшить настроение, повысить жизненный тонус',
    ],
    nameEN: 'StepAirobic',
    nameRU: 'Степ-аэробика',
    order: 4,
    difficulty: 'средний',
    durationInDays: 25,
    workouts: ['e9ghsb', 'a1rqtt', 'mstcbg', 't3cpno'],
    __v: 0,
  },
  {
    dailyDurationInMinutes: { from: 10, to: 30 },
    _id: 'ab1c3f',
    description:
      'это философия здорового образа жизни...',
    directions: [
      'Йога для новичков',
      'Классическая йога',
      'Йогатерапия',
      'Кундалини-йога',
      'Хатха-йога',
      'Аштанга-йога',
    ],
    fitting: [
      'Давно хотели попробовать йогу, но не решались начать',
      'Хотите укрепить позвоночник, избавиться от болей в спине и суставах',
      'Ищете активность, полезную для тела и души',
    ],
    nameEN: 'Yoga',
    nameRU: 'Йога',
    order: 1,
    difficulty: 'начальный',
    durationInDays: 20,
    workouts: ['3yvozj', 'hfgxlo', 'kcx5ai', 'kt6ah4', 'mrhuag'],
    __v: 0,
  },
  {
    dailyDurationInMinutes: { from: 50, to: 70 },
    _id: 'q02a6i',
    description:
      'BodyFlex – система, в которой особым образом сочетаются физические упражнения...',
    directions: ['базовый', 'продвинутый'],
    fitting: [
      'Хотите укрепить легкие и снизить вероятность заболеваний дыхательной системы',
      'Улучшить пищеварение',
      'Ускорить метаболизм',
    ],
    nameEN: 'BodyFlex',
    nameRU: 'Бодифлекс',
    order: 5,
    difficulty: 'сложный',
    durationInDays: 15,
    workouts: ['xlpkqy', '17oz5f', 'pyvaec'],
    __v: 0,
  },
  {
    dailyDurationInMinutes: { from: 45, to: 60 },
    _id: 'ypox9r',
    description:
      'Фитнес и танцы – что между ними общего?...',
    directions: ['Зумба', 'Dance-mix', 'Caribbean-mix'],
    fitting: [
      'Хотите укрепить мышцы, но тренировки в тренажерном зале для вас скучные и однообразные',
      'Хотите сбросить лишний вес, но нет желания мучать себя диетами',
      'Любите танцы и хотите совместить приятное с полезным.',
    ],
    nameEN: 'Fitness',
    nameRU: 'Фитнес',
    order: 3,
    difficulty: 'сложный',
    durationInDays: 20,
    workouts: ['gh7bd5', 'hwsut5', 'n18r8v', 'dq9rzo', 'rr70ie'],
    __v: 0,
  },
];

export default courses;
