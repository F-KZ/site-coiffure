import React from 'react'
import { CarouselDemo } from './Caroussel'
import { Button } from '../ui/button'

export default function MainContent() {
  return (
    <main className='flex flex-col mt-36 sm:mb-26 sm:mt-24 md:mt-28 lg:mt-36 items-center w-full px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 lg:gap-12 xl:flex-row md:justify-between'>
      
        <CarouselDemo/>
       
        <div className='flex flex-col w-full md:max-w-3xl gap-4 sm:gap-6 items-start justify-between px-0 sm:px-4 md:px-8'>
  

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏆</span>
                             <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                 Bienvenue chez <span className='font-bold text-xl sm:text-2xl md:text-3xl'>Barber Shop</span>
               </h1>
              <span className="text-2xl">🏆</span>
            </div>

            <p className="text-base sm:text-lg">
              L'art du style masculin depuis 2010.
            </p>

            <p className="text-sm sm:text-base">
              Chez Barber Shop, nous ne faisons pas que couper des cheveux – nous sculptons des looks, 
              boostons les confiances et perpétuons la tradition du vrai barbering.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg sm:text-xl">✂</span>
                <div className="text-sm sm:text-base">
                  <strong className="text-gray-800">Précision :</strong> Des coupes sur-mesure, des barbes taillées au millimètre.
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-lg sm:text-xl">🧔</span>
                <div className="text-sm sm:text-base">
                  <strong className="text-gray-800">Expérience :</strong> Un mélange unique de techniques classiques et tendances.
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-lg sm:text-xl">💈</span>
                <div className="text-sm sm:text-base">
                  <strong className="text-gray-800">Ambiance :</strong> Détente garantie dans un cadre vintage moderne.
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base">
              Que vous veniez pour une beard trim, une coupe signature ou simplement pour l'ambiance, 
              notre équipe de barbers passionnés vous attend.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-green-600 font-semibold text-sm sm:text-base">
              <span>👉</span>
              <span>Prenez rendez-vous en ligne ou passez nous voir – la première bière/café est offerte !</span>
            </div>
          </div>

           <Button className="mt-4 sm:mt-6 w-full sm:w-auto bg-gray-900 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold transition-colors duration-200 cursor-pointer text-sm sm:text-base">
             Prendre RDV
           </Button>
        </div>
    </main>
  )
}
