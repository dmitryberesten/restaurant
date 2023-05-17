import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Юлія Новак',
    rating: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
      <FaStar key={5} />,
    ],
    image:
      'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    text: 'Цей ресторан вирізняється своїми смачними італійськими стравами, які тут готують автентично та смачно. Крім того, дружня атмосфера та обслуговування змушують мене завжди із задоволенням повертатися сюди.',
  },
  {
    id: 2,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'Коли я хочу зїсти щось смачне і поживне, я завжди обираю цей ресторан. У їхньому меню представлений широкий вибір вегетаріанських страв, які готуються зі свіжих і корисних інгредієнтів. Я рекомендую його всім, хто цінує здорову їжу.',
  },
  {
    id: 3,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'Я люблю цей ресторан за його унікальну атмосферу. Відчувається, що це справжнє французьке кафе, а страви дуже смачні та естетично подані. Я дуже рекомендую його любителям французької кухні та романтичних зустрічей.',
  },
  {
    id: 4,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1682525672.1678217274&semt=sph',
    text: 'Цей ресторан - справжній рай для любителів мяса. Їхні мясні страви дуже смачні та приготовані з найякісніших інгредієнтів. Крім того, обслуговування дуже професійне і уважне до кожної деталі. ',
  },
  {
    id: 5,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'Це моє улюблене місце для сніданку. Яєчня тут дуже смачна і свіжа, а кава ароматна і гаряча. До того ж, дизайн інтерєру дозволяє миттєво розслабитися і відпочити. ',
  },
  {
    id: 6,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'У цьому ресторані подають одні з найкращих піц, які я коли-небудь куштував. Тісто тонке і хрустке, а інгредієнти зверху свіжі та ароматні. До того ж, ціни дуже помірні, а обслуговування привітне і корисне.',
  },
  {
    id: 7,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/1657501/pexels-photo-1657501.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    text: 'Це ідеальне місце для вечері з друзями. У меню широкий вибір страв з різних кухонь світу, тому тут знайдеться щось для кожного. Крім того, персонал дуже привітний і дбає про те, щоб кожен почувався тут комфортно.',
  },
  {
    id: 8,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://cdn.stocksnap.io/img-thumbs/280h/woman-model_IBNB839D96.jpg',
    text: 'Цей ресторан - справжній рай для любителів східної кухні. Тайські страви смачні та ароматні, а в меню є багато інших смаків Азії. Дуже рекомендуємо для любителів гострої та екзотичної кухні.',
  },
  {
    id: 9,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg',
    text: 'Цей ресторан пропонує смачні страви польської кухні в сучасному виконанні. Смаки автентичні, але подаються у сучасний і привабливий спосіб. Крім того, обслуговування дуже ввічливе і корисне, що тільки додає шарму цьому місцю.',
  },
  {
    id: 10,
    name: 'Клієнт',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://img.freepik.com/free-photo/thoughtful-adorable-blonde-forty-years-old-pleased-woman-keeps-arms-folded-thinks-about-something-looks-away-wears-spectacles-knitted-sweater_273609-46841.jpg?size=626&ext=jpg&ga=GA1.1.1682525672.1678217274&semt=sph',
    text: 'У цьому ресторані чудова атмосфера і дуже затишний декор. Їжа дуже смачна і готується зі свіжих місцевих продуктів. Це ідеальне місце для романтичної вечері або зустрічі з друзями.',
  },
];

export default reviews;
