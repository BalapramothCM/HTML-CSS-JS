// Site Data

const SITE = {
  company: {
    name:     "World Vision",
    subtitle: "Ophthalmic Pvt. Ltd.",
    logo:     "../Multimedia/WVO_Logo1.png",
    email:    "info@worldvisionophthalmic.com",
    phone:    "+91 98765 43210",
    address:  "Chennai, Tamil Nadu, India",
    hours:    "Mon–Sat, 9AM – 6PM IST",
    whatsapp: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",
  },

  nav: {
    links: [
      { label: "Home",       href: "../Pages/index.html",     page: "index"     },
      { label: "Gallery",    href: "../Pages/gallery.html",   page: "gallery"   },
      // { label: "Blog",       href: "#blog",                   page: "blog"      },
      { label: "About Us",   href: "../Pages/aboutUs.html",   page: "about"     },
      { label: "Contact Us", href: "../Pages/contactUs.html", page: "contactUs" },
    ],
    events: {
    eyebrow:   "What's On",
    heading:   "Upcoming",
    headingEm: "Events",
    sub:       "Join us at global ophthalmic conferences, live surgical workshops, and distributor meets — stay ahead in the field.",
    items: [
      {
        date:     { day: "14", month: "Aug", year: "2026" },
        tag:      "Conference",
        tagColor: "blue",
        title:    "AIOS Annual Congress 2026",
        location: "Mumbai, Maharashtra",
        desc:     "World Vision presents the latest advances in hydrophobic IOL technology at India's largest ophthalmic conference.",
        badge:    "Exhibiting",
      },
      {
        date:     { day: "22", month: "Sep", year: "2026" },
        tag:      "Workshop",
        tagColor: "teal",
        title:    "Wet Lab — Foldable IOL Techniques",
        location: "Chennai, Tamil Nadu",
        desc:     "Hands-on surgical wet lab for ophthalmologists. Limited seats. Learn phaco and implantation best practices.",
        badge:    "Free Entry",
      },
      {
        date:     { day: "10", month: "Oct", year: "2026" },
        tag:      "Expo",
        tagColor: "violet",
        title:    "ESCRS Congress — Barcelona",
        location: "Barcelona, Spain",
        desc:     "Meet our international team at ESCRS 2026. Explore our full IOL portfolio and discuss global distribution.",
        badge:    "Booth A-24",
      },
    ],
  },

  reviews: {
    eyebrow:   "Trusted By Surgeons",
    heading:   "What our",
    headingEm: "clients say",
    sub:       "Feedback from ophthalmologists and distributors who trust World Vision IOLs in their practice.",
    items: [
      {
        name:     "Dr. Rajesh Menon",
        role:     "Senior Ophthalmologist",
        location: "AIIMS, New Delhi",
        rating:   5,
        text:     "World Vision's hydrophobic IOLs have consistently delivered zero glistening cases across 200+ implants. The optical clarity and UV protection are outstanding — I recommend them to all my colleagues.",
        avatar:   "RM",
        color:    "blue",
      },
      {
        name:     "Dr. Anita Krishnan",
        role:     "Cataract Surgeon",
        location: "Aravind Eye Hospital, Coimbatore",
        rating:   5,
        text:     "Exceptional build quality and packaging. The pre-loaded injector system makes surgeries significantly faster. Support from the World Vision team is always prompt and professional.",
        avatar:   "AK",
        color:    "teal",
      },
      {
        name:     "Mr. Ibrahim Al-Farsi",
        role:     "Medical Equipment Distributor",
        location: "Dubai, UAE",
        rating:   5,
        text:     "We've been distributing World Vision IOLs across the GCC for 3 years. Regulatory documentation is always complete, shipments are on time, and the product quality speaks for itself.",
        avatar:   "IA",
        color:    "violet",
      },
      {
        name:     "Dr. Priya Chandrasekhar",
        role:     "Vitreoretinal Surgeon",
        location: "Sankara Nethralaya, Chennai",
        rating:   5,
        text:     "The PMMA lens range offers great value without compromising on quality. Biocompatibility is excellent and the haptic design ensures stable positioning post-op.",
        avatar:   "PC",
        color:    "amber",
      },
      {
        name:     "Dr. Mohammed Rashid",
        role:     "Ophthalmologist",
        location: "King Fahad Hospital, Riyadh",
        rating:   5,
        text:     "We switched to World Vision IOLs two years ago and haven't looked back. Consistent quality batch after batch, with detailed IFU documentation that makes regulatory compliance easy.",
        avatar:   "MR",
        color:    "blue",
      },
    ],
  },

  cta: {
      label: "Toric Calculator",
      href:  "../Pages/toricCalculator.html",
      icon:  "fa-calculator",
    },
    products: {
      label: "Our Products",
      // Pages that belong under the Products dropdown — used for active-nav detection
      pages: ["iol-page","hydrophobicIol","hydrophilicIol","pmmaIol","premiumIol","pharmaProducts","microSurgicalBlades"],
      children: [
        {
          label: "Intraocular Lens",
          href:  "../Pages/iol-page.html",
          icon:  "fa-eye",
          color: "var(--neu-accent2)",
          children: [
            { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-blue-400"  },
            { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html", icon: "fa-shield-halved",      color: "text-teal-400"  },
            { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html",       icon: "fa-circle-half-stroke", color: "text-amber-400" },
          ],
        },
        { label: "Premium IOL", href: "../Pages/premiumIol.html", icon: "fa-star-of-life", color: "var(--neu-accent2)" },
        {
          label: "Pharma Products",
          href:  "../Pages/pharmaProducts.html",
          icon:  "fa-capsules",
          color: "var(--neu-accent2)",
          children: [
            { label: "World Vision Chol",  href: "../Pages/pharmaChol.html", icon: "fa-flask",   color: "text-purple-400" },
            { label: "World Vision TBlue", href: "../Pages/pharmaTBlue.html", icon: "fa-flask",   color: "text-blue-400"   },
            { label: "World Vision Visc",  href: "../Pages/pharmaVisc.html", icon: "fa-droplet", color: "text-teal-400"   },
          ],
        },
        {
          label: "Micro Surgical Blades",
          href:  "#",
          icon:  "fa-cut",
          color: "var(--neu-accent2)",
          children: [
            { label: "Keratome",  href: "../Pages/keratome.html", icon: "fa-pen-fancy",          color: "text-slate-500" },
            { label: "Crescent",  href: "../Pages/crescent.html", icon: "fa-moon",               color: "text-blue-400"  },
            { label: "Lance Ip",  href: "../Pages/lancelp.html", icon: "fa-staff-snake",        color: "text-amber-400" },
            { label: "MVR Blade", href: "../Pages/mvrBlade.html", icon: "fa-diamond-turn-right", color: "text-red-400"   },
          ],
        },
      ],
    },
    mobile: {
      // VIEW 1 — main links
      main: [
        { label: "Home",             href: "../Pages/index.html",           page: "index"           },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html", page: "toricCalculator" },
        { label: "Gallery",          href: "../Pages/gallery.html",         page: "gallery"         },
        { label: "About",            href: "../Pages/aboutUs.html",         page: "about"           },
        { label: "Contact",          href: "../Pages/contactUs.html",       page: "contactUs"       },
      ],
      // VIEW 2 — products sub-menu
      products: {
        back:     { label: "Our Products" },
        iol:      { label: "Intraocular Lens",      icon: "fa-eye",        color: "text-[#0055a5]" },
        pharma:   { label: "Pharma Products",       icon: "fa-capsules",   color: "text-[#0055a5]" },
        blade:    { label: "Micro Surgical Blades", icon: "fa-cut",      color: "text-[#0055a5]" },
        children: [
          { label: "Premium IOL", href: "../Pages/premiumIol.html", icon: "fa-star-of-life", color: "text-[#0055a5]" },
        ],
      },
      // VIEW 3 — IOL sub-menu
      iol: {
        back:  { label: "Intraocular Lens" },
        children: [
          { label: "Hydrophobic IOL", href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-[#0055a5]" },
          { label: "Hydrophilic IOL", href: "../Pages/hydrophilicIOL.html",                            icon: "fa-shield-halved",      color: "text-teal-500"  },
          { label: "PMMA IOL",        href: "../Pages/pmmaIOL.html",                            icon: "fa-circle-half-stroke", color: "text-amber-500" },
        ],
      },
      // VIEW 4 — Pharma sub-menu
      pharma: {
        back:  { label: "Pharma Products" },
        children: [
          { label: "World Vision Chol",  href: "../Pages/pharmaChol.html", icon: "fa-flask",   color: "text-purple-500" },
          { label: "World Vision TBlue", href: "../Pages/pharmaTBlue.html", icon: "fa-flask",   color: "text-blue-500"   },
          { label: "World Vision Visc",  href: "../Pages/pharmaVisc.html", icon: "fa-droplet", color: "text-teal-500"   },
        ],
      },
      // VIEW 5 — Blades sub-menu
      blade: {
        back:  { label: "Surgical Blades" },
        children: [
          { label: "Keratome",  href: "../Pages/keratome.html", icon: "fa-pen-fancy",          color: "text-slate-500" },
          { label: "Crescent",  href: "../Pages/crescent.html", icon: "fa-moon",               color: "text-blue-500"  },
          { label: "Lance Ip",  href: "../Pages/lancelp.html", icon: "fa-staff-snake",        color: "text-amber-500" },
          { label: "MVR Blade", href: "../Pages/mvrBlade.html", icon: "fa-diamond-turn-right", color: "text-red-500"   },
        ],
      },
    },
  },

  hero: [
    {
      tag:   "Featured Product",
      title: "World Vision",
      em:    "Lens Pro",
      sub:   "Advanced clarity with reduced glare. Medical-grade acrylic engineered for everyday surgical precision.",
      img:   "../Multimedia/wv_hero_1.png",
      alt:   "World Vision Lens Pro",
      cta:   { label: "View Product", href: "#" },
    },
    {
      tag:   "New Arrival",
      title: "World Vision",
      em:    "Lens Plus",
      sub:   "Precision-engineered optics for superior visual accuracy. UV absorber and blue-light filtering built in.",
      img:   "../Multimedia/wv_hero_2.png",
      alt:   "World Vision Lens Plus",
      cta:   { label: "View Product", href: "#" },
    },
  ],

  stats: [
    { icon: "fa-flask-vial",     num: "22 +", label: "Lens Variants"    },
    { icon: "fa-certificate",    num: "ISO", label: "Certified Quality" },
    { icon: "fa-globe",          num: "40 +", label: "Countries Served"  },
    { icon: "fa-calendar-check", num: "15 +", label: "Years Experience"  },
  ],

  products: {
    eyebrow:   "Our Range",
    heading:   "Precision lenses for",
    headingEm: "every need",
    sub:       "Medical-grade materials sourced from the USA and Europe — engineered for every surgical requirement.",
    cards: [
      { href: "../Pages/iol-page.html", img: "../Multimedia/hydrophilic_fold1.png",  alt: "IOL",      tag: "IOL",         title: "Intraocular Lenses",    desc: "Hydrophobic, Hydrophilic & PMMA. UV absorber, blue-light filter, zero glistening." },
      { href: "../Pages/PharmaProducts.html", img: "../Multimedia/pharamaHero1.png",  alt: "Pharma", tag: "Pharma Product", title: "Pharma Products",  desc: "Same medical-grade technology, engineered specifically for animal eye surgery" },
      { href: "../Pages/keratome.html", img: "../Multimedia/msBlade_blunt.png", alt: "blade",      tag: "Surgical Blade",  title: "Surgical Blade",        desc: "Best in class surgical blades for precise procedures." },
    ],
  },

  features: {
    eyebrow:   "Why Us",
    heading:   "Built on",
    headingEm: "trust & precision",
    cards: [
      { icon: "fa-shield-halved", color: "blue",   title: "Medical Grade Materials", desc: "Raw materials imported from certified suppliers in the USA and UK — no compromise on biocompatibility."},
      { icon: "fa-microscope",    color: "teal",   title: "Precision Engineering",   desc: "High MTF ratings and low refractive index deliver exceptional light transmission — minimising glare post-surgery."},
      { icon: "fa-earth-asia",    color: "violet", title: "Global Distribution",     desc: "Trusted by surgeons across 40+ countries. Our export network ensures every lens reaches you fresh and documented."},
      { icon: "fa-award",         color: "amber",  title: "ISO Certified",           desc: "Every lens undergoes rigorous biocompatibility testing to international ISO medical device standards."},
    ],
  },

  manufacturing: {
    eyebrow:   "Our Facility",
    heading:   "Made with",
    headingEm: "care",
    desc:      "Our state-of-the-art facility uses precision CNC lathe technology to produce every lens to micron-level accuracy — from raw polymer to sterile packaging.",
    checklist: [
      "Clean-room ISO Class 8 environment",
      "100% individual lens inspection",
      "Gamma radiation sterilisation",
      "Full CE & ISO documentation",
    ],
    photos: [
      { src: "../Multimedia/lensemanu1.jpg", alt: "Facility 1", large: true },
      { src: "../Multimedia/lensemanu2.jpg", alt: "Facility 2" },
      { src: "../Multimedia/lensemanu3.jpg", alt: "Facility 3" },
      { src: "../Multimedia/lensemanu4.jpg", alt: "Facility 4" },
    ],
  },


  events: {
    eyebrow:   "What's On",
    heading:   "Upcoming",
    headingEm: "Events",
    sub:       "Join us at global ophthalmic conferences, live surgical workshops, and distributor meets — stay ahead in the field.",
    items: [
      {
        date:     { day: "14", month: "Aug", year: "2026" },
        tag:      "Conference",
        tagColor: "blue",
        title:    "AIOS Annual Congress 2026",
        location: "Mumbai, Maharashtra",
        desc:     "World Vision presents the latest advances in hydrophobic IOL technology at India's largest ophthalmic conference.",
        badge:    "Exhibiting",
      },
      {
        date:     { day: "22", month: "Sep", year: "2026" },
        tag:      "Workshop",
        tagColor: "teal",
        title:    "Wet Lab — Foldable IOL Techniques",
        location: "Chennai, Tamil Nadu",
        desc:     "Hands-on surgical wet lab for ophthalmologists. Limited seats. Learn phaco and implantation best practices.",
        badge:    "Free Entry",
      },
      {
        date:     { day: "10", month: "Oct", year: "2026" },
        tag:      "Expo",
        tagColor: "violet",
        title:    "ESCRS Congress — Barcelona",
        location: "Barcelona, Spain",
        desc:     "Meet our international team at ESCRS 2026. Explore our full IOL portfolio and discuss global distribution.",
        badge:    "Booth A-24",
      },
    ],
  },

  reviews: {
    eyebrow:   "Trusted By Surgeons",
    heading:   "What our",
    headingEm: "clients say",
    sub:       "Feedback from ophthalmologists and distributors who trust World Vision IOLs in their practice.",
    items: [
      {
        name:     "Dr. Rajesh Menon",
        role:     "Senior Ophthalmologist",
        location: "AIIMS, New Delhi",
        rating:   5,
        text:     "World Vision's hydrophobic IOLs have consistently delivered zero glistening cases across 200+ implants. The optical clarity and UV protection are outstanding — I recommend them to all my colleagues.",
        avatar:   "RM",
        color:    "blue",
      },
      {
        name:     "Dr. Anita Krishnan",
        role:     "Cataract Surgeon",
        location: "Aravind Eye Hospital, Coimbatore",
        rating:   5,
        text:     "Exceptional build quality and packaging. The pre-loaded injector system makes surgeries significantly faster. Support from the World Vision team is always prompt and professional.",
        avatar:   "AK",
        color:    "teal",
      },
      {
        name:     "Mr. Ibrahim Al-Farsi",
        role:     "Medical Equipment Distributor",
        location: "Dubai, UAE",
        rating:   5,
        text:     "We've been distributing World Vision IOLs across the GCC for 3 years. Regulatory documentation is always complete, shipments are on time, and the product quality speaks for itself.",
        avatar:   "IA",
        color:    "violet",
      },
      {
        name:     "Dr. Priya Chandrasekhar",
        role:     "Vitreoretinal Surgeon",
        location: "Sankara Nethralaya, Chennai",
        rating:   5,
        text:     "The PMMA lens range offers great value without compromising on quality. Biocompatibility is excellent and the haptic design ensures stable positioning post-op.",
        avatar:   "PC",
        color:    "amber",
      },
      {
        name:     "Dr. Mohammed Rashid",
        role:     "Ophthalmologist",
        location: "King Fahad Hospital, Riyadh",
        rating:   5,
        text:     "We switched to World Vision IOLs two years ago and haven't looked back. Consistent quality batch after batch, with detailed IFU documentation that makes regulatory compliance easy.",
        avatar:   "MR",
        color:    "blue",
      },
    ],
  },

  cta: {
    heading:  "Ready to work with us?",
    sub:      "Talk to our team about IOL requirements, pricing, and international shipping.",
    email:    { label: "Email Us", href: "mailto:support@worldvision.com", icon: "fa-envelope"        },
    whatsapp: { label: "WhatsApp",                                         icon: "fa-brands fa-whatsapp" },
  },

  footer: {
    tagline: "Precision-engineered ophthalmic lenses delivering clarity, comfort, and superior visual performance worldwide.",
    socials: [
      { icon: "fa-brands fa-linkedin-in", href: "#" },
      { icon: "fa-brands fa-instagram",   href: "#" },
      { icon: "fa-brands fa-whatsapp",    href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv" },
    ],
    quickLinks: [
      { label: "Home",       href: "../Pages/index.html"           },
      { label: "Products",   href: "#products"                     },
      { label: "IOL Lenses", href: "../Pages/iol-page.html"        },
      { label: "Gallery",    href: "../Pages/gallery.html"         },
      { label: "About Us",   href: "../Pages/aboutUs.html"         },
      { label: "Contact",    href: "../Pages/contactUs.html"       },
      { label: "Toric Calc", href: "../Pages/toricCalculator.html" },
    ],
    copyright: "© 2026 World Vision Ophthalmic Pvt. Ltd. · All rights reserved.",
  },

  gallery: {
    heading: "Product Gallery",
    sub: "Explore our comprehensive range of intraocular lenses and surgical instruments.",
    categories: [
      { id: "all", label: "All" },
      { id: "hydrophobic", label: "Hydrophobic IOL" },
      { id: "nano", label: "Nano IOL" },
      { id: "blades", label: "Surgical Blades" },
      { id: "facility", label: "Facility" },
    ],
    items: [
      // Hydrophobic IOLs
      { id: 1, src: "../Multimedia/lense1.png", category: "hydrophobic", title: "Hydrophobic IOL Series 1", alt: "Hydrophobic IOL" },
      { id: 2, src: "../Multimedia/lense2.png", category: "hydrophobic", title: "Hydrophobic IOL Series 2", alt: "Hydrophobic IOL" },
      { id: 3, src: "../Multimedia/lense3.png", category: "hydrophobic", title: "Hydrophobic IOL Series 3", alt: "Hydrophobic IOL" },
      { id: 4, src: "../Multimedia/lense4.png", category: "hydrophobic", title: "Hydrophobic IOL Series 4", alt: "Hydrophobic IOL" },
      { id: 5, src: "../Multimedia/lense5.png", category: "hydrophobic", title: "Hydrophobic IOL Series 5", alt: "Hydrophobic IOL" },
      { id: 6, src: "../Multimedia/lense6.png", category: "hydrophobic", title: "Hydrophobic IOL Series 6", alt: "Hydrophobic IOL" },
      { id: 7, src: "../Multimedia/lense7.png", category: "hydrophobic", title: "Hydrophobic IOL Series 7", alt: "Hydrophobic IOL" },
      { id: 8, src: "../Multimedia/lense8.png", category: "hydrophobic", title: "Hydrophobic IOL Series 8", alt: "Hydrophobic IOL" },
      { id: 9, src: "../Multimedia/lense9.png", category: "hydrophobic", title: "Hydrophobic IOL Series 9", alt: "Hydrophobic IOL" },
      { id: 10, src: "../Multimedia/lense10.png", category: "hydrophobic", title: "Hydrophobic IOL Series 10", alt: "Hydrophobic IOL" },
      { id: 11, src: "../Multimedia/lense11.png", category: "hydrophobic", title: "Hydrophobic IOL Series 11", alt: "Hydrophobic IOL" },
      { id: 12, src: "../Multimedia/lense12.png", category: "hydrophobic", title: "Hydrophobic IOL Series 12", alt: "Hydrophobic IOL" },
      { id: 13, src: "../Multimedia/lense13.png", category: "hydrophobic", title: "Hydrophobic IOL Series 13", alt: "Hydrophobic IOL" },
      { id: 14, src: "../Multimedia/lense14.png", category: "hydrophobic", title: "Hydrophobic IOL Series 14", alt: "Hydrophobic IOL" },
      { id: 15, src: "../Multimedia/lense15.png", category: "hydrophobic", title: "Hydrophobic IOL Series 15", alt: "Hydrophobic IOL" },
      { id: 16, src: "../Multimedia/lense16.png", category: "hydrophobic", title: "Hydrophobic IOL Series 16", alt: "Hydrophobic IOL" },
      { id: 17, src: "../Multimedia/lense17.png", category: "hydrophobic", title: "Hydrophobic IOL Series 17", alt: "Hydrophobic IOL" },
      { id: 18, src: "../Multimedia/lense18.png", category: "hydrophobic", title: "Hydrophobic IOL Series 18", alt: "Hydrophobic IOL" },
      { id: 19, src: "../Multimedia/lense19.png", category: "hydrophobic", title: "Hydrophobic IOL Series 19", alt: "Hydrophobic IOL" },
      { id: 20, src: "../Multimedia/lense20.png", category: "hydrophobic", title: "Hydrophobic IOL Series 20", alt: "Hydrophobic IOL" },
      { id: 21, src: "../Multimedia/lense21.png", category: "hydrophobic", title: "Hydrophobic IOL Series 21", alt: "Hydrophobic IOL" },
      { id: 22, src: "../Multimedia/lense22.png", category: "hydrophobic", title: "Hydrophobic IOL Series 22", alt: "Hydrophobic IOL" },
      
      // Nano IOLs
      { id: 23, src: "../Multimedia/nanoIOL1.png", category: "nano", title: "Nano IOL 1", alt: "Nano IOL" },
      { id: 24, src: "../Multimedia/nanoIOL2.png", category: "nano", title: "Nano IOL 2", alt: "Nano IOL" },
      { id: 25, src: "../Multimedia/nanoIOL3.png", category: "nano", title: "Nano IOL 3", alt: "Nano IOL" },
      { id: 26, src: "../Multimedia/nanoIOL4.png", category: "nano", title: "Nano IOL 4", alt: "Nano IOL" },
      { id: 27, src: "../Multimedia/nanoIOLPmma.png", category: "nano", title: "Nano IOL PMMA", alt: "Nano IOL PMMA" },
      { id: 28, src: "../Multimedia/nanoRing.png", category: "nano", title: "Nano Ring 1", alt: "Nano Ring" },
      { id: 29, src: "../Multimedia/nanoRing2.png", category: "nano", title: "Nano Ring 2", alt: "Nano Ring" },
      { id: 30, src: "../Multimedia/nanoRing3.png", category: "nano", title: "Nano Ring 3", alt: "Nano Ring" },
      { id: 31, src: "../Multimedia/nanoRing4.png", category: "nano", title: "Nano Ring 4", alt: "Nano Ring" },
      { id: 32, src: "../Multimedia/nanoRing5.png", category: "nano", title: "Nano Ring 5", alt: "Nano Ring" },
      { id: 33, src: "../Multimedia/nanoRing6.png", category: "nano", title: "Nano Ring 6", alt: "Nano Ring" },
      
      // Surgical Blades
      { id: 34, src: "../Multimedia/msBlade-Sharp.png", category: "blades", title: "Micro Surgical Sharp Blade", alt: "Sharp Blade" },
      { id: 35, src: "../Multimedia/msBladeCrescent.png", category: "blades", title: "Micro Surgical Crescent Blade", alt: "Crescent Blade" },
      { id: 36, src: "../Multimedia/msBladeLance.png", category: "blades", title: "Micro Surgical Lance Blade", alt: "Lance Blade" },
      { id: 37, src: "../Multimedia/msBlade_blunt.png", category: "blades", title: "Micro Surgical Blunt Blade", alt: "Blunt Blade" },
      { id: 38, src: "../Multimedia/msMVRBlade.png", category: "blades", title: "Micro Surgical MVR Blade", alt: "MVR Blade" },
      
      // Facility
      { id: 39, src: "../Multimedia/lensemanu1.jpg", category: "facility", title: "Manufacturing Facility 1", alt: "Manufacturing" },
      { id: 40, src: "../Multimedia/lensemanu2.jpg", category: "facility", title: "Manufacturing Facility 2", alt: "Manufacturing" },
      { id: 41, src: "../Multimedia/lensemanu3.jpg", category: "facility", title: "Manufacturing Facility 3", alt: "Manufacturing" },
      { id: 42, src: "../Multimedia/lensemanu4.jpg", category: "facility", title: "Manufacturing Facility 4", alt: "Manufacturing" },
    ],
  },
};

function qs(id) {return document.getElementById(id);}
function qsa(sel) {return document.querySelectorAll(sel);}

// Active Identifer

function getActivePage(){
  const path = window.location.pathname;
  const filename = path.split("/").pop();
  const name = filename.replace(/\.html?$/i, "");
  return name || "index";
}

function pageFromHref(href) {
  if (!href || href.startsWith("#")) return href.replace("#", "");

  return href
    .split("/")
    .pop()
    .replace(/\.html?$/i, "");
}


const ACTIVE_PAGE = getActivePage();

function buildDesktopProductsDropdown(isActive = false){
  const p      = SITE.nav.products;
  const iol    = p.children[0];
  const premium= p.children[1];
  const pharma = p.children[2];
  const blade  = p.children[3];

  function subItems(items) {
    return items.map(sub =>
      `<a href="${sub.href}" class="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-sm font-medium text-gray-700">
        <i class="fa-solid ${sub.icon} ${sub.color} w-4"></i> ${sub.label}
      </a>`
    ).join("");
  }

  function l1WithFlyout(item, flyout, groupClass) {
    return `
    <div class="relative group/${groupClass}">
      <a href="${item.href}" class="flex items-center justify-between gap-3 px-4 py-3 hover:bg-blue-50 transition text-sm font-medium text-gray-700 cursor-pointer">
        <span class="flex items-center gap-3">
          <i class="fa-solid ${item.icon} w-4" style="color:${item.color};"></i> ${item.label}
        </span>
        <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
      </a>
      <div class="absolute left-full top-0 ml-2 w-56 rounded-2xl bg-white/95 backdrop-blur-lg border border-white/30 shadow-xl opacity-0 invisible group-hover/${groupClass}:opacity-100 group-hover/${groupClass}:visible transition-all duration-200 z-[9999] overflow-hidden">
        ${flyout}
      </div>
    </div>`;
  }

  function l1Plain(item) {
    return `<a href="${item.href}" class="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-sm font-medium text-gray-700">
      <i class="fa-solid ${item.icon} w-4" style="color:${item.color};"></i> ${item.label}
    </a>`;
  }

  const isProductActive = p.pages.includes(ACTIVE_PAGE);

  return `
  <li class="relative group/prod">
    <div class="nav-item ${isProductActive ? "active-nav" : ""} flex items-center gap-2 cursor-pointer select-none">
      ${p.label} <i id="productsNavChevron" class="fa-solid fa-chevron-down text-sm transition-transform duration-200 group-hover/prod:rotate-180"></i>
    </div>
    <div class="absolute left-0 top-full mt-3 w-56 rounded-2xl bg-white/90 backdrop-blur-lg border border-white/30 shadow-xl opacity-0 invisible group-hover/prod:opacity-100 group-hover/prod:visible transition-all duration-200 z-[999] overflow-visible">
      ${l1WithFlyout(iol,    subItems(iol.children),    "iol")}
      ${l1Plain(premium)}
      ${pharma  ? l1WithFlyout(pharma, subItems(pharma.children), "pharma") : ""}
      ${blade   ? l1WithFlyout(blade,  subItems(blade.children),  "blade")  : ""}
    </div>
  </li>`;
}


function renderDestopNav(){
  const brand = qs("navBrand");
  if(brand) {
    brand.innerHTML =`
    <img src="${SITE.company.logo}" class="h-14 w-auto" alt ="Logo" />
    <div class="flex flex-col leading-tight">
      <span class="font-semibold text-2xl tracking-wide">${SITE.company.name}</span>
      <span class="subtitle text-xs tracking-widest uppercase">${SITE.company.subtitle}</span>
    </div>`;
  }
}

const navList = qs("desktopNavLinks");
if(navList) {
  let html = "";
  SITE.nav.links.forEach(link => {
    const isActive = pageFromHref(link.href) === ACTIVE_PAGE;
    html += `<li><a href="${link.href}" class="nav-item ${isActive ? "active-nav" : ""}">${link.label}</a></li>`;
    if (link.label === "Home") html += buildDesktopProductsDropdown();
  });
  navList.innerHTML = html
}

const navCta = qs("navCta");
if(navCta) {
  navCta.href = SITE.nav.cta.href;
  navCta.innerHTML = `${SITE.nav.cta.label} <i class="fa-solid ${SITE.nav.cta.icon}"></i>`
}

// MOBILE Drawer

function mobileBackBtn(id, label) {
  return `
  <li>
    <button id="${id}" type="button"
      class="mobile-drawer-link active-nav flex items-center gap-3 text-left w-full">
      <i class="fa-solid fa-chevron-left text-sm w-9 h-9 flex items-center justify-center rounded-xl bg-white/70 border border-white/60 text-[#0055a5]"></i>
      <span class="font-semibold text-[17px] text-[#1e3a5f]">${label}</span>
    </button>
  </li>`;
}

function mobileForwardBtn(id, icon, color, label, isActive = false) {
  return `
  <li>
    <button id="${id}" type="button"
      class="w-full flex items-center justify-between mobile-drawer-link ${isActive ? "active-nav" : ""} text-left">
      <span class="flex items-center gap-2">
        <i class="fa-solid ${icon} ${color}"></i> ${label}
      </span>
      <i class="fa-solid fa-chevron-right text-sm opacity-60"></i>
    </button>
  </li>`;
}

function renderMobileNav(){
  const mob = SITE.nav.mobile;
  const mobileProductsActive = SITE.nav.products.pages.includes(ACTIVE_PAGE);

  const mb = qs("mobileBrand");
  if(mb){
    mb.innerHTML = `
    <img src="${SITE.company.logo}" class="h-10 w-auto" />
    <div class="flex flex-col leading-tight">
      <span class="font-semibold text-lg">${SITE.company.name}</span>
      <span class="subtitle text-xs tracking-widest uppercase">${SITE.company.subtitle}</span>
    </div>`;
  }

  // VIEW 1 — Main menu
  const mainView = qs("mobileMainView");
  if(mainView){
    const mainLinks = mob.main.map(link => {
      const isActive = pageFromHref(link.href) === ACTIVE_PAGE;
      return `<li><a href="${link.href}" class="mobile-drawer-link ${isActive ? "active-nav" : ""}">${link.label}</a></li>`;
    });
    mainLinks.splice(1, 0,
      `<li><button id="mobileProductsBtn"
        class="w-full flex items-center justify-between mobile-drawer-link ${mobileProductsActive ? "active-nav" : ""} text-left" type="button">
        <span>${SITE.nav.products.label}</span>
        <i class="fa-solid fa-chevron-right text-sm opacity-60"></i>
      </button></li>`
    );
    mainView.innerHTML = mainLinks.join("");
  }

  // VIEW 2 — Our Products
  const productsView = qs("mobileProductsView");
  if(productsView){
    const pd = mob.products;
    productsView.innerHTML =
      mobileBackBtn("backToMainMenu", pd.back.label) +
      mobileForwardBtn("mobileIolBtn", pd.iol.icon, pd.iol.color, pd.iol.label,
        ["iol-page","hydrophobicIol","hydrophilicIol","pmmaIol"].includes(ACTIVE_PAGE)) +
      pd.children.map(item => {
        const isActive = pageFromHref(item.href) === ACTIVE_PAGE;
        return `<li><a href="${item.href}" class="mobile-drawer-link flex ${isActive ? "active-nav" : ""} items-center gap-2">
          <i class="fa-solid ${item.icon} ${item.color}"></i> ${item.label}
        </a></li>`;
      }).join("") +
      mobileForwardBtn("mobilePharmaBtn", pd.pharma.icon, pd.pharma.color, pd.pharma.label, false) +
      mobileForwardBtn("mobileBladeBtn",  pd.blade.icon,  pd.blade.color,  pd.blade.label,  false);
  }

  // VIEW 3 — IOL
  const iolView = qs("mobileIolView");
  if(iolView){
    const d = mob.iol;
    iolView.innerHTML =
      mobileBackBtn("backToProductsMenu", d.back.label) +
      d.children.map(item => {
        const isActive = pageFromHref(item.href) === ACTIVE_PAGE;
        return `<li><a href="${item.href}" class="mobile-drawer-link ${isActive ? "active-nav" : ""} flex items-center gap-2">
          <i class="fa-solid ${item.icon} ${item.color}"></i> ${item.label}
        </a></li>`;
      }).join("");
  }

  // VIEW 4 — Pharma
  const pharmaView = qs("mobilePharmaView");
  if(pharmaView){
    const d = mob.pharma;
    pharmaView.innerHTML =
      mobileBackBtn("backToProductsFromPharma", d.back.label) +
      d.children.map(item =>
        `<li><a href="${item.href}" class="mobile-drawer-link flex items-center gap-2">
          <i class="fa-solid ${item.icon} ${item.color}"></i> ${item.label}
        </a></li>`
      ).join("");
  }

  // VIEW 5 — Blades
  const bladeView = qs("mobileBladeView");
  if(bladeView){
    const d = mob.blade;
    bladeView.innerHTML =
      mobileBackBtn("backToProductsFromBlade", d.back.label) +
      d.children.map(item =>
        `<li><a href="${item.href}" class="mobile-drawer-link flex items-center gap-2">
          <i class="fa-solid ${item.icon} ${item.color}"></i> ${item.label}
        </a></li>`
      ).join("");
  }
}


// Hero Slider


function renderHero() {
  const wrapper = qs("heroWrapper");
  if (!wrapper) return;
  wrapper.innerHTML = SITE.hero.map(slide => `
    <div class="swiper-slide">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pb-16">
        <div class="flex justify-center">
          <div class="hero-img-wrap">
            <img src="${slide.img}" alt="${slide.alt}" class="hero-product-img"/>
          </div>
        </div>
        <div class="hero-content">
          <span class="hero-tag">${slide.tag}</span>
          <h1 class="hero-heading">${slide.title}<br><em>${slide.em}</em></h1>
          <p class="hero-sub">${slide.sub}</p>
          <div class="flex flex-wrap gap-3 mt-8">
            <a href="${slide.cta.href}" class="hero-btn-primary">${slide.cta.label} <i class="fa-solid fa-arrow-right text-xs"></i></a>
            <a href="#products" class="hero-btn-ghost">All Products</a>
          </div>
        </div>
      </div>
    </div>`).join("");
}

function renderStats() {
  const grid = qs("statsGrid");
  if (!grid) return;
 
  grid.innerHTML = SITE.stats.map(s => {
    // Split num into numeric part + suffix (e.g. "22+" → 22, "+")
    const match   = s.num.match(/^(\d+)(.*)$/);
    const numeric = match ? parseInt(match[1]) : null;
    const suffix  = match ? match[2] : "";
 
    return `
    <div class="stat-glass">
      <div class="stat-icon-wrap"><i class="fa-solid ${s.icon}"></i></div>
      <div class="stat-num"
        data-target="${numeric !== null ? numeric : ""}"
        data-suffix="${suffix}"
        data-raw="${s.num}">
        ${s.num}
      </div>
      <div class="stat-label">${s.label}</div>
    </div>`;
  }).join("");
 
  // Animate counting when stats scroll into view
  const numEls = grid.querySelectorAll(".stat-num[data-target]");
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
 
      const el      = entry.target;
      const target  = parseInt(el.dataset.target);
      const suffix  = el.dataset.suffix;
      const raw     = el.dataset.raw;
 
      // No numeric part (e.g. "ISO") — just show as-is
      if (isNaN(target)) { el.textContent = raw; return; }
 
      const duration = 1800;  // ms
      const fps      = 60;
      const steps    = Math.round(duration / (1000 / fps));
      let   current  = 0;
 
      const timer = setInterval(() => {
        current++;
        // Ease out: fast start, slow finish
        const progress = current / steps;
        const eased    = 1 - Math.pow(1 - progress, 3);
        const value    = Math.round(eased * target);
 
        el.textContent = value + suffix;
 
        if (current >= steps) {
          clearInterval(timer);
          el.textContent = target + suffix; // ensure exact final value
        }
      }, 1000 / fps);
    });
  }, { threshold: 0.3 });
 
  numEls.forEach(el => observer.observe(el));
}

function renderProducts() {
  const d = SITE.products;
  const eyebrow = qs("productsEyebrow");
  const heading  = qs("productsHeading");
  const sub      = qs("productsSub");
  const grid     = qs("productsGrid");

  if (eyebrow) eyebrow.textContent = d.eyebrow;
  if (heading)  heading.innerHTML  = `${d.heading} <em>${d.headingEm}</em>`;
  if (sub)      sub.textContent    = d.sub;
  if (grid) {
    grid.innerHTML = d.cards.map(c => `
      <a href="${c.href}" class="product-card">
        <div class="product-card-img"><img src="${c.img}" alt="${c.alt}"/></div>
        <div class="product-card-body">
          <span class="product-tag">${c.tag}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <span class="product-link">Explore <i class="fa-solid fa-arrow-right text-xs"></i></span>
        </div>
      </a>`).join("");
  }
}

function renderFeatures() {
  const d = SITE.features;
  const eyebrow = qs("featuresEyebrow");
  const heading  = qs("featuresHeading");
  const grid     = qs("featuresGrid");

  if (eyebrow) eyebrow.textContent = d.eyebrow;
  if (heading)  heading.innerHTML  = `${d.heading} <em>${d.headingEm}</em>`;
  if (grid) {
    grid.innerHTML = d.cards.map(c => `
      <div class="feature-card">
        <div class="feature-icon-wrap ${c.color}"><i class="fa-solid ${c.icon}"></i></div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>`).join("");
  }
}

// Manufacturing

function renderManufacturing() {
  const d = SITE.manufacturing;
  const eyebrow  = qs("mfgEyebrow");
  const heading  = qs("mfgHeading");
  const desc     = qs("mfgDesc");
  const checklist= qs("mfgChecklist");
  const photos   = qs("mfgPhotos");

  if (eyebrow)   eyebrow.textContent = d.eyebrow;
  if (heading)   heading.innerHTML   = `${d.heading} <em>${d.headingEm}</em>,<br>backed by science`;
  if (desc)      desc.textContent    = d.desc;
  if (checklist) checklist.innerHTML = d.checklist.map(item =>
    `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join("");
  if (photos)    photos.innerHTML    = d.photos.map(p =>
    `<img src="${p.src}" alt="${p.alt}" class="mfg-img${p.large ? " mfg-large" : ""}"/>`).join("");
}

// CTA Banner

function renderCta() {
  const d = SITE.cta;
  const heading  = qs("ctaHeading");
  const sub      = qs("ctaSub");
  const emailBtn = qs("ctaEmailBtn");
  const waBtn    = qs("ctaWhatsappBtn");

  if (heading)  heading.textContent = d.heading;
  if (sub)      sub.textContent     = d.sub;
  if (emailBtn) { emailBtn.href = d.email.href; emailBtn.innerHTML = `<i class="fa-solid ${d.email.icon}"></i> ${d.email.label}`; }
  if (waBtn)    { waBtn.href    = SITE.company.whatsapp; waBtn.innerHTML = `<i class="${d.whatsapp.icon}"></i> ${d.whatsapp.label}`; }
}

// Whatsapp FLoat

function renderWhatsappFloat() {
  const btn = qs("waFloat");
  if (btn) btn.href = SITE.company.whatsapp;
}

// Footer

function renderFooter() {
  const d = SITE.footer;
  const c = SITE.company;

  const footBrand = qs("footerBrand");
  if (footBrand) footBrand.innerHTML = `
    <img src="${c.logo}" class="h-12 w-auto" alt="Logo"/>
    <div class="flex flex-col leading-tight">
      <span class="font-semibold text-lg text-gray-900">${c.name}</span>
      <span class="text-xs tracking-widest uppercase text-gray-500 mt-1">${c.subtitle}</span>
    </div>`;

  const footTagline = qs("footerTagline");
  if (footTagline) footTagline.textContent = d.tagline;

  const socials = qs("footerSocials");
  if (socials) socials.innerHTML = d.socials.map(s =>
    `<a href="${s.href}" class="footer-social"><i class="${s.icon}"></i></a>`).join("");

  const quickLinks = qs("footerQuickLinks");
  if (quickLinks) quickLinks.innerHTML = d.quickLinks.map(l =>
    `<a href="${l.href}" class="footer-link">${l.label}</a>`).join("");

  const contact = qs("footerContact");
  if (contact) contact.innerHTML = `
    <p class="flex items-start gap-2"><i class="fa-solid fa-location-dot text-blue-500 mt-0.5 w-4"></i> ${c.address}</p>
    <p class="flex items-center gap-2"><i class="fa-solid fa-phone    text-blue-500 w-4"></i> <a href="tel:${c.phone}"    class="hover:underline">${c.phone}</a></p>
    <p class="flex items-center gap-2"><i class="fa-solid fa-envelope text-blue-500 w-4"></i> <a href="mailto:${c.email}" class="hover:underline">${c.email}</a></p>
    <p class="flex items-center gap-2"><i class="fa-solid fa-clock    text-blue-500 w-4"></i> ${c.hours}</p>`;

  const copy = qs("footerCopyright");
  if (copy) copy.textContent = d.copyright;
}

renderDestopNav();
renderMobileNav();
renderHero();
renderStats();
renderProducts();
renderFeatures();
renderManufacturing();
renderCta();
renderWhatsappFloat();
renderFooter();

/*************************************************
 * LENS BACKGROUND ANIMATION
 *************************************************/

const lensBg = document.getElementById("lensBg");

const lenses = [
  "lense1.png", "lense2.png", "lense3.png", "lense4.png", "lense5.png",
  "lense6.png", "lense7.png", "lense8.png", "lense9.png", "lense10.png",
  "lense11.png", "lense12.png", "lense13.png", "lense14.png", "lense15.png",
  "lense16.png", "lense17.png", "lense18.png", "lense19.png", "lense20.png",
  "lense21.png", "lense22.png"
];

const imgPath = "../Multimedia/";
const rowHeight = 120;
const duplicates = 2;
const buffer = 1;
const estimatedLensSlotWidth = 132;

function shuffle(arr) {
  return arr.slice().sort(function() {
    return Math.random() - 0.5;
  });
}

function renderLensBg() {
  if (!lensBg) return;

  const fragment = document.createDocumentFragment();
  const rowsNeeded = Math.ceil(window.innerHeight / rowHeight) + buffer;
  const lensesPerSet = Math.min(
    lenses.length,
    Math.max(10, Math.ceil(window.innerWidth / estimatedLensSlotWidth) + 2)
  );

  for (let i = 0; i < rowsNeeded; i++) {
    const row = document.createElement("div");
    row.className = "lens-row";

    const shuffled = shuffle(lenses).slice(0, lensesPerSet);

    for (let d = 0; d < duplicates; d++) {
      shuffled.forEach(function(name) {
        const img = document.createElement("img");
        img.src = imgPath + name;
        img.alt = "";
        img.decoding = "async";
        img.fetchPriority = "low";
        img.draggable = false;
        row.appendChild(img);
      });
    }

    fragment.appendChild(row);
  }

  lensBg.replaceChildren(fragment);
}

renderLensBg();


/*************************************************
 * PAGE LOADER
 *************************************************/

function hidePageLoader() {
  const loader = document.getElementById("pageLoader");
  if (loader) loader.classList.add("hidden");

  const bg = document.getElementById("lensBg");
  if (bg) bg.style.animation = "bgFadeIn 2.2s ease-out forwards";
}

window.addEventListener("load", function() {
  setTimeout(hidePageLoader, 900);
});

setTimeout(hidePageLoader, 2500);


/*************************************************
 * LENIS + GSAP SETUP
 *************************************************/

var lenis = null;

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

if (typeof Lenis !== "undefined") {
  lenis = new Lenis();

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  if (typeof gsap !== "undefined") {
    gsap.ticker.add(function(time) {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}

function stopLenis() {
  if (lenis) lenis.stop();
}

function startLenis() {
  if (lenis) lenis.start();
}


/*************************************************
 * REVERSE GALLERY SCROLL
 *************************************************/

function initReverseTriggers() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  if (!document.querySelector(".col-scroll__list")) return;

  ScrollTrigger.getAll().forEach(function(t) {
    t.kill();
  });

  gsap.set(".col-scroll__list", { clearProps: "transform" });

  if (window.innerWidth <= 320) return;

  const isMobile = window.innerWidth <= 480;

  const oddLists = gsap.utils.toArray(
    ".col-scroll__box:nth-child(odd) .col-scroll__list"
  );

  oddLists.forEach(function(element) {
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    const extraSpace = viewportHeight * 0.2;
    const scrollDistance = elementHeight + viewportHeight + extraSpace;

    gsap.to(element, {
      yPercent: isMobile ? 65 : 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: 0,
        end: "+=" + scrollDistance,
        scrub: true,
        pin: true
      }
    });
  });

  ScrollTrigger.refresh();
}

window.addEventListener("load", function() {
  try {
    initReverseTriggers();
  } catch (error) {
    console.error("Gallery scroll init failed:", error);
  }
});


/*************************************************
 * MOBILE DRAWER + VIEW SWITCH
 *************************************************/

const menuToggle = document.getElementById("menuToggle");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

const mobileMainView     = document.getElementById("mobileMainView");
const mobileProductsView = document.getElementById("mobileProductsView");
const mobileIolView      = document.getElementById("mobileIolView");
const mobilePharmaView   = document.getElementById("mobilePharmaView");
const mobileBladeView    = document.getElementById("mobileBladeView");

const mobileProductsBtn  = document.getElementById("mobileProductsBtn");
const mobileIolBtn       = document.getElementById("mobileIolBtn");
const mobilePharmaBtn    = document.getElementById("mobilePharmaBtn");
const mobileBladeBtn     = document.getElementById("mobileBladeBtn");

const backToMainMenu          = document.getElementById("backToMainMenu");
const backToProductsMenu      = document.getElementById("backToProductsMenu");
const backToProductsFromPharma= document.getElementById("backToProductsFromPharma");
const backToProductsFromBlade = document.getElementById("backToProductsFromBlade");

let currentMobileView = mobileMainView;
let mobileViewTimer   = null;

/* Depth map */
const VIEW_DEPTH = {
  mobileMainView:     0,
  mobileProductsView: 1,
  mobileIolView:      2,
  mobilePharmaView:   2,
  mobileBladeView:    2,
};
 
function showMobileView(nextView) {
  if (!nextView) return;

  const views = [mobileMainView, mobileProductsView, mobileIolView, mobilePharmaView, mobileBladeView].filter(Boolean);
  const goingForward = !currentMobileView ||
    (VIEW_DEPTH[nextView.id] > VIEW_DEPTH[currentMobileView.id]);
 
  clearTimeout(mobileViewTimer);
 
  /* Same view — re-animate */
  if (currentMobileView === nextView) {
    views.forEach(v => v.classList.add("hidden"));
    views.forEach(v => v.classList.remove("flex","view-enter","view-enter-back","view-exit"));
    nextView.classList.remove("hidden");
    nextView.classList.add("flex","view-enter");
    return;
  }
 
  /* Exit current */
  if (currentMobileView) {
    currentMobileView.classList.remove("view-enter","view-enter-back");
    currentMobileView.classList.add("view-exit");
  }
 
  mobileViewTimer = setTimeout(() => {
    views.forEach(v => v.classList.add("hidden"));
    views.forEach(v => v.classList.remove("flex","view-enter","view-enter-back","view-exit"));
    nextView.classList.remove("hidden");
    nextView.classList.add("flex", goingForward ? "view-enter" : "view-enter-back");
    currentMobileView = nextView;
  }, 155);
}


function openMenu() {
  if (!mobileMenu || !menuOverlay) return;
 
  /* Hide any open sub-layers instantly */
  if (window._mobileHideAllLayers) window._mobileHideAllLayers();
 
  mobileMenu.classList.remove("-translate-x-full", "drawer-close");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none", "overlay-in");
 
  void mobileMenu.offsetWidth;
  void menuOverlay.offsetWidth;
 
  mobileMenu.classList.add("drawer-open");
  menuOverlay.classList.add("overlay-in");
  document.body.classList.add("menu-open");
  stopLenis();
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;
 
  /* Hide sub-layers instantly */
  if (window._mobileHideAllLayers) window._mobileHideAllLayers();
 
  mobileMenu.classList.remove("drawer-open");
  mobileMenu.classList.add("drawer-close");
  menuOverlay.classList.remove("overlay-in");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");
 
  setTimeout(function () {
    mobileMenu.classList.add("-translate-x-full");
    mobileMenu.classList.remove("drawer-close");
  }, 225);
 
  startLenis();
}

if (menuToggle) {
  menuToggle.addEventListener("click", function() {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

if (mobileProductsBtn) {
  mobileProductsBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

if (mobileIolBtn) {
  mobileIolBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileIolView);
  });
}

if (backToMainMenu) {
  backToMainMenu.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileMainView);
  });
}

if (backToProductsMenu) {
  backToProductsMenu.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

if (mobilePharmaBtn) {
  mobilePharmaBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobilePharmaView);
  });
}

if (mobileBladeBtn) {
  mobileBladeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileBladeView);
  });
}

if (backToProductsFromPharma) {
  backToProductsFromPharma.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

if (backToProductsFromBlade) {
  backToProductsFromBlade.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

document.querySelectorAll("#mobileMenu a").forEach(link => link.addEventListener("click", closeMenu));

/*************************************************
 * RESIZE HANDLING
 *************************************************/

let resizeTimer;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    renderLensBg();
    initReverseTriggers();
  }, 250);
});
window.addEventListener("pageshow", () => {
  document.body.classList.remove("menu-open");
  showMobileView(mobileMainView);
});


/*************************************************
 * HERO PRODUCT SLIDER
 *************************************************/

if (typeof Swiper !== "undefined" && document.querySelector(".heroSwiper")) {
  new Swiper(".heroSwiper", {
    loop: true,
    speed: 900,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    allowTouchMove: true,
    nested: true,
    resistanceRatio: 0
  });
}


/*************************************************
 * SCROLL REVEAL
 *************************************************/

(function() {
  const revealItems = document.querySelectorAll(".reveal-section");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach(function(el) {
    observer.observe(el);
  });
})();


/*************************************************
 * SMOOTH SCROLL
 *************************************************/

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


/*************************************************
 * FILTER TABS
 *************************************************/

const filterBtns = document.querySelectorAll(".g-filter-btn");
const allItems = document.querySelectorAll(".col-scroll__item");
let activeFilter = "all";

filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    activeFilter = btn.dataset.filter;

    filterBtns.forEach(function(b) {
      b.classList.toggle("active", b === btn);
    });

    allItems.forEach(function(item) {
      const match = activeFilter === "all" || item.dataset.cat === activeFilter;
      item.classList.toggle("filtered-out", !match);
    });

    buildVisible();

    setTimeout(function() {
      initReverseTriggers();
    }, 50);
  });
});


/*************************************************
 * LIGHTBOX
 *************************************************/

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbTitle = document.getElementById("lbTitle");
const lbCounter = document.getElementById("lbCounter");
const lbThumbs = document.getElementById("lbThumbs");
const lbClose = document.getElementById("lbClose");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");

let visible = [];
let lbIdx = 0;

function buildVisible() {
  visible = Array.from(
    document.querySelectorAll(".col-scroll__item:not(.filtered-out)")
  );
}

buildVisible();

function openLB(item) {
  if (!lightbox) return;

  buildVisible();

  lbIdx = visible.indexOf(item);
  if (lbIdx < 0) return;

  renderLB();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  stopLenis();
}

function closeLB() {
  if (!lightbox) return;

  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  startLenis();
}

function renderLB() {
  if (!lbImg || !lbTitle || !lbCounter || !lbThumbs) return;

  const item = visible[lbIdx];
  if (!item) return;

  const img = item.querySelector("img");
  const label = item.dataset.label || "";

  lbImg.style.opacity = "0";
  lbImg.onload = function() {
    lbImg.style.opacity = "1";
  };

  lbImg.src = img ? img.src : "";
  lbImg.alt = label;
  lbTitle.textContent = label;
  lbCounter.textContent = (lbIdx + 1) + " / " + visible.length;

  lbThumbs.innerHTML = "";

  visible.forEach(function(v, i) {
    const th = document.createElement("div");
    th.className = "lb-thumb" + (i === lbIdx ? " active" : "");

    const ti = document.createElement("img");
    const sourceImg = v.querySelector("img");

    ti.src = sourceImg ? sourceImg.src : "";
    ti.alt = v.dataset.label || "";

    th.appendChild(ti);

    th.addEventListener("click", function() {
      lbIdx = i;
      renderLB();
    });

    lbThumbs.appendChild(th);
  });

  const activeThumb = lbThumbs.querySelector(".active");
  if (activeThumb) {
    activeThumb.scrollIntoView({ inline: "center", behavior: "smooth" });
  }
}

function lbGo(direction) {
  if (!visible.length) return;

  lbIdx = (lbIdx + direction + visible.length) % visible.length;
  renderLB();
}

if (lightbox && lbClose && lbPrev && lbNext) {
  allItems.forEach(function(item) {
    item.addEventListener("click", function() {
      openLB(item);
    });
  });

  lbClose.addEventListener("click", closeLB);

  lbPrev.addEventListener("click", function() {
    lbGo(-1);
  });

  lbNext.addEventListener("click", function() {
    lbGo(1);
  });

  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) closeLB();
  });

  document.addEventListener("keydown", function(e) {
    if (!lightbox.classList.contains("open")) return;

    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") lbGo(-1);
    if (e.key === "ArrowRight") lbGo(1);
  });

  let lbTx = 0;

  lightbox.addEventListener("touchstart", function(e) {
    lbTx = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", function(e) {
    const distance = lbTx - e.changedTouches[0].clientX;

    if (Math.abs(distance) > 50) {
      lbGo(distance > 0 ? 1 : -1);
    }
  });
}

/* ─────────────────────────────────────────────
   RENDER: EVENTS
───────────────────────────────────────────── */
(function () {
  const ev = SITE.events;
  if (!ev) return;

  const eyebrow = qs("eventsEyebrow");
  const heading = qs("eventsHeading");
  const sub     = qs("eventsSub");
  const grid    = qs("eventsGrid");

  if (eyebrow) eyebrow.textContent = ev.eyebrow;
  if (heading) heading.innerHTML   = ev.heading + " <em>" + ev.headingEm + "</em>";
  if (sub)     sub.textContent     = ev.sub;

  const colorMap = {
    blue:   { bg: "rgba(37,99,235,0.1)",  text: "#1d4ed8" },
    teal:   { bg: "rgba(13,148,136,0.1)", text: "#0f766e" },
    violet: { bg: "rgba(124,58,237,0.1)", text: "#7c3aed" },
    amber:  { bg: "rgba(217,119,6,0.1)",  text: "#b45309" },
  };

  if (!grid) return;
  grid.innerHTML = ev.items.map(function (item) {
    const c = colorMap[item.tagColor] || colorMap.blue;
    return [
      '<div class="event-card">',
        '<div class="event-date-col">',
          '<div class="event-date-box">',
            '<span class="event-day">'   + item.date.day   + '</span>',
            '<span class="event-month">' + item.date.month + '</span>',
            '<span class="event-year">'  + item.date.year  + '</span>',
          '</div>',
        '</div>',
        '<div class="event-body">',
          '<div class="event-meta">',
            '<span class="event-tag" style="background:' + c.bg + ';color:' + c.text + ';">' + item.tag + '</span>',
            '<span class="event-badge">' + item.badge + '</span>',
          '</div>',
          '<h3 class="event-title">' + item.title + '</h3>',
          '<p class="event-location"><i class="fa-solid fa-location-dot"></i> ' + item.location + '</p>',
          '<p class="event-desc">' + item.desc + '</p>',
          '<div class="event-actions">',
            '<a href="' + (SITE.company.whatsapp || '#') + '" target="_blank" class="event-btn-wa">',
              '<i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp',
            '</a>',
            '<a href="#" class="event-btn-more">Know More <i class="fa-solid fa-arrow-right text-xs"></i></a>',
          '</div>',
        '</div>',
      '</div>',
    ].join('');
  }).join('');
})();

/* ─────────────────────────────────────────────
   RENDER: CUSTOMER REVIEWS
   Odd  total → ceil/2 + floor/2  (5→[2,2,1] centered)
   Even total → equal pairs max 4
───────────────────────────────────────────── */
(function () {
  var rv = SITE.reviews;
  if (!rv) return;

  var eyebrow = qs("reviewsEyebrow");
  var heading = qs("reviewsHeading");
  var sub     = qs("reviewsSub");
  var track   = qs("reviewsSliderTrack");
  var dotsEl  = qs("reviewsDots");
  var prevBtn = qs("reviewsPrev");
  var nextBtn = qs("reviewsNext");
  var wrap    = qs("reviewsSliderWrap");

  if (eyebrow) eyebrow.textContent = rv.eyebrow;
  if (heading) heading.innerHTML   = rv.heading + " <em>" + rv.headingEm + "</em>";
  if (sub)     sub.textContent     = rv.sub;
  if (!track)  return;

  var items = rv.items;
  var n     = items.length;

  function buildSlides() {
    var mob = window.innerWidth <= 640;
    var out = [];
    if (mob) {
      items.forEach(function(it) { out.push([it]); });
    } else {
      if (n % 2 !== 0) {
        for (var i = 0; i < n - 1; i += 2) out.push(items.slice(i, i + 2));
        out.push([items[n - 1]]);
      } else {
        var per = n <= 8 ? 2 : 4;
        for (var i = 0; i < n; i += per) out.push(items.slice(i, i + per));
      }
    }
    return out;
  }

  var slides = buildSlides();
  var total = slides.length;
  var cur   = 0;
  var timer = null;

  function cardHTML(item) {
    var c = item.color || 'blue';
    return [
      '<div class="review-card" data-color="' + c + '">',
        '<div class="review-card-quote">\u201C</div>',
        '<p class="review-card-text">' + item.text + '</p>',
        '<div class="review-card-stars">' + '\u2605'.repeat(item.rating) + '</div>',
        '<div class="review-card-author">',
          '<div class="review-card-avatar">' + item.avatar + '</div>',
          '<div>',
            '<div class="review-card-name">' + item.name + '</div>',
            '<div class="review-card-role">' + item.role + '</div>',
            '<div class="review-card-location">',
              '<i class="fa-solid fa-location-dot" style="font-size:10px;color:#9ca3af;"></i> ' + item.location,
            '</div>',
          '</div>',
        '</div>',
      '</div>',
    ].join('');
  }

  track.innerHTML = slides.map(function (group) {
    var isSingle = group.length === 1;
    return '<div class="review-slide' + (isSingle ? ' single-card' : '') + '">' +
      group.map(cardHTML).join('') +
    '</div>';
  }).join('');

  /* Dots */
  if (dotsEl) {
    dotsEl.innerHTML = slides.map(function (_, i) {
      return '<button class="review-dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></button>';
    }).join('');
    dotsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.review-dot');
      if (b) { goTo(+b.dataset.i); startAuto(); }
    });
  }

  function syncUI() {
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    if (dotsEl) dotsEl.querySelectorAll('.review-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === cur);
    });
    if (prevBtn) prevBtn.disabled = cur === 0;
    if (nextBtn) nextBtn.disabled = cur === total - 1;
  }

  function goTo(n) { cur = Math.max(0, Math.min(n, total - 1)); syncUI(); }
  function goNext() { goTo(cur < total - 1 ? cur + 1 : 0); }
  function goPrev() { goTo(cur > 0 ? cur - 1 : total - 1); }
  function startAuto() { clearInterval(timer); timer = setInterval(goNext, 4500); }
  function stopAuto()  { clearInterval(timer); }

  goTo(0); startAuto();

  if (prevBtn) prevBtn.addEventListener('click', function () { goPrev(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goNext(); startAuto(); });
  if (wrap) {
    wrap.addEventListener('mouseenter', stopAuto);
    wrap.addEventListener('mouseleave', startAuto);
  }

  var tx = 0;
  track.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; stopAuto(); }, { passive: true });
  track.addEventListener('touchend', function (e) {
    var d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) { d > 0 ? goNext() : goPrev(); }
    startAuto();
  });
}());

// ==================== GALLERY PAGE ====================
if (ACTIVE_PAGE === 'gallery') {
  (function() {
    var galleryData = SITE.gallery;
    var activeFilter = 'all';
    var currentLightboxIndex = 0;
    var filteredItems = [];
    var galleryGrid = qs('galleryGrid');

    // ==================== Featured images for the collage hero ====================
    // Order maps onto the data-pos slots in the SCSS (center + 8 satellites).
    // Swap src values here to change which images appear in the hero.
    var FEATURED_COLLAGE = [
      { pos: 'center', src: '../Multimedia/lensemanu3.jpg',    alt: 'Manufacturing Facility' },
      { pos: 'tl',     src: '../Multimedia/lense1.png',         alt: 'Hydrophobic IOL'        },
      { pos: 'tr',     src: '../Multimedia/nanoIOL1.png',       alt: 'Nano IOL'               },
      { pos: 'ml',     src: '../Multimedia/lensemanu1.jpg',     alt: 'Manufacturing'          },
      { pos: 'mr1',    src: '../Multimedia/msBlade-Sharp.png',  alt: 'Surgical Blade'         },
      { pos: 'mr2',    src: '../Multimedia/nanoRing.png',       alt: 'Nano Ring'              },
      { pos: 'bl',     src: '../Multimedia/lensemanu4.jpg',     alt: 'Manufacturing'          },
      { pos: 'bm',     src: '../Multimedia/lensemanu2.jpg',     alt: 'Manufacturing'          },
      { pos: 'br',     src: '../Multimedia/nanoIOLPmma.png',    alt: 'Nano IOL PMMA'          }
    ];

    // ==================== Render Collage Hero ====================
    function renderCollageHero() {
      var stage = qs('collageStage');
      if (!stage) return;

      stage.innerHTML = FEATURED_COLLAGE.map(function(item) {
        var cls = item.pos === 'center' ? 'collage-item collage-center' : 'collage-item';
        return '<div class="' + cls + '" data-pos="' + item.pos + '">' +
                  '<img src="' + item.src + '" alt="' + item.alt + '" loading="eager">' +
                '</div>';
      }).join('');
    }

    // ==================== Init Collage Scroll Animation ====================
    function initCollageAnimation() {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      var isMobile = window.matchMedia('(max-width: 768px)').matches;

      // Vector that each satellite flies along (composed with its initial CSS position)
      var satellitePaths = {
        tl:  { x: '-55vw', y: '-30vh' },
        tr:  { x: '55vw',  y: '-30vh' },
        ml:  { x: '-65vw', y: '5vh'   },
        mr1: { x: '65vw',  y: '-10vh' },
        mr2: { x: '65vw',  y: '25vh'  },
        bl:  { x: '-45vw', y: '45vh'  },
        bm:  { x: '0vw',   y: '55vh'  },
        br:  { x: '50vw',  y: '40vh'  }
      };

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#galleryCollageHero',
          start: 'top top',
          end: isMobile ? '+=120%' : '+=160%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Center image scales up to fill the viewport
      tl.to('.collage-center', {
        scale: isMobile ? 2.6 : 3.4,
        ease: 'none'
      }, 0);

      // Each satellite flies outward and fades
      Object.keys(satellitePaths).forEach(function(pos) {
        var p = satellitePaths[pos];
        tl.to('.collage-item[data-pos="' + pos + '"]', {
          x: p.x,
          y: p.y,
          scale: 0.55,
          opacity: 0,
          ease: 'none'
        }, 0);
      });

      // Heading section fades in as the collage finishes zooming
      gsap.set('#galleryIntro', { opacity: 0, y: 50 });
      gsap.to('#galleryIntro', {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#galleryIntro',
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1
        }
      });
    }

    // ==================== Render Gallery Heading ====================
    function renderGalleryHeading() {
      var heading = qs('galleryHeading');
      var sub = qs('gallerySub');
      if (heading) heading.textContent = galleryData.heading;
      if (sub) sub.textContent = galleryData.sub;
    }

    // ==================== Render Filter Buttons ====================
    function renderFilters() {
      var filtersContainer = qs('galleryFilters');
      if (!filtersContainer) return;

      filtersContainer.innerHTML = galleryData.categories.map(function(cat) {
        return '<button class="gallery-filter-btn ' + (cat.id === 'all' ? 'active' : '') + '" data-filter="' + cat.id + '">' + cat.label + '</button>';
      }).join('');

      qsa('.gallery-filter-btn').forEach(function(btn) {
       btn.addEventListener('click', function() {
          qsa('.gallery-filter-btn').forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          activeFilter = btn.dataset.filter;
          renderGalleryGrid();
        });
      });
    }

    // ==================== Render Gallery Grid ====================
    function renderGalleryGrid() {
      if (!galleryGrid) return;

      filteredItems = activeFilter === 'all'
        ? galleryData.items
        : galleryData.items.filter(function(item) { return item.category === activeFilter; });

      galleryGrid.innerHTML = filteredItems.map(function(item, index) {
        return '<div class="gallery-item" data-index="' + index + '" data-id="' + item.id + '">' +
                  '<div class="gallery-item-inner">' +
                    '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">' +
                    '<div class="gallery-item-overlay">' +
                      '<button class="gallery-item-btn" title="View ' + item.title + '">' +
                        '<i class="fa-solid fa-expand"></i>' +
                      '</button>' +
                    '</div>' +
                  '</div>' +
                '</div>';
      }).join('');

      qsa('.gallery-item').forEach(function(item, index) {
        item.addEventListener('click', function() { openLightbox(index); });
      });

      // Grid heights changed → refresh ScrollTrigger so pin distances stay correct
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }

    // ==================== Render CTA Section ====================
    function renderCta() {
      var ctaHeading = qs('ctaHeading');
      var ctaSub = qs('ctaSub');
      var ctaEmailBtn = qs('ctaEmailBtn');
      var ctaWhatsappBtn = qs('ctaWhatsappBtn');

      if (ctaHeading) ctaHeading.textContent = "Ready to Learn More?";
      if (ctaSub) ctaSub.textContent = "Contact us for detailed product information and pricing.";
      if (ctaEmailBtn) {
        ctaEmailBtn.href = "mailto:info@worldvisionoph.com";
        ctaEmailBtn.textContent = "Email Us";
      }
      if (ctaWhatsappBtn) {
        ctaWhatsappBtn.href = "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv";
        ctaWhatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> WhatsApp';
      }
    }

    // ==================== Render Footer ====================
    function renderFooter() {
      var footerBrand = qs('footerBrand');
      if (footerBrand) {
        footerBrand.innerHTML = '<img src="../Multimedia/logo.png" alt="Logo" style="height: 40px; width: auto;"> <span style="font-size: 1.125rem; font-weight: 600;">World Vision Ophthalmic</span>';
      }

      var footerTagline = qs('footerTagline');
      if (footerTagline) footerTagline.textContent = "Leading manufacturer of intraocular lenses and surgical instruments.";

      var footerQuickLinks = qs('footerQuickLinks');
      if (footerQuickLinks) {
        footerQuickLinks.innerHTML = '<a href="index.html">Home</a><a href="aboutUs.html">About</a><a href="gallery.html">Gallery</a><a href="contactUs.html">Contact</a>';
      }

      var footerContact = qs('footerContact');
      if (footerContact) {
        footerContact.innerHTML = '<p><strong>Email:</strong> info@worldvisionoph.com</p><p><strong>Address:</strong> Chennai, India</p>';
      }

      var footerCopyright = qs('footerCopyright');
      if (footerCopyright) {
        footerCopyright.innerHTML = '<p style="text-align: center; color: #666; font-size: 0.875rem; padding: 1rem;">&copy; 2024 World Vision Ophthalmic. All rights reserved.</p>';
      }
    }

    // ==================== Lightbox Functions ====================
    function openLightbox(index) {
      currentLightboxIndex = index;
      updateLightbox();
      var lightbox = qs('galleryLightbox');
      if (lightbox) {
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeLightbox() {
      var lightbox = qs('galleryLightbox');
      if (lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    }

    function updateLightbox() {
      var item = filteredItems[currentLightboxIndex];
      var img = qs('lightboxImage');
      var title = qs('lightboxTitle');
      var indicator = qs('lightboxIndicator');

      if (img) {
        img.src = item.src;
        img.alt = item.alt;
      }
      if (title) title.textContent = item.title;
      if (indicator) indicator.textContent = (currentLightboxIndex + 1) + ' / ' + filteredItems.length;
    }

    function nextImage() {
      currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
      updateLightbox();
    }

    function prevImage() {
      currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      updateLightbox();
    }

    // ==================== Lightbox Event Listeners ====================
    var lightboxClose = qs('lightboxClose');
    var lightboxNext = qs('lightboxNext');
    var lightboxPrev = qs('lightboxPrev');
    var lightbox = qs('galleryLightbox');

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

    if (lightbox) {
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
      });
    }

    document.addEventListener('keydown', function(e) {
      if (lightbox && lightbox.classList.contains('hidden')) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    });

    // ==================== Initialize Gallery ====================
    renderCollageHero();
    renderGalleryHeading();
    renderFilters();
    renderGalleryGrid();
    renderCta();
    renderFooter();

    // Defer animation init so the collage <img> elements are in the DOM and laid out
    requestAnimationFrame(function() {
      requestAnimationFrame(initCollageAnimation);
    });
  })();
}