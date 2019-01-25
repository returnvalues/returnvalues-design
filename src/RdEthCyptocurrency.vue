<template>
  <table class="table table-striped table-sm" style="white-space: nowrap;">
    <thead>
      <tr>
        <th>Currency</th>
        <th>Price ({{ currencyDisplay }})</th>
        <th>Change(1H)</th>
        <th>Volume</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of filteredData" :key="item.base">
        <td>{{ cryptocurrencies[item.base] }} {{ item.base }}</td>
        <td>{{ item.priceDisplay|numberComma }}</td>
        <td :class="item.class">{{ item.changeDisplay|numberComma }}</td>
        <td>{{ item.volumeDisplay|numberComma }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";

export default {
  name: "RdEthCyptocurrency",
  filters: {
    numberComma: n => {
      // 세자리 마다 콤마 찍어주는 필터
      const [int, float] = `${n || 0}`.split(".");
      return (
        int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (float ? `.${float}` : "")
      );
    }
  },
  props: { currency: { type: String, default: "KRW" } },
  data() {
    return {
      currencyDisplay: "USD", // 현재 화면에 실제 표시중인 화폐
      data: [],
      exchangeRatePromise: undefined,
      exchangeRates: { USD: 1 }, // 환율 정보
      cryptocurrencies: {
        ETH: "Ethereum",
        BTC: "Bitcoin",
        XRP: "Ripple",
        UPP: "Centinel Protocol",
        BCH: "Bitcoin Cash",
        EOS: "EOS",
        DMT: "DMarket",
        ADT: "adToken",
        TRX: "Tron",
        BSV: "Bitcoin SV",
        RFR: "Refereum",
        ADA: "ADA",
        ONT: "Onthology",
        XLM: "Stellar",
        ADX: "AdEx",
        MEDX: "MediBlock",
        TIX: "Blocktix",
        ZIL: "Zilliqa",
        EDR: "Endor",
        THETA: "THETA",
        MTL: "Metal",
        SRN: "Sirin",
        ELF: "ELF",
        POLY: "Polymath",
        ICX: "ICON",
        OST: "OST",
        VTC: "Vertcoin",
        QTUM: "QTUM",
        MER: "Mercury",
        GRS: "Croestlcoin",
        ETC: "Ethereum Classic",
        STR: "Stratis"
      }
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(x => x && !x.error);
    }
  },
  watch: {
    currency() {
      if (this.exchangeRates[this.currency]) {
        // 이미 받아온 환율 정보가 있을 경우 먼저 표시.
        this.currencyDisplay = this.currency;
        this.filteredData.forEach(x => this.updateCurrency(x));
      }
      if (this.currency === "USD") return; // 기준은 USD이기 때문에 스킵
      this.refreshExchangeRate(); // 그 후 새로 고침
      this.exchangeRatePromise.then(() => {
        this.filteredData.forEach(x => this.updateCurrency(x));
      });
    }
  },
  beforeMount() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.refreshExchangeRate();
      Object.keys(this.cryptocurrencies).forEach((base, i) => {
        axios
          .get(`https://www.cryptonator.com/api/ticker/${base}-usd`)
          .then(({ data }) => {
            let res = data && data.success && data.ticker;
            if (res) {
              this.setClass(res);
              this.updateCurrency(res);
            } else res = { error: data.error, base };
            this.$set(this.data, i, res); // cryptocurrencies 오브젝트에 있는 순서로 배열 채움
          });
      });
    },
    updateCurrency(res) {
      // 환율 적용한 금액 표시 새로고침
      const item = res;
      const props = ["price", "change", "volume"];
      props.forEach(p => {
        item[`${p}Display`] = item[p];
      }); // 일단은 그냥 표시
      this.exchangeRatePromise.then(() => {
        // 환율 정보를 가져왔을때 계산하여 표시
        const rate = this.exchangeRates[this.currency];
        props.forEach(p => {
          item[`${p}Display`] = +item[p] * rate;
        });
      });
    },
    setClass(res) {
      // 오르고 내림에 따라 클래스 변함
      const item = res;
      if (+item.change > 0) {
        item.change = `+${item.change}`;
        item.class = "text-danger";
      } else if (+item.change < 0) {
        item.class = "text-primary";
      }
    },
    refreshExchangeRate() {
      // 환율 새로고침
      this.exchangeRatePromise = axios
        .get(
          `https://api.exchangeratesapi.io/latest?base=USD&symbols=${
            this.currency
          }`
        )
        .then(r => {
          if (r.data && r.data.rates) {
            Object.keys(r.data.rates).forEach(key => {
              this.$set(this.exchangeRates, key, r.data.rates[key]);
            });
            this.currencyDisplay = this.currency;
          }
          return r.data;
        });
    }
  }
};
</script>
