<template>
  <table
    class="table table-striped table-sm"
    style="white-space: nowrap;"
  >
    <thead>
      <tr>
        <th>화폐</th>
        <th>가격 (USD)</th>
        <th>1시간대비</th>
        <th>거래대금</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item of filteredData"
        :key="item.base"
      >
        <td>{{ currency[item.base] }} {{ item.base }}</td>
        <td>{{ item.price }}</td>
        <td :class="item.class">
          {{ item.change }}
        </td>
        <td>{{ item.volume }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';

export default {
  name: 'RdEthCyptocurrency',
  data() {
    return {
      data: [],
      currency: {
        ETH: '이더리움',
        BTC: '비트코인',
        XRP: '리플',
        UPP: '센티넬프로토콜',
        BCH: '비트코인캐시',
        EOS: '이오스',
        DMT: '디마켓',
        ADT: '애드토큰',
        TRX: '트론',
        BSV: '비트코인에스브이',
        RFR: '리퍼리움',
        ADA: '에이다',
        ONT: '온톨로지가스',
        XLM: '스텔라루멘',
        ADX: '애드엑스',
        MEDX: '메디블록',
        TIX: '블록틱스',
        ZIL: '질리카',
        EDR: '엔도르',
        THETA: '쎄타토큰',
        MTL: '메탈',
        SRN: '시린토큰',
        ELF: '엘프',
        POLY: '폴리매쓰',
        ICX: '아이콘',
        OST: '오에스티',
        VTC: '버트코인',
        QTUM: '퀀텀',
        MER: '머큐리',
        GRS: '그로스톨코인',
        ETC: '이더리움클래식',
        STR: '스트라티스',
      }
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(x => x && !x.error);
    }
  },
  beforeMount() {
    this.refresh();
  },
  methods: {
    refresh() {
      Object.keys(this.currency).forEach((base, i) => {
        axios.get(`https://www.cryptonator.com/api/ticker/${base}-usd`).then(({ data }) => {
          let res = data && data.ticker;
          if (data && data.success) {
            res.up = +res.change >= 0;
            if (res.up) res.change = `+${res.change}`;
            res.class = res.up ? 'text-danger' : 'text-primary';
          } else res = { error: data.error, base };
          this.$set(this.data, i, res);
        });
      });
    }
  }
};
</script>
