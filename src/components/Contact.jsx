import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hmt9gcg",  
                "template_n1yanos",  
                form.current,
                "QNQr_3p0KkFfAt1Cp" 
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("Message sent");
                    setSent(true);
                    setError(null); 
                    setTimeout(() => {
                        setSent(false);
                    }, 5000);
                },
                (error) => {
                    console.log(error.text);
                    setError("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <div id="contact" className="w-full max-w-lg mx-auto p-6" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            <h2 className="text-2xl font-bold mb-4 text-center cursor-pointer">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                        rows="4"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        value="Send"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
                    >
                        Send
                    </button>
                </div>
            </form>
            {sent && <p className="mt-4 text-green-500 text-center">Email sent successfully!</p>}
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </div>
    );
};

export default Contact;
