import "../css/Customer.css";
function Customer() {
  return (
    <div className="customer">
      <div className="customer-content">
        <h2>What Our Customers Say </h2>
        <p>Join our community and share your experience with us!</p>
      </div>
      <div className="customer-reviews">
        <div className="review">
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>
            "Absolutely love the quality of the products! The customer service
            is top-notch and they always go above and beyond to ensure
            satisfaction. Highly recommend!"
          </p>
          <h4>- Sarah M.</h4>
        </div>
        <div className="review">
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>
            "I had an issue with my order, and the support team was incredibly
            responsive and helpful. They resolved my problem quickly and made
            sure I was happy with the outcome. Great experience!"
          </p>
          <h4>- John D.</h4>
        </div>
        <div className="review">
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>
            "The shopping experience was seamless, and the products exceeded my
            expectations. I will definitely be a repeat customer!"
          </p>
          <h4>- Emily R.</h4>
        </div>
      </div>
    </div>
  );
}
export default Customer;
