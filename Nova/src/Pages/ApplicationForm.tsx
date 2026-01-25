import {NavBar} from "../Comp/NavBar"
import {Footer} from "../Comp/Footer"
import { User, Phone, MapPin, GraduationCap, FileText, Upload} from 'lucide-react';
import React, { useState } from "react";
import {auth} from "../../firebase"

export function ApplicationForm(){
    const user = auth.currentUser;

    const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    idNumber: '',
    dateOfBirth: '',
    gender: '',
    email: user?.email,
    phone: user?.phoneNumber,
    alternatePhone: '',
    
    // Address Information
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    
    // Guardian/Emergency Contact
    guardianName: '',
    guardianRelationship: '',
    guardianPhone: '',
    guardianEmail: '',
    
    // Academic Information
    previousSchool: '',
    yearCompleted: '',
    highestQualification: '',
    course: '',
    studyMode: 'full-time',
    
    // Supporting Documents
    idDocument: null,
    matric: null,
    proofOfResidence: null,
    
    // Declarations
    agreeTerms: false,
    agreeAccuracy: false
  });

  const courses = [
    "Reception / Front Desk",
    "Office Administration",
    "Computer Literacy",
    "TEFL (Teaching English as a Foreign Language)",
    "Home-Based Care",
    "Culinary Basics / Cooking",
    "Early Childhood Development (ECD)"
  ];

  const provinces = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "Northern Cape",
    "North West",
    "Western Cape"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked, files } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    //Change these Alerts
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you shortly.');
  };
    return(
        <div>
            <NavBar/>

            {/*Application form content */}
            <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900 mb-2">Enrollment Application</h1>
                        <p className="text-lg text-slate-600">Nova Institute - Start Your Journey Today</p>
                    </div>
                    </div>

                    <div className="space-y-8">
                    {/* Personal Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                        <User className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            First Name *
                            </label>
                            <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your first name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Last Name *
                            </label>
                            <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your last name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            ID Number *
                            </label>
                            <input
                            type="text"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="13-digit ID number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Date of Birth *
                            </label>
                            <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="dd/mm/yy"
                            />
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-semibold text-slate-700 mb-2">
                            Gender *
                            </label>
                            <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email Address *
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Phone Number *
                            </label>
                            <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0XX XXX XXXX"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Alternate Phone Number
                            </label>
                            <input
                            type="tel"
                            name="alternatePhone"
                            value={formData.alternatePhone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0XX XXX XXXX"
                            />
                        </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                        <MapPin className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Address Information</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Street Address *
                            </label>
                            <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Street address"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            City/Town *
                            </label>
                            <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="City or town"
                            />
                        </div>

                        <div>
                            <label htmlFor="province" className="block text-sm font-semibold text-slate-700 mb-2">
                            Province *
                            </label>
                            <select
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                            <option value="">Select province</option>
                            {provinces.map((province) => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Postal Code *
                            </label>
                            <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="XXXX"
                            />
                        </div>
                        </div>
                    </div>

                    {/* Guardian/Emergency Contact */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                        <Phone className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Guardian/Emergency Contact</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Guardian/Contact Name *
                            </label>
                            <input
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Relationship *
                            </label>
                            <input
                            type="text"
                            name="guardianRelationship"
                            value={formData.guardianRelationship}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Parent, Spouse, Sibling"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Contact Phone *
                            </label>
                            <input
                            type="tel"
                            name="guardianPhone"
                            value={formData.guardianPhone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0XX XXX XXXX"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Contact Email
                            </label>
                            <input
                            type="email"
                            name="guardianEmail"
                            value={formData.guardianEmail}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="contact.email@example.com"
                            />
                        </div>
                        </div>
                    </div>

                    {/* Academic Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Academic Information</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Previous School/Institution *
                            </label>
                            <input
                            type="text"
                            name="previousSchool"
                            value={formData.previousSchool}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="School or institution name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Year Completed *
                            </label>
                            <input
                            type="number"
                            name="yearCompleted"
                            value={formData.yearCompleted}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="YYYY"
                            min="1950"
                            max="2026"
                            />
                        </div>

                        <div>
                            <label htmlFor="highestQ" className="block text-sm font-semibold text-slate-700 mb-2">
                            Highest Qualification *
                            </label>
                            <select
                            id="highestQ"
                            name="highestQualification"
                            value={formData.highestQualification}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                            <option value="">Select qualification</option>
                            <option value="grade-9">Grade 9</option>
                            <option value="grade-10">Grade 10</option>
                            <option value="grade-11">Grade 11</option>
                            <option value="grade-12">Grade 12 / Matric</option>
                            <option value="certificate">Certificate</option>
                            <option value="diploma">Diploma</option>
                            <option value="degree">Degree</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="course" className="block text-sm font-semibold text-slate-700 mb-2">
                            Course Applied For *
                            </label>
                            <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                            <option value="">Select a course</option>
                            {courses.map((course) => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="studyMode" className="block text-sm font-semibold text-slate-700 mb-2">
                            Study Mode *
                            </label>
                            <select
                            id="studyMode"
                            name="studyMode"
                            value={formData.studyMode}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    {/* Supporting Documents */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                        <Upload className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Supporting Documents</h2>
                        </div>
                        
                        <div className="space-y-4">
                        <p className="text-sm text-slate-600 mb-4">
                            Please upload clear copies of the following documents (PDF, JPG, or PNG format):
                        </p>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Certified ID Copy *
                            </label>
                            <input
                            placeholder="..."
                            type="file"
                            name="idDocument"
                            onChange={handleChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Matric Certificate / Highest Qualification *
                            </label>
                            <input
                            placeholder="..."
                            type="file"
                            name="matric"
                            onChange={handleChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Proof of Residence *
                            </label>
                            <input
                            placeholder="..."
                            type="file"
                            name="proofOfResidence"
                            onChange={handleChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        </div>
                    </div>

                    {/* Declarations */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Declarations</h2>
                        </div>
                        
                        <div className="space-y-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-700">
                            I agree to the terms and conditions of enrollment and understand that acceptance is subject to meeting all entry requirements. *
                            </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                            type="checkbox"
                            name="agreeAccuracy"
                            checked={formData.agreeAccuracy}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-700">
                            I declare that all information provided in this application is true and accurate to the best of my knowledge. *
                            </span>
                        </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                        onClick={handleSubmit}
                        className="px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                        >
                        Submit Application
                        </button>
                    </div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-8 text-sm text-slate-600">
                    <p>Need help? Contact us at <a href="mailto:admissions@novainstitute.ac.za" className="text-blue-600 hover:underline">admissions@novainstitute.ac.za</a></p>
                    <p className="mt-2">All fields marked with * are required</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}