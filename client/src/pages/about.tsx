import { TEAM_MEMBERS } from "@/lib/constants";

export default function About() {
  return (
    <section className="page-transition bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              Learn about our practice and our commitment to providing exceptional healthcare.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Our medical team" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our mission is to provide compassionate, high-quality healthcare that improves the health and wellbeing of the patients and communities we serve.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We are committed to excellence in patient care, education, and research, while fostering an environment of teamwork, respect, and integrity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2005, our practice began with a vision to create a healthcare experience that puts patients first. What started as a small clinic has grown into a comprehensive healthcare practice serving thousands of patients in our community.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Throughout our journey, we've remained dedicated to our core values of compassion, excellence, and accessibility. We believe that everyone deserves high-quality healthcare delivered with dignity and respect.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              As we've grown, we've expanded our services and specialties to meet the evolving needs of our patients, while maintaining the personalized care and attention that has been our hallmark from the beginning.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Meet Our Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h4>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">{member.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
