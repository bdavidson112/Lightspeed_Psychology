import {
  INSURANCE_PLANS,
  FEE_SCHEDULE,
  PAYMENT_OPTIONS,
} from "@/lib/constants";

export default function Insurance() {
  return (
    <section className="page-transition custom-background dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Rates & Insurance</h2>
          <p className="section-description">
            Information about fees and the insurance plans we are in network
            with to make your experience seamless.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Insurance Plans
              </h3>

              <div className="bg-amber-50 dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  We accept:
                </h4>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {INSURANCE_PLANS.map((plan, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  "Good Faith Estimate"
                </h4>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Under the law, health care providers are expected to provide
                  an estimate of charges for services to individuals who don’t
                  have insurance or who are choosing to not use insurance. This
                  is called a "Good Faith Estimate."
                </p>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <i className="fas fa-angle-right text-primary-600 dark:text-primary-400 mt-1 mr-2"></i>
                    <span>
                      If your provider does not provide a Good Faith Estimate
                      before you schedule services, you can request one.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-angle-right text-primary-600 dark:text-primary-400 mt-1 mr-2"></i>
                    <span>
                      For questions or more information about your right to a
                      Good Faith Estimate, visit here or call (800) 985-3059.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Fee Schedule
              </h3>

              <div className="bg-amber-50 dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  What is your session fee?
                </p>

                <div className="overflow-hidden border border-gray-200 dark:border-gray-600 rounded-lg mb-6">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                          Service
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-50 dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                      {FEE_SCHEDULE.map((fee, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                            {fee.service}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-700 dark:text-gray-300">
                            {fee.range}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  * Actual fees may vary based on complexity and insurance availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
