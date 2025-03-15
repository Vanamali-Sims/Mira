import { MdDownload, MdInsertLink } from "react-icons/md";

const ConnectionsSection = () => {
    return (
      <section className="py-16 bg-[#fdf8f3] text-center">
        <h2 className="text-3xl font-bold font-quattrocento text-gray-900">Stay Connected</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Subscribe to our newsletter to stay up-to-date on the latest JournAI features, community updates, and 
          inspirational content to fuel your journey...
        </p>
  
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Image Section */}
          <div className="relative">
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden bg-green-900 flex items-center justify-center">
              <img 
                src="./src/assets/connectionImage.svg" 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Text + Icons Section */}
          <div className="space-y-6 max-w-lg text-left">
            {/* Follow Us */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 p-2 flex items-center justify-center bg-green-600 text-white rounded-full text-lg font-bold">
                <MdInsertLink className="text-white-600 text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Follow Us</h3>
                <p className="text-gray-600">
                  Connect with us on social media to join the JournAI community, share your experiences, and be inspired 
                  by the transformative power of AI-driven journaling.
                </p>
              </div>
            </div>
  
            {/* Download App */}
            <div className="flex items-start space-x-4">
            <div className="w-10 h-10 p-2 flex items-center justify-center bg-green-600 text-white rounded-full text-lg font-bold">
                <MdDownload className="text-white-600 text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Download App</h3>
                <p className="text-gray-600">
                  Experience the full power of JournAI by downloading our mobile app, available on both iOS and Android devices. 
                  Start your self-discovery journey today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export { ConnectionsSection };
  