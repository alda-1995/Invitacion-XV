// Splitting();

// let lenis;
// const initSmoothScrolling = () => {

//     lenis = new Lenis({
//         lerp: 0.2,
//         smooth: true
//     });

//     lenis.on('scroll', () => ScrollTrigger.update());

//     const scrollFn = (time) => {
//         lenis.raf(time);
//         requestAnimationFrame(scrollFn);
//     };

//     requestAnimationFrame(scrollFn);

// };


// const animationTextUpScroll = [...document.querySelectorAll('[data-splitting][data-effect-up]')];
// const animationTextUpInit = [...document.querySelectorAll('[data-splitting][data-effect-up-init]')];
// const animationTextBlurScroll = [...document.querySelectorAll('[data-splitting][data-effect-blur]')];
// const animationTextBlurInit = [...document.querySelectorAll('[data-splitting][data-effect-blur-init]')];

// const scroll = () => {
//     animationTextUpScroll.forEach(title => {
//         const chars = title.querySelectorAll('.char');
//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             yPercent: 100,
//             scaleY: 2.3,
//             scaleX: 0.7,
//             transformOrigin: '50% 0%'
//         },
//             {
//                 duration: 1,
//                 // ease: 'back.inOut(2)',
//                 ease: "power3.inOut",
//                 opacity: 1,
//                 yPercent: 0,
//                 scaleY: 1,
//                 scaleX: 1,
//                 stagger: 0.03,
//                 scrollTrigger: {
//                     trigger: title,
//                     start: 'top 70%',
//                     end: 'top 70%',
//                     // markers: true
//                 }
//             });
//     });
//     animationTextUpInit.forEach(title => {
//         const chars = title.querySelectorAll('.char');
//         gsap.fromTo(chars, {
//             'will-change': 'opacity, transform',
//             opacity: 0,
//             yPercent: 100,
//             scaleY: 2.3,
//             scaleX: 0.7,
//             transformOrigin: '50% 0%'
//         },
//             {
//                 duration: 2,
//                 // ease: 'back.inOut(2)',
//                 ease: "power3.inOut",
//                 opacity: 1,
//                 yPercent: 0,
//                 scaleY: 1,
//                 scaleX: 1,
//                 stagger: 0.03,
//                 delay: 0.5
//             });
//     });
//     animationTextBlurScroll.forEach(title => {
//         const chars = title.querySelectorAll('.char');
//         gsap.fromTo(chars, {
//             'will-change': 'opacity',
//             opacity: 0,
//         },
//             {
//                 duration: 0.2,
//                 ease: 'power1.inOut',
//                 opacity: 1,
//                 stagger: { each: 0.05 },
//                 scrollTrigger: {
//                     trigger: title,
//                     // start: 'top bottom',
//                     // end: 'center center',
//                     start: 'top 70%',
//                     end: 'top 70%',
//                     toggleActions: "play resume resume reset",
//                     markers: false,
//                     once: true
//                 }
//             });
//     });
//     animationTextBlurInit.forEach(title => {
//         const chars = title.querySelectorAll('.char');
//         gsap.fromTo(chars, {
//             'will-change': 'opacity',
//             opacity: 0,
//         },
//             {
//                 duration: 0.5,
//                 ease: 'power1.inOut',
//                 opacity: 1,
//                 stagger: { each: 0.05, from: 'random' },
//             });
//     });
// };

// initSmoothScrolling();
// scroll();


// var animacionNosotros = gsap.timeline();
// animacionNosotros.to('#text-line1', { opacity: 1, duration: 1 });
// animacionNosotros.to('#text-line1', { opacity: 0, duration: 1 });
// animacionNosotros.to('#plasta-line1', { clipPath: "circle(100% at 50% 50%)", duration: 1 });
// animacionNosotros.to('#text-line2', { opacity: 1, duration: 1 });
// animacionNosotros.to('#plasta-line2', { clipPath: "circle(100% at 50% 50%)", duration: 1 });
// animacionNosotros.to('#text-line3', { opacity: 1, duration: 1 });
// ScrollTrigger.create({
//     animation: animacionNosotros,
//     trigger: "#nosotros",
//     scrub: 1,
//     pin: true,
//     start: "top top",
//     // end: "bottom top",
//     end: "+=600",
//     markers: false,
//     pinSpacing: true
// });

