export function RdEthAddress(value, length = 26) {
  const val = `${value || ''}`;
  const ret = val.startsWith('0x') ? val.slice(2) : val;
  const len = length < 9 ? 9 : length;
  if (ret.length <= len) return `0x${ret}`;
  const sideLength = (len - 5) / 2;
  return `0x${ret.slice(0, sideLength + 0.5)}...${ret.slice(-sideLength)}`;
}

export default { RdEthAddress };
