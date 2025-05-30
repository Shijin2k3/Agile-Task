import web from '../assets/web.png';
import ui from '../assets/ui.png';
import mobile from '../assets/mobile.png';
import cloud from '../assets/cloud.png';
import consult from '../assets/consulting.png';
import support from '../assets/support.png'


export const navItems = [
  { link: 'Home', path: 'home' },
  { link: 'About Us', path: 'about' },
  { link: 'Services', path: 'services' },
  { link: 'Contact', path: 'contact' }
];

export const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications tailored to your business needs.",
    icon: web,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces for a seamless experience.",
    icon: ui,
  },
  {
    title: "Mobile Apps",
    description: "Creating high-performance mobile applications for Android and iOS platforms.",
    icon: mobile,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services to power your digital transformation.",
    icon: cloud,
  },
  {
    title: "Consulting",
    description: "Expert advice to help you make the right technology decisions.",
    icon: consult,
  },
  {
    title: "Support & Maintenance",
    description: "Reliable support and maintenance to keep your systems running smoothly.",
    icon: support,
  },
]