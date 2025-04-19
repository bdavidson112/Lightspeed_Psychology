import { INSURANCE_PLANS, FEE_SCHEDULE, PAYMENT_OPTIONS } from "@/lib/constants";

export default function Insurance() {
  return (
    <section className="page-transition bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Rates & Insurance</h2>
          <p className="section-description">
            Information about our fees and the insurance plans we accept to make your healthcare experience seamless.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Insurance Plans</h3>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We accept most major insurance plans. Please contact our office to verify your insurance coverage before your appointment.
                </p>
                
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">We accept:</h4>
                
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {INSURANCE_PLANS.map((plan, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Insurance Verification</h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To verify your insurance coverage before your appointment:
                </p>
                
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <i className="fas fa-angle-right text-primary-600 dark:text-primary-400 mt-1 mr-2"></i>
                    <span>Call our office at (555) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-angle-right text-primary-600 dark:text-primary-400 mt-1 mr-2"></i>
                    <span>Have your insurance card ready</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-angle-right text-primary-600 dark:text-primary-400 mt-1 mr-2"></i>
                    <span>Our staff will verify your benefits and explain your coverage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Fee Schedule</h3>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For patients without insurance or for services not covered by insurance, we offer competitive rates and transparent pricing.
                </p>
                
                <div className="overflow-hidden border border-gray-200 dark:border-gray-600 rounded-lg mb-6">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee Range</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                      {FEE_SCHEDULE.map((fee, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{fee.service}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-700 dark:text-gray-300">{fee.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  * Actual fees may vary based on complexity and specific services required.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Payment Options</h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We offer several payment options to make healthcare accessible to all our patients:
                </p>
                
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  {PAYMENT_OPTIONS.map((option, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`fas ${option.icon} text-primary-600 dark:text-primary-400 mt-1 mr-2`}></i>
                      <span>{option.title}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-primary-50 dark:bg-gray-600 rounded-md p-4">
                  <p className="text-gray-700 dark:text-gray-200 text-center font-medium">
                    Questions about billing or payment options? Contact our billing department at (555) 123-4567 ext. 2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
