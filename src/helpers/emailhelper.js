import nodemailer from "nodemailer";
let order = {
  userName: "Anshu Ghimire",
  email: "ghimireanshu986@gmail.com",
  cartTotalQuantity: 2,
  cartItems: [
    { name: "biheko lagi dress", price: 20000, quantity: 1 },
    { name: "tiharko lagi bhailai", price: 10000, quantity: 2 },
  ],
};

export const simplyemail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "paudelsantosh508@gmail.com",
      pass: `${process.env.GMAIL_PASSWORD}`,
    },
  });
  const mailOptions = {
    from: "paudelsantosh508@gmail.com",
    to: order.email,
    subject: "Thank you for your purchase with paudel grocery.",
    html: `
        Dear ${order.userName},
        <br />
        You have recently purchased ${
          order.cartTotalQuantity
        } items with us.The details of your purchase is as:
        </hr>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td colspan="2"><img src="https://i0.wp.com/india-direct.com/wp-content/uploads/2022/08/free-sleeveless-angel-lehenga-grey-logo-of-alphabet-a-original-imafvgyhx8u7y7wh.jpeg?fit=167%2C300&ssl=1" width="150"  /></td>
        </tr>
        <tr>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td width="49%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Payment Receipt</td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Receipt Number: 12495354273</td>
                </tr>
                <tr>
                  <td> </td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Service Provider </td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">National Payment corporation of India (BBPS Dept.) </td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">National Payment corporation of India (BBPS Dept.)</td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">1001A, The Capital B Wing, 10th Floor, Bandra Kurla Complex, Bandra (E), Mumbai  </td>
                </tr>
                <tr>
                  <td> </td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">BBPS Biller Id: UGVCL0000GUJ01</td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">BBPS Transaction Id: PT01GYWT4625</td>
                </tr>
                <tr>
                  <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Payment Channel: androidapp 8.14.55</td>
                </tr>
                <tr>
                  <td> </td>
                </tr>
                </table></td>
            </tr>
          </table></td>
          <td width="51%" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="right"><img src="logo.png" alt="" width="150"  /></td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right"></td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;"  align="right"> </td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;"  align="right">Receipt Date : ${new Date()}</td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;" align="right">Payer</td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">Dipak Paudel</td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">7405379159</td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">paudelsantosh508@gmail.com</td>
            </tr>
          </table></td>
        </tr>
        <tr>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td colspan="2"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" width="34%" height="32" align="center">Product Name</td>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="26%" align="center">Quantity</td>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" width="15%" align="center">Total Amount</td>
            </tr>
            <tr>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" height="32" align="center">${
                order.cartItems[0].name
              }</td>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${
                order.cartItems[0].quantity
              }</td>
              <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${
                order.cartItems[0].price
              }</td>
            </tr>
            <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" height="32" align="center">${
              order.cartItems[1].name
            }</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${
              order.cartItems[1].quantity
            }</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${
              order.cartItems[1].price
            }</td>
            </tr>
          </table></td>
        </tr>
        <tr>
          <td colspan="2"> </td>
        </tr>
       
        <tr>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">Please Note:</td>
        </tr>
      
       
       
        <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">This is not an invoice but only a confirmation of the receipt of the amount paid against for the service as described above.  Subject to terms and conditions mentioned at paytm.com</td>
        </tr>
       
        <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2" align="center">(This is computer generated receipt and does not require physical signature.)  <br />3/25 Cecil street, Ashfield, NSW 2131<br />  Service tax registration number: AAACO4007ASD002<br /> Order ID :12252016430</td>
        </tr>
        <tr>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td colspan="2"> </td>
        </tr>
        <tr>
          <td colspan="2"> </td>
        </tr>
      </table>
      <p>To see the total order summary please follow this link</p>
      <a href='http://localhost:3000/cart'>click</a>

        `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent to", order.email);
    }
  });
};
