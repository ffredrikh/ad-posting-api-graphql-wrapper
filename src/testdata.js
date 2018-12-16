/* Testquerys

  query {
    ads {
      id
      title
      category
      text
      url
    }
  }

  mutation {
    post(
      title: "title x"
      text: "text y"
      category: "cat z"
      url: "www" 
    ) {
      id
    }
  }



*/

let Ads = [{
    id: '1',
    title: 'test ad 1',
    text: 'cat',
    category: 'animal',
    url: 'www1'
  },
  {
    id: '2',
    title: 'test ad 2',
    text: 'car',
    category: 'Vehicle',
    url: 'www2'
  },
  {
    id: '3',
    title: 'test ad 3',
    text: 'Apple',
    category: 'Fruit',
    url: 'www3'
  }]

let Ad = {
    id: '1',
    title: 'test ad 1',
    text: 'cat',
    category: 'animal',
    url: 'www1'
  }

exports.Ads = Ads;
exports.Ad = Ad;
