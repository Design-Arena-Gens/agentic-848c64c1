'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">Q</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Quran Academy</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-emerald-600 transition">About</a>
              <a href="#courses" className="text-gray-600 hover:text-emerald-600 transition">Courses</a>
              <a href="#teachers" className="text-gray-600 hover:text-emerald-600 transition">Teachers</a>
              <a href="#pricing" className="text-gray-600 hover:text-emerald-600 transition">Pricing</a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition">Get Started</a>
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#about" className="block text-gray-600 hover:text-emerald-600">About</a>
              <a href="#courses" className="block text-gray-600 hover:text-emerald-600">Courses</a>
              <a href="#teachers" className="block text-gray-600 hover:text-emerald-600">Teachers</a>
              <a href="#pricing" className="block text-gray-600 hover:text-emerald-600">Pricing</a>
              <a href="#contact" className="block bg-emerald-600 text-white px-6 py-2 rounded-lg text-center">Get Started</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Learn the Quran <span className="text-emerald-600">Online</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students worldwide learning to recite, memorize, and understand the Holy Quran with our expert teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition text-center">
                Start Free Trial
              </a>
              <a href="#courses" className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition text-center">
                View Courses
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-gray-800">5000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">50+</div>
                <div className="text-gray-600">Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="text-center text-4xl mb-4">📖</div>
                <h3 className="text-2xl font-bold text-gray-800 text-center">Live One-on-One Classes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Qualified Male & Female Teachers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Flexible Schedule</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Interactive Lessons</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Progress Tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Experience the best online Quran education</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Expert Teachers</h3>
              <p className="text-gray-600">Certified Quran teachers with Ijazah and years of teaching experience</p>
            </div>
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Learn at your own pace with classes available 24/7 to fit your schedule</p>
            </div>
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">One-on-One Sessions</h3>
              <p className="text-gray-600">Personalized attention with private online classes via Zoom or Skype</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600">Choose the perfect course for your learning journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Quran Reading</h3>
              <p className="text-gray-600 mb-6">Learn to read the Quran with proper pronunciation and fluency. Perfect for beginners.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Arabic Alphabet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Basic Reading Skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Fluency Development</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">Enroll Now</a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-2 border-emerald-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Tajweed Mastery</h3>
              <p className="text-gray-600 mb-6">Master the art of Tajweed and recite the Quran like a professional Qari.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Makharij & Sifaat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Tajweed Rules</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Beautiful Recitation</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">Enroll Now</a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Quran Memorization</h3>
              <p className="text-gray-600 mb-6">Become a Hafiz with our structured memorization program and proven techniques.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Step-by-Step Method</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Regular Revision</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Long-term Retention</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">Enroll Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Qualified Teachers</h2>
            <p className="text-xl text-gray-600">Learn from certified and experienced Quran instructors</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👨‍🏫
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sheikh Ahmed</h3>
              <p className="text-gray-600">Tajweed Expert</p>
              <p className="text-sm text-gray-500 mt-2">15 years experience</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👩‍🏫
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sister Fatima</h3>
              <p className="text-gray-600">Female Teacher</p>
              <p className="text-sm text-gray-500 mt-2">10 years experience</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👨‍🏫
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Qari Muhammad</h3>
              <p className="text-gray-600">Hifz Specialist</p>
              <p className="text-sm text-gray-500 mt-2">12 years experience</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👩‍🏫
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sister Aisha</h3>
              <p className="text-gray-600">Kids Specialist</p>
              <p className="text-sm text-gray-500 mt-2">8 years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Affordable Pricing</h2>
            <p className="text-xl text-gray-600">Choose a plan that fits your budget</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">2 Classes per week</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">30 min sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Progress reports</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">Get Started</a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-2 border-emerald-600 transform md:scale-105">
              <div className="bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Standard</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">$89</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">3 Classes per week</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">45 min sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Progress reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">WhatsApp support</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">Get Started</a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">$129</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">5 Classes per week</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">60 min sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Progress reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Free materials</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Start Your Free Trial</h2>
              <p className="text-xl text-gray-600">Experience our teaching quality with 3 free trial classes</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Course Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition">
                    <option>Quran Reading</option>
                    <option>Tajweed Mastery</option>
                    <option>Quran Memorization</option>
                    <option>All Courses</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                    rows={4}
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition"
                >
                  Start Free Trial
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Q</span>
                </div>
                <span className="text-xl font-bold">Quran Academy</span>
              </div>
              <p className="text-gray-400">Learn the Quran online with qualified teachers from around the world.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white transition">Courses</a></li>
                <li><a href="#teachers" className="text-gray-400 hover:text-white transition">Teachers</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                <li><a href="#courses" className="text-gray-400 hover:text-white transition">Quran Reading</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white transition">Tajweed</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white transition">Memorization</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white transition">Islamic Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@quranacademy.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>WhatsApp: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Quran Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
