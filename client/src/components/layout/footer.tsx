import { Link } from "wouter";
import { NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="custom-background dark:bg-gray-900 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-300">
              Lightspeed Psychology
            </h3>
            <p className="text-gray-800 mb-4 dark:text-gray-300">
              This site is unable to provide support with mental health crises.
              If you are experiencing a mental health crisis please call 911,
              text 988 or go to your nearest emergency department
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-800 hover:text-primary-400 transition dark:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-300">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-800 hover:text-primary-400 transition dark:text-gray-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-300">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2 text-primary-400"></i>
                <span className="text-gray-800 dark:text-gray-300">(949) 557-7083</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-primary-400"></i>
                <span className="text-gray-800 dark:text-gray-300">
                drgingerburleson@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-800 text-center dark:text-gray-300">
            &copy; {new Date().getFullYear()} Lightspeed Psychology, Professional Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
