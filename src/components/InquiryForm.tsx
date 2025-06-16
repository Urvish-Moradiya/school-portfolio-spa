import React from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  grade: string;
  message: string;
}

interface InquiryFormProps {
  showInquiryForm: boolean;
  setShowInquiryForm: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({
  showInquiryForm,
  setShowInquiryForm,
  formData,
  handleFormSubmit,
  handleInputChange,
  handleSelectChange
}) => {
  if (!showInquiryForm) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 sm:max-w-[500px] w-full">
        <h2 className="text-2xl font-bold text-[#002B5B] mb-2">Apply Now</h2>
        <p className="text-[#2B2D42]/80 mb-4">Please fill out the form below and our admissions team will contact you shortly.</p>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2B2D42] mb-1">Full Name *</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2B2D42] mb-1">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#2B2D42] mb-1">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
                className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-[#2B2D42] mb-1">Program of Interest *</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={(e) => handleSelectChange('program', e.target.value)}
                className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2"
              >
                <option value="">Select a program</option>
                <option value="elementary">Elementary School</option>
                <option value="middle">Middle School</option>
                <option value="high">High School</option>
                <option value="ib">International Baccalaureate</option>
              </select>
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-[#2B2D42] mb-1">Grade Level *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={(e) => handleSelectChange('grade', e.target.value)}
                className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2"
              >
                <option value="">Select grade level</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={`grade-${i + 1}`}>Grade {i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2B2D42] mb-1">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Please share any additional information or questions you may have"
                className="w-full rounded-md border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] p-3"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setShowInquiryForm(false)}
              className="border-2 border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B]/10 rounded-full px-6 py-2 whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#002B5B] hover:bg-[#00234a] text-white rounded-full px-6 py-2 whitespace-nowrap"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;