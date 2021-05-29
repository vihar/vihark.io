export const org_details = [
  {
    org_name: 'BuiltIn',
    image_url: '/logos/builtin.png',
    border_color: '#264c9f'
  },
  {
    org_name: 'Nanonets',
    image_url: '/logos/nanonets.png',
    border_color: '#546fff'
  },
  {
    org_name: 'Paperspace',
    image_url: '/logos/paperspace.png',
    border_color: '#0e1219'
  },
  {
    org_name: 'Appsmith',
    image_url: '/logos/appsmith.png',
    border_color: '#fe6d2c'
  }
];

export const article_style = (article_name: any) => {
  let current_article: any = org_details.find(
    (element: any, index: any) => element.org_name.toLowerCase() === article_name.toLowerCase()
  );

  current_article = current_article ? current_article : null;

  if (!current_article)
    current_article = {
      org_name: 'default_org',
      image_url: '/logos/default_logo.png',
      border_color: '#212121'
    };

  return current_article;
};
