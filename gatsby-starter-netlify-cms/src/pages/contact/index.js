import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your Name:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Zip Code:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"zipcode"}
                      onChange={this.handleChange}
                      id={"zipcode"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Phone Number:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"phonenumber"}
                      onChange={this.handleChange}
                      id={"phonenumber"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Facility Name:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"facilityname"}
                      onChange={this.handleChange}
                      id={"facilityname"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Interested In:
                  </label>
                  <div className="control">
                    <select
                      className="input"
                      type="text"
                      name="interestedin"
                      id="interestedin"
                      onChange={this.handleChange}
                    >
                      <option value="blank"></option>
                      <option value="janitorialservice">
                        Janitorial Services
                      </option>
                      <option value="floorcleaning">
                        Floor Cleaning Services
                      </option>
                      <option value="porterservices">Porter Services</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Frequency of Service:
                  </label>
                  <div className="control">
                    <select
                      className="input"
                      type="text"
                      name="freq"
                      id="freq"
                      onChange={this.handleChange}
                    >
                      <option value="blank"></option>
                      <option value="daily">Daily</option>
                      <option value="6XPerWeek">6X Per week</option>
                      <option value="5XPerWeek">5X Per week</option>
                      <option value="4XPerWeek">4X Per week</option>
                      <option value="3XPerWeek">3X Per week</option>
                      <option value="2XPerWeek">2X Per week</option>
                      <option value="1XPerWeek">One Time Per week</option>
                      <option value="1Xservice">One Time Service</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}