<template>
  <div>
    <h1>Ethereum Qrcode</h1>
    <p>Create a QR code image for an account or for a smart contract address.
      <br>It will not work if the address in invalid.
    </p>
    <h2>Example</h2>
    <example>
      <rd-eth-qrcode
        text="0x0f167026022632e38c919700d6B466E598905f9C"
        :options="{'color':{dark:'#343a40',light:'#ffffff00'}}"
      />
      <rd-eth-qrcode
        text="invalid address"
        :options="{'color':{dark:'#343a40',light:'#ffffff00'}}"
      />
    </example>
    <highlight
      code="<rd-eth-qrcode
  text=&quot;0x0f167026022632e38c919700d6B466E598905f9C&quot;
  :options=&quot;{'color':{dark:'#343a40',light:'#ffffff00'}}&quot;
/>
<rd-eth-qrcode
  text=&quot;invalid address&quot;
  :options=&quot;{'color':{dark:'#343a40',light:'#ffffff00'}}&quot;
/>"
    />

    <h2>Props</h2>
    <properties type="props" :data="props"/>
    <h3>Qrcode options</h3>
    <properties type="props" :data="propsQrcode"/>
  </div>
</template>
<script>
export default {
  name: "Qrcode",
  data() {
    return {
      props: [["options", "Qrcode options", "Object", "", ""]],
      propsQrcode: [
        [
          "version",
          "QR Code version. If not specified the more suitable value will be calculated.",
          "Number",
          "",
          ""
        ],
        [
          "errorCorrectionLevel",
          "Error correction level.",
          "String",
          "M",
          "low, medium, quartile, high,\nL, M, Q, H."
        ],
        [
          "maskPattern",
          "Mask pattern used to mask the symbol.\nIf not specified the more suitable value will be calculated.",
          "Number",
          "",
          "0, 1, 2, 3, 4, 5, 6, 7"
        ],
        [
          "margin",
          "Define how much wide the quiet zone should be.",
          "Number",
          "4",
          ""
        ],
        [
          "scale",
          "Scale factor. A value of 1 means 1px per modules (black dots).",
          "Number",
          "4",
          ""
        ],
        [
          "width",
          "Forces a specific width for the output image.\nIf width is too small to contain the qr symbol, this option will be ignored.\nTakes precedence over scale.",
          "Number",
          "",
          ""
        ],
        [
          "color.dark",
          "Color of dark module. Value must be in hex format (RGBA).\nNote: dark color should always be darker than color.light.",
          "String",
          "#000000ff",
          ""
        ],
        [
          "color.light",
          "Color of light module. Value must be in hex format (RGBA).",
          "String",
          "#ffffffff",
          ""
        ]
      ]
    };
  }
};
</script>
