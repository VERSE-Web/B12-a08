import React from 'react';
import notFoundImage from './../../assets/error-404.png';
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NotFoundPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 px-4 py-12">


        <img src={notFoundImage} className="w-full max-w-sm mx-auto" />

        <h2 className="text-3xl font-extrabold text-gray-800 mt-6 mb-2 text-center">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          The page you are looking for is not available.
        </p>

        <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
          Go Back!
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default NotFoundPage;