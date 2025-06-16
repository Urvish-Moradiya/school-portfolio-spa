
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import About from './components/About';
import AcademicPrograms from './components/AcademicPrograms';
import CampusLife from './components/CampusLife';
import NewsEvents from './components/NewsEvents';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import ContactStrip from './components/ContactStrip';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import InquiryForm from './components/InquiryForm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  grade: string;
  message: string;
}

interface QuickLink {
  title: string;
  icon: string;
  description: string;
  link: string;
}

interface AcademicProgram {
  title: string;
  icon: string;
  description: string;
  grades: string;
  link: string;
}

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
}

interface NewsEvent {
  date: string;
  category: string;
  title: string;
  image: string;
  excerpt: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const heroRef = React.useRef<HTMLElement>(null!);
  const quickLinksRef = React.useRef<HTMLElement>(null!);
  const aboutRef = React.useRef<HTMLElement>(null!);
  const academicsRef = React.useRef<HTMLElement>(null!);
  const campusRef = React.useRef<HTMLElement>(null!);
  const newsRef = React.useRef<HTMLElement>(null!);
  const testimonialsRef = React.useRef<HTMLElement>(null!);
  const admissionsRef = React.useRef<HTMLElement>(null!);
  const contactRef = React.useRef<HTMLElement>(null!);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showInquiryForm, setShowInquiryForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    grade: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowInquiryForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      grade: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks: QuickLink[] = [
    {
      title: 'Academics',
      icon: 'fa-solid fa-graduation-cap',
      description: 'Explore our curriculum and programs',
      link: '#academics'
    },
    {
      title: 'Campus Life',
      icon: 'fa-solid fa-school',
      description: 'Discover student activities and facilities',
      link: '#campus'
    },
    {
      title: 'Admissions',
      icon: 'fa-solid fa-clipboard-list',
      description: 'Learn about the enrollment process',
      link: '#admissions'
    },
    {
      title: 'News & Events',
      icon: 'fa-solid fa-calendar-alt',
      description: 'Stay updated with school happenings',
      link: '#news'
    }
  ];

  const academicPrograms: AcademicProgram[] = [
    {
      title: 'Elementary School',
      icon: 'fa-solid fa-child',
      description: 'Foundation years focusing on core skills development and creative exploration',
      grades: 'Grades K-5',
      link: '#elementary'
    },
    {
      title: 'Middle School',
      icon: 'fa-solid fa-book-reader',
      description: 'Transitional years building academic rigor and personal development',
      grades: 'Grades 6-8',
      link: '#middle'
    },
    {
      title: 'High School',
      icon: 'fa-solid fa-user-graduate',
      description: 'College preparatory curriculum with specialized tracks and electives',
      grades: 'Grades 9-12',
      link: '#high'
    },
    {
      title: 'International Baccalaureate',
      icon: 'fa-solid fa-globe',
      description: 'Rigorous international curriculum fostering global perspectives and critical thinking',
      grades: 'Grades 11-12',
      link: '#ib'
    },
    {
      title: 'STEM Program',
      icon: 'fa-solid fa-microscope',
      description: 'Advanced science and technology focused curriculum with hands-on projects',
      grades: 'All Grades',
      link: '#stem'
    },
    {
      title: 'Arts & Music',
      icon: 'fa-solid fa-palette',
      description: 'Comprehensive visual and performing arts education for creative expression',
      grades: 'All Grades',
      link: '#arts'
    }
  ];

const campusGallery: GalleryItem[] = [
  {
    id: 1,
    category: 'sports',
    title: 'Olympic-sized Swimming Pool',
    image: 'https://images.unsplash.com/photo-1596593672261-9e82717221ad',
    description: 'Our Olympic-sized pool hosts competitive swimming and recreational activities.'
  },
  {
    id: 2,
    category: 'sports',
    title: 'Soccer Field',
    image: 'https://images.unsplash.com/photo-1546717003-caee5f93a9db',
    description: 'A state-of-the-art soccer field for training and matches.'
  },
  {
    id: 3,
    category: 'arts',
    title: 'Performing Arts Theater',
    image: 'https://images.unsplash.com/photo-1539964604210-db87088e0c2c',
    description: 'A world-class theater for drama, music, and dance performances.'
  },
  {
    id: 4,
    category: 'arts',
    title: 'Art Studio',
    image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07',
    description: 'Spacious studios equipped for painting, sculpture, and digital arts.'
  },
  {
    id: 5,
    category: 'labs',
    title: 'Science Laboratory',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac',    
    description: 'Cutting-edge labs for hands-on experiments in physics, chemistry, and biology.'
  },
  {
    id: 6,
    category: 'labs',
    title: 'Robotics Lab',
    image: 'https://images.unsplash.com/photo-1696835196629-ebfe1fb68f32',   
     description: 'A dedicated space for robotics and engineering projects.'
  },
  {
    id: 7,
    category: 'events',
    title: 'Cultural Festival',
    image: 'https://images.unsplash.com/photo-1622831877966-18a6c8731a01',
    description: 'Annual festival celebrating diversity with performances and food.'
  },
  {
    id: 8,
    category: 'events',
    title: 'Science Fair',
    image: 'https://images.unsplash.com/photo-1493528237448-144452699e16',
    description: 'Showcasing student innovations and scientific discoveries.'
  },
  {
    id: 9,
    category: 'sports',
    title: 'Indoor Basketball Court',
    image: 'https://images.unsplash.com/photo-1572454181157-0b40dd7667fe',
    description: 'A modern indoor court for basketball games and physical education classes.'
  },
  {
    id: 10,
    category: 'arts',
    title: 'Music Rehearsal Room',
    image: 'https://images.unsplash.com/photo-1651339764881-54e8338b185b',
    description: 'A soundproof space for band, orchestra, and choir rehearsals.'
  },
  {
    id: 11,
    category: 'labs',
    title: 'Computer Science Lab',
    image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba',
    description: 'Equipped with the latest technology for coding and software development.'
  },
  {
    id: 12,
    category: 'events',
    title: 'Annual Talent Show',
    image: 'https://images.unsplash.com/photo-1724390265310-a4814e561d38',  
      description: 'A showcase of student talents in music, dance, and more.'
  }
];

