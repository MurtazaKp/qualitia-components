import React from 'react'

const SectorsSection = () => {

    const sectorsData={
        heading:"",
        sectors:[{
           hello:"as" 
    }]
    }
  return (
    <div className='max-w-6xl mx-auto pt-28'>
      <h2 className='text-[#032d60] text-3xl text-center font-bold mx-auto md:w-7/12'>
         Q-Boson supports Salesforce industry clouds and Salesforce Platforms
      </h2>
      <div className='lg:flex justify-center my-10 lg:my-20'>
            <div className='lg:w-9/12'>
                <div className='flex items-center justify-center flex-wrap gap-10 lg:gap-20'>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/finance.svg" alt="finance-logo" />
                     <h5 className="text-center mt-4">
                        Financial services
                     </h5>
                  </div>
                   <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/consumer-goods.svg" alt="Consumer-goods-logo" />
                     <h5 className="text-center mt-4">
                        Consumer goods
                     </h5>
                  </div>
                   <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/government.svg" alt="Government-logo" />
                     <h5 className="text-center mt-4">
                        Government
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/retail.svg" alt="Retail-logo" />
                     <h5 className="text-center mt-4">
                        Retail
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/energy-utilities.svg" alt="energy-utilities-logo" />
                     <h5 className="text-center mt-4">
                        Energy and utilities
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/communication.svg" alt="Communication-logo" />
                     <h5 className="text-center mt-4">
                      Communication
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/automotive.svg" alt="automotive-logo" />
                     <h5 className="text-center mt-4">
                        Automotive
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/manufacturing.svg" alt="manufacturing-logo" />
                     <h5 className="text-center mt-4">
                        Manufacturing
                     </h5>
                  </div>
                   <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/media.svg" alt="media-logo" />
                     <h5 className="text-center mt-4">
                        Media
                     </h5>
                  </div>
                   <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/non-profit.svg" alt="non-profit-logo" />
                     <h5 className="text-center mt-4">
                        Non-profit
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/life-sciences.svg" alt="life-sciences-logo" />
                     <h5 className="text-center mt-4">
                        Life sciences
                     </h5>
                  </div>
                  <div className="w-36 flex items-center justify-center flex-col">
                     <img className="h-12 w-12 lg:h-16 lg:w-16 object-contain" src="/salesforceImage/education.svg" alt="education-logo" />
                     <h5 className="text-center mt-4">
                        Education
                     </h5>
                  </div>
                </div>
            </div>
            <div className=' mt-10 lg:mt-0 lg:w-3/12'>
                  <div className='flex items-center flex-wrap justify-center gap-10 lg:gap-x-20 lg:gap-y-16'>
                    <div className="w-36 flex items-center justify-center flex-col border-2 border-solid rounded-lg border-[#032d60]">
                      <img className="h-16 w-16 lg:h-20 lg:w-20 object-contain " src="/salesforceImage/classic.svg" alt="classic-logo" />
                      <h5 className="text-center mb-4">
                          Classic
                      </h5>
                    </div>
                    <div className="w-36 flex items-center justify-center flex-col border-2 border-solid rounded-lg border-[#032d60]">
                      <img className="h-16 w-16 lg:h-20 lg:w-20 object-contain p-3 lg:p-4" src="/salesforceImage/lightning.svg" alt="lightning-logo" />
                      <h5 className="text-center mb-4">
                          Lightning
                      </h5>
                    </div>
                    <div className="w-36 flex items-center justify-center flex-col border-2 border-solid rounded-lg border-[#032d60]">
                      <img className="h-16 w-16 lg:h-20 lg:w-20 object-contain p-3 lg:p-4" src="/salesforceImage/LWC.svg" alt="LWC-logo" />
                      <h5 className="text-center mb-4">
                          LWC
                      </h5>
                    </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default SectorsSection