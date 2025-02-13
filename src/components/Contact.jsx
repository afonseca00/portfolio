import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = ({ darkMode, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação de API
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="text-blue-500 hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">{t.contact.form.name}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-2">{t.contact.form.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-2">{t.contact.form.message}</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : t.contact.form.submit}
          </button>

          {submitStatus === 'success' && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          {submitStatus === 'error' && <p className="text-red-500 mt-2">Failed to send message. Try again later.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
