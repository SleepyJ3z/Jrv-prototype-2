import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Menu, 
  X, 
  Layers, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Grid, 
  Armchair, 
  Blinds, 
  Paintbrush, 
  Wrench, 
  Truck, 
  Search, 
  Copy, 
  Check, 
  Filter,
  Heart,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

// Custom Brand Colors
const COLORS = {
  forestGreen: '#274E39',
  champagneGold: '#D4B565',
  champagneGoldDark: '#B8994B',
  surfaceWhite: '#FFFFFF',
  softSage: '#F4F7F4',
  darkSlate: '#1B2A22',
  mutedSage: '#D1DCD5',
  glassBg: 'rgba(255, 255, 255, 0.92)'
};

// Data for Directory Hub (JSON dynamic array)
const BUSINESS_NETWORK = [
  {
    id: 1,
    name: "JRV's Office Furnitures & Services",
    category: "Office Fit-Outs",
    desc: "Complete office fit-outs, commercial desking, blinds, floor coverings, and total workspace solutions.",
    viber: "09958798085",
    phone: "09688801272",
    email: "jrvofficefurnituresandservices@gmail.com",
    fbUrl: "https://www.facebook.com/profile.php?id=100090438433343",
    badge: "Flagship HQ",
    featured: true,
    services: ["Complete Fit-Outs", "Ergonomic Furniture", "Interior Solutions"]
  },
  {
    id: 2,
    name: "JRV Blinds & Window Coverings",
    category: "Supply & Materials",
    desc: "Premium combi shades, roller blinds, mini horizontal blinds, and automated sun-shading installations.",
    viber: "09958798085",
    phone: "09688801272",
    email: "jrvofficefurnituresandservices@gmail.com",
    fbUrl: "https://www.facebook.com/profile.php?id=100090438433343",
    badge: "Window Specialist",
    featured: false,
    services: ["Combi Shades", "Roller Blinds", "Motorized Systems"]
  },
  {
    id: 3,
    name: "JRV Flooring & Wall Coverings",
    category: "Supply & Materials",
    desc: "Heavy-duty commercial carpet tiles, acoustic carpet rolls, SPC flooring, vinyl planks, and designer wall panels.",
    viber: "09958798085",
    phone: "09688801272",
    email: "jrvofficefurnituresandservices@gmail.com",
    fbUrl: "https://www.facebook.com/profile.php?id=100090438433343",
    badge: "Surface Specialist",
    featured: false,
    services: ["Carpet Tiles", "SPC Click Vinyl", "Acoustic Wall Panels"]
  },
  {
    id: 4,
    name: "JRV Reupholstery & Hauling Services",
    category: "Specialized Services",
    desc: "Commercial sofa and chair re-covering, foam restoration, site clearing, and safe haulage services.",
    viber: "09958798085",
    phone: "09688801272",
    email: "jrvofficefurnituresandservices@gmail.com",
    fbUrl: "https://www.facebook.com/profile.php?id=100090438433343",
    badge: "Maintenance & Logistics",
    featured: false,
    services: ["Furniture Restoration", "Site Cleanout", "Decommissioning"]
  },
  {
    id: 5,
    name: "JRV Signs & Office Fit-Out Craft",
    category: "Office Fit-Outs",
    desc: "Custom acrylic signages, frosted glass films, minor wall partition builds, and tailored office carpentry.",
    viber: "09958798085",
    phone: "09688801272",
    email: "jrvofficefurnituresandservices@gmail.com",
    fbUrl: "https://www.facebook.com/profile.php?id=100090438433343",
    badge: "Branding & Signage",
    featured: false,
    services: ["Acrylic Logo Signs", "Glass Decals", "Modular Partitions"]
  },
  {
    id: 6,
    name: "JRV Corporate Workspace Express",
    category: "Specialized Services",
    desc: "Fast-track furniture assembly, office desk reconfiguration, emergency repairs, and provincial dispatch.",
    viber: "09958798085",
    phone: "09688801272",
    email: "jrvofficefurnituresandservices@gmail.com",
    fbUrl: "https://www.facebook.com/profile.php?id=100090438433343",
    badge: "Rapid Response",
    featured: false,
    services: ["Inter-office Transfer", "Desk Relocation", "Express Assembly"]
  }
];

