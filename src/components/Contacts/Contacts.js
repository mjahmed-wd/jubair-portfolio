import { Container, Grid } from "@material-ui/core";
import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail_mjahmed555",
        "template_gmail",
        e.target,
        "user_5DAUvW863Dlsbx1qb98Vt"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      style={{ backgroundColor: "#1c2a2b", color: "white", padding: "50px 0" }}
    >
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              display: "inline-block",
              fontWeight: "600",
              borderBottom: "5px solid #009E66",
            }}
          >
            GET IN TOUCH
          </h1>
        </div>
        <p style={{ padding: "25px 0", textAlign: "center" }}>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <h4 className="pb-3 pt-5 pt-md-0">Contact Me</h4>
            <form onSubmit={sendEmail}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control w-100"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>

              <div class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="Message"
                  rows="4"
                  name="message"
                  required=""
                ></textarea>
              </div>

              <button type="submit" class="btn-green">
                Submit
              </button>
            </form>
            {/* <form className="contact-form" onSubmit={sendEmail}>
              <input type="text" name="name" />
              <label>Name</label>
              <input type="text" name="subject" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}
          </Grid>
          <Grid item md={6} xs={12}>
            <h4 className="text-white pb-3 pt-5 pt-md-0"> Contact Info</h4>
            <h6 className="lead border-bottom mb-4 pb-3">
              Name: <span className="font-weight-bold"> Md Jubair Ahmed</span>
            </h6>
            <h6 className="lead border-bottom mb-4 pb-3">
              Location:{" "}
              <span className="font-weight-bold"> Shuloghor, Sunamganj</span>
            </h6>
            <h6 className="lead border-bottom mb-4 pb-3">
              Phone: <span className="font-weight-bold"> +8801782557441</span>
            </h6>
            <h6 className="lead border-bottom mb-4 pb-3">
              Email:{" "}
              <span className="font-weight-bold"> mdjubairahmed@gmail.com</span>
            </h6>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contacts;
