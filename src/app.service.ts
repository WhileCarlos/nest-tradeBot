import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  protected key = "34E61F10-B0E7-4CA2-8202-D623ECF1E500";
  constructor(private http: HttpService) {
    this.retrieveOrderBook('COINBASE', 'ETH', 'USDC');
    // this.retrieveOrderBook('HUOBI', 'ETH', 'USDC');
  }
  /**
   * * Get the orderbook data
   */
  retrieveOrderBook(exchange: string, asset: string, comparedAsset: string) {
    this.http.get(`https://rest-sandbox.coinapi.io/v1/orderbooks/current?filter_symbol_id=${exchange}_SPOT_${asset}_${comparedAsset}&limit_levels=0`, { headers: {'X-CoinAPI-Key': this.key}})
    .subscribe((response) => {
      console.debug('OrderBook:', response.data[0]);
    });
  } 

  /** ⬇️ Helper Functions ⬇️ **/
}