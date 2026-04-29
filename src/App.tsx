// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Headphones, Waves, Heart, Music, HardHat, Disc3, MapPin, Calendar, Play, Mail, MessageSquare, X, Send, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
// import { GoogleGenAI, ThinkingLevel } from '@google/genai';

// function HeroSection() {
//   const [isVotingOpen, setIsVotingOpen] = useState(false);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 z-10 bg-gradient-to-br from-duarte-orange/60 to-duarte-teal/60 mix-blend-multiply" />
//       <div className="absolute inset-0 z-10 bg-black/20" />
      
//       <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16 flex flex-col items-center w-full">
        
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8 w-full max-w-md md:max-w-lg mx-auto"
//         >
//           <img 
//             src="https://drive.google.com/thumbnail?id=1uRHKDnbwqzISBhMZ18C5OTxbsgNw9G71&sz=w1000" 
//             alt="Duarte Logo" 
//             className="w-full h-auto drop-shadow-2xl"
//             referrerPolicy="no-referrer"
//           />
//         </motion.div>
        
//         {/* Fun Voting Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-12"
//         >
//           <button 
//             onClick={() => setIsVotingOpen(true)}
//             className="group relative inline-flex items-center justify-center px-8 py-4 font-display text-xl tracking-wide text-white bg-duarte-orange rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
//           >
//             <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
//             <span className="relative flex items-center gap-2">
//               <Play className="w-6 h-6 fill-white" />
//               VOTE NO PRÓXIMO LANÇAMENTO! 🔥
//             </span>
//           </button>
//         </motion.div>

//         {/* Subtitle */}
//         <motion.p 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light"
//         >
//           Mais de 10 anos construindo a vibe perfeita na pista de Progressive Psy Trance.
//         </motion.p>
        
//       </div>

