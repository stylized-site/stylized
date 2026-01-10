const styles = {
  male: [
    "star boy","old money","elegante","gym","byker","gotico","drip","y2k",
    "sk8","skateboard","streetwear","vaquero","soft boy",
    "gorpcore","all black","classic","casual"
  ],
  female: [
    "street style","casual","classic style","minimalist style","teenage style",
    "ceo style","gym","vintage style","student style","baggy style",
    "comfy casual style","business style","y2k","romantic style"
  ]
};

const budgets = [6000,7500,10000,15000,20000,30000,50000];

const looks = [
  {
    gender:"male",
    style:"streetwear",
    budget:10000,
    items:{
      "Футболка":"https://example.com",
      "Штаны":"https://example.com",
      "Кроссовки":"https://example.com",
      "Куртка":"https://example.com",
      "Аксессуар":"https://example.com"
    }
  },
  {
    gender:"female",
    style:"y2k",
    budget:15000,
    items:{
      "Топ":"https://example.com",
      "Юбка":"https://example.com",
      "Обувь":"https://example.com",
      "Сумка":"https://example.com"
    }
  }
];

const roulettePrizes = [
  {name:"Ничего", chance:99},
  {name:"Годовой портал бесплатно", chance:0.25},
  {name:"Подбор до 10 000₽", chance:0.5},
  {name:"Подбор на любую сумму", chance:0.25},
  {name:"15 000₽", chance:0}
];
