import { HttpService } from "@nestjs/common";
export declare class AppService {
    private http;
    protected key: string;
    constructor(http: HttpService);
    retrieveOrderBook(exchange: string, asset: string, comparedAsset: string): void;
}
