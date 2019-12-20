import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { Row, Col } from "react-bootstrap";

// const form = document.getElementById("contactForm");
// const url =
//   "https://lhnsquiohk.execute-api.us-west-2.amazonaws.com/dev/email/send";
// const toast = document.getElementById("toast");
// const submit = document.getElementById("submit");
// function post(url, body, callback) {
//   var req = new XMLHttpRequest();
//   req.open("POST", url, true);
//   req.setRequestHeader("Content-Type", "application/json");
//   req.addEventListener("load", function() {
//     if (req.status < 400) {
//       callback(null, JSON.parse(req.responseText));
//     } else {
//       callback(new Error("Request failed: " + req.statusText));
//     }
//   });
//   req.send(JSON.stringify(body));
// }
// function success() {
//   toast.innerHTML =
//     "Thanks for sending me a message! I'll get in touch with you ASAP. :)";
//   submit.disabled = false;
//   submit.blur();
//   form.name.focus();
//   form.name.value = "";
//   form.email.value = "";

//   form.zipcode.value = "";
//   form.phonenumber.value = "";
//   form.facilityname.value = "";
//   form.interestedin.value - "";
//   form.freq.value = "";
// }
// function error(err) {
//   toast.innerHTML =
//     "There was an error with sending your message, hold up until I fix it. Thanks for waiting.";
//   submit.disabled = false;
//   console.log(err);
// }

// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   toast.innerHTML = "Sending";
//   submit.disabled = true;

//   const payload = {
//     name: form.name.value,
//     email: form.email.value,
//     zipcode: form.zipcode.value,
//     phonenumber: form.phonenumber.value,
//     facilityname: form.facilityname.value,
//     interestedin: form.interestedin.value,
//     freq: form.freq.value
//   };
//   post(url, payload, function(err, res) {
//     if (err) {
//       return error(err);
//     }
//     success();
//   });
// });

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
    console.log(
      encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    );
    fetch(
      "https://lhnsquiohk.execute-api.us-west-2.amazonaws.com/dev/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      }
    )
      .then(res => {
        navigate(form.getAttribute("action"));
      })
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <Row>
                <Col xs={12} md={6}>
                  <h1>Contact</h1>
                  <form
                    id="contactForm"
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
                      <label
                        className="label"
                        htmlFor={"name"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                      <label
                        className="label"
                        htmlFor={"email"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                      <label
                        className="label"
                        htmlFor={"email"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                      <label
                        className="label"
                        htmlFor={"email"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                      <label
                        className="label"
                        htmlFor={"email"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                      <label
                        className="label"
                        htmlFor={"email"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                          <option value="porterservices">
                            Porter Services
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label
                        className="label"
                        htmlFor={"email"}
                        style={{ fontFamily: "'Dancing Script', 'cursive'" }}
                      >
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
                    <div id="toast"></div>
                    <div className="field">
                      <button
                        id="submit"
                        className="button is-link"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </Col>
                <Col xs={12} md={6}>
                  <div
                    className="border-dotted border-primary"
                    style={{ marginTop: "5rem", textAlign: "center" }}
                  >
                    <h1 style={{ fontFamily: "'Dancing Script', 'cursive'" }}>
                      Chief Executive Officer
                    </h1>
                    <div>
                      <h3 style={{ fontFamily: "'Abril Fatface', 'cursive' " }}>
                        Ray Sauceda
                      </h3>
                    </div>
                    <hr />
                    <div>
                      <h1 style={{ fontFamily: "'Dancing Script', 'cursive'" }}>
                        Address
                      </h1>
                      <h3 style={{ fontFamily: "'Abril Fatface', 'cursive' " }}>
                        123 west ave
                        <br />
                        Seattle, WA 98065
                      </h3>
                    </div>
                    <hr />
                    <div>
                      <h1 style={{ fontFamily: "'Dancing Script', 'cursive'" }}>
                        Phone
                      </h1>
                      <h3 style={{ fontFamily: "'Abril Fatface', 'cursive' " }}>
                        206.737.8383
                      </h3>
                    </div>
                    <hr />
                    <div>
                      <h1 style={{ fontFamily: "'Dancing Script', 'cursive'" }}>
                        Email
                      </h1>
                      <h4 style={{ fontFamily: "'Abril Fatface', 'cursive' " }}>
                        peopleschoicemaintenance@pcm.com
                      </h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