//       {/* Voting Modal */}
//       <AnimatePresence>
//         {isVotingOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//           >
//             <motion.div 
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
//             >
//               <button 
//                 onClick={() => setIsVotingOpen(false)}
//                 className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors z-10"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//               <div className="p-6 md:p-10">
//                 <DemoVoting />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// function EvolutionSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     "https://drive.google.com/thumbnail?id=1nJ95AmUf8P3uTXiT9A25OHVDGlAQO61k&sz=w1000",
//     "https://drive.google.com/thumbnail?id=1v0K5CQQ07y_-F9yNdh8UUnPu5ahdrQjr&sz=w1000"
//   ];

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextImage, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const steps = [
//     {
//       icon: <Music className="w-8 h-8 text-white" />,
//       title: "As Raízes",
//       desc: "Aos 14 anos, os primeiros acordes no violão e baixo. Uma base sólida construída entre a MPB e o Heavy Metal.",
//       color: "bg-duarte-teal"
//     },
//     {
//       icon: <HardHat className="w-8 h-8 text-white" />,
//       title: "A Pausa",
//       desc: "A dedicação à Engenharia. Uma pausa que, como toda boa pausa numa mixagem, só aumentou a tensão para o drop.",
//       color: "bg-duarte-orange"
//     },
//     {
//       icon: <Disc3 className="w-8 h-8 text-white" />,
//       title: "A Descoberta",
//       desc: "2012: A música eletrônica entra em cena. 2015: O início autodidata com um CDJ 200, passando pelo Tribal e Minimal.",
//       color: "bg-duarte-pool"
//     },
//     {
//       icon: <Waves className="w-8 h-8 text-white" />,
//       title: "O Encontro",
//       desc: "A expressão artística ganha forma completa no Progressive Psy Trance. Cada mudança não foi indecisão, foi evolução.",
//       color: "bg-duarte-yellow"
//     }
//   ];

//   return (
//     <section className="py-24 bg-white/80 backdrop-blur-lg relative">
//       <div className="max-w-6xl mx-auto px-4 content-relative">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-display text-duarte-black mb-4">
//             <span className="text-duarte-orange">Uma Jornada de Evolução</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl group"
//           >
//             <AnimatePresence mode="wait">
//               <motion.img 
//                 key={currentImageIndex}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 src={images[currentImageIndex]} 
//                 alt="Duarte Evolução" 
//                 className="absolute inset-0 w-full h-full object-cover"
//                 referrerPolicy="no-referrer"
//               />
//             </AnimatePresence>
            
//             {/* Carousel Controls */}
//             <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button 
//                 onClick={prevImage}
//                 className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-duarte-orange transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button 
//                 onClick={nextImage}
//                 className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-duarte-orange transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Carousel Indicators */}
//             <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
//               {images.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentImageIndex(idx)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     idx === currentImageIndex ? "bg-duarte-orange w-6" : "bg-white/50 hover:bg-white"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {steps.map((step, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-center"
//               >
//                 <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5 shadow-md`}>
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-display mb-2">{step.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function RemixSection() {
//   return (
//     <section className="py-24 bg-duarte-teal/90 backdrop-blur-lg text-white relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-duarte-pool rounded-full mix-blend-screen filter blur-[100px] opacity-50" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-duarte-orange rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
      
//       <div className="max-w-5xl mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="flex-1"
//           >
//             <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
//               O Remix Que<br/>
//               <span className="text-duarte-yellow">Conquistou a Pista</span>
//             </h2>
//             <p className="text-lg text-white/80 mb-8 leading-relaxed">
//               Em 2020, a evolução ganhou voz. O primeiro remix oficial: <strong className="text-white">"Runnin'"</strong>, com o vocal inconfundível de Beyoncé. Uma faixa que até hoje incendeia qualquer apresentação e mostra a verdadeira identidade sonora de Duarte.
//             </p>
//             <button className="bg-white text-duarte-teal font-display px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors">
//               <Play className="w-5 h-5 fill-current" />
//               ESCUTAR RUNNIN'
//             </button>
//           </motion.div>
          
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="flex-1 w-full max-w-md"
//           >
//             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-3xl shadow-2xl overflow-hidden">
//               <iframe 
//                 width="100%" 
//                 height="400" 
//                 scrolling="no" 
//                 frameBorder="no" 
//                 allow="autoplay" 
//                 src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/duarteprog/naughty-boy-runnin-ft-beyonce-arrow-benjamin-duarte-remix-free-download-3&color=%23FF6B35&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
//                 className="rounded-2xl"
//               ></iframe>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function OnStageSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     "https://drive.google.com/thumbnail?id=11msMUnpBT0aA3_r6D7e0v7KZlziBUHRZ&sz=w1000",
//     "https://drive.google.com/thumbnail?id=1qzm_ppQDGIMTj7cKYu6oa3FNugR33nQD&sz=w1000"
//   ];

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextImage, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="py-24 bg-white/80 backdrop-blur-lg relative">
//       <div className="max-w-6xl mx-auto px-4 content-relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl group">
//               <AnimatePresence mode="wait">
//                 <motion.img 
//                   key={currentImageIndex}
//                   initial={{ opacity: 0, scale: 1.05 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   src={images[currentImageIndex]} 
//                   alt="Duarte mixing" 
//                   className="absolute inset-0 w-full h-full object-cover"
//                   referrerPolicy="no-referrer"
//                 />
//               </AnimatePresence>
//               <div className="absolute inset-0 bg-gradient-to-t from-duarte-black/80 to-transparent pointer-events-none" />
              
//               {/* Carousel Controls */}
//               <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button 
//                   onClick={prevImage}
//                   className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-duarte-pool transition-colors z-10"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button 
//                   onClick={nextImage}
//                   className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-duarte-pool transition-colors z-10"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>
//               </div>

//               {/* Carousel Indicators */}
//               <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImageIndex(idx)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       idx === currentImageIndex ? "bg-duarte-pool w-6" : "bg-white/50 hover:bg-white"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <h2 className="text-3xl md:text-4xl font-display text-duarte-black mb-6">
//               Precisão Técnica e<br/>
//               <span className="text-duarte-pool">Sensibilidade Musical</span>
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Mais do que tocar músicas, Duarte constrói jornadas. Sets harmônicos e cheios de groove, onde sonoridades melódicas encontram emoção e profundidade. Cada apresentação é uma experiência cuidadosamente desenhada para a pista.
//             </p>
            
//             <div className="bg-duarte-yellow p-8 rounded-2xl shadow-lg border-2 border-duarte-yellow/20 relative overflow-hidden">
//               <div className="absolute -right-4 -top-4 text-white/30">
//                 <Headphones className="w-32 h-32" />
//               </div>
//               <h3 className="font-display text-2xl text-duarte-black mb-3 relative z-10">O Diferencial</h3>
//               <p className="text-duarte-black/80 font-medium relative z-10">
//                 Domínio técnico de mixagem, explorando ao máximo o potencial dos equipamentos em sintonia com suas produções autorais. O resultado é uma experiência dinâmica, intensa e inesquecível.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function VideoSection() {
//   return (
//     <section className="py-24 bg-duarte-black/95 backdrop-blur-lg relative">
//       <div className="max-w-5xl mx-auto px-4 content-relative">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="rounded-3xl overflow-hidden shadow-2xl shadow-duarte-pool/20 border border-white/10 aspect-video bg-black relative"
//         >
//           <iframe 
//             src="https://drive.google.com/file/d/10DMpAygHM8QxahdEzB3ZVM-_iIqIObBy/preview" 
//             width="100%" 
//             height="100%" 
//             allow="autoplay" 
//             className="absolute inset-0 w-full h-full border-0"
//             allowFullScreen
//           ></iframe>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function FestaGrooveSection() {
//   return (
//     <section className="py-24 bg-duarte-orange/90 backdrop-blur-lg text-white relative">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <Heart className="w-16 h-16 mb-6 text-duarte-yellow" />
//             <h2 className="text-4xl md:text-5xl font-display mb-6">
//               Festa Groove:<br/>
//               <span className="text-duarte-black">Música Que Transforma</span>
//             </h2>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Criador e DJ residente do projeto beneficente que há mais de 7 anos transforma batidas em união e impacto social real.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="flex justify-center lg:justify-end"
//           >
//             <div className="aspect-[9/16] w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative">
//               <img 
//                 src="https://drive.google.com/thumbnail?id=126Dfn3_c5NOt1UIsL9z6TfJUvj5SRRl0&sz=w1000" 
//                 alt="Festa Groove" 
//                 className="absolute inset-0 w-full h-full object-cover"
//                 referrerPolicy="no-referrer"
//               />
//             </div>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center"
//           >
//             <div className="text-4xl font-display text-duarte-yellow mb-2">+7</div>
//             <div className="font-medium">Anos de História</div>
//           </motion.div>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center"
//           >
//             <div className="text-4xl font-display text-duarte-yellow mb-2">100%</div>
//             <div className="font-medium">Estrutura Premium</div>
//           </motion.div>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center"
//           >
//             <div className="text-4xl font-display text-duarte-yellow mb-2">8,4</div>
//             <div className="font-medium">Toneladas de Alimentos Arrecadados</div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function DemoVoting() {
//   // Alterar o BATCH_ID zera os votos para os usuários (simulando uma nova votação)
//   const BATCH_ID = "demo_batch_01"; 
//   const [votedFor, setVotedFor] = useState<string | null>(null);
//   const [votes, setVotes] = useState({ demoA: 342, demoB: 215 });
  
//   useEffect(() => {
//     const savedVote = localStorage.getItem(`duarte_vote_${BATCH_ID}`);
//     if (savedVote) {
//       setVotedFor(savedVote);
//       if (savedVote === 'A') setVotes(v => ({ ...v, demoA: v.demoA + 1 }));
//       if (savedVote === 'B') setVotes(v => ({ ...v, demoB: v.demoB + 1 }));
//     }
//   }, []);

//   const handleVote = (demo: 'A' | 'B') => {
//     if (votedFor) return;
//     localStorage.setItem(`duarte_vote_${BATCH_ID}`, demo);
//     setVotedFor(demo);
//     if (demo === 'A') setVotes(v => ({ ...v, demoA: v.demoA + 1 }));
//     if (demo === 'B') setVotes(v => ({ ...v, demoB: v.demoB + 1 }));
//   };

//   const totalVotes = votes.demoA + votes.demoB;
//   const percentA = Math.round((votes.demoA / totalVotes) * 100) || 0;
//   const percentB = Math.round((votes.demoB / totalVotes) * 100) || 0;

//   return (
//     <div className="py-4 text-center">
//       <h4 className="text-3xl md:text-4xl font-display mb-4 text-duarte-black">Qual deve ser o próximo lançamento?</h4>
//       <p className="text-gray-600 mb-10 text-lg">Ouça as demos exclusivas e deixe seu voto. A track mais votada será finalizada e lançada em breve!</p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
//         {/* Demo A */}
//         <div className={`bg-gray-50 p-6 rounded-2xl border-2 transition-colors ${votedFor === 'A' ? 'border-duarte-orange bg-orange-50/50' : 'border-transparent'}`}>
//           <div className="flex items-center justify-between mb-4">
//             <h5 className="font-display text-xl">ID - "Nightfall"</h5>
//             <span className="text-xs font-bold bg-gray-200 px-2 py-1 rounded text-gray-600">DEMO A</span>
//           </div>
          
//           <div className="mb-6">
//             <audio controls className="w-full h-10">
//               <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
//               Seu navegador não suporta áudio.
//             </audio>
//           </div>

//           {!votedFor ? (
//             <button 
//               onClick={() => handleVote('A')}
//               className="w-full py-3 bg-gray-900 text-white rounded-xl font-display hover:bg-duarte-orange transition-colors"
//             >
//               VOTAR NESTA TRACK
//             </button>
//           ) : (
//             <div className="space-y-2">
//               <div className="flex justify-end text-sm font-bold text-gray-700 mb-1">
//                 <span>{percentA}%</span>
//               </div>
//               <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   animate={{ width: `${percentA}%` }}
//                   className="h-full bg-duarte-orange"
//                 />
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Demo B */}
//         <div className={`bg-gray-50 p-6 rounded-2xl border-2 transition-colors ${votedFor === 'B' ? 'border-duarte-pool bg-teal-50/50' : 'border-transparent'}`}>
//           <div className="flex items-center justify-between mb-4">
//             <h5 className="font-display text-xl">ID - "Awakening"</h5>
//             <span className="text-xs font-bold bg-gray-200 px-2 py-1 rounded text-gray-600">DEMO B</span>
//           </div>
          
