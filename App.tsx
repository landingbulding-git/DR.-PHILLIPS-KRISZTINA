import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Star, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu,
  X,
  Smile,
  Activity,
  UserCheck
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  name: string;
  source: 'Google' | 'Facebook';
  text: string;
  rating: number;
  date: string;
}

interface Doctor {
  name: string;
  title: string;
  bio: string;
  image: string;
}

// --- Components ---

// 1. Navigation (Simplified)
const Header = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-20 items-center">
            <div className="flex flex-col items-center">
               <span className="font-display font-bold text-2xl tracking-wider text-brand-black">DR. PHILLIPS</span>
               <span className="text-[10px] tracking-widest text-brand-gold uppercase">Esztétikai Bőrgyógyászat</span>
            </div>
        </div>
      </div>
    </nav>
  );
};

// 2. Footer (Extracted for reuse)
const Footer = () => {
  return (
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="font-display font-bold text-2xl text-white block mb-4">DR. PHILLIPS</span>
              <p className="mb-4 max-w-sm">
                Prémium esztétikai bőrgyógyászat Budapest szívében. A természetes szépség szakértői.
              </p>
              <div className="flex space-x-4">
                 <a href="#" className="hover:text-brand-gold transition"><span className="sr-only">Facebook</span>FB</a>
                 <a href="#" className="hover:text-brand-gold transition"><span className="sr-only">Instagram</span>IG</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Kapcsolat</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Budapest, 5. kerület</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <a href="tel:+36301857036" className="hover:text-white">+36 (30) 185 7036</a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <a href="mailto:info@drkphillips.com" className="hover:text-white">info@drkphillips.com</a>
                </li>
              </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Jogi</h4>
               <ul className="space-y-2 text-sm">
                 <li><a href="#" className="hover:text-white">Adatkezelési tájékoztató</a></li>
                 <li><a href="#" className="hover:text-white">Általános Szerződési Feltételek</a></li>
                 <li><a href="#" className="hover:text-white">Impresszum</a></li>
               </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Phillips Krisztina. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
  );
};

