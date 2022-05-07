export enum NameSpace {
  Currency = 'Currency',
}

export enum AppRoute {
  Main = '/',
  NotFound = '*',
}

export enum APIRoute {
  Latest = '/latest',
  Symbols = '/symbols',
}

export enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected',
}
