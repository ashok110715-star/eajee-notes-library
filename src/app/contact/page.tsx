
export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Contact Us
      </h1>

      <p className="mb-6">
        Have a question, suggestion, or feedback?
        We would love to hear from you.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Email Support
      </h2>

      <p className="mb-4">
        Contact us at:
      </p>

      <a
        href="mailto:fukrafan057@gmail.com"
        className="text-blue-600 underline break-all"
      >
        fukrafan057@gmail.com
      </a>

      <p className="mt-6 text-gray-600">
        We will try to respond to your message as soon as possible.
      </p>
    </main>
  );
}
