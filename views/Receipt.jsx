const { View } = require("grandjs");
const Styles = {
  invoicePOS: {
    boxShadow: "0 0 1in -0.25in rgba(0, 0, 0, 0.5)",
    padding: "2mm",
    margin: "0 auto",
    width: "44mm",
    background: "#FFF",
  },

  h1: {
    fontSize: "1.5em",
    color: "#222",
  },
  h2: { fontSize: ".9em" },
  h3: {
    fontSize: "1.2em",
    fontWeight: "300",
    lineheight: "2em",
  },
  p: {
    fontSize: ".7em",
    color: "#666",
    lineHeight: "1.2em",
  },

  top: { minHeight: "100px", borderBottom: " 1px solid #EEE" },
  mid: { minHeight: "80px", borderBottom: " 1px solid #EEE" },
  bot: { minHeight: "50px", borderBottom: " 1px solid #EEE" },

  info: {
    display: "block",
    //float:left;
    marginLeft: 0,
  },
  title: {
    float: "right",
  },
  title: { textAlign: "right" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  tabletitle: {
    //padding: 5px;
    fontSize: ".5em",
    background: "#EEE",
  },
  service: { borderBottom: "1px solid #EEE" },
  item: { width: "24mm" },
  itemtext: { fontSize: ".5em" },

  legalcopy: {
    marginTop: "5mm",
  },
};
const data = [{ name: "beans", price: 20, quantity: 2 }];
const Reciept = ({ data }) => {
  <div style={Styles.invoicePOS}>
    <center style={Styles.top}>
      <h2>Dipak grocery</h2>
    </center>

    <div style={Styles.mid}>
      <div style={Styles.info}>
        <h2>Contact Info</h2>
        <p>
          Address : 3/25 Cecil street,2131 <br />
          Email : paudelsantosh508@gmail.com <br />
          Phone : 0452450087 <br />
        </p>
      </div>
    </div>

    <div style={Styles.bot}>
      <div style={Styles.table}>
        <table>
          <tr style={Styles.tabletitle}>
            <td style={Styles.item}>
              <h2>Item</h2>
            </td>
            <td>
              <h2>Qty</h2>
            </td>
            <td>
              <h2>Sub Total</h2>
            </td>
          </tr>

          {data.map((item) => (
            <tr style={Styles.service}>
              <td>
                <p>{item.name}</p>
              </td>
              <td class="tableitem">
                <p class="itemtext">{item.price}</p>
              </td>
              <td class="tableitem">
                <p class="itemtext">{item.quantity}</p>
              </td>
            </tr>
          ))}

          <tr class="tabletitle">
            <td></td>
            <td class="Rate">
              <h2>tax</h2>
            </td>
            <td class="payment">
              <h2>$419.25</h2>
            </td>
          </tr>

          <tr class="tabletitle">
            <td></td>
            <td class="Rate">
              <h2>Total</h2>
            </td>
            <td class="payment">
              <h2>$3,644.25</h2>
            </td>
          </tr>
        </table>
      </div>

      <div id="legalcopy">
        <p class="legal">
          <strong>Thank you for your business!</strong>  Payment is expected
          within 31 days; please process this invoice within that time. There
          will be a 5% interest charge per month on late invoices.
        </p>
      </div>
    </div>
  </div>;
};
module.exports = Reciept;
