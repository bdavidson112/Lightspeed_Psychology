import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "Schedule appointment",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, reason: value }));
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, you would normally submit to server here
      console.log("Form submitted:", formData);
      
      // Show success toast
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We will contact you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reason: "Schedule appointment",
        message: "",
      });
    } else {
      // Show error toast
      toast({
        title: "Form Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="page-transition py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Have questions or ready to schedule an appointment? Reach out to us and we'll be happy to help.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">First name</Label>
                    <Input
                      type="text"
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`bg-white dark:bg-gray-700 border ${
                        formErrors.firstName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      }`}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last name</Label>
                    <Input
                      type="text"
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`bg-white dark:bg-gray-700 border ${
                        formErrors.lastName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      }`}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white dark:bg-gray-700 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-sm font-medium text-gray-700 dark:text-gray-300">Reason for contact</Label>
                  <Select defaultValue={formData.reason} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Schedule appointment">Schedule appointment</SelectItem>
                      <SelectItem value="General inquiry">General inquiry</SelectItem>
                      <SelectItem value="Medical records">Medical records</SelectItem>
                      <SelectItem value="Billing question">Billing question</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-white dark:bg-gray-700 border ${
                      formErrors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full py-2 px-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-primary-600 dark:text-primary-400"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      123 Healthcare Drive<br />
                      Medical Center, Suite 200<br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <i className="fas fa-phone-alt text-primary-600 dark:text-primary-400"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      (555) 123-4567
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Monday-Friday: 8am-6pm<br />
                      Saturday: 9am-1pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-primary-600 dark:text-primary-400"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      info@healthcarepractice.com
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      For general inquiries and appointment requests
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden h-64">
                {/* Map placeholder */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    <i className="fas fa-map text-4xl mb-2 block"></i>
                    <span>Interactive Map</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
