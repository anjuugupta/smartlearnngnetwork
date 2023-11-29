import React, { useState } from "react";
import { Back } from "../../common/back/Back";
import "./contact.css";

export const Contact = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     textarea: "",
//   });
// let name, value ;

// const handleInputs  = (e) => {
// console.log(e)
// name = e.target.name;
// value = e.target.value;


// setUser({...user, [name]:value});

const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [phone, setPhone]=useState("")
const [subject, setSubject] = useState("")
const [textarea, setTextarea]=useState("")

const handle=()=>{
  localStorage.setItem("name", name)
  localStorage.setItem("email", email)
  localStorage.setItem("phone", phone)
  localStorage.setItem("subject", subject)
  localStorage.setItem("textarea", textarea)
};

  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.31417576144!2d72.91905858389951!3d19.213873535905098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701178737713!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Kalyan, Maharashtra, Mumbai</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@learningnetwork.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +91 98765 43210</p>
              </div>
            </div>

            <form action="" className="contact-form" id="contact-form">
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  id="name"
                  // value={user.name}
                  // onChange={handleInputs}
                   onChange={(e)=>setName(e.target.value)}
                  placeholder="Name"
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value={user.email}
                  // onChange={handleInputs}
                   onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="flexSB">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  // value={user.phone}
                  // onChange={handleInputs}
                   onChange={(e)=>setPhone(e.target.value)}
                  placeholder="Phone Number"
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  // value={user.subject}
                  // onChange={handleInputs}
                   onChange={(e)=>setSubject(e.target.value)}
                  placeholder="Subject"
                  autoComplete="off"
                />
              </div>
              <textarea cols="30" rows="10" name="textarea" 
              // value={user.textarea}
              // onChange={handleInputs}
              onChange={(e)=>setTextarea(e.target.value)}
              id="textarea">
                Create a message here...
              </textarea>
              <button className="primary-btn" onClick={handle}>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span> TWITTER INSTAGRAM </span>
          </div>
        </div>
      </section>
    </>
  );
};
