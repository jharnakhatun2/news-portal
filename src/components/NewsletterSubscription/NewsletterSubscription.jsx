import { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulating API request (Replace this with actual API call)
    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail(""); 
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md h-fit my-10">
      <h2 className="text-xl font-semibold text-center">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 text-center text-sm mb-4">
        Get the latest news updates delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>

      {message && <p className="mt-3 text-center text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default NewsletterSubscription;
