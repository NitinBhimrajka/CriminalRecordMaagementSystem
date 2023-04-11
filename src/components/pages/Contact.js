import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="hue">Contact Page</h1>
        <form
          id="contact-form"
          class="form-horizontal"
          role="form"
          action="mailto:nitina664@@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div class="form-group">
            <label for="exampleInputEmail1" className="fontbetter">
              Email address:
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputtext1" className="fontbetter">
              Name:
            </label>
            <input
              type="text"
              class="form-control"
              name="Name"
              placeholder="Name"
              autoComplete="off"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputtext2" className="fontbetter">
              Comment:
            </label>
            <textarea
              name="Message"
              class="form-control"
              placeholder="Your Message "
            ></textarea>
          </div>

          <div class="form-group">
            <input type="submit" class="btn btn-warning" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
