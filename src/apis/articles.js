export function getArticleIntro() {
  return {
    key: 'Articles',
    titleLarge: 'Articles',
    titleSmall: 'Adobe CC, SCSS, PHP, JS, Wordpress, Woocommerce',
    titleSmallClass: 'bump-up',
    classname: 'article-intro',
  };
}

export function getArticles() {
  return [
    {
      align: '1',
      id: 'tasties',
      link: 'https://www.tasties.ca/',
      github: '',
      title: 'Tasties Kitchen',
      classname: 'tasties-case bg-white',
      tags: ['Branding ', 'ecommerce'],
      bannerImg: '../img/tasties/tasties-cover-lg.png',
      roles: [
        {
          title: 'Designer & Front End Developer',
          skills: 'Adobe CC, SCSS, PHP, JS, Wordpress, Woocommerce',
          task: 'This project was split into two components. Part One: design of the company brand which included a logo, label, and stationary. Part Two: Design and develop a site for Tasties Kitchen\'s. Including the new brand development, their products and a portal for customers to pay and sign up for a monthly food subscription.',
          complete: 'Early 2017',
        },
      ],
      contents: [
        {
          align: '1',
          classname: '',
          heading: 'Part One: Branding',
          text: 'In regards to the logo the client requested natural, fresh colors and a design of a badge style logo. The feeling the brand should portay is organic, fresh, vibrant, healthy living, treat your body right, rustic/root forming.',
        },
        {
          align: '2',
          classname: 'tasties-type',
          image: '../img/tasties/tasties-type.png',
        },
        {
          align: '3',
          classname: 'tasties-colors',
          image: '../img/tasties/tasties-colors.png',
        },
        {
          align: '4',
          classname: 'tasties-logo image-center image-300',
          image: '../img/tasties/tasties-logo.png',
        },
        {
          align: '5',
          classname: 'tasties-stati image-shadow image-right',
          image: '../img/tasties/tasties-stati.png',
        },
        {
          align: '6',
          classname: 'tasties-jars image-shadow',
          image: '../img/tasties/tasties-jars.png',
          heading: 'Label usage on product.',
        },
        {
          align: '7',
          classname: 'tasties-web',
          text: 'Built on wordpress with Woocommerce and Stripe integration. The client requested the site have a home page that had a "landing page style" of design for the service they provide, include a way for users to create orders for the biweekly or monthly subscriptions, a page for the weekly menu, a mission page, a blog page, and a contact page.',
          heading: 'Part Two: Web Development',
        },
        {
          align: '8',
          classname: 'tasties-home image-shadow',
          image: '../img/tasties/tasties-home.png',
        },
        {
          align: '9',
          classname: 'tasties-products image-shadow',
          image: '../img/tasties/tasties-products.png',
        },
        {
          align: '10',
          classname: 'tasties-product-single image-shadow',
          image: '../img/tasties/tasties-product-single.png',
        },
      ],
    },
  ];
}
