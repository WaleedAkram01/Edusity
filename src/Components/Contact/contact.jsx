import React from "react";
import "./contact.css";
import Location from "../../assets/location-icon.png";
import Phone from "../../assets/phone-icon.png";
import Message from "../../assets/msg-icon.png";
import Email from "../../assets/mail-icon.png";
import Arrow from "../../assets/white-arrow.png";
function contact() {
  // Taken all data from We3 forms.
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b757b163-eccc-410e-a998-87be5db6694d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      // Jb Hm form sumbit kr dain tou Reset ho jai.
      event.target.reset();
    } else {
      console.log("Error", data);
      // Jo Bhi data hm chahty Ky Form  pr nzar aai Wo yeh hai.
      setResult(data.name);
      setResult(data.phone);
      setResult(data.email);
      setResult(data.message);
    }
  };

  return (
    <div className="contact container">
      <div className="contact_col">
        <div className="message">
          <h2>Send us a message</h2>
          <img src={Message} alt="" />
        </div>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={Email} alt="" />
            <p>Contact@GreatStack.dev</p>
          </li>
          <li>
            <img src={Phone} alt="" />
            <p>+1 123-456-7890</p>
          </li>
          <li>
            <img src={Location} alt="" />
            <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
          </li>
        </ul>
      </div>
      <div className="contact_col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email id"
            required
          />
          <label htmlFor="">Write your messages here</label>
          <textarea
            name="message"
            id=""
            rows={6}
            placeholder="Enter your message"
          ></textarea>
          <button>
            Submit Now <img src={Arrow} alt="" />
          </button>
        </form>
        {/* <span>sending</span> */}
        <span>{result}</span>
      </div>
    </div>
  );
}

export default contact;
