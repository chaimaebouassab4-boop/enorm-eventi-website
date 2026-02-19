import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];
const awards = [
  {
    imgUrl: images.award01,
    title: 'Service Premium',
    subtitle: 'Personnel professionnel, installation soignée et attention aux moindres détails.',
  },
  {
    imgUrl: images.award02,
    title: 'Bar Mobile Vintage',
    subtitle: 'Un concept élégant qui attire tous les regards et sublime votre événement.',
  },
  {
    imgUrl: images.award03,
    title: 'Produits de Qualité',
    subtitle: 'Sélection raffinée de vins, champagnes et boissons haut de gamme.',
  },
  {
    imgUrl: images.award05,
    title: 'Expérience Sur Mesure',
    subtitle: 'Chaque événement est personnalisé selon votre thème et vos attentes.',
  },
];


export default { wines, cocktails, awards };
