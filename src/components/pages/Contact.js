import React from "react";
import '../../styles/Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Contact(){
    return(
        <div className="container contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form">
               <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type='text' className="form-control" id="name" name="name" placeholder="Your name" required />
               </div>

               <div className="mb-3">
               <label htmlFor="email" className="form-label">Email:</label>
                <input type='email' className="form-control" id="email" name="email" placeholder="Your email" required />
               </div>

               <div className="mb-3">
               <label htmlFor="message" className="form-label">Message:</label>
               <textarea className="form-control" id="message" name="message" placeholder="Write your message here" rows="5" required></textarea>
               </div>

               <button type="submit" className="btn btn-primary">Submit</button>
             </form>
    
        </div>
        
    )
}