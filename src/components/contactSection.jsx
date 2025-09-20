import React, { useState, useEffect } from "react";
import { firestore, auth, signInWithGoogle } from "../firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to auth state changes to update currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // Form submit handler to add message to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await addDoc(collection(firestore, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      setStatus("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    }
  };

  // Sign out handler
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setStatus("Signed out");
    } catch (error) {
      setStatus("Error signing out");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-center">
          Fill out the form below or sign in with Google to reach me quickly.
        </p>

        <form
          className="bg-card p-6 rounded-2xl shadow-sm space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              aria-required="true"
              className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              aria-required="true"
              className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              aria-required="true"
              className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-muted-foreground/30" />
            <span className="px-2 text-muted-foreground text-sm">or</span>
            <hr className="flex-1 border-muted-foreground/30" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:bg-muted/50 transition"
            onClick={currentUser ? handleSignOut : signInWithGoogle}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">
              {currentUser ? "Sign Out" : "Sign in with Google"}
            </span>
          </button>

          {status && <div className="mt-4 text-center">{status}</div>}
        </form>
      </div>
    </section>
  );
};