// 3. Reusable Lead Capture Form
const LeadForm = ({ id, title }: { id: string, title: string }) => {
  return (
    <div id={id} className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-brand-gold">
      <h3 className="font-display text-2xl font-bold text-brand-black mb-4 text-center">{title}</h3>
      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
        <input type="hidden" name="access_key" value="ef92aaa0-4aba-4d60-9f04-a789bcea685b" />
        <input type="hidden" name="redirect" value="https://dr-phillips-krisztina.vercel.app/thankyou" />
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Név</label>
          <input required type="text" name="name" placeholder="Teljes neved" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Telefon</label>
          <input required type="tel" name="phone" placeholder="+36 30 123 4567" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
          <input required type="email" name="email" placeholder="pelda@email.hu" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Megjegyzés</label>
          <textarea rows={3} name="message" placeholder="Miben segíthetünk?" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-brand-gold hover:bg-[#b08d4a] text-white font-bold text-lg py-4 rounded-full shadow-lg transform transition hover:-translate-y-1">
          Indulj el a megfiatalodás útján!
        </button>

        <div className="pt-2">
          <ul className="text-xs text-gray-500 space-y-1 text-center">
            <li className="inline-flex items-center mx-2"><CheckCircle size={12} className="text-brand-green mr-1" /> Nincs várakozási idő</li>
            <li className="inline-flex items-center mx-2"><CheckCircle size={12} className="text-brand-green mr-1" /> Prémium alapanyagok</li>
            <li className="inline-flex items-center mx-2"><CheckCircle size={12} className="text-brand-green mr-1" /> Személyre szabott</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

// 4. Thank You Page
const ThankYouPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg text-center border-t-8 border-brand-gold">
           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-brand-green" />
           </div>
           <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-black mb-4">
             Köszönjük a bizalmát!
           </h1>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             Megkeresését sikeresen rögzítettük. Munkatársunk hamarosan keresni fogja Önt a megadott elérhetőségeken az időpont egyeztetése céljából.
           </p>
           <div className="border-t border-gray-100 pt-6">
              <p className="font-bold text-brand-gold uppercase tracking-wider text-sm">Dr. Phillips Krisztina és csapata</p>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const LandingPage = () => {
  // Data for sections
  const testimonials: Testimonial[] = [
    {
      name: "Kovács Anna",
      source: "Google",
      text: "Fantasztikus élmény volt! Nagyon féltem a 'mű' hatástól, de a doktornő kezei alatt teljesen természetes maradt az arcom, csak sokkal pihentebbnek tűnök.",
      rating: 5,
      date: "2 hete"
    },
    {
      name: "Tóth Eszter",
      source: "Facebook",
      text: "Semmi fájdalom, azonnali eredmény. 45 évesen végre visszakaptam az önbizalmamat. Mindenkinek csak ajánlani tudom a csapatot.",
      rating: 5,
      date: "1 hónapja"
    }
  ];

  const doctors: Doctor[] = [
    {
      name: "Dr. Phillips Krisztina",
      title: "Bőrgyógyász-kozmetológus szakorvos",
      bio: "Az American Academy of Aesthetic Medicine tagja.",
      image: "https://drkphillips.com/wp-content/uploads/2025/09/img_8939-scaled.jpg"
    },
    {
      name: "Dr. Kássa Rita",
      title: "Bőrgyógyász szakorvos jelölt",
      bio: "A prevenció és az innovatív esztétikai kezelések szakértője.",
      image: "https://drkphillips.com/wp-content/uploads/2024/01/dr-kassa-rita-300x300.jpg"
    },
    {
      name: "Dr. Koltai Pál",
      title: "Fej-nyaksebész főorvos",
      bio: "A komplex bőrsebészeti és esztétikai rekonstrukciók mestere.",
      image: "https://drkphillips.com/wp-content/uploads/2023/10/koltai-pal-663760094.jpg"
    }
  ];

  return (
    <div className="font-sans text-brand-dark bg-white antialiased">
      <Header />

      {/* --- Phase 1: ATF (Above the Fold) --- */}
      <section className="relative bg-brand-gray pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3764147/pexels-photo-3764147.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Természetes szépség és magabiztosság" 
            className="w-full h-full object-cover object-top opacity-100"
          />
          {/* Gradient Overlay for Text Readability: White to Transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 md:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-brand-black mb-6">
                Távozz <span className="text-brand-gold">5-10 évvel fiatalabb</span> megjelenéssel azonnal, és nyerd vissza természetes magabiztosságod!
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                Zavarnak az elmélyült ráncok vagy az elvékonyodott ajkak? Orvosi hialuronsavas feltöltésünk azonnali, prémium megoldást nyújt számodra vágás és fájdalom nélkül, szakorvosi felügyelettel.
              </p>
              
              {/* Trust Stack */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex -space-x-2">
                   {/* Mock User Avatars for social proof visual */}
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                        <img src={`https://picsum.photos/50/50?random=${i+10}`} alt="User" />
                     </div>
                   ))}
                </div>
                <div className="text-sm font-semibold text-gray-800">
                  <span className="block">Több mint 20 év szakmai tapasztalat</span>
                  <div className="flex items-center text-brand-gold">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-600 ml-1">(5.0)</span>
                  </div>
                </div>
              </div>

              {/* Logos / Certifications */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-70 grayscale">
                <div className="text-xs font-bold border border-gray-500 text-gray-800 px-2 py-1 rounded bg-white/50 backdrop-blur-sm">Semmelweis Egyetem</div>
                <div className="text-xs font-bold border border-gray-500 text-gray-800 px-2 py-1 rounded bg-white/50 backdrop-blur-sm">AAAM</div>
                <div className="text-xs font-bold border border-gray-500 text-gray-800 px-2 py-1 rounded bg-white/50 backdrop-blur-sm">GMC Registered</div>
                <div className="text-xs font-bold border border-gray-500 text-gray-800 px-2 py-1 rounded bg-white/50 backdrop-blur-sm">Dubai DHCC</div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="lg:col-span-5 relative z-10" id="contact">
              <LeadForm id="atf-form" title="Kérj visszahívást vagy időpontot!" />
            </div>

          </div>
        </div>
      </section>

      {/* --- Phase 2: Post-Fold Fork (Validation) --- */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-black mb-4">
              Miért bízz meg budapesti szakorvosi csapatunkban?
            </h2>
            <p className="text-xl text-gray-600 italic border-l-4 border-brand-gold pl-4 inline-block text-left bg-gray-50 p-4 rounded-r-lg">
              "Nem 'kacsaszájat' építünk, hanem az arcod karakteréhez illő, finom és esztétikus változást érünk el számodra."
            </p>
          </div>

          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-sm font-bold text-gray-500">{t.source} Értékelés</span>
                  </div>
                  <p className="text-gray-800 mb-2">"{t.text}"</p>
                  <div className="text-sm text-gray-500 font-semibold">- {t.name}, <span className="font-normal">{t.date}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Phase 3: Value Propositions (The Meat) --- */}
      <section className="py-16 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Azonnali korrekció az arcod minden területén
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Prop 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-brand-gold rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-300">
                <Smile size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ajakformálás és dúsítás</h3>
              <p className="text-gray-300 leading-relaxed">
                Visszaadjuk az ajkaid teltségét és hangsúlyozzuk a Cupido-ívet a csábító, mégis diszkrét megjelenésért.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-brand-gold rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-300">
                <Activity size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mély ráncok feltöltése</h3>
              <p className="text-gray-300 leading-relaxed">
                Azonnal kisimítjuk a nasolabialis redőt és a marionett-ráncokat, hogy az arcod ismét mosolós legyen.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-brand-gold rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-300">
                <User size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Orrkontúr formálás</h3>
              <p className="text-gray-300 leading-relaxed">
                Sebészi beavatkozás nélkül egyenesítjük ki az orrhátat és emeljük meg az orrcsúcsot mindössze 20 perc alatt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Phase 4: The "White Glove" Process --- */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-black">
              Út a fiatalosabb arcbőrhöz 4 egyszerű lépésben
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Személyes konzultáció",
                desc: "Felmérjük az arcod adottságait és közösen kiválasztjuk a neked legmegfelelőbb töltőanyagot."
              },
              {
                step: "02",
                title: "Helyi érzéstelenítés",
                desc: "Krém vagy injekció segítségével minimalizáljuk a kellemetlenségedet."
              },
              {
                step: "03",
                title: "Szakorvosi precíziós töltés",
                desc: "Phillips doktornő és csapata elvégzi a formázást a legmodernebb technikákkal."
              },
              {
                step: "04",
                title: "Azonnali, látványos eredmény",
                desc: "Te 5-10 évvel fiatalabb megjelenéssel távozol a rendelőből."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition bg-white">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-black text-brand-gold flex items-center justify-center font-bold text-xl rounded-lg shadow">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Phase 5: Meet the Specialists --- */}
      <section id="specialists" className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">
            Nemzetközi tapasztalat a Te bőröd szolgálatában
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-black mb-1">{doc.name}</h3>
                  <p className="text-brand-gold text-sm font-bold uppercase tracking-wide mb-4">{doc.title}</p>
                  <p className="text-gray-600 text-sm">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Phase 6: The Objection Crusher (FAQ) --- */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="font-display text-3xl font-bold text-center text-brand-black mb-12">Gyakori Kérdések</h2>
           
           <div className="space-y-4">
             {[
               {
                 q: "Fájni fog a kezelés?",
                 a: "Helyi érzéstelenítést alkalmazunk, így a beavatkozás számodra csak minimális kellemetlenséggel jár."
               },
               {
                 q: "Természetellenes lesz az eredmény?",
                 a: "Ars poeticánk a természetesség. Csak annyi anyagot töltünk, amennyi az arcodat dúsabbá és fiatalabbá teszi, elkerülve a túlzásokat."
               },
               {
                 q: "Mennyi a felépülési idő?",
                 a: "Nagyon rövid. Az esetleges enyhe duzzanat 2-5 nap alatt elmúlik, és sminkkel azonnal elfedheted."
               }
             ].map((faq, idx) => (
               <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                 <h3 className="font-bold text-lg text-brand-dark mb-2 flex items-center">
                   <span className="text-brand-gold mr-2">Q:</span> {faq.q}
                 </h3>
                 <p className="text-gray-600 pl-6">
                   <span className="font-bold text-brand-black">A:</span> {faq.a}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- Phase 7: The Closer Section --- */}
      <section className="py-16 bg-brand-black relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ne halogasd a magabiztosságod – kérj időpontot még ma!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Csatlakozz több ezer elégedett páciensünkhöz, akik már visszanyerték arcuk fiatalos tónusát.
              </p>
              <div className="hidden md:block">
                 <div className="flex items-center gap-4 text-brand-gold mb-2">
                   <CheckCircle size={20} />
                   <span className="text-white font-medium">Prémium környezet</span>
                 </div>
                 <div className="flex items-center gap-4 text-brand-gold mb-2">
                   <CheckCircle size={20} />
                   <span className="text-white font-medium">Szakorvosi garancia</span>
                 </div>
                 <div className="flex items-center gap-4 text-brand-gold">
                   <CheckCircle size={20} />
                   <span className="text-white font-medium">Természetes hatás</span>
                 </div>
              </div>
            </div>
            
            <div>
              <LeadForm id="closer-form" title="Kérem a szakorvosi konzultációt!" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="#atf-form" className="block w-full bg-brand-gold text-white text-center font-bold py-3 rounded-full shadow-lg">
          Kérem a konzultációt!
        </a>
      </div>
    </div>
  );
};

// 5. Main App Structure
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;