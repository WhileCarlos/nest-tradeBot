"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.key = "34E61F10-B0E7-4CA2-8202-D623ECF1E500";
        this.retrieveOrderBook('COINBASE', 'ETH', 'USDC');
    }
    retrieveOrderBook(exchange, asset, comparedAsset) {
        this.http.get(`https://rest-sandbox.coinapi.io/v1/orderbooks/current?filter_symbol_id=${exchange}_SPOT_${asset}_${comparedAsset}&limit_levels=0`, { headers: { 'X-CoinAPI-Key': this.key } })
            .subscribe((response) => {
            console.debug('OrderBook:', response.data[0]);
        });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map