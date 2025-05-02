import { SPECIALTIES } from "@/lib/constants";

export default function Specialties() {
  return (
    <section className="custom-background page-transition py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-description">
            Dr. Burleson offers expertise in multiple psychological specialties to provide you with comprehensive care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIALTIES.map((specialty, index) => (
            <div key={index} className="bg-amber-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-primary-100 dark:bg-primary-900' : 'bg-secondary-100 dark:bg-secondary-900'} rounded-full flex items-center justify-center`}>
                  <i className={`fas ${specialty.icon} ${index % 2 === 0 ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-600 dark:text-secondary-400'} text-2xl`}></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{specialty.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
