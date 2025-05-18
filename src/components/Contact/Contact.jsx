import { React, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert(
      `Thank you, ${formData.name}! Your message has been submitted successfully.`
    );
  };

  return (
    <div className="contact text-white">
      <h2 className="contact-h2">Get in touch with me</h2>
      <div className="contact-con">
        <div className="contact-item">
          <div className="cont">
            <a
              href="https://x.com/Hade_emm?t=vt3jpUSmFXeELp9Zm3WhYw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="contact-img"
                fill="white"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>{" "}
            <h6>X / Twitter</h6>
          </div>
          <div className="cont">
            <a
              href="https://ng.linkedin.com/in/emmanuel-adesemowo-170ab1240"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="contact-img"
                fill="white"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>{" "}
            <h6>LinkedIn</h6>
          </div>
          <div className="cont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="contact-img"
              fill="white"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>{" "}
            <h6>Location Remote</h6>
          </div>
          <div className="cont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="contact-img"
              fill="white"
            >
              <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
            </svg>{" "}
            <h6>
              {" "}
              <a
                href="tel:+2348054988178"
                style={{ textDecoration: "none" }}
                title="Call us now!"
              >
                +234 805 498 8178
              </a>
            </h6>
          </div>
          <div className="cont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="contact-img"
              fill="white"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>{" "}
            <h6>
              <a
                href="mailto:emm.bolu@gmail.com"
                style={{ textDecoration: "none" }}
              >
                emm.bolu@gmail.com
              </a>
            </h6>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-inp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-input"
              placeholder="Fill your name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-inp">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              className="form-input"
              placeholder="Fill your email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-inp">
            <label htmlFor="message">Message</label>
            <textarea
              required
              placeholder="What's your message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button className="send-message">Send message</button>
          </div>
          {submitted && <p className="text-white ">{handleSubmit}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
