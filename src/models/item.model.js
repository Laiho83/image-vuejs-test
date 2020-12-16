export default class Item {
  id;
  author;
  download_url;
  card_url;
  constructor(obj) {
    this.id = obj.id;
    this.author = obj.author;
    this.card_url = `https://picsum.photos/id/${obj.id}/367/267`;
    this.download_url = obj.download_url;
  }
}
