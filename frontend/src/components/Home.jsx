import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-6xl mx-auto px-8">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight text-center sm:text-left">
                Discover Your Next Adventure
              </h1>
              <p className="text-xl text-white mb-8 opacity-90 text-center sm:text-left">
                Choose from our curated experiences, customized for every kind
                of traveler.
              </p>
              <NavLink to="/destinations">
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-200">
                  BOOK NOW
                </button>
              </NavLink>
            </div>
            <div className="bg-black bg-opacity-50 backdrop-blur-sm bottom-0 p-4 mt-4 sm:rounded-full rounded-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 text-white text-center">
                <div>
                  <h3 className="font-semibold text-lg border-yellow-400 sm:border-r-2 border-b-2 sm:border-b-0 pb-2 sm:pb-0">
                    Easy Booking
                  </h3>
                </div>
                <div>
                  <NavLink to="/destinations">
                    <h3 className="font-semibold text-lg ">
                      Curated Destinations
                    </h3>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/services">
                    <h3 className="font-semibold text-lg border-yellow-400 sm:border-l-2 border-t-2 sm:border-t-0 pt-4 sm:pt-0">
                      Trusted Support
                    </h3>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
