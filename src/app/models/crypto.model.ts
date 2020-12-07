export class Crypto {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  tier: number;
  rank: number;
  btcPrice: string;
  change: string;

  constructor(uuid = '', symbol = '', name = '', iconUrl = '', marketCap = '', price = '', tier = 0, rank = 0, btcPrice = '', change = '') {
    this.uuid = uuid;
    this.symbol = symbol;
    this.name = name;
    this.iconUrl = iconUrl;
    this.marketCap = marketCap;
    this.price = price;
    this.tier = tier;
    this.rank = rank;
    this.btcPrice = btcPrice;
    this.change = change;
  }
}
