// @flow

export type LocalStorage = {
  wyreAccountId: string | null,
  wyreAccountStatus: string | null,
  wyreAccountId_id: string | null,
  wyrePaymentMethodId: string | null,
  wyreNetworkTxId: string | null,
  wyreAccountName: string | null,
  wyreBTC: string | null,
  wyreETH: string | null
}

export type PoweredByType = {
  logo: any,
  width: number,
  height: number,
  email: string,
  useBackground: boolean
}

export type Card = {
  title: string,
  body: string,
  list: Array<string>,
  link?: string,
  linkText?: string
}
export type WalletDetails = {
  name: string,
  receiveAddress: {
    publicAddress: string
  },
  currencyCode: string,
  fiatCurrencyCode: string,
  currencyIcon: string,
  currencyIconDark: string
}

export type Transaction = {
  closedAt: Date,
  createdAt: Date,
  type: string,
  id: string,
  customId: string | null,
  source: string,
  dest: string,
  sourceCurrency: string,
  destCurrency: string,
  sourceAmount: number,
  destAmount: number,
  fees: {
      USD: number
  },
  sourceName: string,
  destName: string,
  status: string,
  message: string | null,
  exchangeRate: number,
  blockchainTxId: string | null,
  destNickname: string | null,
  link: string
}
