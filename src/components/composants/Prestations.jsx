import React from 'react';

export default function Prestations() {
  const services = [
    {
      name: "Coupe Homme",
      description: "Coupe classique ou moderne selon vos préférences",
      price: "25€",
      duration: "30 min"
    },
    {
      name: "Coupe + Barbe",
      description: "Coupe complète avec soin de la barbe",
      price: "35€",
      duration: "45 min"
    },
    {
      name: "Rasage Traditionnel",
      description: "Rasage au coupe-chou avec serviette chaude",
      price: "30€",
      duration: "40 min"
    },
    {
      name: "Soin Barbe",
      description: "Entretien et modelage de la barbe",
      price: "20€",
      duration: "25 min"
    },
    {
      name: "Coupe Enfant",
      description: "Pour les enfants de moins de 12 ans",
      price: "18€",
      duration: "20 min"
    },
    {
      name: "Package Premium",
      description: "Coupe + Barbe + Soin visage complet",
      price: "50€",
      duration: "60 min"
    }
  ];

  return (
    <section id='prestations' className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[url('/background/2.png')] bg-center bg-no-repeat bg-cover">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-2 sm:mb-4">
            Nos Prestations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto px-4">
            Découvrez nos services de qualité professionnelle pour prendre soin de votre style
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-transparent rounded-lg shadow-black-xl hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100" style={{
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)'
                }}>
                  {service.name}
                </h3>
                <span className="text-xl sm:text-2xl font-bold text-white" style={{
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)'
                }}>
                  {service.price}
                </span>
              </div>
              
              <p className="text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base" style={{
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)'
              }}>
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                <span className="text-xs sm:text-sm text-gray-200" style={{
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)'
                }}>
                  ⏱️ {service.duration}
                </span>
                <button className="w-full sm:w-auto bg-gray-900 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer">
                   Réserver
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <div className="bg-transparent text-white rounded-lg p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)'
            }}>
              Offre Spéciale
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)'
            }}>
              -20% sur votre première visite avec le code "BIENVENUE"
            </p>
            <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-colors duration-200 cursor-pointer text-sm sm:text-base">
              Prendre RDV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
