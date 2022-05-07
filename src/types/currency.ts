export interface Rates {
  [key: string]: string;
}

export interface Currency {
  success: boolean;
  timestamp: string;
  base: string;
  date: string;
  rates: Rates;
}

export interface SendCurrency {
  [key: string]: string;
}
