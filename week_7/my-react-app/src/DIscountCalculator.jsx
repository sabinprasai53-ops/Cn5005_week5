
const DiscountCalculator = ({ productName, price }) => {

  const calculateDiscount = () => {

    const discountRate = document.getElementById("discountRate").value;

    const discountedPrice =
      Number(price) - (Number(price) * Number(discountRate) / 100);

    document.getElementById("discountMessage").innerHTML =
      `<b style="color:green">Price after discount: £${discountedPrice.toFixed(2)}</b>`;
  };

  return (
    <div>
      <h2>{productName}</h2>

      <p>Price: £{price}</p>

      <label>Enter Discount Rate (%): </label>

      <input
        type="number"
        id="discountRate"
      />

      <br /><br />

      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>

      <p id="discountMessage"></p>
    </div>
  );
};

export default DiscountCalculator;
