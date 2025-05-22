import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Navigation } from 'lucide-react';
import { User } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { ListCheck } from 'lucide-react';
import { Globe } from 'lucide-react';
import { School } from 'lucide-react';
import { Receipt } from 'lucide-react';
import { Landmark } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { PlaneTakeoff } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Atom } from 'lucide-react';
import { Bird } from 'lucide-react';
import { Building } from 'lucide-react';
import { MapPin } from 'lucide-react';
import mainLogo from './assets/logo.png';
import leftContent from './assets/left_content.jpg';
import weOffer from './assets/heading_text_image.png';


function App() {

  return (
  
    <>
    {/* Header Section Start */}
      <header>
      <section className="bg-primary-blue">
          <div className="flex justify-between items-center text-white max-w-primary mx-auto py-4 extrasmall:flex-col extrasmall:gap-4 p-5 lg:flex-row">
              <div className="text-sm font-medium font-roboto">
                <h3>We're Leading Educational Consultancy in Bangladesh.</h3>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="text-sm font-medium font-roboto">
                  <h4>
                    Office Hours: 10:00AM- 07:00PM
                  </h4>
                </div>
                <div className="flex items-center">
                  <div className="border-l px-3 border-gray-500"><a href="#"><Facebook /></a></div>
                  <div className="border-l px-3 border-gray-500"><a href="#"><Instagram /></a></div>
                  <div className="border-l px-3 border-gray-500"><a href="#"><Linkedin /></a></div>
                  <div className="border-l px-3 border-gray-500"><a href="#"><Youtube /></a></div>
                </div>
              </div>
          </div>
      </section>

      <section className="py-11">
          <div className="flex justify-between items-center max-w-primary mx-auto extrasmall:flex-col gap-6 text-center items-center justify-center px-8 lg:flex-row lg:text-left">
            <div className="max-w-56">
              <img src={mainLogo} alt="Logo" />
            </div>

            <div className="flex items-center gap-5">
              <div><Phone className="text-cyan-500" /></div>
              <div className="flex flex-col gap-1">
                <p className="text-header-primary font-bold font-public">Call Us</p>
                <p className="text-header-secondary font-public">++8801406699551-4</p>
              </div>
            </div>


              <div className="flex items-center gap-5">
                  <div><Mail className="text-cyan-500" /></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-header-primary font-bold font-public">Email Us:</p>
                    <p className="text-header-secondary font-public">dreamstudyinternational@gmail.com</p>
                  </div>
               </div>

              <div className="flex items-center gap-5">
                  <div><Navigation className="text-cyan-500" /></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-header-primary font-bold font-public">Location:</p>
                    <p className="text-header-secondary font-public">Gulshan 02</p>
                  </div>
               </div>
          </div>
      </section>

      <section className="px-8">
        <div className="max-w-primary mx-auto bg-primary-blue rounded-md">
          <div className="flex justify-between items-center py-6 extrasmall:flex-col gap-8 extrasmall:items-center extrasmall:justify-center md:flex-row md:justify-between">
                <div>
                  <ul className="flex gap-5 px-8 extrasmall:flex-col extrasmall:items-center extrasmall:justify-center md:flex-row md:justify-between">
                    <li><a href="#" className="menu-btn font-public">Home</a></li>
                    <li><a href="#" className="menu-btn font-public">About</a></li>
                    <li><a href="#" className="menu-btn font-public">Services</a></li>
                    <li><a href="#" className="menu-btn font-public">Countries</a></li>
                    <li><a href="#" className="menu-btn font-public">Contact</a></li>
                    <li><a href="#" className="menu-btn font-public">Privacy Policy</a></li>
                  </ul>
                </div>

                <div className="px-4">
                  <a href="#" className="header-btn">Apply Now</a>
                </div>
          </div>
        </div>
      </section>      
      </header>
    {/* Header Section End */}


    {/* Dream Study International section Start */}
      <section>
        <div className="py-20">
          <div className="flexbox-center">
            <img src={mainLogo} alt="mainLogo" className="max-w-72" />
          </div>
        </div>

        <div className="bg-dream-study-section bg-cover bg-no-repeat bg-center  py-24">
            <div className="max-w-primary mx-auto">
              <div className="grid grid-cols-2 gap-6 items-center extrasmall:grid-cols-1 px-10 lg:grid-cols-2">
                  <div className="w-full max-w-3xl mx-auto">
                    <img src={leftContent} alt="" />
                  </div>
                  <div className="w-full max-w-lg mx-auto">
                      <div className="apply-now-gradient extrasmall:text-xl md:text-3xl lg:text-4xl">
                        <h3>Apply Now!</h3>
                      </div>
                      <div className="bg-apply-background pt-10 pb-10 rounded-bl-lg rounded-br-lg">
                          <div className="flex flex-col gap-6 px-6">

                            <div className="flex items-center gap-6 bg-apply-background border border-gray-500 p-4 rounded-md outline-none hover:border hover:border-blue-500">
                              <User />
                              <input type="text" placeholder="Name" className="w-full bg-apply-background outline-none" />
                            </div>
                            
                            <div className="flex items-center gap-6 bg-apply-background border border-gray-500 p-4 rounded-md outline-none hover:border hover:border-blue-500">
                              <Phone />
                              <input type="text" placeholder="Phone Number" className="w-full bg-apply-background outline-none" />
                            </div>

                            <div className="flex items-center gap-6 bg-apply-background border border-gray-500 p-4 rounded-md outline-none hover:border hover:border-blue-500">
                              <Building2 />
                              <select name="" id="" className="w-full bg-apply-background outline-none">
                                <option value="Last Education:">Last Education:</option>
                                <option value="hsc">HSC</option>
                                <option value="Bachelor">Bachelor</option>
                              </select>
                            </div>

                            <div className="flex items-center gap-6 bg-apply-background border border-gray-500 p-4 rounded-md outline-none hover:border hover:border-blue-500">
                              <Globe />
                              <input type="text" placeholder="Preferred Country" className="w-full bg-apply-background outline-none" />
                            </div>

                            <a href="#" className="apply-now-btn">Register</a>
                            
                          </div>
                      </div>
                  </div>
              </div>


            </div>
        </div>
      </section>
    {/* Dream Study International section End */}

    {/* We Offer One Stop Solution section Start */}
    <section className="bg-we-offer-background py-20 dark:bg-black dark:text-white dark:transition-colors">
        <div className="max-w-primary mx-auto">
          
          <div className="flex items-center justify-center py-10">
            <img src={weOffer} alt="WeOffer" />
          </div>

          <div className="grid grid-cols-4 gap-y-10 px-6 extrasmall:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <School className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      Eligibility Assessment
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <Receipt className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      University & Program
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <Landmark className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      Scholarship Apps
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <Leaf className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      Sponsor Docs Support
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <PlaneTakeoff className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      Bank Support
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <NotebookPen className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      SOP Letter Writing
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <Atom className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      Visa Appli Support
                    </h3>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 px-10 py-2 hover:shadow-xl hover:border-b-4 border-icon-color">
                <div className="text-icon-color">
                  <Bird className="w-8 h-8" />
                </div>
                  <div>
                    <h3 className="font-aldrich text-xl md:text-sm xl:text-xl">
                      Pre-Departure Info
                    </h3>
                </div>
              </div>


              

          </div>
        </div>



    </section>
    {/* We Offer One Stop Solution section End */}
    
    {/* Footer Part Start Here */}
    <footer>
      <section className="bg-we-offer-background py-20 dark:bg-blue-950 dark:text-white">
            <div className="max-w-primary mx-auto">
              <div className="flex gap-4 px-8 extrasmall:flex-col items-center lg:flex-row">
               
               
                <div className="w-1/4 extrasmall:w-full lg:w-1/4">
                  <div className="flex flex-col gap-6">
                    <div className="max-w-64 mb-8">
                      <img src={mainLogo} alt="FooterLogo" />
                    </div>
                    <div className="font-roboto">
                      <p>
                        We are renowned education consultancy for prospective students who would like to study in CANADA, UK, USA, Australia, Sweden, Netherlands, Denmark & other European Countries.
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-4">
                        <a href="#" className="social-media"><Facebook  className="w-4 h-4"/></a>
                        <a href="#" className="social-media"><Instagram  className="w-4 h-4"/></a>
                        <a href="#" className="social-media"><Linkedin  className="w-4 h-4"/></a>
                        <a href="#" className="social-media"><Youtube  className="w-4 h-4"/></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/6 extrasmall:w-full lg:w-1/6">
                  <div className="flex flex-col gap-4">
                      <div className="text-footer-heading-text font-public font-bold text-2xl">
                        <h3 className="before:w-6 before:h-6 before:rounded-full before:bg-cyan-600 before:opacity-20 before:content before:absolute dark:text-white">Sitemap</h3>
                      </div>
                      <div>
                        <ul className="list-disc marker:text-cyan-600 ml-4">
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">Home</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">About</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">Services</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">Countrics</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">Contact</a></li>
                        </ul>
                      </div>
                  </div>
                </div>

                <div className="w-1/6 extrasmall:w-full lg:w-1/6">
                  <div className="flex flex-col gap-4">
                      <div className="text-footer-heading-text font-public font-bold text-2xl">
                        <h3 className="before:w-6 before:h-6 before:rounded-full before:bg-cyan-600 before:opacity-20 before:content before:absolute dark:text-white">Countries</h3>
                      </div>
                      <div>
                        <ul className="list-disc marker:text-cyan-600 ml-4">
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">Australia</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">Canada</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">New Zealand</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">USA</a></li>
                          <li className="pb-4"><a href="#" className="hover:text-cyan-600 transition-colors">UK</a></li>
                        </ul>
                      </div>
                  </div>
                </div>

                <div className="w-1/3 extrasmall:w-full lg:w-1/3">
                  <div className="flex flex-col gap-4 bg-white dark:bg-blue-900 px-8 py-24 rounded-md">
                      <div>
                        <Building className="w-16 h-16 mb-8 text-blue-500"/>
                      </div>

                      <div className="flex items-center gap-6">
                          <div><MapPin className="text-blue-500"/></div>
                          <div className="font-roboto text-md"><span className="font-bold text-gray-700 font-roboto dark:text-white">Gulshan-02:</span> House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue, Gulshan-02, Dhaka-1212. </div>
                      </div>

                      <div className="flex items-center gap-6">
                          <div><Phone className="text-green-500"/></div>
                          <div className="font-roboto text-md"><span className="font-bold text-gray-700 font-roboto dark:text-white">WhatsApp:</span> +880 14066 99551-4 </div>

                      </div>
                  </div>  
                </div>
                
            </div>
            </div>
      </section>

      <section className="bg-primary-blue py-6 px-6">
        <div className="max-w-primary mx-auto">
          <div className="flex items-center justify-between extrasmall:flex-col gap-6 lg:flex-row">
            <div className="text-md text-white font-roboto">
              <h3>© 2023 Dream Study Int.. Designed By <a href="#" className="hover:text-orange-300 transition-colors">*hirebirds</a> Team. </h3>
            </div>
            <div>
              <ul className="list-disc flex gap-4 marker:text-cyan-600">
                <li className="ml-4"><a href="#" className="text-white font-roboto text-md hover:text-blue-600 transition-colors">About</a></li>
                <li className="ml-4"><a href="#" className="text-white font-roboto text-md hover:text-blue-600 transition-colors">FAQ</a></li>
                <li className="ml-4"><a href="#" className="text-white font-roboto text-md hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
    {/* Footer Part End Here */}



      </>

      

  )
}

export default App
