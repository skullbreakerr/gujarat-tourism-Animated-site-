import './style.css';

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

var tl = gsap.timeline()

tl.to(["#page1","#page2"],{
  y:"100vh",
  scale:0.6,
  duration:0
})
tl.to("#page1",{
  y:"0vh",
  scale:1,
  duration:1
})
tl.to("#page2",{
  y:"0vh",
  scale:1,
  duration:1.2
})
tl.to(["#page1","#page2"],{
  y:"30vh",
  scale:1.2,
  duration:1,
  delay:1
})
tl.to("#page1",{
  y:"0vh",
  rotate:360,
  scale:1,
  duration:1.8,
  delay:1
})
tl.to("#page2",{
  y:"0vh",
  rotate:360,
  scale:1,
  duration:1.8,
  delay:-1.7
})