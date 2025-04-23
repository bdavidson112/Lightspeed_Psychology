import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <section className="page-transition pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Guiding Adults and Teens on Their Path Towards Mental Wellness
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              At Lightspeed Psychology, our mission is to foster a safe and
              supportive environment where adults and teens can share their
              experiences, explore their feelings, and begin moving towards the
              change that they desire. We are dedicated to empowering
              individuals on their journey towards emotional well-being and
              personal growth through compassionate and evidence-based
              psychotherapy. Our aim is to enhance resilience, promote mental
              health, and inspire positive change in every client's life.
              Together, we strive to build a brighter future for those we serve
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="px-6 py-3 text-base rounded-md border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Lets Start!
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="px-6 py-3 text-base rounded-md border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.pexels.com/photos/30905650/pexels-photo-30905650/free-photo-of-serene-snowy-pine-forest-by-mountain-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-clipboard text-primary-600 dark:text-primary-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Child and Family Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Dr. Burleson brings years of experience
              and specialized training.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-desktop text-secondary-600 dark:text-secondary-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Virtual Convenience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Relax from the comfort of your home with our secure
              online sessions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user-shield text-primary-600 dark:text-primary-400 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Patient-Centered Care
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your health journey is unique, and we tailor our approach to your
              individual needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
