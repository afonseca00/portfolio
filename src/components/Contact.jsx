import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = ({ darkMode, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8">{t.contact.title}</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="mb-6">{t.contact.description}</p>
          <div className="flex space-x-4">
            <button className="text-blue-500 hover:text-blue-400">
              <Github size={24} />
            </button>
            <button className="text-blue-500 hover:text-blue-400">
              <Linkedin size={24} />
            </button>
            <button className="text-blue-500 hover:text-blue-400">
              <Mail size={24} />
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">{t.contact.form.name}</label>
            <input type="text" className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} />
          </div>
          <div>
            <label className="block mb-2">{t.contact.form.email}</label>
            <input type="email" className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} />
          </div>
          <div>
            <label className="block mb-2">{t.contact.form.message}</label>
            <textarea rows="4" className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">{t.contact.form.submit}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