  const newsEvents: NewsEvent[] = [
    {
      date: 'June 10, 2025',
      category: 'Event',
      title: 'Annual Cultural Festival 2025',
      image: 'https://images.unsplash.com/photo-1732971856110-6367a9a25303',
      excerpt: 'Join us for a vibrant celebration of diversity with performances, food, and cultural exhibits.'
    },
    {
      date: 'May 15, 2025',
      category: 'Achievement',
      title: 'Students Win National Robotics Competition',
      image: 'https://images.unsplash.com/photo-1646268998628-06011da83c18',
      excerpt: 'Our robotics team secured first place in the national championship, showcasing innovation and teamwork.'
    },
    {
      date: 'April 20, 2025',
      category: 'Academic',
      title: 'New IB Diploma Program Launched',
      image: 'https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f',
      excerpt: 'We are excited to announce the launch of our International Baccalaureate Diploma Program for 2025-2026.'
    },
    {
      date: 'March 5, 2025',
      category: 'Sports',
      title: 'Girls Soccer Team Wins Regional Championship',
      image: 'https://images.unsplash.com/photo-1525088068454-ff2c453e50e9',
      excerpt: 'Our girls soccer team clinched the regional title with an undefeated season.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: 'International Academy provided me with an unparalleled education and lifelong friendships.',
      name: 'Sarah Johnson',
      role: 'Alumni, Class of 2023',
      avatar: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98'
    },
    {
      quote: 'The teachers here are incredibly supportive and truly care about each student’s success.',
      name: 'Michael Chen',
      role: 'Parent',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    },
    {
      quote: 'The diverse community at IA has opened my eyes to new perspectives and cultures.',
      name: 'Aisha Khan',
      role: 'Current Student, Grade 11',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    },
    {
      quote: 'IA’s extracurricular programs helped me discover my passion for robotics.',
      name: 'James Rodriguez',
      role: 'Current Student, Grade 12',
      avatar: 'https://images.unsplash.com/photo-1736194689767-9e3c4e7bd7f6'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header
        isScrolled={isScrolled}
        setShowInquiryForm={setShowInquiryForm}
      />
      <main>
        <Hero heroRef={heroRef} />
        <QuickLinks quickLinksRef={quickLinksRef} quickLinks={quickLinks} />
        <About aboutRef={aboutRef} />
        <AcademicPrograms academicsRef={academicsRef} academicPrograms={academicPrograms} />
        <CampusLife
          campusRef={campusRef}
          campusGallery={campusGallery}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <NewsEvents newsRef={newsRef} newsEvents={newsEvents} />
        <Testimonials testimonialsRef={testimonialsRef} testimonials={testimonials} />
        <Admissions admissionsRef={admissionsRef} />
        <ContactStrip />
        <Contact contactRef={contactRef} />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
      <InquiryForm
        showInquiryForm={showInquiryForm}
        setShowInquiryForm={setShowInquiryForm}
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default App;
