import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <section className="page-transition pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Compassionate Healthcare <span className="text-primary-600 dark:text-primary-400">for Your Whole Family</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Providing personalized care with a focus on your well-being. Our experienced team is dedicated to helping you achieve optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="px-6 py-3 text-base rounded-md bg-primary-600 hover:bg-primary-700 text-white">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="px-6 py-3 text-base rounded-md border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt="Healthcare professional with patient" 
              className="rounded-xl shadow-xl w-full h-auto object-cover" 
            />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-stethoscope text-primary-600 dark:text-primary-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expert Specialists</h3>
            <p className="text-gray-600 dark:text-gray-300">Our team of healthcare professionals brings years of experience and specialized training.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-clock text-secondary-600 dark:text-secondary-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Convenient Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">We offer flexible scheduling including evening and weekend appointments.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user-shield text-primary-600 dark:text-primary-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Patient-Centered Care</h3>
            <p className="text-gray-600 dark:text-gray-300">Your health journey is unique, and we tailor our approach to your individual needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
