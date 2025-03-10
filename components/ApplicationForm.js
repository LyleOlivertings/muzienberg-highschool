// components/ApplicationForm.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);

  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    idNumber: '',
    homeLanguage: '',
    address: '',
    city: '',
    province: '',
    
    // Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    relationship: 'Parent',
    parentEmail: '',
    parentPhone: '',
    emergencyContact: '',
    
    // Educational Background
    currentSchool: '',
    currentGrade: '',
    applyingForGrade: '8',
    subjects: [],
    previousSchoolReport: null,
    birthCertificate: null,
    
    // Additional Information
    medicalConditions: '',
    specialNeeds: '',
    motivation: ''
  });

  const provinces = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 
                    'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'];

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.firstName) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.birthDate) newErrors.birthDate = 'Required';
    if (!formData.idNumber) newErrors.idNumber = 'Required';
    if (!formData.parentEmail) newErrors.parentEmail = 'Required';
    if (!formData.parentPhone) newErrors.parentPhone = 'Required';
    if (!consent) newErrors.consent = 'You must agree to the terms';
    
    // ID Number validation
    if (formData.idNumber && !/^[0-9]{13}$/.test(formData.idNumber)) {
      newErrors.idNumber = 'Invalid SA ID Number';
    }
    
    // Email validation
    if (formData.parentEmail && !/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, [field]: 'File size must be less than 5MB' });
        return;
      }
      setFormData({ ...formData, [field]: file.name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          consentGiven: consent,
          submissionDate: new Date().toISOString()
        }),
      });

      if (response.ok) {
        router.push('/application-success');
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8 text-blue-900">
      {/* Student Information Section */}
      <section className="bg-school-light p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Student Information</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-blue-900">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-2">First Name *</label>
            <input
              type="text"
              required
              className={`w-full p-3 border rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Last Name *</label>
            <input
              type="text"
              required
              className={`w-full p-3 border rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium mb-2">Date of Birth *</label>
            <input
              type="date"
              required
              className={`w-full p-3 border rounded-lg ${errors.birthDate ? 'border-red-500' : ''}`}
              value={formData.birthDate}
              onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
            />
            {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-2 ">Gender</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* ID Number */}
          <div>
            <label className="block text-sm font-medium mb-2">SA ID Number *</label>
            <input
              type="text"
              required
              pattern="[0-9]{13}"
              className={`w-full p-3 border rounded-lg ${errors.idNumber ? 'border-red-500' : ''}`}
              value={formData.idNumber}
              onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
            />
            {errors.idNumber && <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>}
          </div>

          {/* Home Language */}
          <div>
            <label className="block text-sm font-medium mb-2">Home Language</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.homeLanguage}
              onChange={(e) => setFormData({...formData, homeLanguage: e.target.value})}
            >
              <option value="">Select</option>
              <option value="English">English</option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="isiXhosa">isiXhosa</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </section>

      {/* Parent/Guardian Information Section */}
      <section className="bg-school-light p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-school-primary mb-6">Parent/Guardian Information</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Parent First Name */}
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={formData.parentFirstName}
              onChange={(e) => setFormData({...formData, parentFirstName: e.target.value})}
            />
          </div>

          {/* Parent Last Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={formData.parentLastName}
              onChange={(e) => setFormData({...formData, parentLastName: e.target.value})}
            />
          </div>

          {/* Relationship */}
          <div>
            <label className="block text-sm font-medium mb-2">Relationship</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.relationship}
              onChange={(e) => setFormData({...formData, relationship: e.target.value})}
            >
              <option value="Parent">Parent</option>
              <option value="Guardian">Guardian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Parent Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              required
              className={`w-full p-3 border rounded-lg ${errors.parentEmail ? 'border-red-500' : ''}`}
              value={formData.parentEmail}
              onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
            />
            {errors.parentEmail && <p className="text-red-500 text-sm mt-1">{errors.parentEmail}</p>}
          </div>

          {/* Parent Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              className={`w-full p-3 border rounded-lg ${errors.parentPhone ? 'border-red-500' : ''}`}
              value={formData.parentPhone}
              onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
            />
            {errors.parentPhone && <p className="text-red-500 text-sm mt-1">{errors.parentPhone}</p>}
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-sm font-medium mb-2">Emergency Contact</label>
            <input
              type="tel"
              className="w-full p-3 border rounded-lg"
              value={formData.emergencyContact}
              onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
            />
          </div>
        </div>
      </section>

      {/* Educational Background Section */}
      <section className="bg-school-light p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-school-primary mb-6">Educational Background</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Current School */}
          <div>
            <label className="block text-sm font-medium mb-2">Current School</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={formData.currentSchool}
              onChange={(e) => setFormData({...formData, currentSchool: e.target.value})}
            />
          </div>

          {/* Current Grade */}
          <div>
            <label className="block text-sm font-medium mb-2">Current Grade</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.currentGrade}
              onChange={(e) => setFormData({...formData, currentGrade: e.target.value})}
            >
              <option value="">Select</option>
              {[7, 8, 9, 10, 11].map((grade) => (
                <option key={grade} value={grade}>Grade {grade}</option>
              ))}
            </select>
          </div>

          {/* Applying For Grade */}
          <div>
            <label className="block text-sm font-medium mb-2">Applying For Grade *</label>
            <select
              required
              className="w-full p-3 border rounded-lg"
              value={formData.applyingForGrade}
              onChange={(e) => setFormData({...formData, applyingForGrade: e.target.value})}
            >
              {[8, 9, 10, 11, 12].map((grade) => (
                <option key={grade} value={grade}>Grade {grade}</option>
              ))}
            </select>
          </div>

          {/* School Report Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload Latest School Report (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              className="w-full p-3 border rounded-lg"
              onChange={(e) => handleFileUpload(e, 'previousSchoolReport')}
            />
            {formData.previousSchoolReport && (
              <p className="text-sm mt-2">Selected: {formData.previousSchoolReport}</p>
            )}
          </div>

          {/* Birth Certificate Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload Birth Certificate (PDF/Image)
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              className="w-full p-3 border rounded-lg"
              onChange={(e) => handleFileUpload(e, 'birthCertificate')}
            />
            {formData.birthCertificate && (
              <p className="text-sm mt-2">Selected: {formData.birthCertificate}</p>
            )}
          </div>
        </div>
      </section>

      {/* Agreements Section */}
      <section className="bg-school-light p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Agreements</h2>
        
        <div className="space-y-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm">
              I hereby certify that the information provided is accurate and complete.
              I consent to MuzienBerg High School processing this information for
              application purposes.
            </span>
          </label>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
        </div>
      </section>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 text-lg rounded-lg transition-colors ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gray-400 hover:bg-blue-900 text-white'
        }`}
      >
        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
      </button>
    </form>
  );
}