import React from 'react'

export default function Formulaire() {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Contactez-nous
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
            Prenez rendez-vous ou posez-nous vos questions
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Column - Contact Form */}
          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Envoyez-nous un message
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service souhaité
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="coupe-homme">Coupe Homme</option>
                  <option value="coupe-barbe">Coupe + Barbe</option>
                  <option value="rasage">Rasage Traditionnel</option>
                  <option value="soin-barbe">Soin Barbe</option>
                  <option value="coupe-enfant">Coupe Enfant</option>
                  <option value="package-premium">Package Premium</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social Media */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="bg-[url('/background/3.png')] bg-center bg-no-repeat bg-cover text-white p-4 sm:p-6 md:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">
                Nos Coordonnées
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">📞</div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Téléphone</p>
                    <p className="text-blue-100 text-sm sm:text-base">01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">📧</div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Email</p>
                    <p className="text-blue-100 text-sm sm:text-base">contact@barbershop.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">📍</div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Adresse</p>
                    <p className="text-blue-100 text-sm sm:text-base">
                      123 Rue de la Coiffure<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">🕒</div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Horaires</p>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Lundi - Samedi: 9h - 19h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Suivez-nous
              </h3>
              
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>

                {/* Snapchat */}
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full transition-colors duration-200"
                  aria-label="Snapchat"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM17.176 14.781c-.337.492-.837.826-1.405.949-.568.123-1.155.027-1.657-.268-.337-.197-.714-.314-1.101-.314s-.764.117-1.101.314c-.502.295-1.089.391-1.657.268-.568-.123-1.068-.457-1.405-.949-.337-.492-.337-1.089 0-1.581.337-.492.837-.826 1.405-.949.568-.123 1.155-.027 1.657.268.337.197.714.314 1.101.314s.764-.117 1.101-.314c.502-.295 1.089-.391 1.657-.268.568.123 1.068.457 1.405.949.337.492.337 1.089 0 1.581z"/>
                  </svg>
                </a>
              </div>

              <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base text-center sm:text-left">
                Suivez-nous sur les réseaux sociaux pour voir nos dernières créations et offres spéciales !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
