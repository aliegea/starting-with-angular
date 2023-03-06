const GAMES = [
  {
      name: 'Super Mario Bros',
      dateRelease: '13 September 1985',
      imageUrl: 'http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1280w.jpg',
      sellers: [
          {
              id: 1,
              name: 'Old shop',
              price: 95,
              amount: 2,
              isAvailable: true,
          },
          {
              id: 2,
              name: 'New shop',
              price: 115,
              amount: 1,
              isAvailable: true,
          },
          {
              id: 3,
              name: 'Regular shop',
              price: 135,
              amount: 0,
              isAvailable: false,
          }
      ]
  },
  {
      name: 'Legend of Zelda',
      dateRelease: '21 February 1986',
      imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2013/08/240816-imagenes-legend-zelda-wind-waker-hd.jpg?itok=xuSpFkNx',
      sellers: [
          {
              id: 3,
              name: 'Old shop',
              price: 125,
              amount: 0,
              isAvailable: false,
          },
          {
              id: 4,
              name: 'New shop',
              price: 145,
              amount: 3,
              isAvailable: true,
          },
          {
            id: 6,
            name: 'Other shop',
            price: 140,
            amount: 3,
            isAvailable: true,
        },
      ]
  },
  {
      name: 'Sonic',
      dateRelease: '26 June 1981',
      imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/01/sonic-frontiers-2575919.jpg?itok=nFdnF0tE',
      sellers: [
        {
            id: 3,
            name: 'Old shop',
            price: 125,
            amount: 0,
            isAvailable: false,
        },
        {
            id: 4,
            name: 'New shop',
            price: 145,
            amount: 1,
            isAvailable: true,
        },
    ]
  },
  {
    name: 'Scars Above',
    dateRelease: '26 June 1991',
    imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/03/scars-above-2971200.jpg?itok=jcMhqODb',

},
];

const getGames = () => GAMES;
const getGame = (name) => GAMES.find((game) => game.name === name);
const addGame = (game) => {
  const imageUrl = (game.imageUrl) ? game.imageUrl : 'https://c1.staticflickr.com/6/5447/18686626819_224c6414ce_m.jpg';
  const gameWithImageUrlResolved = Object.assign({}, game, imageUrl);
  GAMES.push(gameWithImageUrlResolved);
};
const getGameIndexByName = (name) => GAMES.findIndex((g) => g.name === name);
const updateGame = (game) => {
  const gameIndex = getGameIndexByName(game.name);
  if (gameIndex > -1) {
      GAMES[gameIndex] = game;
  }
};
const deleteGame = (name) => {
  const gameIndex = getGameIndexByName(name);
  if (gameIndex > -1) {
      GAMES.splice(gameIndex, 1);
  }
}

module.exports = {
  getGames,
  getGame,
  addGame,
  updateGame,
  deleteGame
}
