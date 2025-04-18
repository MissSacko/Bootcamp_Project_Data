import React from 'react';

function Dashboard() {
  return (
    <div class="flex h-screen bg-gray-200">

        {/* <-- sidebar --> */}
        <div class="hidden md:flex flex-col w-72 ">
            
            <div class="flex flex-col flex-1 overflow-y-auto">
                <nav class="flex flex-col flex-1 overflow-y-auto bg-blue-900 px-2 py-4 gap-10">
                    <div class="flex items-center px-4 py-2 text-white font-mono text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <p>Nos Services</p>
                             
                    </div>
                    <div class="flex flex-col flex-1 gap-3"> 
                        <a href="/Segmentation" class="flex items-center px-4 py-2 mt-2 text-gray-100 bg-gray-300 bg-opacity-25 rounded-xl hover:bg-slate-50 hover:text-gray-800">
                            <svg  class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" >
                                <path fill="currentColor" d="M21.053 20.8c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396c-1.36.058-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698c-1.132.452-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888H29.43s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396zm-12.47-.172c-.1-.18-.148-.31-.148-.31s-.432.24-.432-.432s.432.432.864-2.16c0 0 1.2-.335.96-3.118h-.29s.144-.59.238-1.334a10.01 10.01 0 0 1 .037-.996l.038-.426c-.02-.492-.107-.94-.312-1.226c-.72-1.007-1.008-1.68-2.59-2.16c-1.584-.48-1.01-.384-2.16-.335c-1.152.05-2.112.672-2.112 1.01c0 0-.72.047-1.008.335c-.27.27-.705 1.462-.757 1.885v.28c.048.654.26 2.45.47 2.873l-.286.096c-.24 2.782.96 3.118.96 3.118c.43 2.59.863 1.488.863 2.16s-.432.43-.432.43s-.383 1.058-1.343 1.44l-.232.092v5.234h.575c-.03-1.278.077-2.927.746-3.594c.357-.355 1.524-.94 6.353-2.862zm22.33-9.056c-.04-.378-.127-.715-.292-.946c-.718-1.008-1.007-1.68-2.59-2.16c-1.583-.48-1.007-.384-2.16-.335c-1.15.05-2.11.672-2.11 1.01c0 0-.72.047-1.008.335c-.27.272-.71 1.472-.758 1.89h.033l.08.914c.02.23.022.435.027.644c.09.666.21 1.35.33 1.59l-.286.095c-.24 2.782.96 3.118.96 3.118c.432 2.59.863 1.488.863 2.16s-.43.43-.43.43s-.054.143-.164.34c4.77 1.9 5.927 2.48 6.28 2.833c.67.668.774 2.316.745 3.595h.48V21.78l-.05-.022c-.96-.383-1.344-1.44-1.344-1.44s-.433.24-.433-.43s.433.43.864-2.16c0 0 .804-.23.963-1.84V14.66c0-.018 0-.033-.003-.05h-.29s.216-.89.293-1.862z" />
                            </svg>
                            Outil de Segmentation de Clientèle
                        </a>
                        <a href="/Churn" class="flex items-center px-4 py-2 mt-2 text-gray-100 bg-gray-400 bg-opacity-25 rounded-2xl hover:bg-slate-50 hover:text-gray-800">
                        <svg class="h-5 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            Prédiction de Churn pour les Services Abonnés
                        </a>
                        <a href="/Approvisionnement" class="flex items-center px-4 py-2 mt-2 text-gray-100 bg-gray-400 bg-opacity-25 rounded-xl hover:bg-slate-50 hover:text-gray-800">
                            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                                <path fill="none" stroke="currentColor" stroke-width="2" d="M16 7h3v4h-3zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17" />
                            </svg>
                            Optimisation de la Chaîne d’Approvisionnement
                        </a>
                        <a href="/Ventes" class="flex items-center px-4 py-2 mt-2 text-gray-100 bg-gray-400 bg-opacity-25 rounded-2xl hover:bg-slate-50 hover:text-gray-800">
                            <svg class="h-5 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            Outil de Prédiction des Ventes
                        </a>
                        
                    </div>
                </nav>
            </div>
        </div>
    
        {/* <-- Main content --> */}
        <div class="flex flex-col flex-1 overflow-y-auto ">
            <div class="bg-[url(https://img.freepik.com/vecteurs-libre/fond-geometrique-blanc-dore-realiste_79603-2032.jpg?t=st=1744998014~exp=1745001614~hmac=65af1dfd0b7feb17dca46330a4aa426eb9ea76e79b8d2402b6659925a017bc46&w=996)]">
                <div class="bg-gray-200 px-2 py-10 ">
                <div id="features" class="mx-auto max-w-6xl">
                    <p class="text-center text-base font-semibold leading-7 text-primary-500">RetailX Solutions </p>
                    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Analysis of
                    Data for Business
                    </h2>
                    <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                        <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <svg class="mx-auto h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 32 32" >
                                <path fill="currentColor" d="M21.053 20.8c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396c-1.36.058-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698c-1.132.452-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888H29.43s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396zm-12.47-.172c-.1-.18-.148-.31-.148-.31s-.432.24-.432-.432s.432.432.864-2.16c0 0 1.2-.335.96-3.118h-.29s.144-.59.238-1.334a10.01 10.01 0 0 1 .037-.996l.038-.426c-.02-.492-.107-.94-.312-1.226c-.72-1.007-1.008-1.68-2.59-2.16c-1.584-.48-1.01-.384-2.16-.335c-1.152.05-2.112.672-2.112 1.01c0 0-.72.047-1.008.335c-.27.27-.705 1.462-.757 1.885v.28c.048.654.26 2.45.47 2.873l-.286.096c-.24 2.782.96 3.118.96 3.118c.43 2.59.863 1.488.863 2.16s-.432.43-.432.43s-.383 1.058-1.343 1.44l-.232.092v5.234h.575c-.03-1.278.077-2.927.746-3.594c.357-.355 1.524-.94 6.353-2.862zm22.33-9.056c-.04-.378-.127-.715-.292-.946c-.718-1.008-1.007-1.68-2.59-2.16c-1.583-.48-1.007-.384-2.16-.335c-1.15.05-2.11.672-2.11 1.01c0 0-.72.047-1.008.335c-.27.272-.71 1.472-.758 1.89h.033l.08.914c.02.23.022.435.027.644c.09.666.21 1.35.33 1.59l-.286.095c-.24 2.782.96 3.118.96 3.118c.432 2.59.863 1.488.863 2.16s-.43.43-.43.43s-.054.143-.164.34c4.77 1.9 5.927 2.48 6.28 2.833c.67.668.774 2.316.745 3.595h.48V21.78l-.05-.022c-.96-.383-1.344-1.44-1.344-1.44s-.433.24-.433-.43s.433.43.864-2.16c0 0 .804-.23.963-1.84V14.66c0-.018 0-.033-.003-.05h-.29s.216-.89.293-1.862z" />
                            </svg> 
                        <h3 class="my-3 font-mono text-xl text-blue-800">Outil de Segmentation de Clientèle</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        Segmenter automatiquement sa clientèle pour personnaliser ses campagnes
                        marketing.
                        </p>

                        </li>
                        <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

                        <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                                alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-mono text-xl text-blue-800">Prédiction de Churn pour les Services Abonnés</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        Identifier les clients à risque de résiliation et prédire leur comportement.
                        </p>

                        </li>
                        <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-mono text-xl text-blue-800">Optimisation de la Chaîne d'Approvisionnement</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        Optimiser ses flux logistiques grâce à des simulations
                        </p>

                        </li>
                        <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <a href="/pricing" class="group">
                            <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" class="mx-auto h-10 w-10"/>
                            <h3 class="my-3 font-mono text-xl text-blue-800 group-hover:text-primary-500">Outil de Prédiction des Ventes</h3>
                            <p class="mt-1.5 text-sm leading-6 text-secondary-500">Prévoir les ventes pour anticiper les stocks et les campagnes commerciales.
                            Ces outils doivent être :</p>
                        </a>
                        </li>
                        <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <a href="/templates" class="group">
                            <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" class="mx-auto h-10 w-10"/>
                            <h3 class="my-3 font-mono text-xl text-blue-800 group-hover:text-primary-500">
                            Chatbot pour le Support Client
                            </h3>
                            <p class="mt-1.5 text-sm leading-6 text-secondary-500">Offrir un support client de premier niveau automatisé via un chatbot </p>
                        </a>
                        </li>
                        <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <a href="/download" class="group">
                            <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" class="mx-auto h-10 w-10"/>
                            <h3 class="my-3 font-mono text-xl text-blue-800 group-hover:text-primary-500">Use Anywhere</h3>
                            <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
                            including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
                        </a>
                        </li>
                    </ul>
                </div>
            <div>
        </div>
        </div>
            </div>
            
        {/* fin */}
        <div class="grid grid-flow-col justify-items-end mt-10">
            <div><a href="/Chatbot">
                <img src="images/chatbot-removebg.png" class="scale-75 w-36" alt="chatbot" />
            </a>
                
            </div>
            
            
        </div>
        
        </div>
    </div>
  );
}

export default Dashboard;