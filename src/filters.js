import Web3 from 'web3';

export function RdEthAddress(value, length = 26) {
  const val = `${value || ''}`;
  const ret = val.startsWith('0x') ? val.slice(2) : val;
  const len = length < 9 ? 9 : length;
  if (ret.length <= len) return `0x${ret}`;
  const sideLength = (len - 5) / 2;
  return `0x${ret.slice(0, sideLength + 0.5)}...${ret.slice(-sideLength)}`;
}

export const hexTo = {
  utf8: hex => Web3.utils.hexToUtf8(hex),
  ascii: hex => Web3.utils.hexToAscii(hex),
  bytes: hex => Web3.utils.hexToBytes(hex),
  number: hex => Web3.utils.hexToNumber(hex),
  numberString: hex => Web3.utils.hexToNumberString(hex),
  string: hex => Web3.utils.hexToString(hex)
};
export function RdEthHex(hex, to = 'utf8') {
  const fn = hexTo[to] || hexTo.utf8;
  return fn(hex);
}

export const hexFrom = {
  ascii: str => Web3.utils.fromAscii(str),
  decimal: value => Web3.utils.fromDecimal(value),
  utf8: str => Web3.utils.fromUtf8(str),
  bytes: bytes => Web3.utils.bytesToHex(bytes),
  wei: (number, unit) => Web3.utils.fromWei(number, unit),
};
export function RdEthToHex(value, from = 'utf8', ...args) {
  const fn = hexFrom[from] || hexFrom.utf8;
  return fn(value, ...args);
}

export default {
  RdEthAddress, RdEthHex, RdEthToHex
};
