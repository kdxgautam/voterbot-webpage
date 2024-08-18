


function About() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About VoterBot</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              VoterBot is developed to help people easily access important information about their voting process. Whether youre looking to find your polling station or verify details through your EPIC number or phone number, VoterBot simplifies this process, ensuring that you have all the information you need at your fingertips.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our mission is to empower citizens with quick and reliable access to voting information, making the democratic process more accessible and transparent. With VoterBot, you can rest assured that finding your polling station is just a few clicks away, providing you with the details you need to exercise your right to vote efficiently.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We are committed to continuously enhancing VoterBot’s features to better serve voters and ensure that your voting experience is as smooth and informed as possible. Thank you for trusting VoterBot to assist you in your civic duties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
