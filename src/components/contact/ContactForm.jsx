const ContactForm = () => {
  return (
    <div className=" text-gray-300 py-20 rounded-lg shadow-md mx-auto max-w-[1080px]">
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-lg">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full bg-gray-900 border-b text-gray-100 py-2 px-3 border-gray-800 focus:border-default outline-none duration-300 "
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full bg-gray-900 border-b text-gray-100 py-2 px-3 border-gray-800 focus:border-default outline-none duration-300"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-lg">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full bg-gray-900 border-b text-gray-100 py-2 px-3 border-gray-800 focus:border-default outline-none duration-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full bg-gray-900 border-b text-gray-100 py-2 px-3 border-gray-800 focus:border-default outline-none duration-300"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 py-2 px-4 bg-defring-default text-gray-100 rounded-full hover:bg-opacity-90 duration-200 bg-default"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