// Product Services Catalog
const PRODUCT_CATEGORIES = [
  {
    id: 'window',
    title: 'Window Coverings',
    icon: Blinds,
    tagline: 'Light Control & Privacy Solutions',
    description: 'Transform office lighting and energy efficiency with custom-fitted window shades and blinds built for longevity.',
    items: ['Combi Shades (Zebra Blinds)', 'Blackout & Sheer Roller Blinds', 'Mini Horizontal Aluminum Blinds', 'Vertical Venetian Blinds'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'floor',
    title: 'Floor Coverings',
    icon: Layers,
    tagline: 'Durable Commercial Surfaces',
    description: 'High-traffic commercial flooring solutions engineered for comfort, sound insulation, and clean modern aesthetics.',
    items: ['Heavy-Duty Carpet Tiles & Rolls', 'SPC Rigid Core Click Flooring', 'Commercial Vinyl Planks', 'Laminated Wood Flooring'],
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wall',
    title: 'Wallcoverings & Panels',
    icon: Paintbrush,
    tagline: 'Elevated Interior Accents',
    description: 'Accentuate executive rooms and boardrooms with low-maintenance, stain-resistant wallpapers and acoustic wall panels.',
    items: ['Commercial Fabric Wallpapers', '3D Fluted Wall Panels', 'Acoustic Soundproofing Panels', 'Custom Wall Decals'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'office',
    title: 'Office Systems & Desking',
    icon: Armchair,
    tagline: 'Ergonomic Workspace Layouts',
    description: 'Modular workstation setups, executive desks, mesh ergonomic chairs, and space-maximizing storage cabinets.',
    items: ['Modular Cluster Workstations', 'Ergonomic Mesh Task Chairs', 'Acoustic Desk Partitions', 'Metal Pedestals & Wooden Storage'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renovation',
    title: 'Signages & Minor Renovations',
    icon: Wrench,
    tagline: 'Turnkey Branding & Fit-Outs',
    description: 'Custom corporate signage and precise civil/carpentry works to refresh your physical business footprint.',
    items: ['Custom 3D Acrylic Logo Signs', 'Frosted Glass Security Films', 'Drywall Partitions & Ceilings', 'Electrical & Minor Painting'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    icon: Truck,
    tagline: 'Reupholstery & Logistics',
    description: 'Extend the lifespan of your existing executive seating or clear space during relocations and fit-outs.',
    items: ['Commercial Chair Reupholstery', 'Leatherette & Fabric Repair', 'Office Decommissioning', 'Hauling & Site Disposal'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
  }
];

// Client Portfolio Projects
const CLIENT_PORTFOLIO = [
  {
    id: 1,
    client: "National Irrigation Administration (NIA)",
    location: "Cauayan City, Isabela",
    type: "Government Office Fit-Out",
    scope: "Complete window shades supply, modular desking layout, and heavy-duty carpet tile installation.",
    badge: "Government Partner",
    status: "Completed 100%"
  },
  {
    id: 2,
    client: "Bureau of Fisheries and Aquatic Resources (BFAR)",
    location: "Quezon City, Metro Manila",
    type: "Regional Headquarters Refurbishment",
    scope: "Window roller blinds installation, boardroom acoustic wall panels, and executive chair reupholstery.",
    badge: "Public Sector",
    status: "Completed 100%"
  },
  {
    id: 3,
    client: "Corporate IT Solutions Hub",
    location: "BGC, Taguig City",
    type: "Commercial Office Upgrade",
    scope: "60-seater open plan workstation cluster, SPC floor covering, and custom 3D acrylic brand signage.",
    badge: "Commercial Client",
    status: "Completed 100%"
  },
  {
    id: 4,
    client: "Logistics & Freight Services Firm",
    location: "Pasig City, Metro Manila",
    type: "Headquarters Expansion",
    scope: "Acoustic partitions, combi blinds, and heavy-duty metal storage file cabinets supply.",
    badge: "Private Corporate",
    status: "Completed 100%"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'businesses'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [directoryFilter, setDirectoryFilter] = useState('All');
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  
  // Interactive Quote Generator State
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    service: 'Window Blinds & Shades',
    location: '',
    name: '',
    phone: '',
    notes: ''
  });
  const [generatedModalOpen, setGeneratedModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Format pre-filled message
  const getFormattedMessage = () => {
    return `Hello JRV's Office Furnitures and Services! I would like to request an estimate/site inspection with the following details:

📍 Location: ${quoteData.location || 'Not specified'}
🏢 Service Required: ${quoteData.service}
👤 Contact Person: ${quoteData.name || 'Inquirer'}
📞 Phone/Viber: ${quoteData.phone || 'Not provided'}
📝 Project Notes / Dimensions: ${quoteData.notes || 'None provided'}

Thank you! I look forward to your quotation.`;
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(getFormattedMessage());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const filteredBusinesses = directoryFilter === 'All' 
    ? BUSINESS_NETWORK 
    : BUSINESS_NETWORK.filter(item => item.category === directoryFilter);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#1B2A22] antialiased selection:bg-[#D4B565] selection:text-[#274E39]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#274E39] text-[#D4B565] py-2 px-4 text-xs sm:text-sm border-b border-[#346349] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <a href="tel:09958798085" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>Viber: 0995-879-8085</span>
            </a>
            <a href="tel:09688801272" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>Smart: 0968-880-1272</span>
            </a>
            <a href="mailto:jrvofficefurnituresandservices@gmail.com" className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>jrvofficefurnituresandservices@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-100/90 bg-[#1E3E2D] px-2.5 py-0.5 rounded-full border border-emerald-600/30">
            <Clock className="w-3 h-3 text-[#D4B565]" />
            <span>Mon–Sat: Opens 8:00 AM</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVIGATION BAR */}
      <header className="sticky top-[37px] sm:top-[33px] z-40 bg-white/90 backdrop-blur-md border-b border-[#D1DCD5] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Brand Emblem */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="cursor-pointer flex items-center gap-3 group focus:outline-none"
          >
            {/* Custom Logo Emblem Motif */}
            <div className="w-11 h-11 rounded-xl bg-[#274E39] border-2 border-[#D4B565] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <Armchair className="w-6 h-6 text-[#D4B565]" />
                <Sparkles className="w-3 h-3 text-white absolute -top-1 -right-1" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-tight text-[#274E39] group-hover:text-[#1E3E2D] transition-colors">
                JRV'S
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C7132]">
                Office Furnitures & Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-medium text-sm">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'home' 
                  ? 'bg-[#F4F7F4] text-[#274E39] font-semibold border-b-2 border-[#D4B565]' 
                  : 'text-[#1B2A22] hover:text-[#274E39] hover:bg-[#F4F7F4]'
              }`}
            >
              Home
            </button>
            <a
              href="#products"
              onClick={(e) => {
                if (currentPage !== 'home') {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const el = document.getElementById('products');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-3.5 py-2 rounded-lg text-[#1B2A22] hover:text-[#274E39] hover:bg-[#F4F7F4] transition-colors"
            >
              Products & Services
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                if (currentPage !== 'home') {
                  setCurrentPage('home');
                  setTimeout(() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-3.5 py-2 rounded-lg text-[#1B2A22] hover:text-[#274E39] hover:bg-[#F4F7F4] transition-colors"
            >
              Project Showcase
            </a>
            <button
              onClick={() => setCurrentPage('businesses')}
              className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                currentPage === 'businesses' 
                  ? 'bg-[#F4F7F4] text-[#274E39] font-semibold border-b-2 border-[#D4B565]' 
                  : 'text-[#1B2A22] hover:text-[#274E39] hover:bg-[#F4F7F4]'
              }`}
            >
              <span>Our Businesses</span>
              <span className="bg-[#274E39] text-[#D4B565] text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                HUB
              </span>
            </button>
            <a
              href="#contact"
              className="px-3.5 py-2 rounded-lg text-[#1B2A22] hover:text-[#274E39] hover:bg-[#F4F7F4] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Primary Action Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://viber.click/09958798085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4B565] hover:bg-[#B8994B] text-[#274E39] px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5 border border-[#D4B565]/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on Viber</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#274E39] hover:bg-[#F4F7F4] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#D1DCD5] px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <button
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg font-medium text-[#274E39] hover:bg-[#F4F7F4]"
            >
              Home
            </button>
            <a
              href="#products"
              onClick={() => { setMobileMenuOpen(false); if (currentPage !== 'home') setCurrentPage('home'); }}
              className="block px-4 py-2.5 rounded-lg font-medium text-[#1B2A22] hover:bg-[#F4F7F4]"
            >
              Products & Services
            </a>
            <a
              href="#projects"
              onClick={() => { setMobileMenuOpen(false); if (currentPage !== 'home') setCurrentPage('home'); }}
              className="block px-4 py-2.5 rounded-lg font-medium text-[#1B2A22] hover:bg-[#F4F7F4]"
            >
              Project Showcase
            </a>
            <button
              onClick={() => { setCurrentPage('businesses'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2.5 rounded-lg font-medium text-[#274E39] hover:bg-[#F4F7F4]"
            >
              Our Businesses (Group Network)
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg font-medium text-[#1B2A22] hover:bg-[#F4F7F4]"
            >
              Contact Us
            </a>
            <div className="pt-2">
              <a
                href="https://viber.click/09958798085"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#D4B565] text-[#274E39] py-3 rounded-xl font-bold text-center shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on Viber (0995-879-8085)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CONDITIONAL RENDER BASED ON CURRENT PAGE */}
      {currentPage === 'home' ? (
        <main className="flex-grow">
          
          {/* HERO SECTION */}
          <section className="relative bg-gradient-to-b from-[#F4F7F4] via-white to-[#F4F7F4] pt-12 pb-20 overflow-hidden border-b border-[#D1DCD5]">
            {/* Background Decorative Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
              <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#D4B565]/20 blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#274E39]/10 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Left Text Content */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  
                  <div className="inline-flex items-center gap-2 bg-[#274E39]/10 border border-[#274E39]/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#274E39]">
                    <ShieldCheck className="w-4 h-4 text-[#D4B565]" />
                    <span>Trusted Office Fit-Out & Furnishings Specialist</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B2A22] leading-tight tracking-tight">
                    Complete Office Fit-Outs, <span className="text-[#274E39]">Furnishings</span> & Renovation Services
                  </h1>

                  <p className="text-base sm:text-lg text-[#1B2A22]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    From window shades to complete office systems — delivering quality workspace solutions across Metro Manila and nearby provinces with faith-anchored craftsmanship.
                  </p>

                  {/* Dual CTA Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                    <a
                      href="https://viber.click/09958798085"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4B565] hover:bg-[#B8994B] text-[#274E39] font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-base border border-[#D4B565]"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Inquire via Viber</span>
                    </a>
                    
                    <button
                      onClick={() => setCurrentPage('businesses')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#274E39] text-[#274E39] hover:text-white font-semibold px-7 py-3.5 rounded-xl border-2 border-[#274E39] transition-all text-base"
                    >
                      <Building2 className="w-5 h-5" />
                      <span>Explore Our Network</span>
                    </button>
                  </div>

                  {/* Quick Highlight Stats / Badges */}
                  <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#D1DCD5]/60 max-w-lg mx-auto lg:mx-0">
                    <div>
                      <div className="text-xl sm:text-2xl font-serif font-bold text-[#274E39]">100%</div>
                      <div className="text-xs text-[#1B2A22]/70">Direct Supply & Install</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-serif font-bold text-[#274E39]">Fast</div>
                      <div className="text-xs text-[#1B2A22]/70">Turnaround Time</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-serif font-bold text-[#274E39]">Metro Manila</div>
                      <div className="text-xs text-[#1B2A22]/70">& Provincial Scope</div>
                    </div>
                  </div>

                </div>

                {/* Hero Right Visual Showcase Grid */}
                <div className="lg:col-span-5">
                  <div className="relative">
                    {/* Main Featured Image Box with Gold Border Accent */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4B565] bg-white relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                        alt="Modern Office Setup by JRV" 
                        className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#274E39]/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                        <div className="text-xs font-semibold text-[#D4B565] uppercase tracking-wider">Featured Turnkey Fit-Out</div>
                        <div className="font-serif text-lg font-bold">Ergonomic Executive Desking & Blinds</div>
                      </div>
                    </div>

                    {/* Secondary Overlapping Cards */}
                    <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-xl border border-[#D1DCD5] items-center gap-3 max-w-xs">
                      <div className="w-10 h-10 rounded-lg bg-[#274E39] flex items-center justify-center text-[#D4B565]">
                        <Blinds className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#1B2A22]">Combi & Roller Blinds</div>
                        <div className="text-[11px] text-[#1B2A22]/70">Tailored Window Coverings</div>
                      </div>
                    </div>

                    <div className="hidden sm:flex absolute -top-6 -right-6 bg-white p-3.5 rounded-xl shadow-xl border border-[#D1DCD5] items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#D4B565] flex items-center justify-center text-[#274E39]">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#1B2A22]">Carpet & SPC Flooring</div>
                        <div className="text-[11px] text-[#1B2A22]/70">Heavy-Duty Commercial Grade</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 3. PRODUCTS & SERVICES SECTION */}
          <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <div className="inline-block bg-[#F4F7F4] text-[#274E39] text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-[#D1DCD5]">
                  Comprehensive Catalogue
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2A22]">
                  Products & Commercial Services
                </h2>
                <p className="text-[#1B2A22]/70 text-base">
                  High-quality materials, tailored manufacturing, and expert installation for government offices, private corporations, and commercial buildings.
                </p>
              </div>

              {/* Grid of 6 Interactive Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <div 
                      key={cat.id}
                      className="bg-white rounded-2xl border border-[#D1DCD5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:border-[#D4B565]"
                    >
                      {/* Image Header with Badge */}
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img 
                          src={cat.image} 
                          alt={cat.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-3 left-3 bg-[#274E39] text-[#D4B565] p-2 rounded-xl shadow-md border border-[#D4B565]/30">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="text-xs font-semibold text-[#D4B565]">{cat.tagline}</div>
                          <h3 className="text-xl font-serif font-bold">{cat.title}</h3>
                        </div>
                      </div>

                      {/* Card Content & Features List */}
                      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                        <p className="text-sm text-[#1B2A22]/80 leading-relaxed">
                          {cat.description}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-[#F4F7F4]">
                          <div className="text-xs font-bold text-[#274E39] uppercase tracking-wider">Key Offerings:</div>
                          <ul className="space-y-1.5">
                            {cat.items.map((item, idx) => (
                              <li key={idx} className="text-xs text-[#1B2A22]/80 flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4B565] flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Quick Action Bar */}
                        <div className="pt-4 flex items-center justify-between border-t border-[#D1DCD5]/60">
                          <button
                            onClick={() => setSelectedProductModal(cat)}
                            className="text-xs font-bold text-[#274E39] hover:text-[#8C7132] flex items-center gap-1 transition-colors"
                          >
                            <span>View Specifications</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                          
                          <a
                            href={`https://viber.click/09958798085`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-[#F4F7F4] hover:bg-[#274E39] hover:text-white text-[#274E39] text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors border border-[#D1DCD5]"
                          >
                            <span>Quick Inquire</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* 4. PROVEN CLIENT PORTFOLIO & FAITH VALUES */}
          <section id="projects" className="py-20 bg-[#F4F7F4] border-t border-b border-[#D1DCD5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              
              {/* Portfolio Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-block bg-white text-[#274E39] text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-[#D1DCD5]">
                  Track Record of Excellence
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2A22]">
                  Proven Client Portfolio & Completed Projects
                </h2>
                <p className="text-[#1B2A22]/70 text-base">
                  Trusted by major government institutions and private enterprises across Luzon for reliable supply and turn-key installation.
                </p>
              </div>

              {/* Client Showcase Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CLIENT_PORTFOLIO.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-2xl p-6 border border-[#D1DCD5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-[#274E39] text-[#D4B565] text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                      {item.badge}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#8C7132] font-semibold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#1B2A22]">
                        {item.client}
                      </h3>
                      <div className="text-xs font-semibold text-[#274E39] bg-[#F4F7F4] px-2.5 py-1 rounded-md inline-block">
                        {item.type}
                      </div>
                      <p className="text-sm text-[#1B2A22]/80 pt-2 leading-relaxed">
                        {item.scope}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#D1DCD5]/60 text-xs">
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-4 h-4 text-emerald-600" />
                        {item.status}
                      </span>
                      <span className="text-gray-400">Verified Fit-Out Project</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAITH & VALUES ACCENT CARDS */}
              <div className="pt-8">
                <div className="bg-[#274E39] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border-2 border-[#D4B565]/40">
                  
                  {/* Subtle Background Accent Pattern */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4B565]/10 rounded-full blur-2xl -mr-20 -mt-20 pointer-events-none"></div>

                  <div className="relative z-10 space-y-8 max-w-4xl mx-auto text-center">
                    
                    <div className="inline-flex items-center gap-2 bg-[#D4B565]/20 text-[#D4B565] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-[#D4B565]/30">
                      <Heart className="w-3.5 h-3.5" />
                      <span>Our Guiding Principles & Faith Values</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                      "Quality work built on trust, integrity, and consideration for every client we serve."
                    </h3>

                    {/* Scriptures Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      
                      <div className="bg-[#1E3E2D] p-6 rounded-2xl border border-[#D4B565]/30 space-y-3">
                        <div className="text-[#D4B565] font-serif italic text-lg sm:text-xl leading-relaxed">
                          "Let everyone see that you are considerate in all you do."
                        </div>
                        <div className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                          — Philippians 4:5
                        </div>
                      </div>

                      <div className="bg-[#1E3E2D] p-6 rounded-2xl border border-[#D4B565]/30 space-y-3">
                        <div className="text-[#D4B565] font-serif italic text-lg sm:text-xl leading-relaxed">
                          "Whatever you do, do it heartily, as to the Lord and not to men."
                        </div>
                        <div className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                          — Colossians 3:23
                        </div>
                      </div>

                    </div>

                    <div className="text-xs text-emerald-200/80 italic max-w-xl mx-auto">
                      At JRV's, every measurement, supply order, and installation is conducted with dedication, ensuring our commercial clients receive honest pricing and dependable service.
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 5. INTERACTIVE QUOTE / INQUIRY GENERATOR */}
          <section id="quote-generator" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="bg-[#F4F7F4] rounded-3xl p-6 sm:p-10 border border-[#D1DCD5] shadow-lg space-y-8">
                
                <div className="text-center space-y-2">
                  <span className="bg-[#274E39] text-[#D4B565] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Instant Quote Assistant
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B2A22]">
                    Get a Fast Project Estimate
                  </h2>
                  <p className="text-sm text-[#1B2A22]/70">
                    Fill in the details below to generate an instant, pre-formatted inquiry ready to send via Viber or Email.
                  </p>
                </div>

                {/* Wizard Form Steps */}
                <div className="space-y-6 bg-white p-6 rounded-2xl border border-[#D1DCD5]">
                  
                  {/* Step 1: Select Service */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#274E39]">
                      Step 1: Select Required Service / Product
                    </label>
                    <select
                      value={quoteData.service}
                      onChange={(e) => setQuoteData({ ...quoteData, service: e.target.value })}
                      className="w-full bg-[#F4F7F4] border border-[#D1DCD5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#274E39]"
                    >
                      <option value="Window Blinds & Shades (Combi, Roller, Venetian)">Window Blinds & Shades (Combi, Roller, Venetian)</option>
                      <option value="Floor Coverings (Carpet Tiles, SPC, Vinyl)">Floor Coverings (Carpet Tiles, SPC, Vinyl)</option>
                      <option value="Office Desking & Ergonomic Furniture">Office Desking & Ergonomic Furniture</option>
                      <option value="Reupholstery & Hauling Services">Reupholstery & Hauling Services</option>
                      <option value="Office Fit-Out / Minor Renovation / Signage">Office Fit-Out / Minor Renovation / Signage</option>
                      <option value="Multiple Products / Turnkey Fit-Out">Multiple Products / Turnkey Fit-Out</option>
                    </select>
                  </div>

                  {/* Step 2: Location */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#274E39]">
                      Step 2: Delivery & Installation Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Pasig City, BGC Taguig, Quezon City, Isabela, Cavite"
                      value={quoteData.location}
                      onChange={(e) => setQuoteData({ ...quoteData, location: e.target.value })}
                      className="w-full bg-[#F4F7F4] border border-[#D1DCD5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#274E39]"
                    />
                  </div>

                  {/* Step 3: Contact & Scope Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#274E39]">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Juan Dela Cruz / ACME Corp"
                        value={quoteData.name}
                        onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                        className="w-full bg-[#F4F7F4] border border-[#D1DCD5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#274E39]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#274E39]">
                        Phone or Viber Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 0917-XXX-XXXX"
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                        className="w-full bg-[#F4F7F4] border border-[#D1DCD5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#274E39]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#274E39]">
                      Project Scope Notes / Measurements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., 12 windows for combi blinds, 50 sqm carpet tile floor area, need site inspection on Thursday..."
                      value={quoteData.notes}
                      onChange={(e) => setQuoteData({ ...quoteData, notes: e.target.value })}
                      className="w-full bg-[#F4F7F4] border border-[#D1DCD5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#274E39]"
                    />
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={() => setGeneratedModalOpen(true)}
                    className="w-full bg-[#274E39] hover:bg-[#1E3E2D] text-[#D4B565] font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-base border border-[#D4B565]/40"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Pre-Formatted Inquiry Message</span>
                  </button>

                </div>

              </div>

            </div>
          </section>

        </main>
      ) : (
        /* PAGE 2: MULTI-BUSINESS DIRECTORY HUB (/our-businesses) */
        <main className="flex-grow bg-[#F4F7F4] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D1DCD5] shadow-xs text-center space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#274E39]/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 bg-[#274E39] text-[#D4B565] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Grid className="w-3.5 h-3.5" />
                <span>Group Network Directory</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B2A22]">
                The JRV Group Network
              </h1>

              <p className="text-base sm:text-lg text-[#1B2A22]/70 max-w-2xl mx-auto">
                Explore our specialized service units, material supply divisions, and partner businesses dedicated to seamless commercial fit-outs across Metro Manila.
              </p>
            </div>

            {/* Category Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl border border-[#D1DCD5] shadow-xs max-w-2xl mx-auto">
              {['All', 'Office Fit-Outs', 'Supply & Materials', 'Specialized Services'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setDirectoryFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    directoryFilter === cat
                      ? 'bg-[#274E39] text-[#D4B565] shadow-sm'
                      : 'text-[#1B2A22]/80 hover:bg-[#F4F7F4] hover:text-[#274E39]'
                  }`}
                >
                  {cat === 'All' ? 'All Businesses' : cat}
                </button>
              ))}
            </div>

            {/* Directory Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-white rounded-2xl p-6 border border-[#D1DCD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1 hover:border-[#D4B565] group relative"
                >
                  {/* Card Header & Badge */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#274E39] text-[#D4B565] text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {biz.category}
                      </span>
                      <span className="text-xs font-semibold text-[#8C7132] bg-[#F4F7F4] px-2 py-0.5 rounded border border-[#D1DCD5]">
                        {biz.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#1B2A22] group-hover:text-[#274E39] transition-colors">
                      {biz.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1B2A22]/80 leading-relaxed">
                      {biz.desc}
                    </p>

                    {/* Service Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {biz.services.map((s, idx) => (
                        <span key={idx} className="text-[10px] bg-[#F4F7F4] text-[#274E39] font-medium px-2 py-0.5 rounded border border-[#D1DCD5]">
                          • {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="space-y-3 pt-3 border-t border-[#D1DCD5]/60 text-xs">
                    <div className="flex items-center justify-between text-[#1B2A22]/80">
                      <span className="font-medium">Direct Viber:</span>
                      <a href={`tel:${biz.viber}`} className="font-bold text-[#274E39] hover:underline">
                        {biz.viber}
                      </a>
                    </div>

                    {/* Quick Action Bar Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href="https://viber.click/09958798085"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 bg-[#274E39] text-[#D4B565] py-2 rounded-xl text-xs font-bold hover:bg-[#1E3E2D] transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Viber Chat</span>
                      </a>

                      <a
                        href={biz.fbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 bg-[#F4F7F4] text-[#1B2A22] py-2 rounded-xl text-xs font-bold hover:bg-[#D1DCD5] transition-colors border border-[#D1DCD5]"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#274E39]" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Return to Main Page CTA */}
            <div className="text-center pt-8">
              <button
                onClick={() => setCurrentPage('home')}
                className="inline-flex items-center gap-2 bg-white text-[#274E39] border border-[#274E39] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#274E39] hover:text-white transition-all"
              >
                <span>← Back to Main Showcase</span>
              </button>
            </div>

          </div>
        </main>
      )}

      {/* MODAL: PRODUCT SPECIFICATIONS / DETAILS */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#D4B565] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#8C7132] uppercase tracking-wider">
                {selectedProductModal.tagline}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#274E39]">
                {selectedProductModal.title}
              </h3>
            </div>

            <p className="text-sm text-[#1B2A22]/80 leading-relaxed">
              {selectedProductModal.description}
            </p>

            <div className="space-y-2 bg-[#F4F7F4] p-4 rounded-xl border border-[#D1DCD5]">
              <div className="text-xs font-bold text-[#274E39] uppercase">Product Specifications & Scope:</div>
              <ul className="space-y-2">
                {selectedProductModal.items.map((it, idx) => (
                  <li key={idx} className="text-xs text-[#1B2A22] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4B565]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProductModal(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1B2A22] hover:bg-gray-100"
              >
                Close
              </button>
              <a
                href="https://viber.click/09958798085"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#D4B565] text-[#274E39] rounded-xl text-xs font-bold hover:bg-[#B8994B] flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via Viber</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: GENERATED QUOTE RESULT */}
      {generatedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#D4B565] relative">
            <button
              onClick={() => setGeneratedModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#274E39] bg-[#F4F7F4] px-2.5 py-1 rounded-md">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Message Ready</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1B2A22]">
                Your Pre-Formatted Inquiry
              </h3>
            </div>

            <div className="bg-[#F4F7F4] p-4 rounded-xl border border-[#D1DCD5] font-mono text-xs text-[#1B2A22] whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
              {getFormattedMessage()}
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopyMessage}
                className="w-full flex items-center justify-center gap-2 bg-[#F4F7F4] hover:bg-[#D1DCD5] text-[#1B2A22] font-semibold py-2.5 rounded-xl text-xs transition-colors border border-[#D1DCD5]"
              >
                {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedText ? 'Copied to Clipboard!' : 'Copy Text to Clipboard'}</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`https://viber.click/09958798085`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D4B565] hover:bg-[#B8994B] text-[#274E39] font-bold py-3 rounded-xl text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via Viber</span>
                </a>

                <a
                  href={`mailto:jrvofficefurnituresandservices@gmail.com?subject=Inquiry: ${encodeURIComponent(quoteData.service)}&body=${encodeURIComponent(getFormattedMessage())}`}
                  className="flex items-center justify-center gap-2 bg-[#274E39] hover:bg-[#1E3E2D] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 6. GLOBAL FOOTER */}
      <footer id="contact" className="bg-[#274E39] text-white border-t-4 border-[#D4B565] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* Column 1: Brand & Identity */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E3E2D] border-2 border-[#D4B565] flex items-center justify-center">
                  <Armchair className="w-5 h-5 text-[#D4B565]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-white">
                    JRV'S OFFICE FURNITURES & SERVICES
                  </div>
                  <div className="text-xs text-[#D4B565] font-semibold">
                    Quality Work Built On Trust
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
                Providing complete office fit-outs, commercial window coverings, carpet tiles, ergonomic desking systems, and specialized reupholstery across Metro Manila and Luzon.
              </p>

              <div className="pt-2 text-xs text-emerald-200/90 font-mono">
                📍 Operating Hours: Mon–Sat: 8:00 AM – 6:00 PM
              </div>
            </div>

            {/* Column 2: Direct Contacts */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#D4B565]">
                Direct Contact & Inquiries
              </h4>

              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/90">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D4B565] flex-shrink-0" />
                  <span>Viber: </span>
                  <a href="tel:09958798085" className="font-semibold underline hover:text-white">
                    0995-879-8085
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D4B565] flex-shrink-0" />
                  <span>Sun/Smart: </span>
                  <a href="tel:09688801272" className="font-semibold underline hover:text-white">
                    0968-880-1272
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#D4B565] flex-shrink-0 mt-0.5" />
                  <a href="mailto:jrvofficefurnituresandservices@gmail.com" className="hover:underline break-all">
                    jrvofficefurnituresandservices@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <ExternalLink className="w-4 h-4 text-[#D4B565] flex-shrink-0 mt-0.5" />
                  <a 
                    href="https://www.facebook.com/profile.php?id=100090438433343" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline text-[#D4B565] font-semibold"
                  >
                    Official Facebook Page
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Physical Address & Map Code */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#D4B565]">
                Physical Office & Warehouse
              </h4>

              <div className="text-xs text-emerald-100/90 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4B565] flex-shrink-0 mt-0.5" />
                <span>
                  Block 4 Lot 1 Jacob Street, Centennial 2B, Nagpayong, 71 Jacob St, Pasig, 1602 Metro Manila (G4W2+2W Pasig)
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Pasig+1602+Metro+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1E3E2D] hover:bg-[#152C20] text-[#D4B565] text-xs font-semibold px-3 py-2 rounded-lg border border-[#D4B565]/30 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
            <div>
              © {new Date().getFullYear()} JRV's Office Furnitures and Services. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#D4B565]">Philippians 4:5</span>
              <span>•</span>
              <span className="text-[#D4B565]">Colossians 3:23</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}