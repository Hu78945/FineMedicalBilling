import "./Form.css";
function Form() {
  return (
    <form action="" method="get">
      <div className="flex">
        <div className="inner-flex">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" required />
        </div>

        <div className="inner-flex">
          <label htmlFor="Business Name">Business Name</label>
          <input type="text" name="Business Name" required />
        </div>
      </div>
      <div className="flex">
        <div className="inner-flex">
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" required />
        </div>
        <div className="inner-flex">
          <label htmlFor="Phone">Phone</label>
          <input type="tel" name="Phone" required />
        </div>
      </div>
      <div className="flex">
        <div className="inner-flex">
          <label htmlFor="Monthly Billing">Monthly Billing</label>
          <select name="Monthly Billing" required>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
          </select>
        </div>

        <div className="inner-flex">
          <label htmlFor="# of Providers"># of Providers</label>
          <select name="# of Providers" required>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
          </select>
        </div>
      </div>
      <div className="inner-flex alone">
        <label htmlFor="Total AR">Total AR</label>
        <input type="text" name="Total AR" required />
      </div>
      <div className="inner-flex alone">
        <label htmlFor="Your Message">Your Message</label>
        <textarea
          name="Your Message"
          id=""
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <div className="submit-btn">
        <div
          className="submit"
          style={{ backgroundColor: "#9acd32", fontSize: "1.2rem" }}
        >
          Submit
        </div>
      </div>
    </form>
  );
}

export default Form;