//           <div className="mb-6">
//             <audio controls className="w-full h-10">
//               <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
//               Seu navegador não suporta áudio.
//             </audio>
//           </div>

//           {!votedFor ? (
//             <button 
//               onClick={() => handleVote('B')}
//               className="w-full py-3 bg-gray-900 text-white rounded-xl font-display hover:bg-duarte-pool transition-colors"
//             >
//               VOTAR NESTA TRACK
//             </button>
//           ) : (
//             <div className="space-y-2">
//               <div className="flex justify-end text-sm font-bold text-gray-700 mb-1">
//                 <span>{percentB}%</span>
//               </div>
//               <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   animate={{ width: `${percentB}%` }}
//                   className="h-full bg-duarte-pool"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {votedFor && (
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mt-6 text-duarte-teal font-medium"
//         >
//           Obrigado pelo seu voto! Fique ligado nas redes sociais para o resultado.
//         </motion.p>
//       )}
//     </div>
//   );
// }

// function DecadeSection() {
//   return (
//     <section className="py-24 bg-white/80 backdrop-blur-lg relative">
//       <div className="max-w-5xl mx-auto px-4 content-relative text-center">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-4xl md:text-5xl font-display text-duarte-black mb-12"
//         >
//           Uma Década<br/>
//           <span className="text-duarte-teal">Incendiando Pistas</span>
//         </motion.h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {['ES', 'RJ', 'MG', 'BA'].map((state, i) => (
//             <motion.div 
//               key={state}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full font-display text-lg"
//             >
//               <MapPin className="w-5 h-5 text-duarte-orange" />
//               {state}
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
//           {['PERFECTLINE', 'TRIBE SOUNDS', 'ILLUSION SOUND'].map((fest, i) => (
//             <motion.div
//               key={fest}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-duarte-teal text-white py-6 px-4 rounded-2xl font-display text-xl tracking-wider shadow-lg"
//             >
//               {fest}
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="bg-gradient-to-r from-duarte-orange to-duarte-yellow p-1 rounded-2xl"
//         >
//           <div className="bg-white p-10 rounded-xl">
//             <Calendar className="w-12 h-12 text-duarte-orange mx-auto mb-4" />
//             <h3 className="text-2xl font-display mb-4">O Próximo Passo</h3>
//             <p className="text-xl text-gray-700">
//               <strong className="text-duarte-black">2026</strong> promete ser o ano mais prolífico da sua trajetória, com o maior volume de lançamentos autorais até hoje! 🔥🎧
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function FooterSection() {
//   return (
//     <footer className="bg-duarte-black/95 backdrop-blur-lg text-white py-16 relative">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
//         <h2 className="text-4xl font-display tracking-widest mb-8">DUARTE</h2>
        
//         <div className="mb-8">
//           <p className="text-white/60 mb-2 uppercase tracking-wider text-sm">Para Bookings e Informações</p>
//           <a href="mailto:contato@duartemusic.com" className="text-xl font-medium hover:text-duarte-orange transition-colors flex items-center gap-2 justify-center">
//             <Mail className="w-5 h-5" />
//             contato@duartemusic.com
//           </a>
//         </div>

//         {/* <div className="flex gap-6 mb-12">
//           {[Instagram, Youtube, Headphones, Disc3].map((Icon, i) => (
//             <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-duarte-orange transition-colors">
//               <Icon className="w-5 h-5" />
//             </a>
//           ))}
//         </div> */}

//         <p className="text-white/40 text-sm">
//           &copy; 2026 Duarte. Todos os direitos reservados.
//         </p>
//       </div>
//     </footer>
//   );
// }

// function AIChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([
//     { role: 'ai', text: 'E aí! Sou a IA do Duarte. Quer saber mais sobre a minha história, tracks ou agenda?' }
//   ]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;
    
//     const userMsg = input.trim();
//     setInput('');
//     setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
//     setIsLoading(true);

//     try {
//       const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
//       const systemInstruction = `Você é o assistente virtual do DJ e Produtor Duarte (Progressive Psy Trance). 
// Responda a perguntas sobre a carreira dele com base nestas informações:
// - Começou na música aos 14 anos (violão, contrabaixo, bandas de MPB e Heavy Metal).
// - Pausou para se dedicar à Engenharia.
// - Em 2012, descobriu a música eletrônica.
// - Em 2015, começou a carreira de DJ (Tribal House, Minimal, até Progressive Psy Trance).
// - Em 2020, produziu seu primeiro remix: "Runnin'" da Beyoncé.
// - Tem mais de 10 anos de discotecagem.
// - Tocou nos estados: ES, RJ, MG e BA.
// - Festivais: Perfectline, Tribe Sounds, Illusion Sound.
// - Criador e DJ residente da Festa Groove (projeto beneficente de mais de 7 anos, arrecada alimentos).
// - Estilo: Sets explosivos, harmônicos, cheios de groove, sonoridades melódicas.
// - Diferencial: Técnicas de mixagem, explorando ao máximo os equipamentos com produções autorais.
// - 2026 será o ano mais prolífico com maior volume de lançamentos autorais.
// Mantenha um tom amigável, enérgico, direto e apaixonado por música eletrônica. Seja conciso.`;

//       const response = await ai.models.generateContent({
//         model: 'gemini-3.1-pro-preview',
//         contents: userMsg,
//         config: {
//           systemInstruction,
//           thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
//         }
//       });

//       setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Desculpe, não consegui processar isso agora.' }]);
//     } catch (error) {
//       console.error(error);
//       setMessages(prev => [...prev, { role: 'ai', text: 'Ops, deu um erro na conexão. Tente novamente!' }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <button 
//         onClick={() => setIsOpen(true)}
//         className={`fixed bottom-6 right-6 w-14 h-14 bg-duarte-orange text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
//       >
//         <MessageSquare className="w-6 h-6" />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col"
//             style={{ maxHeight: 'calc(100vh - 48px)', height: '500px' }}
//           >
//             <div className="bg-duarte-black text-white p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-duarte-orange to-duarte-yellow flex items-center justify-center">
//                   <Headphones className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-display text-sm">Duarte AI</h3>
//                   <p className="text-xs text-white/60">Pergunte sobre a carreira</p>
//                 </div>
//               </div>
//               <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
//               {messages.map((msg, i) => (
//                 <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
//                     msg.role === 'user' 
//                       ? 'bg-duarte-orange text-white rounded-tr-none' 
//                       : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
//                   }`}>
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
//                     <Loader2 className="w-4 h-4 text-duarte-orange animate-spin" />
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
//               <input 
//                 type="text" 
//                 value={input}
//                 onChange={e => setInput(e.target.value)}
//                 onKeyDown={e => e.key === 'Enter' && handleSend()}
//                 placeholder="Pergunte algo..."
//                 className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-duarte-orange/50"
//               />
//               <button 
//                 onClick={handleSend}
//                 disabled={isLoading || !input.trim()}
//                 className="w-10 h-10 bg-duarte-orange text-white rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-orange-600 transition-colors"
//               >
//                 <Send className="w-4 h-4 ml-1" />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen font-sans text-duarte-black selection:bg-duarte-orange selection:text-white relative">
//       {/* Global Fixed Background */}
//       <div 
//         className="fixed inset-0 z-0"
//         style={{
//           backgroundImage: 'url("https://drive.google.com/thumbnail?id=1vOQOGFRtvz1RnUOmq0HATnB-w5Fvazil&sz=w2560")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
      
//       {/* Content Wrapper */}
//       <div className="relative z-10">
//         <HeroSection />
//         <EvolutionSection />
//         <RemixSection />
//         <OnStageSection />
//         <VideoSection />
//         <FestaGrooveSection />
//         <DecadeSection />
//         <FooterSection />
//         <AIChatWidget />
//       </div>
//     </div>
//   );
// }
