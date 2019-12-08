import React, { Component } from 'react';
import Field from '../Common/Field'
import { withFormik } from 'formik'
import * as Yup from 'yup'

const fields = {
  sections: [
    [
      { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name' },
      { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email' },
      { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone Number' }

    ],
    [
      { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message' }
    ]
  ]
}

class Contact extends Component {


  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                <div className="row">

                  {fields.sections.map((section, sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return <Field
                            {...field}
                            key={i}
                            value={this.props.values[field.name]}
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={(this.props.touched[field.name])}
                            errors={this.props.errors[field.name]}
                          />
                        })}
                      </div>
                    )
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, 'Come on bro, your name is longer than that!').required('You must give us your name'),
    email: Yup.string().email('You need to give us a valid email').required('We need your email'),
    phone: Yup.string()
      .min(10, 'Please provide your 10 digit phone number')
      .max(15)
      .required('We need a phone number to reach you at'),
    message: Yup.string()
      .min(100, 'You need to provide us more detailed information')
      .required()
  }),

  handleSubmit: (values, { setSubmitting }) => {
    alert('you submitted the form', JSON.stringify(values))
  }
})(Contact);