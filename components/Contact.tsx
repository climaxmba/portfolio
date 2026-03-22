"use client"
import { Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-indigo-50 dark:bg-neutral-950 transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden md:flex">
          {/* Contact Info Sidebar */}
          <div className="bg-indigo-600 dark:bg-indigo-800 p-10 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's chat!</h2>
              <p className="text-indigo-100 dark:text-indigo-200 mb-8">
                Have a project in mind or just want to say hi? Feel free to send me a message.
              </p>
              <div className="space-y-4">
                <a href="mailto:climaxium150@gmail.com" className="flex items-center gap-3 hover:text-indigo-200 transition-colors">
                  <Mail size={20} className="text-indigo-300 dark:text-indigo-200" />
                  <span className="truncate">climaxium150@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/climaxmba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-200 transition-colors">
                  <Linkedin size={20} className="text-indigo-300 dark:text-indigo-200" />
                  <span>in/climaxmba</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 md:w-3/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-3 bg-neutral-900 dark:bg-indigo-600 text-white font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}