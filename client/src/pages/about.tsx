import React from 'react';
import headshot from "../assets/headshot.JPG"; // Import the image

export default function About() {
  return (
    <section className="page-transition bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">About Dr. Burleson</h2>
            <p className="section-description">
              Learn about her commitment to providing exceptional care.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={headshot} alt="Dr. Burleson" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">The Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To provide compassionate, high-quality care that improves the health and wellbeing of the patients and communities she serves.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Dr. Burleson is dedicated to providing a safe and supportive environment for her patients, where they can feel comfortable discussing their mental health concerns and receiving the care they need.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">The Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Since 2014, Dr. Burleson has accrued  training and clinical experience working with teens and adults in an inpatient psychiatric facility, intensive outpatient program, dual diagnosis residential treatment facility and private practice setting. She has extensive experience working with active duty military service members and their families. Dr. Burleson is passionate about women's issues and has spent several years working with women with substance use issues, conflictual relationships, personality disorders, and other mental health issues.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Throughout her doctoral training, Dr. Burleson focused extensively on child and family issues. Specifically, she was involved in multiple research studies that focused on identifying and understanding issues that occur during mid-treatment in Multisystemic Family Therapy. She has utilized this experience to work with parents of teens that are experiencing difficulties such as substance use and other behavioral issues.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Dr. Burleson is a parent who has personal experience raising neurodivergent children including ADHD and autism. She is also the spouse of a retired military service member who has experienced deployments and other factors related to military culture. She embraces Geek culture, watches anime and is an avid Harry Potter and Disney buff.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
            If you are interested in scheduling an appointment and or have additional questions, please navigate to the contact page and Dr. Burleson will contact you directly to schedule a 15 minute consultation appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
