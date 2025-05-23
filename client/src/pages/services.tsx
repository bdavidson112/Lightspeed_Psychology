import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="page-transition custom-background dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Explore our range of services designed to support your mental health and well-being. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-amber-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 dark:bg-gray-600">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center">
                  Let's Begin <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
