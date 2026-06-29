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


/*************************************************
 * META
 *************************************************/

function renderMeta() {
  document.title = PAGE.meta.title;
  const m = qs("pageMeta");
  if (m) m.setAttribute("content", PAGE.meta.description);
}

/*************************************************
 * PAGE DATA
 *************************************************/

const PAGE = {

  meta: (() => {
    const metaMap = {
      hydrophobicIol: {
        title: "Hydrophobic IOL — World Vision Ophthalmic",
        description: "World Vision Hydrophobic IOL — USA medical-grade acrylic, <0.5% water, zero glistening."
      },

      hydrophilicIOL: {
        title: "Hydrophilic IOL — World Vision Ophthalmic",
        description: "World Vision Hydrophilic IOL — Nano Fold, Nano Flex, Nano Flex Y. European medical-grade hydrophilic acrylic, 25% water content, available in spheric and aspheric designs."
      },

      pmmaIOL: {
        title: "PMMA IOL — World Vision Ophthalmic",
        description: "World Vision PMMA IOL — UK medical-grade Polymethyl Methacrylate. Posterior chamber, anterior chamber, and capsular tension ring solutions."
      },

      nanoFold: {
        title: "Nano Fold — World Vision Ophthalmic",
        description: "World Vision Nano Fold — Spheric 360° Square Edge Hydrophilic Acrylic IOL. Models NFR 574 SQ, NFR 600 SQ, NFC 600 SQ, NFM 604 SQ."
      },

      nanoFlex: {
        title: "Nano Flex — World Vision Ophthalmic",
        description: "World Vision Nano Flex — Aspheric 360° Square Edge Hydrophilic IOL. Clear and Yellow (Nano Flex Y) variants with full model specifications."
      },

      nanoClaro: {
        title: "Monofocal Hydrophobic IOL — World Vision Ophthalmic",
        description: "World Vision Monofocal Hydrophobic IOL — NHPC 600, NHPC 600SQ. USA medical-grade aspheric hydrophobic acrylic with full technical specifications."
      },

      "iol-page": {
        title: "Intraocular Lens — World Vision Ophthalmic",
        description: "Explore World Vision intraocular lens solutions including hydrophobic, hydrophilic and PMMA IOLs."
      },

      toricCalculator: {
        title: "Toric Calculator — World Vision Ophthalmic",
        description: "Calculate toric IOL alignment and cylinder correction using the World Vision calculator."
      },

      blog: {
        title: "Blog — World Vision Ophthalmic",
        description: "Latest ophthalmic insights, surgical updates and World Vision news."
      },

      gallery: {
        title: "Gallery — World Vision Ophthalmic",
        description: "Explore product images, surgical visuals and ophthalmic solutions from World Vision."
      },

      contactUs: {
        title: "Contact Us — World Vision Ophthalmic",
        description: "Get in touch with World Vision Ophthalmic for product enquiries and support."
      },

      index: {
        title: "World Vision Ophthalmic",
        description: "World Vision Ophthalmic Pvt. Ltd. — premium ophthalmic solutions and intraocular lenses."
      },
      nanoClaro: {
        title: "Nano Claro — World Vision Ophthalmic",
        description: "World Vision Nano Claro — advanced hydrophobic acrylic IOL with superior optical performance."
      },
      nanoGrand: {
        title: "Nano Grand — World Vision Ophthalmic",
        description: "World Vision Nano Grand — high-performance hydrophobic acrylic IOL for complex cases."
      }
    };

    return metaMap[ACTIVE_PAGE] || {
      title: "World Vision Ophthalmic",
      description: "World Vision Ophthalmic Pvt. Ltd."
    };

  })(),

  company: {
    name:      "World Vision",
    subtitle:  "Ophthalmic Pvt. Ltd.",
    logo:      "../Multimedia/WVO_Logo1.png",
    whatsapp:  "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",
    copyright: "© 2026 World Vision Ophthalmic Pvt. Ltd. · All rights reserved.",
  },

  footer: {
    tagline: "Premium ophthalmic products - IOLs, surgical blades, and pharma - crafted in Chennai for surgeons worldwide.",
    socials: [
      { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
      { href: "#", icon: "fa-brands fa-instagram", label: "Instagram" },
      { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
    ],
    quickLinks: [
      { label: "Home",             href: "../Pages/index.html" },
      { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html" },
      { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html" },
      { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html" },
      { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
      { label: "About Us",         href: "../Pages/aboutUs.html" },
      { label: "Contact Us",       href: "../Pages/contactUs.html" },
      { label: "Gallery",          href: "../Pages/gallery.html" },
    ],
    products: [
      { label: "Nano Claro",      href: "../Pages/nanoClaro.html" },
      { label: "Nano Grand",      href: "../Pages/nanoGrand.html" },
      { label: "Nano Fold",       href: "../Pages/nanoFold.html" },
      { label: "Nano Flex",       href: "../Pages/nanoFlex.html" },
      { label: "Keratome Blades", href: "../Pages/keratome.html" },
      { label: "Crescent Blades", href: "../Pages/crescent.html" },
      { label: "MVR Blades",      href: "../Pages/mvrBlade.html" },
    ],
    contact: {
      address: "Chennai, Tamil Nadu, India - PIN 600001",
      phone:   "+91 98765 43210",
      email:   "info@worldvisionophthalmic.com",
      hours:   "Mon-Sat, 9AM-6PM IST",
    },
  },

  nav: {
    links: [
      { label: "Home",           href: "../Pages/index.html",         page: "index"          },
      { label: "About Us",       href: "../Pages/aboutUs.html",       page: "aboutUs"        },
      { label: "Gallery",        href: "../Pages/gallery.html",       page: "gallery"        },
      { label: "Contact Us",     href: "../Pages/contactUs.html",     page: "contactUs"      },
    ],
    cta: { label: "Toric Calculator", href: "../Pages/toricCalculator.html", icon:  "fa-calculator", color: "var(--neu-text)" },
    products: {
      label: "Our Products",
      // Pages that belong under the Products dropdown — used for active-nav detection
      pages: ["iol-page","hydrophobicIol","hydrophilicIOL","pmmaIOL","premiumIOL","pharmaProducts","keratome","crescent","lanceIp","mvrBlade","nanoClaro","nanoGrand","nanoClaroPlus","nanoGrandPlus","nanoFold","nanoFlex"],
      children: [
        {
          label: "Intraocular Lens",
          href:  "../Pages/iol-page.html",
          icon:  "fa-eye",
          color: "var(--neu-accent2)",
          children: [
            { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-blue-400"  },
            { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html", icon: "fa-shield-halved",      color: "text-teal-400"  },
            { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html",        icon: "fa-circle-half-stroke", color: "text-amber-400" },
          ],
        },
        { label: "Premium IOL", href: "#", icon: "fa-star-of-life", color: "var(--neu-accent2)" },
        {
          label: "Pharma Products",
          href:  "#",
          icon:  "fa-capsules",
          color: "var(--neu-accent2)",
          children: [
            { label: "World Vision Chol",  href: "#", icon: "fa-flask",   color: "text-purple-400" },
            { label: "World Vision TBlue", href: "#", icon: "fa-flask",   color: "text-blue-400"   },
            { label: "World Vision Visc",  href: "#", icon: "fa-droplet", color: "text-teal-400"   },
          ],
        },
        {
          label: "Micro Surgical Blades",
          href:  "../Pages/keratome.html",
          icon:  "fa-cut",
          color: "var(--neu-accent2)",
          children: [
            { label: "Keratome",  href: "../Pages/keratome.html",  icon: "fa-pen-fancy",          color: "text-slate-500" },
            { label: "Crescent",  href: "../Pages/crescent.html",  icon: "fa-moon",               color: "text-blue-400"  },
            { label: "Lance Ip",  href: "../Pages/lancelp.html",   icon: "fa-staff-snake",        color: "text-amber-400" },
            { label: "MVR Blade", href: "../Pages/mvrBlade.html",  icon: "fa-diamond-turn-right", color: "text-red-400"   },
          ],
        },
      ],
    },
    mobile: {
      main: [
        { label: "Home",             href: "../Pages/index.html",           page: "index"           },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html", page: "toricCalculator" },
        { label: "Gallery",          href: "../Pages/gallery.html",         page: "gallery"         },
        { label: "About Us",         href: "../Pages/aboutUs.html",         page: "aboutUs"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html",       page: "contactUs"       },
      ],
      products: {
        back:     { label: "Our Products" },
        iol:      { label: "Intraocular Lens",      icon: "fa-eye",        color: "text-[#0055a5]" },
        pharma:   { label: "Pharma Products",       icon: "fa-capsules",   color: "text-[#0055a5]" },
        blade:    { label: "Micro Surgical Blades", icon: "fa-cut",      color: "text-[#0055a5]" },
        children: [
          { label: "Premium IOL", href: "#", icon: "fa-star-of-life", color: "text-[#0055a5]" },
        ],
      },
      // VIEW 3 — IOL sub-menu
      iol: {
        back:  { label: "Intraocular Lens" },
        children: [
          { label: "Hydrophobic IOL", href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-[#0055a5]" },
          { label: "Hydrophilic IOL", href: "../Pages/hydrophilicIOL.html", icon: "fa-shield-halved",      color: "text-teal-500"  },
          { label: "PMMA IOL",        href: "../Pages/pmmaIOL.html",        icon: "fa-circle-half-stroke", color: "text-amber-500" },
        ],
      },
      // VIEW 4 — Pharma sub-menu
      pharma: {
        back:  { label: "Pharma Products" },
        children: [
          { label: "World Vision Chol",  href: "#", icon: "fa-flask",   color: "text-purple-500" },
          { label: "World Vision TBlue", href: "#", icon: "fa-flask",   color: "text-blue-500"   },
          { label: "World Vision Visc",  href: "#", icon: "fa-droplet", color: "text-teal-500"   },
        ],
      },
      // VIEW 5 — Blades sub-menu
      blade: {
        back:  { label: "Surgical Blades" },
        children: [
          { label: "Keratome",  href: "../Pages/keratome.html",  icon: "fa-pen-fancy",          color: "text-slate-500" },
          { label: "Crescent",  href: "../Pages/crescent.html",  icon: "fa-moon",               color: "text-blue-500"  },
          { label: "Lance Ip",  href: "../Pages/lancelp.html",   icon: "fa-staff-snake",        color: "text-amber-500" },
          { label: "MVR Blade", href: "../Pages/mvrBlade.html",  icon: "fa-diamond-turn-right", color: "text-red-500"   },
        ],
      },
    },
  },

  breadcrumb: (() => {
    const map = {
      "iol-page": [
        { label: "Home",               href: "../Pages/index.html" },
        { label: "Our Products",       href: "#"                   },
        { label: "Intraocular Lenses", current: true               },
      ],
      hydrophobicIol: [
        { label: "Home",               href: "../Pages/index.html"    },
        { label: "Our Products",       href: "#"                      },
        { label: "Intraocular Lenses", href: "../Pages/iol-page.html" },
        { label: "Hydrophobic IOL",    current: true                  },
      ],
      hydrophilicIOL: [
        { label: "Home",               href: "../Pages/index.html"    },
        { label: "Our Products",       href: "#"                      },
        { label: "Intraocular Lenses", href: "../Pages/iol-page.html" },
        { label: "Hydrophilic IOL",    current: true                  },
      ],
      pmmaIOL: [
        { label: "Home",               href: "../Pages/index.html"    },
        { label: "Our Products",       href: "#"                      },
        { label: "Intraocular Lenses", href: "../Pages/iol-page.html" },
        { label: "PMMA IOL",           current: true                  },
      ],
      nanoFold: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophilic IOL",    href: "../Pages/hydrophilicIOL.html"  },
        { label: "Nano Fold",          current: true                         },
      ],
      nanoFlex: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophilic IOL",    href: "../Pages/hydrophilicIOL.html"  },
        { label: "Nano Flex",          current: true                         },
      ],
      nanoClaro: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Claro",         current: true                         },
      ],
      nanoGrand: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Grand",         current: true                         },
      ],
      nanoClaroPlus: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Claro Plus",    current: true                         },
      ],
      nanoGrandPlus: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Grand Plus",    current: true                         },
      ],
      keratome: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Keratome Blade",     current: true                         },
      ],
      crescent: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Crescent Blade",     current: true                         },
      ],
      lancelp: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Lancelp Blade",      current: true                         },
      ],
      mvrBlade: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "MVR Blade",          current: true                         },
      ],
      toricCalculator: [
        { label: "Home",               href: "../Pages/index.html" },
        { label: "Toric Calculator",   current: true               },
      ],
      contactUs: [
        { label: "Home",               href: "../Pages/index.html" },
        { label: "Contact Us",         current: true               },
      ],
      aboutUs: [
        { label: "Home",               href: "../Pages/index.html" },
        { label: "About Us",           current: true               },
      ],
      gallery: [
        { label: "Home",               href: "../Pages/index.html" },
        { label: "Gallery",            current: true               },
      ],
    };
    return map[ACTIVE_PAGE] || map["iol-page"];
  })(),

  hero: {
    eyebrow: { pulse: true, text: "USA Medical Grade · Acrylic" },
    heading: "Hydrophobic<br><em>IOL Range</em>",
    desc:    "Engineered from USA-sourced medical-grade acrylic with less than 0.5% water content — the only true hydrophobic material. Superior surface hardness, zero glistening, and outstanding optical clarity for every surgical need.",
    btns: [
      { label: "Explore Models", href: "#models",             icon: "fa-grid-2",    style: "primary" },
      { label: "All IOLs",       href: "../Pages/iol-page.html", icon: "fa-arrow-left", style: "ghost", iconStyle: "font-size:11px;" },
    ],
  },

  specs: [
    { icon: "fa-flask-vial",      num: "<0.5%", label: "Water Content",      delay: "delay-1" },
    { icon: "fa-flag-usa",        num: "USA",   label: "Raw Material Origin", delay: "delay-2" },
    { icon: "fa-ruler-horizontal",num: "2.2mm", label: "Min Incision Size",   delay: "delay-3" },
    { icon: "fa-layer-group",     num: "17+",   label: "Lens Models",         delay: "delay-4" },
  ],

  models: {
    eyebrow: { icon: "fa-grid-2", text: "Product Lines" },
    heading: "<em>Four</em> design families",
    sub:     "Every model uses the same USA medical-grade hydrophobic acrylic base — available across monofocal, multifocal, toric and separate optical designs.",
    cards: [
      {
        href:    "../Pages/nanoClaro.html",
        variant: "nanoClaro",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
        tag:     "Semiloaded",
        name:    "Nano Claro",
        desc:    "Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Single focal point for crystal-clear distance vision. The most widely used IOL design globally — simple, reliable, and proven. Available in standard and aspheric optics.",
        chips:   ["NHPC 600", "NHPC 600SQ"],
        delay:   "delay-1",
      },
      {
        href:    "../Pages/nanoGrand.html",
        variant: "nanoGrand",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        tag:     "Semiloaded",
        name:    "Nano Grand",
        desc:    "Yellow Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Multiple focal points for full-range vision — near, intermediate and distance. Reduces spectacle dependence. Available in bifocal, EDOF and trifocal designs.",
        chips:   ["NHPC 600Y", "NHPC 600QY"],
        delay:   "delay-2",
      },
      {
        href:    "../Pages/nanoClaroPlus.html",
        variant: "nanoClaroPlus",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`,
        tag:     "Preloaded",
        name:    "Nano Claro Plus",
        desc:    "Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Designed to correct pre-existing corneal astigmatism simultaneously with cataract removal. Available in monofocal toric, multifocal toric, EDOF toric, and trifocal toric options.",
        chips:   ["NHPC 600P", "NHPC 600PSQ"],
        delay:   "delay-3",
      },
      {
        href:    "../Pages/nanoGrandPlus.html",
        variant: "nanoGrandPlus",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`,
        tag:     "Preloaded",
        name:    "Nano Grand Plus",
        desc:    "Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Designed to correct pre-existing corneal astigmatism simultaneously with cataract removal. Available in monofocal toric, multifocal toric, EDOF toric, and trifocal toric options.",
        chips:   ["NHPC 600PY", "NHPC 600PQY"],
        delay:   "delay-4",
      },
    ],
  },

  material: {
    eyebrow: { icon: "fa-atom", text: "Material Science" },
    heading: "Why <em>Hydrophobic</em> matters",
    sub:     "Most competitors use materials with over 4% water content and merely call them hydrophobic. World Vision uses only genuine USA medical-grade acrylic with less than 0.5% water — the real standard.",
    features: [
      {
        icon:  "fa-droplet-slash",
        title: "Zero Glistening & No Whitening",
        desc:  "The ultra-low water content eliminates microvacuoles that cause glistening — a known long-term visual degradation issue with inferior materials.",
      },
      {
        icon:  "fa-shield-halved",
        title: "Superior Surface Hardness",
        desc:  "Harder surface compared to high-water acrylic means better stability in the capsular bag, less abrasion during insertion, and longer-lasting optical clarity.",
      },
      {
        icon:  "fa-eye",
        title: "Low Refractive Index",
        desc:  "Specifically engineered low refractive index reduces the risk of dysphotopsia — glares and halos that compromise patient satisfaction post-surgery.",
      },
      {
        icon:  "fa-sun",
        title: "UV & Blue Light Filter",
        desc:  "Integrated UV absorber and blue light filtering chromophore protects the retina from high-energy wavelengths throughout the patient's lifetime.",
      },
    ],
    comparisonCard: {
      waterLabel: "Water Content Comparison",
      waterRows: [
        { label: "World Vision WVO",      value: "< 0.5%", type: "wv"    },
        { label: 'Generic "Hydrophobic"', value: "> 4.0%", type: "other" },
      ],
      certLabel: "Certifications",
      certRows: [
        { label: "Biocompatibility",    value: "ISO Tested", check: true },
        { label: "UV Protection",       value: "Built-in",   check: true },
        { label: "Blue Light Filter",   value: "Built-in",   check: true },
        { label: "Raw Material Source", value: "🇺🇸 USA",    check: false },
      ],
    },
  },

  trust: [
    {
      iconColor: "#0055a5",
      bgColor:   "rgba(0,85,165,0.1)",
      iconSvg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0055a5" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title:     "ISO Certified Quality",
      desc:      "All Freedom IOLs undergo rigorous biocompatibility testing to international ISO medical device standards.",
    },
    {
      bgColor:   "rgba(10,122,80,0.1)",
      iconSvg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a7a50" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
      title:     "Premium Raw Materials",
      desc:      "Only the highest-grade acrylic and PMMA sourced from certified suppliers in the USA and United Kingdom.",
    },
    {
      bgColor:   "rgba(138,90,16,0.1)",
      iconSvg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a5a10" stroke-width="2" stroke-linecap="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
      title:     "Superior Visual Outcomes",
      desc:      "High MTF ratings and low refractive index deliver exceptional light transmission, minimizing halos and glare.",
    },
  ],

  ifu: {
    heading: "Instructions for Use",
    sub:     "Download the official IFU documentation for each product line",
    links: [
      { label: "IFU — Hydrophobic IOLs", color: "#0a5ea8", variant: "hydro-icon" },
      { label: "IFU — Hydrophilic IOLs", color: "#0a7a50", variant: "phil-icon"  },
      { label: "IFU — PMMA IOLs",        color: "#8a5a10", variant: "pmma-icon"  },
      { label: "IFU — PMMA Rings",       color: "#8a5a10", variant: "pmma-icon"  },
    ],
  },

};

// Helpers

function qs(id) {return document.getElementById(id);}
function qsa(sel) {return document.querySelectorAll(sel);}


/*************************************************
 * DESKTOP NAV
 *************************************************/

function renderDesktopNav() {
  // Brand
  const brand = qs("navBrand");
  if (brand) {
    brand.innerHTML = `
      <img src="${PAGE.company.logo}" style="width:48px;height:48px" class="animate__animated animate__fadeIn animate__slow"/>
      <div class="flex flex-col leading-tight nav-logo-text">
        <span class="font-semibold text-2xl tracking-wide">${PAGE.company.name}</span>
        <span class="subtitle text-xs tracking-widest uppercase">${PAGE.company.subtitle}</span>
      </div>`;
  }

  // Links
  const navList = qs("desktopNavLinks");
  if (navList) {
    const p          = PAGE.nav.products;
    const iol    = p.children[0];           // Intraocular Lens
    const extras = p.children.slice(1);     // everything after IOL
    const isProductsActive = p.pages.includes(ACTIVE_PAGE);

    const l2 = iol.children.map(c => `
    <a href="${c.href}" class="neu-dropdown-item${pageFromHref(c.href) === ACTIVE_PAGE ? " active" : ""}">
      <i class="fa-solid ${c.icon}" style="color:${c.color};width:16px;"></i> ${c.label}
    </a>`).join("");

    const extrasHtml = extras.map(e => {
      if (e.children) {
        // Item has sub-menu — build a fly-out like IOL
        const l3 = e.children.map(c => `
          <a href="${c.href}" class="neu-dropdown-item${pageFromHref(c.href) === ACTIVE_PAGE ? " active" : ""}">
            <i class="fa-solid ${c.icon}" style="color:var(--neu-accent);width:16px;"></i> ${c.label}
          </a>`).join("");
          
          return `
          <div class="relative group/extra">
            <a href="${e.href}" class="neu-dropdown-item neu-dropdown-item--arrow flex items-center justify-between gap-3 px-4 py-3 transition cursor-pointer">
              <span class="flex items-center gap-3">
                <i class="fa-solid ${e.icon}" style="color:var(--neu-accent);width:16px;"></i> ${e.label}
              </span>
              <i class="fa-solid fa-chevron-right" style="font-size:10px;opacity:0.5;"></i>
            </a>
            <div class="neu-dropdown-l2 absolute left-full top-0 ml-10 w-56 opacity-0 invisible group-hover/extra:opacity-100 group-hover/extra:visible transition-all duration-200 overflow-hidden">
              ${l3}
            </div>
          </div>`;
      }
      
      // No children — plain link
      return `
        <a href="${e.href}" class="neu-dropdown-item flex items-center gap-3 px-4 py-3">
          <i class="fa-solid ${e.icon}" style="color:var(--neu-accent);width:16px;"></i> ${e.label}
        </a>`;
    }).join("");

    const productsLi = `
      <li class="flex flex-row relative group/prod items-center justify-center">
        <a href="#">
          <button id="productsNavBtn" type="button" class="nav-products-btn${isProductsActive ? " active" : ""}">
            ${p.label}
            <i class="fa-solid fa-chevron-right transition-transform duration-200 group-hover/prod:rotate-90" style="font-size:10px;margin-left:4px;color:#1d4ed8;"></i>
          </button>
        </a>
        <div id="navL1Panel" class="absolute left-0 top-full mt-6 w-56 opacity-0 invisible group-hover/prod:opacity-100 group-hover/prod:visible transition-all duration-200 overflow-visible neu-dropdown-l1">
          <div class="group/iol-neu">
            <a href="${iol.href}" class="neu-dropdown-item${pageFromHref(iol.href) === ACTIVE_PAGE ? " active" : ""}" neu-dropdown-item--arrow flex items-center justify-between gap-3 px-4 py-3 transition cursor-pointer">
              <span class="flex items-center gap-3">
                <i class="fa-solid fa-eye" style="color:var(--neu-accent);width:16px;"></i> ${iol.label}
              </span>
              <i class="fa-solid fa-chevron-right" style="font-size:10px;opacity:0.5;"></i>
            </a>
            <div id="navL2Panel" class="neu-dropdown-l2 absolute left-full top-0 ml-6 w-56 opacity-0 invisible group-hover/iol-neu:opacity-100 group-hover/iol-neu:visible transition-all duration-200 overflow-hidden">
              ${l2}
            </div>
          </div>
          ${extrasHtml}
        </div>
      </li>`;

      const productPageNames = {
      "iol-page":         "Intraocular Lens",
      hydrophobicIol:     "Hydrophobic IOL",
      hydrophilicIOL:     "Hydrophilic IOL",
      pmmaIOL:            "PMMA IOL",
      nanoClaro:          "Nano Claro",
      nanoGrand:          "Nano Grand",
      nanoClaroPlus:      "Nano Claro Plus",
      nanoGrandPlus:      "Nano Grand Plus",
      nanoFold:           "Nano Fold",
      nanoFlex:           "Nano Flex",
      keratome:           "Keratome Blade",
      crescent:           "Crescent Blade",
      lancelp:            "Lance IP Blade",
      mvrBlade:           "MVR Blade"
    };

    const activeProductName = productPageNames[ACTIVE_PAGE];

    let html = "";
    PAGE.nav.links.forEach(link => {
      const isActive = link.page === ACTIVE_PAGE;

      if (link.label === "Home") {
        html += `
          <li>
            <a href="${link.href}"${isActive ? ' class="active"' : ""}>
              ${link.label}
            </a>
          </li>
        `;

        html += productsLi;

        // Show current product after "Our Products >"
        if (activeProductName) {
          html += `
            <li>
              <a href="#" class="active">
                ${activeProductName}
              </a>
            </li>
          `;
        }

        return;
      }

      // Hide the default Hydrophobic IOL link on product pages
      // Show "Hydrophobic IOL" only on hydrophobic-related product pages.
      // Hide it everywhere else (home, about, gallery, contact, etc).
      if (link.page === "hydrophobicIol") {
        const hydrophobicPages = ["hydrophobicIol", "nanoClaro", "nanoGrand", "nanoClaroPlus", "nanoGrandPlus"];
        if (!hydrophobicPages.includes(ACTIVE_PAGE)) return;
        // On product pages, the breadcrumb already shows the lineage, so hide here too
        if (activeProductName && ACTIVE_PAGE !== "hydrophobicIol") return;
      }

      html += `
        <li>
          <a href="${link.href}"${isActive ? ' class="active"' : ""}>
            ${link.label}
          </a>
        </li>
      `;
    });
    navList.innerHTML = html;
  }

  // CTA
  const cta = qs("navCta");
  if (cta) {
    cta.href = PAGE.nav.cta.href;

    cta.setAttribute("aria-label", PAGE.nav.cta.label);

    cta.innerHTML = `
      ${PAGE.nav.cta.label}
      <i class="fa-solid ${PAGE.nav.cta.icon}" style="margin-right:8px;"></i>
    `;
  }
}


/*************************************************
 * MOBILE NAV
 *************************************************/

function mobileBackBtn(id, label) {
  return `
    <li>
      <button id="${id}" type="button"
        class="mobile-view mobile-link flex items-center gap-3 text-left">
        <i class="fa-solid fa-chevron-left text-sm w-10 h-10 flex items-center justify-center rounded-xl bg-white/70 border border-white/60 shadow-[4px_4px_10px_rgba(184,190,200,0.8),-4px_-4px_10px_rgba(255,255,255,0.9)]"
          style="background:var(--neu-btdark);color:var(--neu-accent2)"></i>
        <span class="font-semibold text-[17px]" style="color:var(--neu-text)">${label}</span>
      </button>
    </li>`;
}

function mobileForwardBtn(id, icon, color, label, isActive = false) {
  return `
    <li>
      <button id="${id}" type="button"
        class="w-full flex items-center justify-between mobile-link text-left${isActive ? " active" : ""}">
        <span class="flex items-center gap-2">
          <i class="fa-solid ${icon}" style="color:${color}"></i> ${label}
        </span>
        <i class="fa-solid fa-chevron-right text-sm opacity-50 flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 border border-white/60 shadow-[4px_4px_10px_rgba(184,190,200,0.8),-4px_-4px_10px_rgba(255,255,255,0.9)]"
          style="background:var(--neu-btdark);color:var(--neu-accent2)"></i>
      </button>
    </li>`;
}

function renderMobileNav() {
  const mob = PAGE.nav.mobile;
  const productsActive = PAGE.nav.products.pages.includes(ACTIVE_PAGE);

  // Brand
  const brand = qs("mobileBrand");
  if (brand) {
    brand.innerHTML = `
      <img src="${PAGE.company.logo}" class="w-11 h-11 object-contain"/>
      <div class="flex flex-col leading-tight nav-logo-text">
        <span class="font-semibold text-lg tracking-wide">${PAGE.company.name}</span>
        <span class="subtitle text-[10px] tracking-widest uppercase">${PAGE.company.subtitle}</span>
      </div>`;
  }

  // VIEW 1
  const mainView = qs("mobileMainView");
  if (mainView) {
    const links = mob.main.map(link => {
      const isActive = link.page === ACTIVE_PAGE;
      return `<li><a href="${link.href}" class="mobile-link${isActive ? " active" : ""}">${link.label}</a></li>`;
    });
    links.splice(1, 0, `
      <li>
        <button id="mobileProductsBtn" type="button"
          class="mobile-view mobile-link w-full flex items-center justify-between text-left${productsActive ? " active" : ""}">
          <span>${PAGE.nav.products.label}</span>
          <i class="fa-solid fa-chevron-right text-sm opacity-60 flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 border border-white/60 shadow-[4px_4px_10px_rgba(184,190,200,0.8),-4px_-4px_10px_rgba(255,255,255,0.9)]"
            style="background:var(--neu-btdark);color:var(--neu-accent2)"></i>
        </button>
      </li>`);
    mainView.innerHTML = links.join("");
  }

  // VIEW 2
  const productsView = qs("mobileProductsView");
  if (productsView) {
    const pd = mob.products;
    const iolActive = mob.iol.children.some(
      item => pageFromHref(item.href) === ACTIVE_PAGE
    );
    productsView.innerHTML =
      mobileBackBtn("backToMainMenu", pd.back.label) +

      mobileForwardBtn("mobileIolBtn", pd.iol.icon, pd.iol.color, pd.iol.label, iolActive ) +

      pd.children.map(item => `
        <li>
          <a href="${item.href}" class="mobile-link flex items-center gap-2">
            <i class="fa-solid ${item.icon}" style="color:${item.color}"></i>
            ${item.label}
          </a>
        </li>
      `).join("") +

      mobileForwardBtn( "mobilePharmaBtn",pd.pharma.icon,pd.pharma.color,pd.pharma.label ) + mobileForwardBtn( "mobileBladeBtn",pd.blade.icon,pd.blade.color,pd.blade.label);
  }

  // VIEW 3
  const iolView = qs("mobileIolView");
  if (iolView) {
    const id = mob.iol;
    iolView.innerHTML =
      mobileBackBtn("backToProductsMenu", id.back.label) +
      id.children.map(item => `
        <li>
          <a href="${item.href}" class="mobile-link${pageFromHref(item.href) === ACTIVE_PAGE ? " active" : ""} flex items-center gap-2">
            <i class="fa-solid ${item.icon}" style="color:${item.color}"></i> ${item.label}
          </a>
        </li>`).join("");
  }
  // VIEW 4 — Pharma
const pharmaView = qs("mobilePharmaView");

if (pharmaView) {
  const d = mob.pharma;
  pharmaView.innerHTML =
    mobileBackBtn("backToProductsFromPharma", d.back.label) +
    d.children.map(item => `
      <li>
        <a href="${item.href}" class="mobile-link flex items-center gap-2">
          <i class="fa-solid ${item.icon}" style="color:${item.color}"></i>
          ${item.label}
        </a>
      </li>
    `).join("");
  }
  // VIEW 5 — Blade
const bladeView = qs("mobileBladeView");

if (bladeView) {
  const d = mob.blade;

  bladeView.innerHTML =
    mobileBackBtn("backToProductsFromBlade", d.back.label) +

    d.children.map(item => `
      <li>
        <a href="${item.href}" class="mobile-link flex items-center gap-2">
          <i class="fa-solid ${item.icon}" style="color:${item.color}"></i>
          ${item.label}
        </a>
      </li>
    `).join("");
  }
}


/*************************************************
 * BREADCRUMB
 *************************************************/

function renderBreadcrumb() {
  const nav = qs("breadcrumb");
  if (!nav) return;
  nav.innerHTML = PAGE.breadcrumb.map((crumb, i) => {
    const sep = i < PAGE.breadcrumb.length - 1 ? '<span class="sep">/</span>' : "";
    if (crumb.current) return `<span class="current">${crumb.label}</span>${sep}`;
    return `<a href="${crumb.href}">${crumb.label}</a>${sep}`;
  }).join("");
}

function renderHero() {
  const h = PAGE.hero;

  const eyebrow = qs("heroEyebrow");
  if (eyebrow) eyebrow.innerHTML = `${h.eyebrow.pulse ? '<span class="pulse"></span>' : ""}${h.eyebrow.text}`;

  const heading = qs("hydro-h1");
  if (heading) heading.innerHTML = h.heading;

  const desc = qs("heroDesc");
  if (desc) desc.textContent = h.desc;

  const btns = qs("heroBtns");
  if (btns) {
    btns.innerHTML = h.btns.map(b => `
      <a href="${b.href}" class="hero-btn-iol-${b.style}">
        <i class="fa-solid ${b.icon}"${b.iconStyle ? ` style="${b.iconStyle}"` : ""}></i> ${b.label}
      </a>`).join("");
  }
}

// Status Bar
function renderStatusBar() {
  const grid = qs("statusBar");
  if (!grid) return;
  grid.innerHTML = PAGE.specs.map(s => `
    <div class="spec-pill reveal ${s.delay}">
      <div class="spec-pill-icon"><i class="fa-solid ${s.icon}"></i></div>
      <div class="spec-pill-num">${s.num}</div>
      <div class="spec-pill-label">${s.label}</div>
    </div>`).join("");
}

// Model Cards

function renderModels() {
  const d = PAGE.models;

  const eyebrow = qs("modelsEyebrow");
  if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid ${d.eyebrow.icon}" style="font-size:10px;"></i> ${d.eyebrow.text}`;

  const heading = qs("modelsHeading");
  if (heading) heading.innerHTML = d.heading;

  const sub = qs("modelsSub");
  if (sub) sub.textContent = d.sub;

  const grid = qs("modelsGrid");
  if (grid) {
    grid.innerHTML = d.cards.map(c => `
      <a href="${c.href}" class="model-card reveal ${c.delay}">
        <div class="model-card-header">
          <div class="model-card-icon ${c.variant}">${c.iconSvg}</div>
          <div>
            <span class="model-tag ${c.variant}">${c.tag}</span>
            <h3>${c.name}</h3>
          </div>
        </div>
        <div class="model-card-body">
          <p class="model-desc">${c.desc}</p>
          <div class="model-lens-list">
            ${c.chips.map(ch => `<span class="model-lens-chip">${ch}</span>`).join("")}
          </div>
          <span class="model-card-cta ${c.variant}">
            View models
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join("");
  }
}

// Material Science

function renderMaterial() {
  const d = PAGE.material;

  const eyebrow = qs("materialEyebrow");
  if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid ${d.eyebrow.icon}" style="font-size:10px;"></i> ${d.eyebrow.text}`;

  const heading = qs("materialHeading");
  if (heading) heading.innerHTML = d.heading;

  const sub = qs("materialSub");
  if (sub) sub.textContent = d.sub;

  const features = qs("materialFeatures");
  if (features) {
    features.innerHTML = d.features.map(f => `
      <div class="material-feature">
        <div class="mf-icon"><i class="fa-solid ${f.icon}"></i></div>
        <div>
          <div class="mf-title">${f.title}</div>
          <div class="mf-desc">${f.desc}</div>
        </div>
      </div>`).join("");
  }

  const card = qs("materialCard");
  if (card) {
    const cc = d.comparisonCard;
    const waterRows = cc.waterRows.map(r => `
      <div class="compare-row">
        <span class="compare-label">${r.label}</span>
        <span class="compare-${r.type}">${r.value}</span>
      </div>`).join("");
    const certRows = cc.certRows.map(r => `
      <div class="compare-row">
        <span class="compare-label">${r.label}</span>
        <span class="compare-wv">
          ${r.check ? '<i class="fa-solid fa-check" style="font-size:11px;"></i> ' : ""}${r.value}
        </span>
      </div>`).join("");

    card.innerHTML = `
      <div class="material-neu-card-label">
        <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> ${cc.waterLabel}
      </div>
      <div class="material-compare">${waterRows}</div>
      <div style="width:100%;height:1px;background:rgba(0,0,0,0.07);margin:4px 0;"></div>
      <div class="material-neu-card-label" style="margin-top:4px;">
        <i class="fa-solid fa-certificate" style="margin-right:5px;"></i> ${cc.certLabel}
      </div>
      <div class="material-compare">${certRows}</div>`;
  }
}

// Trust Bar

function renderTrust() {
  const bar = qs("trustBar");
  if (!bar) return;
  bar.innerHTML = PAGE.trust.map(t => `
    <div class="trust-card">
      <div class="trust-icon" style="background:${t.bgColor}">${t.iconSvg}</div>
      <div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      </div>
    </div>`).join("");
}

// IFU Section

function renderIfu() {
  const d = PAGE.ifu;

  const header = qs("ifuHeader");
  if (header) {
    header.innerHTML = `
      <div class="ifu-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      </div>
      <div>
        <div class="ifu-title" id="ifu-title">${d.heading}</div>
        <div class="ifu-sub">${d.sub}</div>
      </div>`;
  }

  const grid = qs("ifuGrid");
  if (grid) {
    grid.innerHTML = d.links.map(l => `
      <a href="#" class="ifu-link" aria-label="Download ${l.label}">
        <div class="ifu-link-icon ${l.variant}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.color}" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <polyline points="9 15 12 18 15 15"/>
          </svg>
        </div>
        <div class="ifu-link-text">
          <strong>${l.label}</strong>
          <span>PDF Document</span>
        </div>
      </a>`).join("");
  }
}

function renderFloat() {
  const btn = qs("waFloat");
  if (btn) btn.href = PAGE.company.whatsapp;
}

function renderFooter() {
  const footer = PAGE.footer;
  const body = qs("auFooterBody");

  if (body) {
    body.innerHTML = `
      <div class="au-footer-brand-col">
        <div class="au-footer-brand-header">
          <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
          <div>
            <div class="au-footer-brand-name">${PAGE.company.name}</div>
            <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
          </div>
        </div>
        <p class="au-footer-tagline">${footer.tagline}</p>
        <div class="au-footer-socials">
          ${footer.socials.map(s =>
            `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
              <i class="${s.icon}"></i>
            </a>`
          ).join("")}
        </div>
      </div>

      <div class="au-footer-links-col">
        <h4>Quick Links</h4>
        <div class="au-footer-links-grid">
          ${footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
        </div>
        <h4 style="margin-top:24px;">Products</h4>
        <div class="au-footer-links-grid">
          ${footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
        </div>
      </div>

      <div class="au-footer-contact-col">
        <h4>Contact Us</h4>
        <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${footer.contact.address}</span></div>
        <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${footer.contact.phone}">${footer.contact.phone}</a></span></div>
        <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${footer.contact.email}">${footer.contact.email}</a></span></div>
        <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${footer.contact.hours}</span></div>
      </div>`;
  }

  const bottom = qs("auFooterBottom");
  if (bottom) bottom.textContent = PAGE.company.copyright;

  const copy = qs("footerCopyright");
  if (copy) copy.textContent = PAGE.company.copyright;
}

renderMeta();
renderDesktopNav();
renderMobileNav();
renderBreadcrumb();
renderHero();
renderStatusBar();
renderModels();
renderMaterial();
renderTrust();
renderIfu();
renderFloat();
renderFooter();

/*************************************************
 * MONOFOCAL PAGE — only runs on nanoClaro.html
 *************************************************/

if (ACTIVE_PAGE === "nanoClaro") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Claro",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano claro plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600", label: "NHPC 600",
        specs: [
          { label: "Model",                value: "NHPC 600",                                     accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.40"                                                     },
          { label: "Diopter Range",        value: "5.00 D – 30.00 D (0.5 Diopter steps)"                      },
          { label: "AC Depth",             value: "5.28 mm"                                                    },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
      {
        id: "NHPC600SQ", label: "NHPC 600SQ",
        specs: [
          { label: "Model",                value: "NHPC 600SQ",                                   accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.40"                                                     },
          { label: "Diopter Range",        value: "5.00 D – 30.00 D (0.5 Diopter steps)"                      },
          { label: "AC Depth",             value: "5.28 mm"                                                    },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Claro<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

if (ACTIVE_PAGE === "nanoGrand") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Grand",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano grand plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600Y", label: "NHPC 600Y",
        specs: [
          { label: "Model",                value: "NHPC 600Y",                                    accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
      {
        id: "NHPC600SQY", label: "NHPC 600SQY",
        specs: [
          { label: "Model",                value: "NHPC 600SQY",                                  accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Grand<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;

}

if (ACTIVE_PAGE === "nanoClaroPlus") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Claro Plus",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano Claro Plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600P", label: "NHPC 600P",
        specs: [
          { label: "Model",                value: "NHPC 600P",                                    accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
      {
        id: "NHPC600PSQ", label: "NHPC 600PSQ",
        specs: [
          { label: "Model",                value: "NHPC 600PSQ",                                  accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Claro Plus<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;

}

if (ACTIVE_PAGE === "nanoGrandPlus") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Grand Plus",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano Grand Plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600PY", label: "NHPC 600PY",
        specs: [
          { label: "Model",                value: "NHPC 600PY",                                   accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
      {
        id: "NHPC600PQY", label: "NHPC 600PQY",
        specs: [
          { label: "Model",                value: "NHPC 600PQY",                                  accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Grand Plus<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;

}

/*************************************************
 * DarkMode Toggle
 *************************************************/
(function () {
  const buttons = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-mobile"),
  ].filter(Boolean);

  const html = document.documentElement;
  const STORAGE_KEY = "worldVision-theme";
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = saved ? saved === "dark" : prefersDark;

  function syncButtons(isDark) {
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(isDark));
    });
  }

  if (startDark) html.classList.add("dark");

  syncButtons(startDark);

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const nowDark = html.classList.toggle("dark");
      localStorage.setItem(STORAGE_KEY, nowDark ? "dark" : "light");
      syncButtons(nowDark);
    });
  });
})();

/*************************************************
 * Mobile Drawer Menu
 *************************************************/
const menuToggle = document.getElementById("menuToggle");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

const mobileMainView = document.getElementById("mobileMainView");
const mobileProductsView = document.getElementById("mobileProductsView");
const mobileIolView = document.getElementById("mobileIolView");

const mobilePharmaView = document.getElementById("mobilePharmaView");
const mobileBladeView = document.getElementById("mobileBladeView");

const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileIolBtn = document.getElementById("mobileIolBtn");

const mobilePharmaBtn = document.getElementById("mobilePharmaBtn");
const mobileBladeBtn = document.getElementById("mobileBladeBtn");

const backToMainMenu = document.getElementById("backToMainMenu");
const backToProductsMenu = document.getElementById("backToProductsMenu");

const backToProductsFromPharma = document.getElementById("backToProductsFromPharma");
const backToProductsFromBlade = document.getElementById("backToProductsFromBlade");

let currentMobileView = mobileMainView;
let mobileViewTimer = null;

const VIEW_DEPTH = {
  mobileMainView: 0,
  mobileProductsView: 1,
  mobileIolView: 2,
  mobilePharmaView: 2,
  mobileBladeView: 2,
};

function showMobileView(nextView) {
  if (!nextView) return;

  const views = [mobileMainView, mobileProductsView, mobileIolView, mobilePharmaView, mobileBladeView].filter(Boolean);
  const goingForward =
    !currentMobileView ||
    VIEW_DEPTH[nextView.id] > VIEW_DEPTH[currentMobileView.id];

  clearTimeout(mobileViewTimer);

  if (currentMobileView === nextView) {
    views.forEach((v) => v.classList.add("hidden"));
    views.forEach((v) =>
      v.classList.remove("flex", "view-enter", "view-enter-back", "view-exit")
    );

    nextView.classList.remove("hidden");
    nextView.classList.add("flex", "view-enter");
    return;
  }

  if (currentMobileView) {
    currentMobileView.classList.remove("view-enter", "view-enter-back");
    currentMobileView.classList.add("view-exit");
  }

  mobileViewTimer = setTimeout(() => {
    views.forEach((v) => v.classList.add("hidden"));
    views.forEach((v) =>
      v.classList.remove("flex", "view-enter", "view-enter-back", "view-exit")
    );

    nextView.classList.remove("hidden");
    nextView.classList.add("flex", goingForward ? "view-enter" : "view-enter-back");

    currentMobileView = nextView;
  }, 155);
}

function openMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("menu-open");

  if (mobileMainView) showMobileView(mobileMainView);
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");

  if (mobileMainView) showMobileView(mobileMainView);
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");
    if (isOpen) closeMenu();
    else openMenu();
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

if (mobileProductsBtn) {
  mobileProductsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileProductsView);
  });
}

if (mobileIolBtn) {
  mobileIolBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileIolView);
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

if (backToMainMenu) {
  backToMainMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileMainView);
  });
}

if (backToProductsMenu) {
  backToProductsMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileProductsView);
  });
}

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  if (link.id === "mobileProductsBtn") return;

  link.addEventListener("click", closeMenu);
});


window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

/*************************************************
 * Card Flip
 *************************************************/
function flipCard(id) {
  const card = document.getElementById(id);
  if (card) card.classList.toggle("flipped");
}
/*************************************************
 * IFU Links
 *************************************************/
document.querySelectorAll(".ifu-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert("IFU document download coming soon.");
  });
});

/*************************************************
 * Nav Active State
 *************************************************/
document.querySelectorAll(".nav-links a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.querySelectorAll(".nav-links a").forEach((x) => {
      x.classList.remove("active");
    });

    a.classList.add("active");
  });
});

/*************************************************
 * sp-tab Switching
 *************************************************/
document.querySelectorAll(".sp-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".sp-tab").forEach((t) => {
      t.classList.remove("active");
    });

    document.querySelectorAll(".sp-panel").forEach((p) => {
      p.classList.remove("active");
    });

    tab.classList.add("active");

    const panel = document.getElementById("tab-" + tab.dataset.tab);
    if (panel) panel.classList.add("active");
  });
});

/*************************************************
 * Eye Toggle
 *************************************************/
const eyeLeft = document.getElementById("eyeLeft");
const eyeRight = document.getElementById("eyeRight");

if (eyeLeft && eyeRight) {
  eyeLeft.addEventListener("click", function () {
    this.classList.toggle("active");
    eyeRight.classList.remove("active");
  });

  eyeRight.addEventListener("click", function () {
    this.classList.toggle("active");
    eyeLeft.classList.remove("active");
  });
}

/*************************************************
 * Populate IOL Power
 *************************************************/
(function () {
  const sel = document.getElementById("iolPower");
  if (!sel) return;

  for (let d = 6.0; d <= 30.0; d += 0.5) {
    const opt = document.createElement("option");
    opt.value = d.toFixed(1);
    opt.textContent = d.toFixed(1) + " D";
    sel.appendChild(opt);
  }
})();

/*************************************************
 * Next Page Navigation
 *************************************************/
function openTab(tabName) {
  document.querySelectorAll(".sp-tab").forEach((t) => {
    t.classList.remove("active");
  });

  document.querySelectorAll(".sp-panel").forEach((p) => {
    p.classList.remove("active");
  });

  const tabBtn = document.querySelector('.sp-tab[data-tab="' + tabName + '"]');
  const panel = document.getElementById("tab-" + tabName);

  if (tabBtn) tabBtn.classList.add("active");
  if (panel) panel.classList.add("active");
}

const btn1 = document.getElementById("btnNextToPatient");

if (btn1) {
  btn1.addEventListener("click", () => openTab("patient"));
}

const btn2 = document.getElementById("btnNextToPreop");

if (btn2) {
  btn2.addEventListener("click", () => openTab("preop"));
}

/*************************************************
 * Model Tab Switcher
 *************************************************/
document.querySelectorAll(".model-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".model-tab").forEach(function (t) {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    document.querySelectorAll(".model-panel").forEach(function (panel) {
      panel.classList.remove("active");
    });

    const targetPanel = document.getElementById("panel-" + tab.dataset.model);
    if (targetPanel) targetPanel.classList.add("active");
  });
});

/*************************************************
 * Spec Model Button Switcher
 * Uses event delegation — works even when buttons are rendered dynamically
 *************************************************/
document.addEventListener("click", function(e) {
  const btn = e.target.closest(".spec-model-btn");
  if (!btn) return;

  // Find the parent spec-card
  const card = btn.closest(".spec-card");
  if (!card) return;

  // Deactivate all sibling buttons
  card.querySelectorAll(".spec-model-btn").forEach(function(b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");

  // Hide all spec-rows in this card, show the target
  card.querySelectorAll(".spec-rows").forEach(function(r) {
    r.style.display = "none";
  });
  const target = document.getElementById(btn.dataset.rows);
  if (target) target.style.display = "block";

  // Swap lens image when data-lens is set on the button
  if (btn.dataset.lens) {
    const panel = btn.closest(".model-panel") || btn.closest(".switcher-wrap");
    const lensImg = panel ? panel.querySelector(".card-lens-svg img") : null;
    if (lensImg) {
      lensImg.src = btn.dataset.lens;
      lensImg.style.opacity = "1";
    }

     // Change PMMA hero lens
    if (ACTIVE_PAGE === "pmmaIOL") {
      const heroLensImg = qs("heroLensWrap")?.querySelector("img");

      if (heroLensImg) {
        heroLensImg.src = btn.dataset.lens;
        heroLensImg.alt = `${btn.textContent.trim()} PMMA lens`;
        heroLensImg.style.opacity = "1";
      }
    }
  }
});

/*************************************************
 * Scroll Reveal
 *************************************************/
(function () {
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length === 0) return;

  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.09 }
  );

  revealEls.forEach(function (el) {
    obs.observe(el);
  });
})();

/*************************************************
 * Contact Page — Subject Chips (delegation — works with dynamic render)
 *************************************************/
document.addEventListener("click", function(e) {
  const chip = e.target.closest(".subject-chip");
  if (!chip) return;
  document.querySelectorAll(".subject-chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  const sf = document.getElementById("subjectField");
  if (sf) sf.value = chip.dataset.subject;
});

/*************************************************
 * Contact Page — Form Submit
 *************************************************/
document.addEventListener("submit", function(e) {
  if (!e.target || e.target.id !== "contactForm") return;
  e.preventDefault();

  const name  = document.getElementById("cf-name");
  const email = document.getElementById("cf-email");
  const msg   = document.getElementById("cf-msg");

  if (!name || !email || !msg) return;

  if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
    alert("Please fill in your name, email, and message.");
    return;
  }

  e.target.style.display = "none";
  const success = document.getElementById("formSuccess");
  if (success) success.classList.add("show");
});

function resetForm() {
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (form)    { form.reset(); form.style.display = ""; }
  if (success) success.classList.remove("show");
  document.querySelectorAll(".subject-chip").forEach((c, i) => c.classList.toggle("active", i === 0));
  const sf = document.getElementById("subjectField");
  if (sf) sf.value = "Product Enquiry";
}

/*************************************************
 * Contact Page — FAQ Accordion (delegation — works with dynamic render)
 *************************************************/
document.addEventListener("click", function(e) {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.closest(".faq-item");
  if (!item) return;
  const wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
});

/*************************************************
 * Toric Calculator — only runs on toricCalculator.html
 *************************************************/
(function () {
  if (!document.getElementById("btnCalculate")) return;

  const CYL_MODELS = [
    { name: "TORICT3", iol: 3.75, corneal: 2.57 },
    { name: "TORICT4", iol: 4.5, corneal: 3.08 },
    { name: "TORICT5", iol: 5.25, corneal: 3.6 },
    { name: "TORICT6", iol: 6.0, corneal: 4.11 },
  ];

  function toRad(deg) {
    return (deg * Math.PI) / 180;
  }

  function toDeg(rad) {
    let d = (rad * 180) / Math.PI;
    while (d < 0) d += 180;
    while (d >= 180) d -= 180;
    return d;
  }

  function crossedCylinder(mag1, axis1, mag2, axis2) {
    const a1 = toRad(axis1);
    const a2 = toRad(axis2);

    const j0 =
      (-mag1 / 2) * Math.cos(2 * a1) +
      (-mag2 / 2) * Math.cos(2 * a2);

    const j45 =
      (-mag1 / 2) * Math.sin(2 * a1) +
      (-mag2 / 2) * Math.sin(2 * a2);

    const resultMag = 2 * Math.sqrt(j0 * j0 + j45 * j45);
    const resultAxis = toDeg(0.5 * Math.atan2(j45, j0) + Math.PI / 2);

    return { mag: resultMag, axis: resultAxis };
  }

  function bestCylModel(neededCorneal) {
    let best = CYL_MODELS[0];
    let minDiff = Math.abs(neededCorneal - CYL_MODELS[0].corneal);

    CYL_MODELS.forEach(function (m) {
      const diff = Math.abs(neededCorneal - m.corneal);

      if (diff < minDiff) {
        minDiff = diff;
        best = m;
      }
    });

    return best;
  }

  function validate(id, min, max) {
    const el = document.getElementById(id);
    const err = document.getElementById(id + "-err");

    if (!el) return null;

    const val = parseFloat(el.value);

    if (isNaN(val) || val < min || val > max) {
      el.classList.add("error");
      if (err) err.classList.add("visible");
      return null;
    }

    el.classList.remove("error");
    if (err) err.classList.remove("visible");

    return val;
  }

  document.getElementById("btnCalculate").addEventListener("click", function () {
    document.querySelectorAll(".sp-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".sp-panel").forEach((p) => p.classList.remove("active"));

    const preopTab = document.querySelector('[data-tab="preop"]');
    const preopPanel = document.getElementById("tab-preop");

    if (preopTab) preopTab.classList.add("active");
    if (preopPanel) preopPanel.classList.add("active");

    const flatK = validate("flatK", 30, 60);
    const flatAx = validate("flatAxis", 0, 180);
    const steepK = validate("steepK", 30, 60);
    const steepAx = validate("steepAxis", 0, 180);
    const sia = validate("sia", 0, 2);
    const il = validate("incision", 0, 360);

    if ([flatK, flatAx, steepK, steepAx, sia, il].some((v) => v === null)) return;

    const cornAst = steepK - flatK;
    const cornAxis = steepAx;
    const siaAxis = il % 180;

    const crossed = crossedCylinder(cornAst, cornAxis, sia, siaAxis);
    const model = bestCylModel(crossed.mag);
    const placementAxis = Math.round(crossed.axis);
    const residual = crossedCylinder(crossed.mag, crossed.axis, model.corneal, crossed.axis + 90);

    function setTxt(id, val) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    }

    setTxt("res-axis", placementAxis + "°");
    setTxt("res-cyl-iol", model.iol.toFixed(2));
    setTxt("res-cyl-cor", model.corneal.toFixed(2));
    setTxt("res-model", model.name);

    const modelSel = document.getElementById("iolModel");
    setTxt("res-model-sub", modelSel ? modelSel.value.replace("_", " ") : "WORLD VISION TORIC");

    setTxt("res-preop-ast", cornAst.toFixed(2) + " D × " + cornAxis + "°");
    setTxt("res-sia-val", sia.toFixed(2) + " D × " + siaAxis + "°");
    setTxt("res-crossed", crossed.mag.toFixed(2) + " D × " + Math.round(crossed.axis) + "°");
    setTxt("res-residual", residual.mag.toFixed(2) + " D × " + Math.round(residual.axis) + "°");
    setTxt("res-steep-ax", steepAx + "°");
    setTxt("res-flat-ax", flatAx + "°");
    setTxt("res-incision-val", il + "°");

    const axisGroup = document.getElementById("axisLineGroup");
    const axisLabel = document.getElementById("axisDiagramLabel");

    if (axisGroup) {
      axisGroup.setAttribute("transform", "rotate(" + (placementAxis - 90) + ", 90, 90)");
    }

    if (axisLabel) {
      axisLabel.textContent = "Axis of placement: " + placementAxis + "°";
    }

    const emptyState = document.getElementById("emptyState");
    const panel = document.getElementById("resultsPanel");

    if (emptyState) emptyState.style.display = "none";

    if (panel) {
      panel.classList.remove("visible");
      void panel.offsetWidth;
      panel.classList.add("visible");
    }
  });

  const btnClear = document.getElementById("btnClear");

  if (btnClear) {
    btnClear.addEventListener("click", function () {
      ["flatK", "flatAxis", "steepK", "steepAxis", "incision"].forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;

        el.value = "";
        el.classList.remove("error");

        const err = document.getElementById(id + "-err");
        if (err) err.classList.remove("visible");
      });

      const sia = document.getElementById("sia");
      const iolPower = document.getElementById("iolPower");
      const iolModel = document.getElementById("iolModel");
      const patient = document.getElementById("patientName");

      if (sia) sia.value = "0.50";
      if (iolPower) iolPower.value = "";
      if (iolModel) iolModel.value = "";
      if (patient) patient.value = "";

      const panel = document.getElementById("resultsPanel");
      const emptyState = document.getElementById("emptyState");

      if (panel) panel.classList.remove("visible");
      if (emptyState) emptyState.style.display = "";
    });
  }

  const btnPrint = document.getElementById("btnPrint");

  if (btnPrint) {
    btnPrint.addEventListener("click", function () {
      window.print();
    });
  }

  const btnEmail = document.getElementById("btnEmail");

  if (btnEmail) {
    btnEmail.addEventListener("click", function () {
      const emailEl = document.getElementById("doctorEmail");
      const axisEl = document.getElementById("res-axis");
      const cylEl = document.getElementById("res-cyl-iol");
      const modelEl = document.getElementById("res-model");
      const patientEl = document.getElementById("patientName");

      const email = emailEl ? emailEl.value : "";
      const axis = axisEl ? axisEl.textContent : "";
      const cyl = cylEl ? cylEl.textContent : "";
      const model = modelEl ? modelEl.textContent : "";
      const patient = patientEl ? patientEl.value : "Patient";

      const subject = encodeURIComponent("Toric IOL Calculation — " + patient);
      const body = encodeURIComponent(
        "Toric IOL Calculation Result\n\n" +
          "Patient: " +
          patient +
          "\n" +
          "Axis of Placement: " +
          axis +
          "\n" +
          "Cylinder Power (IOL): " +
          cyl +
          " D\n" +
          "Recommended Model: " +
          model +
          "\n\n" +
          "Calculated by World Vision Toric Calculator"
      );

      window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    });
  }
})();


/*************************************************
 * TORIC CALCULATOR PAGE
 * Only runs on toricCalculator.html
 *************************************************/

if (ACTIVE_PAGE === "toricCalculator") {

  const TORIC = {
    meta: {
      title: "Toric IOL Calculator — World Vision Ophthalmic",
      desc:  "Calculate the optimal axis and cylinder power for toric intraocular lens placement using the Crossed-Cylinder Method.",
    },

    hero: {
      eyebrow: "Clinical Tool · IOL Planning",
      h1:      "Toric IOL <em>Calculator</em>",
      desc:    "Calculate the optimal axis of placement and cylinder power for your patient's toric intraocular lens — powered by the Crossed-Cylinder Method.",
    },

    cylModels: [
      { name: "TORICT3", iol: 3.75, corneal: 2.57 },
      { name: "TORICT4", iol: 4.50, corneal: 3.08 },
      { name: "TORICT5", iol: 5.25, corneal: 3.60 },
      { name: "TORICT6", iol: 6.00, corneal: 4.11 },
    ],

    methodology: {
      eyebrow: "Methodology",
      heading: "How the <em style=\"color:var(--neu-accent);font-style:italic;\">calculation works</em>",
      desc:    "The calculator uses the Crossed-Cylinder vector method to determine the optimal toric IOL axis and power, accounting for pre-operative corneal astigmatism and surgically induced astigmatism.",
      steps: [
        { num: "1", title: "Enter Pre-Op Keratometry",  desc: "Input the flat and steep K readings from your keratometry measurement, along with their respective axes (0–180°)." },
        { num: "2", title: "Set SIA & Incision",         desc: "Enter your Surgically Induced Astigmatism value and the incision location in degrees. Typical SIA is 0.3–0.7 D." },
        { num: "3", title: "Get Axis & Cylinder",        desc: "The calculator applies the Crossed-Cylinder method and returns the optimal axis of placement and the closest available cylinder model." },
      ],
    },

    ifu: {
      title: "Instructions for Use",
      sub:   "Download the official IFU documentation for each toric product",
      links: [
        { href: "#",                             iconStroke: "#0a5ea8", bg: "rgba(10,94,168,0.1)",  label: "IFU — World Vision Toric",  sub: "PDF Document" },
        { href: "#",                             iconStroke: "#0a7a50", bg: "rgba(10,122,80,0.1)",  label: "IFU — Multifocal Toric",    sub: "PDF Document" },
        { href: "#",                             iconStroke: "#8a5a10", bg: "rgba(138,90,16,0.1)",  label: "Toric Calculation Guide",   sub: "PDF Document" },
        { href: "../Pages/iol-page.html",        iconStroke: "#0055a5", bg: "rgba(0,85,165,0.1)",   label: "View IOL Range",            sub: "All lens types", isLens: true },
      ],
    },

    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#",                                                     icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#",                                                     icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",     icon: "fa-brands fa-whatsapp",    label: "WhatsApp"  },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  };

  // ── Meta ──────────────────────────────────────────────────────────────
  document.title = TORIC.meta.title;
  const tcMeta = qs("pageMeta");
  if (tcMeta) tcMeta.setAttribute("content", TORIC.meta.desc);

  // ── Breadcrumb ────────────────────────────────────────────────────────
  const tcBc = qs("breadcrumb");
  if (tcBc) tcBc.innerHTML = `<a href="../Pages/index.html">Home</a><span class="sep">/</span><span class="current">Toric Calculator</span>`;

  // ── Hero ──────────────────────────────────────────────────────────────
  const tcHero = qs("toricHero");
  if (tcHero) tcHero.innerHTML = `
    <div>
      <div class="toric-hero-eyebrow"><span class="pulse"></span>${TORIC.hero.eyebrow}</div>
      <h1>${TORIC.hero.h1}</h1>
      <p class="toric-hero-desc">${TORIC.hero.desc}</p>
    </div>
    <div style="opacity:0.18;padding-right:1rem;" aria-hidden="true">
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r="58" fill="none" stroke="var(--neu-accent)" stroke-width="1.5" stroke-dasharray="4 6"/>
        <circle cx="65" cy="65" r="42" fill="none" stroke="var(--neu-accent)" stroke-width="1"/>
        <circle cx="65" cy="65" r="26" fill="none" stroke="var(--neu-accent)" stroke-width="2.5"/>
        <circle cx="65" cy="65" r="9"  fill="var(--neu-accent)" opacity="0.3"/>
        <circle cx="65" cy="65" r="3.5" fill="var(--neu-accent)"/>
        <line x1="65" y1="7"   x2="65"  y2="25"  stroke="var(--neu-accent)" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="65" y1="105" x2="65"  y2="123" stroke="var(--neu-accent)" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="7"  y1="65"  x2="25"  y2="65"  stroke="var(--neu-accent)" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="105" y1="65" x2="123" y2="65"  stroke="var(--neu-accent)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>`;

  // ── IOL Power options ─────────────────────────────────────────────────
  function buildIolPowerOptions() {
    let opts = `<option value="">Select power</option>`;
    for (let p = 6.0; p <= 30.0; p += 0.5) {
      opts += `<option value="${p.toFixed(1)}">${p.toFixed(1)} D</option>`;
    }
    return opts;
  }

  // ── Calculator Wrap ───────────────────────────────────────────────────
  const tcWrap = qs("toricCalcWrap");
  if (tcWrap) tcWrap.innerHTML = `
    <!-- Left Card -->
    <div class="calc-card">
      <div class="sp-tabs">
        <button class="sp-tab active" data-tab="surgeon"><i class="fa-solid fa-user-doctor" style="font-size:12px;margin-right:5px;"></i> Surgeon</button>
        <button class="sp-tab" data-tab="patient"><i class="fa-solid fa-user" style="font-size:12px;margin-right:5px;"></i> Patient</button>
        <button class="sp-tab" data-tab="preop"><i class="fa-solid fa-eye" style="font-size:12px;margin-right:5px;"></i> Pre-Op Data</button>
      </div>

      <!-- Surgeon Panel -->
      <div class="sp-panel active" id="tab-surgeon">
        <div class="card-section-title"><div class="title-icon"><i class="fa-solid fa-user-doctor"></i></div>Surgeon Details</div>
        <div class="field-group"><label for="doctorName" class="field-label">Doctor Name</label><input type="text" class="neu-input" id="doctorName" placeholder="Dr. ..." autocomplete="off"/></div>
        <div class="field-group"><label for="doctorEmail" class="field-label">Email Address</label><input type="email" class="neu-input" id="doctorEmail" placeholder="doctor@hospital.com" autocomplete="off"/></div>
        <div class="field-row">
          <div class="field-group"><label for="doctorPhone" class="field-label">Phone Number</label><input type="tel" class="neu-input" id="doctorPhone" placeholder="+91 ...." autocomplete="off"/></div>
          <div class="field-group"><label for="clinicName" class="field-label">Hospital / Clinic Name</label><input type="text" class="neu-input" id="clinicName" placeholder="Hospital / Clinic" autocomplete="off"/></div>
        </div>
        <div class="btn-row"><button class="btn-calc" id="btnNextToPatient" type="button"><i class="fa-solid fa-arrow-right"></i> Next</button></div>
      </div>

      <!-- Patient Panel -->
      <div class="sp-panel" id="tab-patient">
        <div class="card-section-title"><div class="title-icon"><i class="fa-solid fa-user"></i></div>Patient Details</div>
        <div class="field-row">
          <div class="field-group"><label for="patientName" class="field-label">Patient Name</label><input type="text" class="neu-input" id="patientName" placeholder="Full Name" autocomplete="off"/></div>
          <div class="field-group">
            <label class="field-label">Eye</label>
            <div class="eye-toggle">
              <button class="eye-btn active" id="eyeLeft" type="button"><i class="fa-solid fa-eye" style="font-size:11px;"></i> Left OE</button>
              <button class="eye-btn" id="eyeRight" type="button"><i class="fa-solid fa-eye" style="font-size:11px;"></i> Right OD</button>
            </div>
          </div>
        </div>
        <div class="field-row">
          <div class="field-group">
            <label for="iolPower" class="field-label">IOL Spherical Power (P-IOL)</label>
            <select id="iolPower" class="neu-select">${buildIolPowerOptions()}</select>
            <span class="field-hint">Range: 6.0D - 30.0D in 0.5D steps</span>
          </div>
          <div class="field-group">
            <label for="iolModel" class="field-label">IOL Model</label>
            <select id="iolModel" class="neu-select">
              <option value="">Select model</option>
              <option value="WORLD_VISION_TORIC">World Vision Toric</option>
              <option value="WORLD_VISION_MF_TORIC">World Vision Multifocal Toric</option>
            </select>
          </div>
        </div>
        <div class="btn-row"><button class="btn-calc" id="btnNextToPreop" type="button"><i class="fa-solid fa-arrow-right"></i> Next</button></div>
      </div>

      <!-- Pre-Op Panel -->
      <div class="sp-panel" id="tab-preop">
        <div class="card-section-title"><div class="title-icon"><i class="fa-solid fa-chart-line"></i></div>Pre-Operative Keratometry</div>
        <div class="field-row">
          <div class="field-group"><label class="field-label" for="flatK">Flat K <small style="opacity:0.6;">(30–60 D)</small></label><input class="neu-input" type="number" id="flatK" placeholder="e.g. 44.50" min="30" max="60" step="0.01" autocomplete="off"/><span class="error-msg" id="flatK-err">Must be between 30–60 D</span></div>
          <div class="field-group"><label class="field-label" for="flatAxis">Flat Axis <small style="opacity:0.6;">(0–180°)</small></label><input class="neu-input" type="number" id="flatAxis" placeholder="e.g. 0" min="0" max="180" step="1" autocomplete="off"/><span class="error-msg" id="flatAxis-err">Must be 0–180°</span></div>
        </div>
        <div class="field-row">
          <div class="field-group"><label class="field-label" for="steepK">Steep K <small style="opacity:0.6;">(30–60 D)</small></label><input class="neu-input" type="number" id="steepK" placeholder="e.g. 47.50" min="30" max="60" step="0.01" autocomplete="off"/><span class="error-msg" id="steepK-err">Must be between 30–60 D</span></div>
          <div class="field-group"><label class="field-label" for="steepAxis">Steep Axis <small style="opacity:0.6;">(0–180°)</small></label><input class="neu-input" type="number" id="steepAxis" placeholder="e.g. 90" min="0" max="180" step="1" autocomplete="off"/><span class="error-msg" id="steepAxis-err">Must be 0–180°</span></div>
        </div>
        <div class="field-row">
          <div class="field-group"><label class="field-label" for="sia">SIA <small style="opacity:0.6;">(0–2 D)</small></label><input class="neu-input" type="number" id="sia" placeholder="e.g. 0.50" min="0" max="2" step="0.01" value="0.50" autocomplete="off"/><span class="field-hint">Surgically Induced Astigmatism</span><span class="error-msg" id="sia-err">Must be 0–2 D</span></div>
          <div class="field-group"><label class="field-label" for="incision">Incision Location (IL) <small style="opacity:0.6;">(0–360°)</small></label><input class="neu-input" type="number" id="incision" placeholder="e.g. 120" min="0" max="360" step="1" autocomplete="off"/><span class="error-msg" id="incision-err">Must be 0–360°</span></div>
        </div>

        <div class="card-section-title" style="margin-top:1.4rem;"><div class="title-icon"><i class="fa-solid fa-table"></i></div>Available Cylinder Powers</div>
        <div class="cyl-table-wrap">
          <table class="cyl-table">
            <thead><tr><th>Plane</th>${TORIC.cylModels.map(m => `<th>${m.name}</th>`).join("")}</tr></thead>
            <tbody>
              <tr><td>IOL Plane</td>${TORIC.cylModels.map(m => `<td>${m.iol.toFixed(2)} D</td>`).join("")}</tr>
              <tr><td>Corneal Plane</td>${TORIC.cylModels.map(m => `<td>${m.corneal.toFixed(2)} D</td>`).join("")}</tr>
            </tbody>
          </table>
        </div>
        <div class="btn-row">
          <button class="btn-calc" id="btnCalculate" type="button"><i class="fa-solid fa-check"></i> Calculate</button>
          <button class="btn-clear" id="btnClear" type="button"><i class="fa-solid fa-rotate-left"></i> Clear</button>
        </div>
      </div>
    </div><!-- end left card -->

    <!-- Right Card: Results -->
    <div class="calc-card" id="resultsCard">
      <div class="results-empty" id="emptyState">
        <div class="results-empty-icon"><i class="fa-solid fa-eye"></i></div>
        <p>Fill in the Pre-Op Data and click <strong>Calculate</strong> to see the recommended toric lens placement.</p>
      </div>

      <div class="results-panel" id="resultsPanel">
        <div class="card-section-title">
          <div class="title-icon" style="background:rgba(10,122,80,0.12);color:#0a7a50;"><i class="fa-solid fa-check"></i></div>
          Recommended Lens Placement
        </div>

        <div class="result-highlight">
          <div class="result-highlight-item"><div class="result-highlight-label">Axis of Placement</div><div class="result-highlight-val" id="res-axis">—</div><div class="result-highlight-unit">degrees</div></div>
          <div class="result-highlight-item"><div class="result-highlight-label">Cylinder IOL Plane</div><div class="result-highlight-val" id="res-cyl-iol">—</div><div class="result-highlight-unit">Diopters</div></div>
          <div class="result-highlight-item"><div class="result-highlight-label">Cylinder Corneal Plane</div><div class="result-highlight-val" id="res-cyl-cor">—</div><div class="result-highlight-unit">Diopters</div></div>
          <div class="result-highlight-item"><div class="result-highlight-label">IOL Model Recommended</div><div class="result-highlight-val" id="res-model" style="font-size:16px;">—</div><div class="result-highlight-unit" id="res-model-sub"></div></div>
        </div>

        <div class="axis-diagram-wrap">
          <svg id="axisDiagram" width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="76" fill="none" stroke="var(--neu-dark)" stroke-width="1.5"/>
            <circle cx="90" cy="90" r="50" fill="none" stroke="var(--neu-dark)" stroke-width="0.8" stroke-dasharray="3 4" opacity="0.4"/>
            <line x1="90" y1="14"  x2="90"  y2="26"  stroke="var(--neu-muted)" stroke-width="1.5"/>
            <line x1="90" y1="154" x2="90"  y2="166" stroke="var(--neu-muted)" stroke-width="1.5"/>
            <line x1="14" y1="90"  x2="26"  y2="90"  stroke="var(--neu-muted)" stroke-width="1.5"/>
            <line x1="154" y1="90" x2="166" y2="90"  stroke="var(--neu-muted)" stroke-width="1.5"/>
            <text x="90" y="10"  text-anchor="middle" fill="var(--neu-muted)" font-size="9">90°</text>
            <text x="90" y="175" text-anchor="middle" fill="var(--neu-muted)" font-size="9">270°</text>
            <text x="172" y="93" text-anchor="middle" fill="var(--neu-muted)" font-size="9">0°</text>
            <text x="8"  y="93"  text-anchor="middle" fill="var(--neu-muted)" font-size="9">180°</text>
            <g id="axisLineGroup" transform="rotate(0, 90, 90)">
              <line x1="90" y1="14" x2="90" y2="166" stroke="var(--neu-accent)" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="90" cy="90" r="5" fill="var(--neu-accent)"/>
              <polygon points="90,14 86,24 94,24" fill="var(--neu-accent)"/>
            </g>
          </svg>
          <div class="axis-diagram-label" id="axisDiagramLabel">Axis of placement</div>
        </div>

        <div class="result-section-title" style="margin-top:1.2rem;"><i class="fa-solid fa-chart-line" style="font-size:12px;"></i> Calculation Details</div>
        <div id="calcDetails">
          <div class="result-row"><span class="result-row-label">Pre-Op Corneal Astigmatism</span><span class="result-row-val" id="res-preop-ast">—</span></div>
          <div class="result-row"><span class="result-row-label">Surgically Induced Astigmatism</span><span class="result-row-val" id="res-sia-val">—</span></div>
          <div class="result-row"><span class="result-row-label">Crossed-Cylinder Result</span><span class="result-row-val" id="res-crossed">—</span></div>
          <div class="result-row"><span class="result-row-label">Anticipated Residual Astigmatism</span><span class="result-row-val" id="res-residual">—</span></div>
          <div class="result-row"><span class="result-row-label">Steep Axis</span><span class="result-row-val" id="res-steep-ax">—</span></div>
          <div class="result-row"><span class="result-row-label">Flat Axis</span><span class="result-row-val" id="res-flat-ax">—</span></div>
          <div class="result-row"><span class="result-row-label">Incision</span><span class="result-row-val" id="res-incision-val">—</span></div>
        </div>

        <div class="print-row">
          <button class="btn-print" id="btnPrint" type="button"><i class="fa-solid fa-print"></i> Print Result</button>
          <button class="btn-email" id="btnEmail" type="button"><i class="fa-solid fa-envelope"></i> Email to Surgeon</button>
        </div>
      </div>
    </div><!-- end right card -->`;

  // ── Attach tab switcher events (immediately after innerHTML) ──────────
  tcWrap.querySelectorAll(".sp-tab").forEach(tab => {
    tab.addEventListener("click", function () {
      tcWrap.querySelectorAll(".sp-tab").forEach(t => t.classList.remove("active"));
      tcWrap.querySelectorAll(".sp-panel").forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      const panel = document.getElementById("tab-" + this.dataset.tab);
      if (panel) panel.classList.add("active");
    });
  });

  const btnNextPatient = document.getElementById("btnNextToPatient");
  if (btnNextPatient) btnNextPatient.addEventListener("click", function () {
    tcWrap.querySelectorAll(".sp-tab").forEach(t => t.classList.remove("active"));
    tcWrap.querySelectorAll(".sp-panel").forEach(p => p.classList.remove("active"));
    const patTab = tcWrap.querySelector('[data-tab="patient"]');
    if (patTab) patTab.classList.add("active");
    const patPanel = document.getElementById("tab-patient");
    if (patPanel) patPanel.classList.add("active");
  });

  const btnNextPreop = document.getElementById("btnNextToPreop");
  if (btnNextPreop) btnNextPreop.addEventListener("click", function () {
    tcWrap.querySelectorAll(".sp-tab").forEach(t => t.classList.remove("active"));
    tcWrap.querySelectorAll(".sp-panel").forEach(p => p.classList.remove("active"));
    const preopTab = tcWrap.querySelector('[data-tab="preop"]');
    if (preopTab) preopTab.classList.add("active");
    const preopPanel = document.getElementById("tab-preop");
    if (preopPanel) preopPanel.classList.add("active");
  });

  // Eye toggle
  const eyeLeft  = document.getElementById("eyeLeft");
  const eyeRight = document.getElementById("eyeRight");
  if (eyeLeft && eyeRight) {
    [eyeLeft, eyeRight].forEach(btn => {
      btn.addEventListener("click", function () {
        eyeLeft.classList.toggle("active",  this === eyeLeft);
        eyeRight.classList.toggle("active", this === eyeRight);
      });
    });
  }

  // ── Calculation logic ─────────────────────────────────────────────────
  function toRad(deg) { return (deg * Math.PI) / 180; }

  function toDeg(rad) {
    let d = (rad * 180) / Math.PI;
    while (d < 0)    d += 180;
    while (d >= 180) d -= 180;
    return d;
  }

  function crossedCylinder(mag1, axis1, mag2, axis2) {
    const a1 = toRad(axis1), a2 = toRad(axis2);
    const j0  = (-mag1 / 2) * Math.cos(2 * a1) + (-mag2 / 2) * Math.cos(2 * a2);
    const j45 = (-mag1 / 2) * Math.sin(2 * a1) + (-mag2 / 2) * Math.sin(2 * a2);
    return {
      mag:  2 * Math.sqrt(j0 * j0 + j45 * j45),
      axis: toDeg(0.5 * Math.atan2(j45, j0) + Math.PI / 2),
    };
  }

  function bestCylModel(neededCorneal) {
    return TORIC.cylModels.reduce((best, m) =>
      Math.abs(neededCorneal - m.corneal) < Math.abs(neededCorneal - best.corneal) ? m : best
    , TORIC.cylModels[0]);
  }

  function validate(id, min, max) {
    const el  = document.getElementById(id);
    const err = document.getElementById(id + "-err");
    if (!el) return null;
    const val = parseFloat(el.value);
    if (isNaN(val) || val < min || val > max) {
      el.classList.add("error");
      if (err) err.classList.add("visible");
      return null;
    }
    el.classList.remove("error");
    if (err) err.classList.remove("visible");
    return val;
  }

  function setTxt(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // ── Calculate button ──────────────────────────────────────────────────
  const btnCalc = document.getElementById("btnCalculate");
  if (btnCalc) btnCalc.addEventListener("click", function () {
    // Switch to preop tab
    tcWrap.querySelectorAll(".sp-tab").forEach(t => t.classList.remove("active"));
    tcWrap.querySelectorAll(".sp-panel").forEach(p => p.classList.remove("active"));
    const preopTab = tcWrap.querySelector('[data-tab="preop"]');
    if (preopTab) preopTab.classList.add("active");
    const preopPanel = document.getElementById("tab-preop");
    if (preopPanel) preopPanel.classList.add("active");

    const flatK   = validate("flatK",   30, 60);
    const flatAx  = validate("flatAxis", 0, 180);
    const steepK  = validate("steepK",  30, 60);
    const steepAx = validate("steepAxis", 0, 180);
    const sia     = validate("sia",      0, 2);
    const il      = validate("incision", 0, 360);

    if ([flatK, flatAx, steepK, steepAx, sia, il].some(v => v === null)) return;

    const cornAst  = steepK - flatK;
    const cornAxis = steepAx;
    const siaAxis  = il % 180;

    const crossed       = crossedCylinder(cornAst, cornAxis, sia, siaAxis);
    const model         = bestCylModel(crossed.mag);
    const placementAxis = Math.round(crossed.axis);
    const residual      = crossedCylinder(crossed.mag, crossed.axis, model.corneal, crossed.axis + 90);

    setTxt("res-axis",        placementAxis + "°");
    setTxt("res-cyl-iol",     model.iol.toFixed(2));
    setTxt("res-cyl-cor",     model.corneal.toFixed(2));
    setTxt("res-model",       model.name);

    const modelSel = document.getElementById("iolModel");
    setTxt("res-model-sub",   modelSel ? modelSel.value.replace(/_/g, " ") : "WORLD VISION TORIC");
    setTxt("res-preop-ast",   cornAst.toFixed(2) + " D × " + cornAxis + "°");
    setTxt("res-sia-val",     sia.toFixed(2) + " D × " + siaAxis + "°");
    setTxt("res-crossed",     crossed.mag.toFixed(2) + " D × " + Math.round(crossed.axis) + "°");
    setTxt("res-residual",    residual.mag.toFixed(2) + " D × " + Math.round(residual.axis) + "°");
    setTxt("res-steep-ax",    steepAx + "°");
    setTxt("res-flat-ax",     flatAx + "°");
    setTxt("res-incision-val", il + "°");

    const axisGroup = document.getElementById("axisLineGroup");
    if (axisGroup) axisGroup.setAttribute("transform", `rotate(${placementAxis - 90}, 90, 90)`);

    const axisLabel = document.getElementById("axisDiagramLabel");
    if (axisLabel) axisLabel.textContent = "Axis of placement: " + placementAxis + "°";

    const emptyState = document.getElementById("emptyState");
    const panel      = document.getElementById("resultsPanel");
    if (emptyState) emptyState.style.display = "none";
    if (panel) {
      panel.classList.remove("visible");
      void panel.offsetWidth;
      panel.classList.add("visible");
    }
  });

  // ── Clear button ──────────────────────────────────────────────────────
  const btnClear = document.getElementById("btnClear");
  if (btnClear) btnClear.addEventListener("click", function () {
    ["flatK", "flatAxis", "steepK", "steepAxis", "incision"].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.value = "";
      el.classList.remove("error");
      const err = document.getElementById(id + "-err");
      if (err) err.classList.remove("visible");
    });
    const siaEl    = document.getElementById("sia");
    const iolPower = document.getElementById("iolPower");
    const iolModel = document.getElementById("iolModel");
    const patient  = document.getElementById("patientName");
    if (siaEl)    siaEl.value    = "0.50";
    if (iolPower) iolPower.value = "";
    if (iolModel) iolModel.value = "";
    if (patient)  patient.value  = "";
    const panel      = document.getElementById("resultsPanel");
    const emptyState = document.getElementById("emptyState");
    if (panel)      panel.classList.remove("visible");
    if (emptyState) emptyState.style.display = "";
  });

  // ── Print button ──────────────────────────────────────────────────────
  const btnPrint = document.getElementById("btnPrint");
  if (btnPrint) btnPrint.addEventListener("click", () => window.print());

  // ── Email button ──────────────────────────────────────────────────────
  const btnEmail = document.getElementById("btnEmail");
  if (btnEmail) btnEmail.addEventListener("click", function () {
    const email   = (document.getElementById("doctorEmail")  || {}).value || "";
    const axis    = (document.getElementById("res-axis")     || {}).textContent || "";
    const cyl     = (document.getElementById("res-cyl-iol")  || {}).textContent || "";
    const model   = (document.getElementById("res-model")    || {}).textContent || "";
    const patient = (document.getElementById("patientName")  || {}).value || "Patient";
    const subject = encodeURIComponent("Toric IOL Calculation — " + patient);
    const body    = encodeURIComponent(
      "Toric IOL Calculation Result\n\n" +
      "Patient: " + patient + "\n" +
      "Axis of Placement: " + axis + "\n" +
      "Cylinder Power (IOL): " + cyl + " D\n" +
      "Recommended Model: " + model + "\n\n" +
      "Calculated by World Vision Toric Calculator"
    );
    window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  });

  // ── Methodology Section ───────────────────────────────────────────────
  const tcInfo = qs("toricInfoSection");
  if (tcInfo) tcInfo.innerHTML = `
    <div style="max-width:500px;">
      <div class="toric-hero-eyebrow" style="margin-bottom:0.8rem;"><span class="pulse"></span>${TORIC.methodology.eyebrow}</div>
      <h2 style="font-family:'DM Serif Display',serif;font-size:clamp(1.6rem,3vw,2.2rem);font-weight:400;color:var(--neu-text);margin-bottom:0.5rem;letter-spacing:-0.02em;">${TORIC.methodology.heading}</h2>
      <p style="font-size:15px;line-height:1.75;color:var(--neu-muted);">${TORIC.methodology.desc}</p>
    </div>
    <div class="info-grid">
      ${TORIC.methodology.steps.map(s =>
        `<div class="info-card"><div class="info-step">${s.num}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`
      ).join("")}
    </div>`;

  // ── IFU Section ───────────────────────────────────────────────────────
  const tcIfu = qs("toricIfuSection");
  if (tcIfu) tcIfu.innerHTML = `
    <div class="ifu-wrap">
      <div class="ifu-header">
        <div class="ifu-icon-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
        <div><div class="ifu-title" id="ifu-title2">${TORIC.ifu.title}</div><div class="ifu-sub">${TORIC.ifu.sub}</div></div>
      </div>
      <div class="ifu-grid">
        ${TORIC.ifu.links.map(l => `
          <a href="${l.href}" class="ifu-link">
            <div class="ifu-link-icon" style="background:${l.bg};">
              ${l.isLens
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.iconStroke}" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.iconStroke}" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>`
              }
            </div>
            <div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div>
          </a>`
        ).join("")}
      </div>
    </div>`;

  // ── WhatsApp Float ────────────────────────────────────────────────────
  const waF = qs("waFloat");
  if (waF) waF.href = PAGE.company.whatsapp;

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${TORIC.footer.tagline}</p>
      <div class="au-footer-socials">
        ${TORIC.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${TORIC.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${TORIC.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${TORIC.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${TORIC.footer.contact.phone}">${TORIC.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${TORIC.footer.contact.email}">${TORIC.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${TORIC.footer.contact.hours}</span></div>
    </div>`;

  const fc = qs("auFooterBottom");
  if (fc) fc.textContent = PAGE.company.copyright;
}

/*************************************************
 * HYDROPHILIC IOL PAGE
 * Only runs on hydrophilicIOL.html
 *************************************************/

if (ACTIVE_PAGE === "hydrophilicIOL") {

  // Override hero content with teal/phil theme
  (function renderPhilHero() {
    const eyebrow = qs("heroEyebrow");
    if (eyebrow) eyebrow.innerHTML = '<span class="pulse" style="background:var(--neu-phil-c);"></span>European Medical Grade · Hydrophilic Acrylic';

    const h1 = qs("hydro-h1");
    if (h1) h1.innerHTML = "Hydrophilic<br><em>IOL Range</em>";

    const desc = qs("heroDesc");
    if (desc) desc.textContent = "Engineered from European-sourced medical-grade hydrophilic acrylic with 25% water content — outstanding biocompatibility, smooth unfolding, and reliable long-term stability. Available across single-piece, plate-haptic, and aspheric designs.";

    const btns = qs("heroBtns");
    if (btns) btns.innerHTML = `
      <a href="#models" class="hero-btn-iol-primary phil-btn">
        <i class="fa-solid fa-grid-2" style="font-size:12px;"></i> Explore Models
      </a>
      <a href="../Pages/iol-page.html" class="hero-btn-iol-ghost">
        <i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> All IOLs
      </a>`;
  })();

  // Specs strip
  (function renderPhilSpecs() {
    const grid = qs("statusBar");
    if (!grid) return;
    const specs = [
      { icon: "fa-droplet",         num: "25%",  label: "Water Content",       delay: "delay-1" },
      { icon: "fa-flag",            num: "EU",   label: "Raw Material Origin",  delay: "delay-2" },
      { icon: "fa-ruler-horizontal",num: "2.8mm",label: "Min Incision Size",    delay: "delay-3" },
      { icon: "fa-layer-group",     num: "12+",  label: "Lens Models",          delay: "delay-4" },
    ];
    grid.innerHTML = specs.map(s => `
      <div class="spec-pill reveal ${s.delay}">
        <div class="spec-pill-icon phil-icon"><i class="fa-solid ${s.icon} phil-c"></i></div>
        <div class="spec-pill-num phil-c">${s.num}</div>
        <div class="spec-pill-label">${s.label}</div>
      </div>`).join("");
  })();

  // Model cards
  (function renderPhilModels() {
    const eyebrow = qs("modelsEyebrow");
    if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid fa-grid-2 phil-c" style="font-size:10px;"></i> Product Lines`;

    const heading = qs("modelsHeading");
    if (heading) heading.innerHTML = "<em>Four</em> design families";

    const sub = qs("modelsSub");
    if (sub) sub.textContent = "Every model uses the same European medical-grade hydrophilic acrylic base — available across single-piece, plate-haptic, aspheric, and toric designs.";

    const grid = qs("modelsGrid");
    if (!grid) return;

    const cards = [
      {
        href:    "../Pages/nanoFold.html",
        variant: "phil",
        tag:     "Spheric · 360° Square Edge",
        name:    "Nano Fold",
        img:     "../Multimedia/lens_nanofold.png",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
        desc:    "Hydrophilic Acrylic Single Piece 360° Square Edge Foldable IOL. Smooth unfolding behaviour, excellent centration, and outstanding biocompatibility for routine cataract surgery.",
        chips:   ["NFR 574 SQ", "NFR 600 SQ", "NFC 600 SQ", "NFM 604 SQ"],
        delay:   "delay-1",
      },
      {
        href:    "../Pages/nanoFlex.html",
        variant: "phil",
        tag:     "Aspheric · 360° Square Edge",
        name:    "Nano Flex",
        img:     "../Multimedia/lens_nanoflex.png",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        desc:    "Aspheric & Yellow Aspheric hydrophilic IOLs — Nano Flex and Nano Flex Y. Aberration-neutral profile with blue-light filtering option. Four haptic configurations.",
        chips:   ["NFR AS", "NFR ASY", "NFC AS", "NFM AS"],
        delay:   "delay-2",
      },
    ];

    grid.innerHTML = cards.map(c => `
      <a href="${c.href}" class="model-card reveal ${c.delay}">
        <div class="model-card-header">
          <div class="model-card-icon phil">
            ${c.iconSvg}
          </div>
          <div>
            <span class="model-tag phil">${c.tag}</span>
            <h3>${c.name}</h3>
          </div>
        </div>
        <div class="model-card-body">
          <p class="model-desc">${c.desc}</p>
          <div class="model-lens-list">
            ${c.chips.map(ch => `<span class="model-lens-chip">${ch}</span>`).join("")}
          </div>
          <span class="model-card-cta phil">
            View models
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join("");
  })();

  // Material Science
  (function renderPhilMaterial() {
    const eyebrow = qs("materialEyebrow");
    if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid fa-droplet phil-c" style="font-size:10px;"></i> Material Science`;

    const heading = qs("materialHeading");
    if (heading) heading.innerHTML = "Why <em>Hydrophilic</em> matters";

    const sub = qs("materialSub");
    if (sub) sub.textContent = "Hydrophilic acrylic lenses offer a fundamentally different biological profile — high water content creates a softer material that integrates gently with ocular tissue, making them ideal for sensitive eyes and complex surgical scenarios.";

    const features = qs("materialFeatures");
    if (features) {
      const list = [
        { icon: "fa-droplet",       title: "25% Water Content",             desc: "The high water content makes the lens soft and pliable — it folds easily through small incisions and unfolds slowly and predictably inside the eye." },
        { icon: "fa-hand-holding",  title: "Superior Biocompatibility",     desc: "Hydrophilic acrylic has outstanding tissue tolerance. Its water-rich surface minimises inflammatory response and posterior capsule opacification (PCO) rates." },
        { icon: "fa-arrows-to-dot", title: "Excellent Capsular Centration", desc: "C-loop and plate-haptic designs provide reliable centration in the capsular bag — critical for consistent optical outcomes in every patient." },
        { icon: "fa-sun",           title: "UV Filter Built-in",            desc: "UV-absorbing chromophore protects the retina from harmful ultraviolet radiation — standard across all Nano Fold and Nano Flex models." },
      ];
      features.innerHTML = list.map(f => `
        <div class="material-feature">
          <div class="mf-icon phil-icon"><i class="fa-solid ${f.icon} phil-c"></i></div>
          <div>
            <div class="mf-title">${f.title}</div>
            <div class="mf-desc">${f.desc}</div>
          </div>
        </div>`).join("");
    }

    const card = qs("materialCard");
    if (card) {
      card.innerHTML = `
        <div class="material-neu-card-label phil-c">
          <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> Water Content Comparison
        </div>
        <div class="material-compare">
          <div class="compare-row">
            <span class="compare-label">World Vision Nano Fold / Flex</span>
            <span class="compare-wv phil-c">25%</span>
          </div>
          <div class="compare-row">
            <span class="compare-label">Hydrophobic Acrylic</span>
            <span class="compare-other">&lt; 0.5%</span>
          </div>
        </div>
        <div style="width:100%;height:1px;background:rgba(0,0,0,0.07);margin:4px 0;"></div>
        <div class="material-neu-card-label phil-c" style="margin-top:4px;">
          <i class="fa-solid fa-certificate" style="margin-right:5px;"></i> Certifications
        </div>
        <div class="material-compare">
          <div class="compare-row"><span class="compare-label">Biocompatibility</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> ISO Tested</span></div>
          <div class="compare-row"><span class="compare-label">UV Protection</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Built-in</span></div>
          <div class="compare-row"><span class="compare-label">PCO Resistance</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Optimised</span></div>
          <div class="compare-row"><span class="compare-label">Raw Material Source</span><span class="compare-wv">🇪🇺 Europe</span></div>
        </div>`;
    }
  })();

  // Trust bar
  (function renderPhilTrust() {
    const bar = qs("trustBar");
    if (!bar) return;
    const cards = [
      {
        bgColor: "rgba(10,122,80,0.1)",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title:   "ISO Certified Quality",
        desc:    "All Nano Fold / Nano Flex hydrophilic IOLs are tested to ISO 10993 biocompatibility standards — rigorous validation before every batch leaves our facility.",
      },
      {
        bgColor: "rgba(10,122,80,0.1)",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        title:   "European Medical Grade Acrylic",
        desc:    "Raw hydrophilic acrylic polymer sourced exclusively from certified European medical-grade suppliers — the highest standard of material purity.",
      },
      {
        bgColor: "rgba(10,122,80,0.1)",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
        title:   "Low PCO Rates",
        desc:    "Optimised square-edge optic design and hydrophilic surface chemistry together minimise posterior capsule opacification — protecting long-term visual clarity.",
      },
    ];
    bar.innerHTML = cards.map(t => `
      <div class="trust-card">
        <div class="trust-icon" style="background:${t.bgColor}">${t.iconSvg}</div>
        <div><h3>${t.title}</h3><p>${t.desc}</p></div>
      </div>`).join("");
  })();

  // IFU section
  (function renderPhilIfu() {
    const header = qs("ifuHeader");
    if (header) {
      header.innerHTML = `
        <div class="ifu-icon-wrap phil-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <div>
          <div class="ifu-title" id="ifu-title">Instructions for Use</div>
          <div class="ifu-sub">Download the official IFU documentation for each Nano Fold / Nano Flex model</div>
        </div>`;
    }

    const grid = qs("ifuGrid");
    if (!grid) return;
    const links = [
      { label: "IFU — NANO FOLD",    sub: "Spheric · NFR / NFC / NFM SQ",   color: "var(--neu-phil-c)", variant: "phil-icon" },
      { label: "IFU — NANO FLEX",    sub: "Aspheric · NFR / NFC / NFM AS",   color: "var(--neu-phil-c)", variant: "phil-icon" },
      { label: "IFU — NANO FLEX Y",  sub: "Yellow Aspheric · ASY series",    color: "var(--neu-phil-c)", variant: "phil-icon" },
      { label: "IFU — NANO FLEX T",  sub: "Toric Aspheric · AST series",     color: "var(--neu-phil-c)", variant: "phil-icon" },
    ];
    grid.innerHTML = links.map(l => `
      <a href="#" class="ifu-link">
        <div class="ifu-link-icon ${l.variant}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.color}" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <polyline points="9 15 12 18 15 15"/>
          </svg>
        </div>
        <div class="ifu-link-text">
          <strong>${l.label}</strong>
          <span>${l.sub}</span>
        </div>
      </a>`).join("");
  })();

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * IOL PAGE — only runs on iol-page.html
 *************************************************/

if (ACTIVE_PAGE === "iol-page") {

  const IOL_PAGE = {

    hero: {
      eyebrow: "Hydrophobic · Hydrophilic · PMMA",
      heading: "<em>Precision</em> Intraocular <br> Lenses",
      desc:    "Engineered with medical-grade raw materials sourced exclusively from the USA and Europe. Freedom IOLs deliver superior biocompatibility, crystal-clear optics, and long-term stability for every surgical need.",
    },

    stats: [
      { num: "USA <span style='font-size:14px;opacity:0.4;'>+</span> EU", label: "Raw Material Origin", delay: "delay-1" },
      { num: "3",    label: "Material Platforms",       delay: "delay-2" },
      { num: "100%", label: "Medical Grade",            delay: "delay-3" },
      { num: "&lt; 0.5%", label: "Hydrophobic Water Content", delay: "delay-4" },
    ],

    sectionTitle: "Our IOL Range",
    flipHint: "Tap or click any card to reveal full specifications",

    cards: [
      {
        id:      "card-hydro",
        theme:   "hydro",
        learnHref: "../Pages/hydrophobicIol.html",
        front: {
          badge:   "Hydrophobic",
          title:   "Hydrophobic IOL",
          sub:     "USA medical-grade acrylic. Less than 0.5% water content — far superior to competitors. Zero glistening.",
          visualLabel: "Hydrophobic Acrylic",
          svgCircles: [
            "M250 20 r90 rgba(10,94,168,0.15)",
            "M30 200 r70 rgba(10,94,168,0.1)",
          ],
          lensSvg: `
            <path d="M18 60 Q4 40 8 20"   fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <path d="M18 60 Q4 80 8 100"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <path d="M102 60 Q116 40 112 20"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <path d="M102 60 Q116 80 112 100" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <ellipse cx="60" cy="60" rx="44" ry="32" fill="rgba(10,94,168,0.12)" stroke="#0a5ea8" stroke-width="2.2"/>
            <ellipse cx="60" cy="60" rx="32" ry="22" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="1.2" stroke-dasharray="3 4"/>
            <ellipse cx="60" cy="60" rx="18" ry="12" fill="rgba(10,94,168,0.18)" stroke="#0a5ea8" stroke-width="1"/>
            <line x1="45" y1="52" x2="38" y2="44" stroke="rgba(10,94,168,0.35)" stroke-width="1" stroke-linecap="round"/>
            <line x1="60" y1="49" x2="60" y2="40" stroke="rgba(10,94,168,0.35)" stroke-width="1" stroke-linecap="round"/>
            <line x1="75" y1="52" x2="82" y2="44" stroke="rgba(10,94,168,0.35)" stroke-width="1" stroke-linecap="round"/>
            <circle cx="60" cy="60" r="4" fill="#0a5ea8" opacity="0.5"/>`,
        },
        back: {
          title:   "Hydrophobic IOL",
          origin:  "USA — Medical Grade Acrylic",
          iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a5ea8" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
          specs: [
            "UV absorber &amp; blue light filtering chromophore",
            "Biocompatibility tests performed to ISO standards",
            "Completely free of glistening &amp; whitening",
            "&lt;0.5% water vs. competitors (&gt;4%) — real hydrophobic",
            "Harder surface — superior stability, less abrasion",
            "Better Multifocal &amp; Toric outcomes vs. competitors",
            "Low refractive index — reduced glare &amp; halos",
            "High MTF for superior light transmission",
          ],
        },
        animDelay: "delay-1",
      },
      {
        id:      "card-phil",
        theme:   "phil",
        learnHref: "../Pages/hydrophilicIOL.html",
        front: {
          badge:   "Hydrophilic",
          title:   "Hydrophilic IOL",
          sub:     "UK medical-grade material. 26% water content — perfect balance of foldability, clarity, and stability.",
          visualLabel: "Hydrophilic Acrylic",
          lensSvg: `
            <path d="M22 60 Q8 30 20 12"   fill="none" stroke="#0a7a50" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <path d="M22 60 Q8 90 20 108"  fill="none" stroke="#0a7a50" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <path d="M98 60 Q112 30 100 12"  fill="none" stroke="#0a7a50" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <path d="M98 60 Q112 90 100 108" fill="none" stroke="#0a7a50" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <ellipse cx="60" cy="60" rx="40" ry="40" fill="rgba(10,122,80,0.1)"  stroke="#0a7a50" stroke-width="2.2"/>
            <ellipse cx="60" cy="60" rx="27" ry="27" fill="rgba(10,122,80,0.12)" stroke="#0a7a50" stroke-width="1.2" stroke-dasharray="3 4"/>
            <ellipse cx="60" cy="60" rx="15" ry="15" fill="rgba(10,122,80,0.2)"  stroke="#0a7a50" stroke-width="1"/>
            <circle cx="60" cy="30" r="3.5" fill="rgba(10,122,80,0.3)" stroke="#0a7a50" stroke-width="1"/>
            <circle cx="80" cy="40" r="2.5" fill="rgba(10,122,80,0.25)" stroke="#0a7a50" stroke-width="1"/>
            <circle cx="40" cy="40" r="2.5" fill="rgba(10,122,80,0.25)" stroke="#0a7a50" stroke-width="1"/>
            <circle cx="60" cy="60" r="4" fill="#0a7a50" opacity="0.5"/>`,
        },
        back: {
          title:   "Hydrophilic IOL",
          origin:  "UK — Medical Grade Acrylic",
          iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a7a50" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
          specs: [
            "UV absorber &amp; blue light filtering chromophore",
            "Biocompatibility tests performed to ISO standards",
            "Low rate of glistening — no calcification",
            "26% water content — leading hydrophilic material",
            "Latest advances in soft lens technology",
            "Superior machining characteristics &amp; foldability",
            "Low refractive index — reduced glares &amp; halos",
            "High MTF for superior light transmission",
          ],
        },
        animDelay: "delay-2",
      },
      {
        id:      "card-pmma",
        theme:   "pmma",
        learnHref: "../Pages/pmmaIOL.html",
        front: {
          badge:   "PMMA",
          title:   "PMMA IOL",
          sub:     "UK medical-grade rigid lens. Cost-effective, highly stable. Suitable for posterior &amp; anterior chamber.",
          visualLabel: "PMMA Rigid",
          lensSvg: `
            <rect x="8"  y="52" width="16" height="16" rx="4" fill="none" stroke="#8a5a10" stroke-width="2" opacity="0.6"/>
            <rect x="96" y="52" width="16" height="16" rx="4" fill="none" stroke="#8a5a10" stroke-width="2" opacity="0.6"/>
            <line x1="24" y1="60" x2="34" y2="60" stroke="#8a5a10" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <line x1="86" y1="60" x2="96" y2="60" stroke="#8a5a10" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <circle cx="60" cy="60" r="30" fill="rgba(138,90,16,0.1)"  stroke="#8a5a10" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="20" fill="rgba(138,90,16,0.12)" stroke="#8a5a10" stroke-width="1.5" stroke-dasharray="3 5"/>
            <circle cx="60" cy="60" r="11" fill="rgba(138,90,16,0.2)"  stroke="#8a5a10" stroke-width="1"/>
            <line x1="55" y1="47" x2="65" y2="47" stroke="rgba(138,90,16,0.4)" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="55" y1="73" x2="65" y2="73" stroke="rgba(138,90,16,0.4)" stroke-width="1.2" stroke-linecap="round"/>
            <circle cx="60" cy="60" r="4" fill="#8a5a10" opacity="0.5"/>`,
        },
        back: {
          title:   "PMMA IOL",
          origin:  "UK — Medical Grade PMMA",
          iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a5a10" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`,
          specs: [
            "UV absorber &amp; blue light filtering chromophore",
            "Biocompatibility tests performed to ISO standards",
            "Completely free of glistening — no calcification",
            "Harder surface — superior stability &amp; less abrasion",
            "Cost-effective solution without compromising quality",
            "Posterior and anterior chamber compatible",
            "Perfect stability in the capsular bag",
            "Low refractive index — reduced glares &amp; halos",
          ],
        },
        animDelay: "delay-3",
      },
    ],

    trust: [
      { bgColor: "rgba(0,85,165,0.1)",    stroke: "#0055a5", iconPath: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,             title: "ISO Certified Quality",    desc: "All Freedom IOLs undergo rigorous biocompatibility testing to international ISO medical device standards." },
      { bgColor: "rgba(10,122,80,0.1)",   stroke: "#0a7a50", iconPath: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,             title: "Premium Raw Materials",    desc: "Only the highest-grade acrylic and PMMA sourced from certified suppliers in the USA and United Kingdom." },
      { bgColor: "rgba(138,90,16,0.1)",   stroke: "#8a5a10", iconPath: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Superior Visual Outcomes", desc: "High MTF ratings and low refractive index deliver exceptional light transmission, minimizing halos and glare." },
    ],

    ifu: {
      heading: "Instructions for Use",
      sub:     "Download the official IFU documentation for each product line",
      links: [
        { label: "IFU — Hydrophobic IOLs", sub: "PDF Document", color: "#0a5ea8", variant: "hydro-icon" },
        { label: "IFU — Hydrophilic IOLs", sub: "PDF Document", color: "#0a7a50", variant: "phil-icon"  },
        { label: "IFU — PMMA IOLs",        sub: "PDF Document", color: "#8a5a10", variant: "pmma-icon"  },
        { label: "IFU — PMMA Rings",       sub: "PDF Document", color: "#8a5a10", variant: "pmma-icon"  },
      ],
    },
  };

  // Hero
  (function() {
    const h = IOL_PAGE.hero;
    const eyebrow = qs("iolHeroEyebrow");
    if (eyebrow) eyebrow.innerHTML = `<span class="pulse"></span>${h.eyebrow}`;
    const heading = qs("hero-heading");
    if (heading) heading.innerHTML = h.heading;
    const desc = qs("iolHeroDesc");
    if (desc) desc.textContent = h.desc;
  })();

  // Stats
  (function() {
    const bar = qs("iolStatsBar");
    if (!bar) return;
    bar.innerHTML = IOL_PAGE.stats.map(s => `
      <div class="stat-card neu-raised reveal ${s.delay}" role="listitem">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join("");
  })();

  // Section title + flip hint
  (function() {
    const t = qs("iol-section-title");
    if (t) t.textContent = IOL_PAGE.sectionTitle;
    const hint = qs("iolFlipHint");
    if (hint) hint.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
      ${IOL_PAGE.flipHint}`;
  })();

  // IOL flip cards
  (function() {
    const grid = qs("iolCardsGrid");
    if (!grid) return;

    grid.innerHTML = IOL_PAGE.cards.map(c => {
      const f = c.front;
      const b = c.back;
      const t = c.theme;

      const bgCircles = `
        <circle cx="250" cy="20"  r="90"  fill="rgba(var(--${t}-rgb,10,94,168),0.15)"/>
        <circle cx="30"  cy="200" r="70"  fill="rgba(var(--${t}-rgb,10,94,168),0.1)"/>
        <circle cx="150" cy="110" r="120" fill="none" stroke="rgba(var(--${t}-rgb,10,94,168),0.2)" stroke-width="1"/>`;

      return `
        <div class="card-scene reveal ${c.animDelay}" id="${c.id}" tabindex="0" role="button"
          aria-label="${f.title} — click to see specifications">
          <div class="card-flipper">
            <!-- FRONT -->
            <div class="card-face front">
              <div class="card-visual ${t}-bg">
                <svg class="card-visual-bg" viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice">${bgCircles}</svg>
                <div class="lens-illustration lens-float" aria-hidden="true">
                  <svg width="120" height="120" viewBox="0 0 120 120">${c.front.lensSvg}</svg>
                </div>
                <span class="card-visual-label ${t}-c">${f.visualLabel}</span>
                <div class="card-flip-icon neu-raised-sm ${t}-c">↩</div>
              </div>
              <div class="card-info">
                <span class="card-badge ${t}-badge">${f.badge}</span>
                <h2 class="card-title">${f.title}</h2>
                <p class="card-sub">${f.sub}</p>
                <span class="card-cta ${t}-c">
                  View specifications
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
            <!-- BACK -->
            <div class="card-face back">
              <div class="back-header">
                <div class="back-icon-wrap ${t}-icon">${b.iconSvg}</div>
                <div><div class="back-title ${t}-c">${b.title}</div></div>
              </div>
              <div class="back-origin ${t}-c">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                ${b.origin}
              </div>
              <ul class="spec-list" aria-label="${b.title} specifications">
                ${b.specs.map(s => `<li class="spec-item"><span class="spec-dot ${t}-dot"></span>${s}</li>`).join("")}
              </ul>
              <div class="back-btns">
                <a href="${c.learnHref}" class="back-btn-learn ${t}-btn text-center">
                  <button>Learn More</button>
                </a>
                <button class="back-btn-flip" aria-label="Flip card back">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M5.64 5.64A9 9 0 1 1 3.51 15"/></svg>
                  Flip
                </button>
              </div>
            </div>
          </div>
        </div>`;
    }).join("");

    grid.querySelectorAll(".card-scene").forEach(function (scene) {
      scene.addEventListener("click", function (e) {
        // Do not flip when clicking buttons or links.
        if (e.target.closest("button, a")) return;

        scene.classList.toggle("flipped");
      });

      scene.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scene.classList.toggle("flipped");
        }
      });
    });

    grid.querySelectorAll(".back-btn-flip").forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.stopPropagation();

        const card = button.closest(".card-scene");
        if (card) card.classList.remove("flipped");
      });
    });
  })();

  // Trust bar
  (function() {
    const bar = qs("iolTrustBar");
    if (!bar) return;
    bar.innerHTML = IOL_PAGE.trust.map(t => `
      <div class="trust-card">
        <div class="trust-icon" style="background:${t.bgColor}">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${t.stroke}" stroke-width="2" stroke-linecap="round">${t.iconPath}</svg>
        </div>
        <div><h3>${t.title}</h3><p>${t.desc}</p></div>
      </div>`).join("");
  })();

  // IFU
  (function() {
    const d = IOL_PAGE.ifu;
    const header = qs("iolIfuHeader");
    if (header) {
      header.innerHTML = `
        <div class="ifu-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <div>
          <div class="ifu-title" id="ifu-title">${d.heading}</div>
          <div class="ifu-sub">${d.sub}</div>
        </div>`;
    }
    const grid = qs("iolIfuGrid");
    if (grid) {
      grid.innerHTML = d.links.map(l => `
        <a href="#" class="ifu-link">
          <div class="ifu-link-icon ${l.variant}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.color}" stroke-width="2" stroke-linecap="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <polyline points="9 15 12 18 15 15"/>
            </svg>
          </div>
          <div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div>
        </a>`).join("");
    }
  })();

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * NANO FOLD PAGE — nanoFold.html
 * Spheric Hydrophilic IOL (NANO FOLD)
 *************************************************/

if (ACTIVE_PAGE === "nanoFold") {

  const FOLD = {
    tag:      "Spheric · Hydrophilic",
    title:    "Nano Fold",
    subtitle: "Hydrophilic Acrylic Single Piece 360° Square Edge Foldable Intraocular Lens",
    desc:     "The Nano Fold is a spheric hydrophilic IOL available in four haptic configurations — open loop round (NFR), open loop C-loop (NFC), and modified C-loop plate (NFM). All models share the same optical platform.",
    lensImg:  "../Multimedia/hydrophilic_fold1.png",  // ← place your lens image here
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"     },
      { icon: "fa-border-all",       text: "360° Square edge"    },
      { icon: "fa-ruler-horizontal", text: "2.8mm incision"      },
      { icon: "fa-droplet",          text: "25% water content"   },
      { icon: "fa-sun",              text: "UV filter"           },
      { icon: "fa-flag",             text: "EU medical grade"    },
    ],
    variants: [
      {
        id: "NFR574SQ", label: "NFR 574 SQ",
        lensImg: "../Multimedia/hydrophilic_fold1.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFR 574 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "5.75 mm",      accent: true },
          { label: "Overall Length",  value: "12.00 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Special", accent: true },
        ],
      },
      {
        id: "NFR600SQ", label: "NFR 600 SQ",
        lensImg: "../Multimedia/hydrophilic_fold2.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFR 600 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "6.00 mm",      accent: true },
          { label: "Overall Length",  value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Normal", accent: true },
        ],
      },
      {
        id: "NFC600SQ", label: "NFC 600 SQ",
        lensImg: "../Multimedia/hydrophilic_fold3.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFC 600 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "6.00 mm",      accent: true },
          { label: "Overall Length",  value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Normal", accent: true },
        ],
      },
      {
        id: "NFM604SQ", label: "NFM 604 SQ",
        lensImg: "../Multimedia/hydrophilic_fold4.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFM 604 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "6.00 mm",      accent: true },
          { label: "Overall Length",  value: "11.00 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Normal", accent: true },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "118.0" },
      { key: "Hoffer Q",   val: "5.40"  },
      { key: "Holladay 1", val: "1.60"  },
      { key: "Haigis a0",  val: "1.20"  },
      { key: "Haigis a1",  val: "0.400" },
      { key: "Haigis a2",  val: "0.100" },
    ],
  };

  // Hero
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse" style="background:var(--neu-phil-c);"></span>Hydrophilic · Spheric · EU Acrylic');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Nano Fold<br><em>Hydrophilic IOL</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Spheric 360° Square Edge hydrophilic acrylic IOL — smooth unfolding, excellent centration, outstanding biocompatibility. Four haptic configurations for every surgical scenario.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary phil-btn"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophilicIOL.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophilic IOL</a>`);

  // Hero lens image
  const foldLensWrap = qs("heroLensWrap");
  if (foldLensWrap) {
    foldLensWrap.innerHTML = `<img src="${FOLD.lensImg}" alt="Nano Fold lens" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='0'"/>`;
  }

  // Model panel
  const foldPanel = qs("modelPanel");
  if (foldPanel) {
    const badges    = FOLD.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = FOLD.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = FOLD.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg || FOLD.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = FOLD.variants.map((v, i) => {
      const rows = v.specs.map(s => `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = FOLD.aConstants.map(a => `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    foldPanel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${FOLD.tag}</span>
          <div class="card-title">${FOLD.title}</div>
          <div class="card-subtitle">${FOLD.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" id="foldModelLens">
            <!-- lens image swaps when model tab changes -->
            <img src="${FOLD.lensImg}" alt="Nano Fold" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${FOLD.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon phil-icon"><i class="fa-solid fa-table-list phil-c"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${FOLD.title} — Spheric Hydrophilic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Select the model to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  // Trust + IFU + float + footer
  const foldTrust = qs("trustBar");
  if (foldTrust) foldTrust.innerHTML = [
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,             title: "ISO Certified",        desc: "All Nano Fold lenses tested to ISO 10993 biocompatibility standards." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "EU Medical Grade",     desc: "Hydrophilic acrylic polymer sourced from certified European suppliers." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Low PCO Rates",       desc: "360° square edge optic design minimises posterior capsule opacification." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:${t.bg}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${t.stroke}" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  const foldIfuHeader = qs("ifuHeader");
  if (foldIfuHeader) foldIfuHeader.innerHTML = `<div class="ifu-icon-wrap phil-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title" id="ifu-flex">Instructions for Use</div><div class="ifu-sub">Download IFU for Nano Fold models</div></div>`;
  const foldIfuGrid = qs("ifuGrid");
  if (foldIfuGrid) foldIfuGrid.innerHTML = ["NFR 574 SQ","NFR 600 SQ","NFC 600 SQ","NFM 604 SQ"].map(m => `<a href="#" class="ifu-link"><div class="ifu-link-icon phil-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>IFU — ${m}</strong><span>PDF Document</span></div></a>`).join("");

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}


/*************************************************
 * NANO FLEX PAGE — nanoFlex.html
 * Two tabs: Nano Flex (Aspheric) + Nano Flex Y (Yellow Aspheric)
 *************************************************/

if (ACTIVE_PAGE === "nanoFlex") {

  const FLEX_DATA = {
    nanoFlex: {
      id:       "nanoFlex",
      tabLabel: "Nano Flex",
      tag:      "Aspheric · Hydrophilic",
      title:    "Nano Flex",
      subtitle: "Hydrophilic Acrylic Single Piece 360° Square Edge Aspheric Foldable Intraocular Lens",
      desc:     "The Nano Flex aspheric hydrophilic IOL delivers aberration-neutral optical performance. Available in four haptic configurations — the same proven platform as Nano Fold with an aspheric optic upgrade.",
      lensImg:  "../Multimedia/hydrophilic_fold1.png",   // ← place your lens image here
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"     },
        { icon: "fa-border-all",       text: "360° Square edge"   },
        { icon: "fa-ruler-horizontal", text: "2.8mm incision"     },
        { icon: "fa-droplet",          text: "25% water content"  },
        { icon: "fa-sun",              text: "UV filter"          },
        { icon: "fa-flag",             text: "EU medical grade"   },
      ],
      variants: [
        { id: "NFR574AS", 
          label: "NFR 574 AS",
          lensImg: "../Multimedia/hydrophilic_fold1.png",  // ← place your lens image here
          specs: [
            { label: "Model",          value: "NFR 574 AS",   accent: true },
            { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
            { label: "Optic Size",     value: "5.75 mm",      accent: true },
            { label: "Overall Length", value: "12.00 mm",     accent: true },
            { label: "Haptic Angle",   value: "0°" },
            { label: "A-Constant",     value: "118.0" },
            { label: "AC Depth",       value: "5.00 mm" },
            { label: "Lens Material",  value: "Hydrophilic Acrylic" },
            { label: "Order",          value: "Special", accent: true },
          ]
        },
        { id: "NFR600AS", label: "NFR 600 AS", lensImg: "../Multimedia/hydrophilic_fold2.png", specs: [
          { label: "Model",          value: "NFR 600 AS",   accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFC600AS", label: "NFC 600 AS", lensImg: "../Multimedia/hydrophilic_fold3.png", specs: [
          { label: "Model",          value: "NFC 600 AS",   accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFM604AS", label: "NFM 604 AS", lensImg: "../Multimedia/hydrophilic_fold4.png", specs: [
          { label: "Model",          value: "NFM 604 AS",   accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "11.00 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
      ],
    },

    nanoFlexY: {
      id:       "nanoFlexY",
      tabLabel: "Nano Flex Y",
      tag:      "Yellow · Aspheric · Hydrophilic",
      title:    "Nano Flex Y",
      subtitle: "Yellow Hydrophilic Acrylic Single Piece 360° Square Edge Aspheric Foldable Intraocular Lens",
      desc:     "The Nano Flex Y adds a blue-light filtering yellow chromophore to the proven Nano Flex aspheric platform — providing additional retinal protection while maintaining excellent colour perception.",
      lensImg:  "../Multimedia/hydrophilic_flexY1.png",  // ← place your lens image here
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"     },
        { icon: "fa-border-all",       text: "360° Square edge"   },
        { icon: "fa-ruler-horizontal", text: "2.8mm incision"     },
        { icon: "fa-droplet",          text: "25% water content"  },
        { icon: "fa-sun",              text: "UV + Blue filter"   },
        { icon: "fa-flag",             text: "EU medical grade"   },
      ],
      variants: [
        { id: "NFR574ASY", label: "NFR 574 ASY", lensImg: "../Multimedia/hydrophilic_flexY1.png", specs: [
          { label: "Model",          value: "NFR 574 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "5.75 mm",      accent: true },
          { label: "Overall Length", value: "12.00 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Special", accent: true },
        ]},
        { id: "NFR600ASY", label: "NFR 600 ASY", lensImg: "../Multimedia/hydrophilic_flexY2.png", specs: [
          { label: "Model",          value: "NFR 600 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFC600ASY", label: "NFC 600 ASY", lensImg: "../Multimedia/hydrophilic_flexY3.png", specs: [
          { label: "Model",          value: "NFC 600 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFM604ASY", label: "NFM 604 ASY", lensImg: "../Multimedia/hydrophilic_flexY4.png", specs: [
          { label: "Model",          value: "NFM 604 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "11.00 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
      ],
    },
  };

  const FLEX_A_CONSTANTS = [
    { key: "SRK/T",      val: "118.0" },
    { key: "Hoffer Q",   val: "5.40"  },
    { key: "Holladay 1", val: "1.60"  },
    { key: "Haigis a0",  val: "1.20"  },
    { key: "Haigis a1",  val: "0.400" },
    { key: "Haigis a2",  val: "0.100" },
  ];

  // Hero
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse" style="background:var(--neu-phil-c);"></span>Hydrophilic · Aspheric · EU Acrylic');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Nano Flex<br><em>Hydrophilic IOL</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Two aspheric hydrophilic IOL designs — Nano Flex (clear) and Nano Flex Y (yellow, blue-light filtering) — built on the same 360° Square Edge platform across four haptic configurations.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary phil-btn"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophilicIOL.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophilic IOL</a>`);

  // Hero lens image — starts with Nano Flex
  let currentFlexTab = "nanoFlex";
  const flexLensWrap = qs("heroLensWrap");
  function updateHeroLens(tabId) {
    if (!flexLensWrap) return;
    flexLensWrap.innerHTML = `<img src="${FLEX_DATA[tabId].lensImg}" alt="${FLEX_DATA[tabId].title}" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='0'"/>`;
  }
  updateHeroLens("nanoFlex");

  // Build tab bar — same pattern as monofocalHydrophobic.html
  const flexTabBar = qs("flexTabBar");
  if (flexTabBar) {
    const tabDefs = [
      { id: "nanoFlex",  name: "Nano Flex",  type: "Aspheric",        yellow: false },
      { id: "nanoFlexY", name: "Nano Flex Y", type: "Yellow Aspheric", yellow: true  },
    ];
    flexTabBar.innerHTML = tabDefs.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}${t.yellow ? " model-tab-yellow" : ""}" role="tab"
        aria-selected="${i === 0}" aria-controls="panel-${t.id}"
        id="tab-${t.id}" data-model="${t.id}" data-yellow="${t.yellow}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  // Build each panel
  function buildFlexPanel(data) {
    const panelEl = qs(`panel-${data.id}`);
    if (!panelEl) return;

    // nanoFlexY uses yellow/amber theme, nanoFlex uses teal/phil theme
    const isYellow  = data.id === "nanoFlexY";
    const tagStyle  = isYellow ? 'style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);"' : "";
    const iconStyle = isYellow ? 'style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);"' : 'style="background:rgba(10,122,80,0.1);color:var(--neu-phil-c);"';
    const accentC   = isYellow ? "var(--neu-pmma-c)" : "var(--neu-phil-c)";
    const lensStroke= isYellow ? "#8a5a10" : "#0a7a50";
    const lensFill  = isYellow ? "rgba(138,90,16," : "rgba(10,122,80,";

    const badges    = data.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg || data.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `
        <div class="spec-row">
          <span class="spec-row-label">${s.label}</span>
          <span class="spec-row-val${s.accent ? '"' : '"'}" style="${s.accent ? `color:${accentC};font-weight:600;` : ""}">${s.value}</span>
        </div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = FLEX_A_CONSTANTS.map(a => `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    const dlBtnStyle = isYellow ? 'style="background:linear-gradient(135deg,#8a5a10,#b87820);"' : "";

    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" ${tagStyle}>${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="${isYellow ? "card-lens-bg-yellow" : "card-lens-bg"}"></div>
          <div class="card-lens-svg">
            <img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" ${iconStyle}><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${data.title} — ${isYellow ? "Yellow Aspheric Hydrophilic" : "Aspheric Hydrophilic"}</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Select the model to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block" ${isYellow ? 'style="border:0.5px solid rgba(138,90,16,0.2);"' : ""}>
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" ${dlBtnStyle} onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  buildFlexPanel(FLEX_DATA.nanoFlex);
  buildFlexPanel(FLEX_DATA.nanoFlexY);

  // Tab switching — same pattern as model-tab in monofocalHydrophobic
  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;
    const targetId = tab.dataset.model;
    const isYellow = tab.dataset.yellow === "true";

    // Update tab buttons
    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      const isThis = t === tab;
      t.classList.toggle("active", isThis);
      // Apply yellow active style to yellow tab when active
      if (t.dataset.yellow === "true") {
        t.style.background = isThis ? "linear-gradient(135deg,#8a5a10,#b87820)" : "";
        t.style.color      = isThis ? "#fff" : "";
      }
      t.setAttribute("aria-selected", isThis ? "true" : "false");
    });

    // Update panels
    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));
    const targetPanel = qs(`panel-${targetId}`);
    if (targetPanel) targetPanel.classList.add("active");

    // Swap hero lens image
    updateHeroLens(targetId);
  });

  // Trust
  const flexTrust = qs("trustBar");
  if (flexTrust) flexTrust.innerHTML = [
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,             title: "ISO Certified",       desc: "All Nano Flex and Nano Flex Y lenses tested to ISO 10993 biocompatibility standards." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "EU Medical Grade",    desc: "Hydrophilic acrylic polymer sourced from certified European medical-grade suppliers." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Aspheric Optics",     desc: "Aberration-neutral aspheric design maintains contrast sensitivity across all pupil sizes." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:${t.bg}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${t.stroke}" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  // IFU
  const flexIfuHeader = qs("ifuHeader");
  if (flexIfuHeader) flexIfuHeader.innerHTML = `<div class="ifu-icon-wrap phil-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title" id="ifu-flex">Instructions for Use</div><div class="ifu-sub">Download IFU for Nano Flex and Nano Flex Y models</div></div>`;
  const flexIfuGrid = qs("ifuGrid");
  if (flexIfuGrid) flexIfuGrid.innerHTML = [
    { label: "IFU — Nano Flex",   sub: "Aspheric · AS series"        },
    { label: "IFU — Nano Flex Y", sub: "Yellow Aspheric · ASY series" },
  ].map(l => `<a href="#" class="ifu-link"><div class="ifu-link-icon phil-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div></a>`).join("");

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",         href: "../Pages/aboutUs.html"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * PMMA IOL PAGE — pmmaIOL.html
 * Tabs: Nano Plus | Nano Plus Y | Nano IOL | Nano Iris | Nano Ring | Nano SQD
 *************************************************/

if (ACTIVE_PAGE === "pmmaIOL") {

  const PMMA_C = "var(--neu-pmma-c)";

  // ── SHARED A-CONSTANTS (PC lenses) ────────────────────────────────────
  const AC_PC = [
    { key: "A-Constant",   val: "118.4" },
    { key: "AC Depth",     val: "5.0 mm" },
    { key: "Refractive Index", val: "1.490" },
    { key: "Sterilization",val: "Ethylene Oxide" },
  ];
  const AC_IRIS = [
    { key: "A-Constant",   val: "115.0" },
    { key: "Sterilization",val: "Ethylene Oxide" },
  ];

  // ── TAB DEFINITIONS ───────────────────────────────────────────────────
  const PMMA_TABS = [

    // ── TAB 1: Nano Plus (Clear Aspheric) ─────────────────────────────
    {
      id:    "nanoPlus",
      name:  "Nano Plus",
      type:  "Aspheric · 360° Square Edge",
      tag:   "Clear Aspheric · PC / AC",
      title: "Nano Plus",
      subtitle: "360° Square Edge Aspheric PMMA Single Piece Posterior Chamber Intraocular Lens",
      desc:  "The Nano Plus is a single-piece PMMA aspheric IOL with 360° square-edge design. Available in two optic sizes — 5.50 mm and 6.00 mm — with C-type step vault haptics for PC and S-type for AC placement.",
      lensImg: "../Multimedia/nanoPlusPmma.png",
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"          },
        { icon: "fa-border-all",       text: "360° Square edge"        },
        { icon: "fa-link",             text: "C/S Step vault haptics"  },
        { icon: "fa-ruler",            text: "5.0 – 6.5 mm optic"      },
        { icon: "fa-sun",              text: "UV filter"               },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC600AS", label: "NPC 600 AS",
          lensImg: "../Multimedia/nanoPlusPmma.png",
          specs: [
            { label: "Model",             value: "NPC 600 AS",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC · Square Edge PC/AC"         },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"                },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"      },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                   },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
        {
          id: "NPC550AS", label: "NPC 550 AS",
          lensImg: "../Multimedia/nanoPlusPmma.png",
          specs: [
            { label: "Model",             value: "NPC 550 AS",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC · Square Edge PC/AC"         },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"                },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"      },
            { label: "Optic Body Diameter",value: "5.50 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                   },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
      ],
    },

    // ── TAB 2: Nano Plus Y (Yellow Aspheric) ──────────────────────────
    {
      id:    "nanoPlusY",
      name:  "Nano Plus Y",
      type:  "Yellow · Blue Light Blocker",
      yellow: true,
      tag:   "Yellow Aspheric · Blue Light Blocker",
      title: "Nano Plus Y",
      subtitle: "360° Square Edge Yellow PMMA Single Piece Posterior Chamber Intraocular Lens",
      desc:  "The Nano Plus Y features the same proven Nano Plus aspheric 360° square-edge platform with a yellow chromophore for blue-light filtering — providing additional retinal protection alongside UV filtering.",
      lensImg: "../Multimedia/nanoPlusYellowPmma.png",
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"          },
        { icon: "fa-border-all",       text: "360° Square edge"        },
        { icon: "fa-sun",              text: "UV + Blue light filter"  },
        { icon: "fa-link",             text: "C/S Step vault haptics"  },
        { icon: "fa-ruler",            text: "5.0 – 6.5 mm optic"      },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC500ASY", label: "NPC 500 ASY",
          lensImg: "../Multimedia/nanoPlusYellowPmma.png",
          specs: [
            { label: "Model",             value: "NPC 500 ASY",                              accent: true },
            { label: "Lens Type",         value: "Single Piece Yellow PMMA ASPHERIC · Square Edge PC/AC" },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"               },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"     },
            { label: "Optic Body Diameter",value: "5.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                  },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
        {
          id: "NPC600ASY", label: "NPC 600 ASY",
          lensImg: "../Multimedia/nanoPlusYellowPmma.png",
          specs: [
            { label: "Model",             value: "NPC 600 ASY",                              accent: true },
            { label: "Lens Type",         value: "Single Piece Yellow PMMA ASPHERIC · Square Edge PC/AC" },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"               },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"     },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                  },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
      ],
    },

    // ── TAB 3: Nano IOL (Spheric PC/AC) ───────────────────────────────
    {
      id:    "nanoIOL",
      name:  "Nano IOL",
      type:  "PC / AC · Single Piece",
      tag:   "Posterior · Anterior Chamber · PMMA",
      title: "Nano IOL",
      subtitle: "PMMA Posterior / Anterior Chamber Single Piece Intraocular Lens",
      desc:  "The Nano IOL is a versatile single-piece PMMA IOL available in four models covering posterior chamber C-loop, anterior chamber S-loop, and special fixation configurations.",
      lensImg: "../Multimedia/nanoIOL1.png",
      highlights: [
        { icon: "fa-circle-dot",       text: "Spheric optic"           },
        { icon: "fa-eye",              text: "PC & AC variants"        },
        { icon: "fa-link",             text: "C-loop & S-loop haptics" },
        { icon: "fa-ruler",            text: "4.25 – 6.5 mm optic"     },
        { icon: "fa-droplet",          text: "UV + Blue light filter"  },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC600", label: "NPC 600",
          lensImg: "../Multimedia/nanoIOL1.png",
          specs: [
            { label: "Model",             value: "NPC 600",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC Posterior Chamber"            },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault"                                 },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.50 mm",                                 accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D · +10.0 to +30.0 D (0.5 D) · +10.0 to +9.0 D (1.0 D) · +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.2 (OAL 12.50 mm) · 118.4 (OAL 13.00 mm)"           },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
        {
          id: "NPC550", label: "NPC 550",
          lensImg: "../Multimedia/nanoIOL2.png",
          specs: [
            { label: "Model",             value: "NPC 550",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC Posterior Chamber"            },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault"                                 },
            { label: "Optic Body Diameter",value: "5.50 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.50 mm",                                 accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D · +10.0 to +30.0 D (0.5 D) · +10.0 to +9.0 D (1.0 D) · +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.2 (OAL 12.50 mm) · 118.4 (OAL 13.00 mm)"           },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
        {
          id: "NPA603", label: "NPA 603",
          lensImg: "../Multimedia/nanoIOL3.png",
          specs: [
            { label: "Model",             value: "NPA 603",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Anterior Chamber"                     },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "AC: 'S' with Step Vault"                                 },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.50 – 13.50 mm",                         accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D (1.0 D steps)"                       },
            { label: "A-Constant",        value: "115.0"                                                   },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
        {
          id: "NSF651", label: "NSF 651",
          lensImg: "../Multimedia/nanoIOL4.png",
          specs: [
            { label: "Model",             value: "NSF 651",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Special Fixation"                     },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Modified for special fixation"                           },
            { label: "Optic Body Diameter",value: "6.50 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "7.25 mm",                                  accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D (1.0 D steps)"                       },
            { label: "A-Constant",        value: "118.2"                                                   },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
      ],
    },

    // ── TAB 4: Nano Iris (Iris Claw) ──────────────────────────────────
    {
      id:    "nanoIris",
      name:  "Nano Iris",
      type:  "Iris Claw",
      tag:   "Iris Claw · Anterior Chamber",
      title: "Nano Iris",
      subtitle: "Single Piece PMMA Iris Claw Intraocular Lens",
      desc:  "The Nano Iris is a single-piece PMMA iris claw IOL for aphakic correction. Enclavated to the mid-peripheral iris stroma, it provides stable fixation without capsular support — ideal for secondary implantation in aphakic eyes.",
      lensImg: "../Multimedia/nanoIRISPmma.png",
      highlights: [
        { icon: "fa-eye",              text: "Iris claw fixation"      },
        { icon: "fa-circle",           text: "Anterior chamber"        },
        { icon: "fa-ruler",            text: "4.25 – 5.50 mm optic"    },
        { icon: "fa-droplet",          text: "UV + Blue light filter"  },
        { icon: "fa-shield-halved",    text: "Secondary implantation"  },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NIRS4272H", label: "NIRS 4272H",
          lensImg: "../Multimedia/nanoIRISPmma.png",
          specs: [
            { label: "Model",             value: "NIRS 4272H",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Posterior Chamber · Iris Claw"         },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Spherical"                                               },
            { label: "Optic Diameter",    value: "4.25 mm",                                  accent: true },
            { label: "Overall Diameter",  value: "7.25 mm",                                  accent: true },
            { label: "Available Powers",  value: "-5.0 D to +25.0 D (0.5 D steps) · +2.0 D to +30.0 D (1.0 D) · +14.5 D to +24.5 D (0.5 D)" },
            { label: "A-Constant",        value: "115.0"                                                   },
          ],
        },
        {
          id: "NIRS5585H", label: "NIRS 5585H",
          lensImg: "../Multimedia/nanoIRIS2Pmma.png",
          specs: [
            { label: "Model",             value: "NIRS 5585H",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Posterior Chamber · Iris Claw"         },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Spherical"                                               },
            { label: "Optic Diameter",    value: "5.50 mm",                                  accent: true },
            { label: "Overall Diameter",  value: "8.00 mm",                                  accent: true },
            { label: "Available Powers",  value: "-5.0 D to +25.0 D (0.5 D steps) · +2.0 D to +30.0 D (1.0 D) · +14.5 D to +24.5 D (0.5 D)" },
            { label: "A-Constant",        value: "115.0"                                                   },
          ],
        },
        {
          id: "NIRS5085H", label: "NIRS 5085H",
          lensImg: "../Multimedia/nanoIRIS3Pmma.png",
          specs: [
            { label: "Model",             value: "NIRS 5085H",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Posterior Chamber · Iris Claw"         },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Spherical"                                               },
            { label: "Optic Diameter",    value: "5.00 mm",                                  accent: true },
            { label: "Overall Diameter",  value: "8.50 mm",                                  accent: true },
            { label: "Available Powers",  value: "-5.0 D to +25.0 D (0.5 D steps) · +2.0 D to +30.0 D (1.0 D) · +14.5 D to +24.5 D (0.5 D)" },
            { label: "A-Constant",        value: "115.0"                                                   },
          ],
        },
      ],
    },

    // ── TAB 5: Nano Ring (Capsular Tension Ring) ───────────────────────
    {
      id:    "nanoRing",
      name:  "Nano Ring",
      type:  "Capsular Tension Ring",
      tag:   "PMMA Capsular Tension Ring",
      title: "Nano Ring",
      subtitle: "PMMA Capsular Tension Ring for Zonular Support",
      desc:  "The Nano Ring is a PMMA open-loop capsular tension ring used to stabilise the capsular bag during cataract surgery when zonular weakness is present. Available in simple (NCR) and complex step-vault (NCC) designs for left, right, or bilateral step vault. TYPE-10 is a modified ring with fixation loops.",
      lensImg: "../Multimedia/nanoRing.png",
      highlights: [
        { icon: "fa-ring",             text: "Open-loop CTR"           },
        { icon: "fa-circle-notch",     text: "Capsular support"        },
        { icon: "fa-ruler",            text: "9 – 14 mm diameter"      },
        { icon: "fa-shield-halved",    text: "Zonular protection"      },
        { icon: "fa-arrows-left-right",text: "Left / Right / Both SV" },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NCR1109", label: "NCR 1109 / 1210",
          lensImg: "../Multimedia/nanoRing.png",
          specs: [
            { label: "Models",            value: "NCR 1109 · NCR 1210",                      accent: true },
            { label: "Type",              value: "Simple open-loop CTR"                                    },
            { label: "Outer Diameter",    value: "11.00 mm / 12.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "9.00 mm / 10.00 mm",                       accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "None"                                                    },
          ],
        },
        {
          id: "NCR1311", label: "NCR 1311 / 1412",
          lensImg: "../Multimedia/nanoRing2.png",
          specs: [
            { label: "Models",            value: "NCR 1311 · NCR 1412",                      accent: true },
            { label: "Type",              value: "Simple open-loop CTR"                                    },
            { label: "Outer Diameter",    value: "13.00 mm / 14.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "11.00 mm / 12.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "None"                                                    },
          ],
        },
        {
          id: "NCC1210L", label: "NCC Left SV",
          lensImg: "../Multimedia/nanoRing3.png",
          specs: [
            { label: "Models",            value: "NCC 1210L · NCC 1311L",                    accent: true },
            { label: "Type",              value: "Complex CTR · Left side step vault"                      },
            { label: "Outer Diameter",    value: "12.00 mm / 13.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "10.00 mm / 11.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "Left side"                                               },
          ],
        },
        {
          id: "NCC1210R", label: "NCC Right SV",
          lensImg: "../Multimedia/nanoRing4.png",
          specs: [
            { label: "Models",            value: "NCC 1210R · NCC 1311R",                    accent: true },
            { label: "Type",              value: "Complex CTR · Right side step vault"                     },
            { label: "Outer Diameter",    value: "12.00 mm / 13.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "10.00 mm / 11.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "Right side"                                              },
          ],
        },
        {
          id: "NCC1210LR", label: "NCC Both SV",
          lensImg: "../Multimedia/nanoRing5.png",
          specs: [
            { label: "Models",            value: "NCC 1210LR · NCC 1311LR",                  accent: true },
            { label: "Type",              value: "Complex CTR · Both sides step vault"                     },
            { label: "Outer Diameter",    value: "12.00 mm / 13.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "10.00 mm / 11.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "Both sides"                                              },
          ],
        },
        {
          id: "TYPE10", label: "TYPE-10",
          lensImg: "../Multimedia/nanoRing6.png",
          specs: [
            { label: "Model",             value: "TYPE-10",                                  accent: true },
            { label: "Type",              value: "Modified CTR with fixation loops"                        },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Indication",        value: "Advanced zonular dialysis / Subluxation"                 },
            { label: "Fixation",          value: "Scleral suture eyelets"                                  },
          ],
        },
      ],
    },

    // ── TAB 6: Nano SQD ────────────────────────────────────────────────
    {
      id:    "nanoSQD",
      name:  "Nano SQD",
      type:  "360° Square Edge",
      tag:   "360° Square Edge · PC PMMA",
      title: "Nano SQD",
      subtitle: "360° Square Edge PMMA Single Piece Posterior Chamber Intraocular Lens",
      desc:  "The Nano SQD is a 360° square-edge PMMA single-piece IOL with modified C step-vault haptics. Available in three optic sizes with equiconvex design — the NPC 600 SQ includes 2 dialing holes for surgical convenience.",
      lensImg: "../Multimedia/nanoSQDPmma.png",
      highlights: [
        { icon: "fa-border-all",       text: "360° Square edge"        },
        { icon: "fa-circle-dot",       text: "Equiconvex optic"        },
        { icon: "fa-link",             text: "Mod. C step vault"       },
        { icon: "fa-ruler",            text: "5.25 – 6.00 mm optic"    },
        { icon: "fa-circle-info",      text: "Dialing holes (600 SQ)"  },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC525SQ", label: "NPC 525 SQ",
          lensImg: "../Multimedia/nanoSQDPmma.png",
          specs: [
            { label: "Model",             value: "NPC 525 SQ",                               accent: true },
            { label: "Optic Design",      value: "Equiconvex · 360° Square Edge"                          },
            { label: "Optic Size",        value: "5.25 mm",                                  accent: true },
            { label: "Overall Length",    value: "12.50 mm",                                 accent: true },
            { label: "Haptic Design",     value: "Mod. C step vault"                                      },
            { label: "Dialing Holes",     value: "None"                                                   },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "AC Depth",          value: "5.0 mm"                                                 },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
          ],
        },
        {
          id: "NPC550SQ", label: "NPC 550 SQ",
          lensImg: "../Multimedia/nanoSQDPmma.png",
          specs: [
            { label: "Model",             value: "NPC 550 SQ",                               accent: true },
            { label: "Optic Design",      value: "Equiconvex · 360° Square Edge"                          },
            { label: "Optic Size",        value: "5.50 mm",                                  accent: true },
            { label: "Overall Length",    value: "12.50 mm",                                 accent: true },
            { label: "Haptic Design",     value: "Mod. C step vault"                                      },
            { label: "Dialing Holes",     value: "None"                                                   },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "AC Depth",          value: "5.0 mm"                                                 },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
          ],
        },
        {
          id: "NPC600SQ", label: "NPC 600 SQ",
          lensImg: "../Multimedia/nanoSQDPmma2.png",
          specs: [
            { label: "Model",             value: "NPC 600 SQ",                               accent: true },
            { label: "Optic Design",      value: "Equiconvex · 360° Square Edge"                          },
            { label: "Optic Size",        value: "6.00 mm",                                  accent: true },
            { label: "Overall Length",    value: "12.50 mm",                                 accent: true },
            { label: "Haptic Design",     value: "Mod. C step vault"                                      },
            { label: "Dialing Holes",     value: "2",                                        accent: true },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "AC Depth",          value: "5.0 mm"                                                 },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
          ],
        },
      ],
    },

  ]; // end PMMA_TABS

  // ── HERO ──────────────────────────────────────────────────────────────
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse" style="background:var(--neu-pmma-c);"></span>UK Medical Grade · Rigid PMMA');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "PMMA<br><em>IOL Range</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "World Vision PMMA IOLs are machined from UK medical-grade Polymethyl Methacrylate. Six product lines covering posterior chamber, anterior chamber, iris claw, capsular tension rings, and 360° square-edge designs.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary" style="background:linear-gradient(135deg,#8a5a10,#b87820);">
      <i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models
    </a>
    <a href="../Pages/iol-page.html" class="hero-btn-iol-ghost">
      <i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> All IOLs
    </a>`);

  const pmmaHeroLens = qs("heroLensWrap");

if (pmmaHeroLens) {
  pmmaHeroLens.innerHTML = `
    <img
      src="${PMMA_TABS[0].lensImg}"
      alt="${PMMA_TABS[0].title} PMMA lens"
      style="width:240px;height:240px;object-fit:contain;"
    />
  `;
}

  // ── TAB BAR ───────────────────────────────────────────────────────────
  const pmmaTabBar = qs("pmmaTabBar");
  if (pmmaTabBar) {
    pmmaTabBar.innerHTML = PMMA_TABS.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}${t.yellow ? " model-tab-yellow" : ""}"
        role="tab" aria-selected="${i === 0}"
        aria-controls="panel-${t.id}" id="tab-${t.id}"
        data-model="${t.id}" data-yellow="${!!t.yellow}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  // ── BUILD EACH PANEL ──────────────────────────────────────────────────
  function buildPmmaPanel(data) {
    const panelEl = qs(`panel-${data.id}`);
    if (!panelEl) return;

    const isYellow = !!data.yellow;
    const isRing   = data.id === "nanoRing";
    const isIris   = data.id === "nanoIris";
    const accentC  = isYellow ? "var(--neu-pmma-c)" : "var(--neu-pmma-c)";

    const badges    = data.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `
      <button class="spec-model-btn${i === 0 ? " active" : ""}"
        data-rows="${v.id}"
        data-lens="${v.lensImg || data.lensImg}"
        type="button">${v.label}</button>`).join("");

    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `
        <div class="spec-row">
          <span class="spec-row-label">${s.label}</span>
          <span class="spec-row-val${s.accent ? " accent" : ""}"
            style="${s.accent ? `color:${accentC};font-weight:600;` : ""}">${s.value}</span>
        </div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");

    const noAConst = isRing || isIris;
    const aBlock = noAConst
      ? `<div class="a-const-block" style="border:0.5px solid rgba(138,90,16,0.15);">
          <div class="a-const-label"><i class="fa-solid fa-circle-info" style="margin-right:5px;"></i>
            ${isRing ? "Capsular tension rings do not use A-constants for biometry." : "A-Constant: 115.0 — refer to model spec above."}
          </div>
        </div>`
      : "";

    const dlStyle = isYellow ? 'style="background:linear-gradient(135deg,#8a5a10,#b87820);"' : 'style="background:linear-gradient(135deg,#8a5a10,#b87820);"';
    const lensStyle = isYellow ? "card-lens-bg" : "card-lens-bg";

    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg" style="background:radial-gradient(circle at 40% 40%, rgba(138,90,16,0.08), transparent 70%);"></div>
          <div class="card-lens-svg" id="${data.id}ModelLens">
            <img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${data.title} — ${data.tag}</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Select the model to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        ${aBlock}
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" ${dlStyle} onclick="alert('IFU download coming soon.')">
            <i class="fa-solid fa-download"></i> Download IFU
          </button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')">
            <i class="fa-solid fa-envelope"></i> Enquire
          </button>
        </div>
      </div>`;
  }

  PMMA_TABS.forEach(buildPmmaPanel);

  // ── TAB SWITCHING ─────────────────────────────────────────────────────
  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;
    const targetId = tab.dataset.model;

    // Change hero lens when changing tab
    const selectedProduct = PMMA_TABS.find(
      item => item.id === targetId
    );

    const heroLens = qs("heroLensWrap");

    if (selectedProduct && heroLens) {
      heroLens.innerHTML = `
        <img
          src="${selectedProduct.lensImg}"
          alt="${selectedProduct.title} PMMA lens"
          style="width:240px;height:240px;object-fit:contain;"
        />
      `;
    }

    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      const isThis = t === tab;
      t.classList.toggle("active", isThis);
      if (t.dataset.yellow === "true") {
        t.style.background = isThis ? "linear-gradient(135deg,#8a5a10,#b87820)" : "";
        t.style.color      = isThis ? "#fff" : "";
      }
      t.setAttribute("aria-selected", isThis ? "true" : "false");
    });

    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));
    const targetPanel = qs(`panel-${targetId}`);
    if (targetPanel) targetPanel.classList.add("active");
  });

  // ── MATERIAL SCIENCE ──────────────────────────────────────────────────
  const matEyebrow = qs("materialEyebrow");
  if (matEyebrow) matEyebrow.innerHTML = `<i class="fa-solid fa-flask-vial" style="font-size:10px;color:var(--neu-pmma-c);"></i> Material Science`;

  const matHeading = qs("materialHeading");
  if (matHeading) matHeading.innerHTML = "Why <em>PMMA</em> still matters";

  const matSub = qs("materialSub");
  if (matSub) matSub.textContent = "Polymethyl Methacrylate has been the gold standard of IOL optics for over 60 years. PMMA remains the most reliable choice for ECCE, secondary implantation, iris claw fixation, and resource-limited settings worldwide.";

  const matFeatures = qs("materialFeatures");
  if (matFeatures) {
    matFeatures.innerHTML = [
      { icon: "fa-shield-halved", title: "60+ Years Proven Stability",        desc: "PMMA retains perfect optical clarity for decades in the eye. No glistening, no calcification — the benchmark all other IOL materials are measured against." },
      { icon: "fa-circle-notch",  title: "Zero Glistening Guaranteed",        desc: "As a rigid non-hydrophilic material, PMMA is completely immune to glistening and microvacuole formation that can degrade acrylic lens performance." },
      { icon: "fa-earth-asia",    title: "Cost-Effective Global Access",       desc: "PMMA IOLs deliver outstanding optical outcomes at a fraction of foldable lens cost — essential for high-volume cataract programmes across the developing world." },
      { icon: "fa-sun",           title: "UV + Blue Light Filter Built-in",   desc: "World Vision PMMA IOLs include UV-absorbing and blue-light filtering chromophores to protect the retina throughout the patient's lifetime." },
    ].map(f => `
      <div class="material-feature">
        <div class="mf-icon" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">
          <i class="fa-solid ${f.icon}"></i>
        </div>
        <div><div class="mf-title">${f.title}</div><div class="mf-desc">${f.desc}</div></div>
      </div>`).join("");
  }

  const matCard = qs("materialCard");
  if (matCard) {
    matCard.innerHTML = `
      <div class="material-neu-card-label" style="color:var(--neu-pmma-c);">
        <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> PMMA vs Acrylic IOL
      </div>
      <div class="material-compare">
        <div class="compare-row"><span class="compare-label">Glistening</span><span class="compare-wv" style="color:var(--neu-pmma-c);">Zero (PMMA)</span></div>
        <div class="compare-row"><span class="compare-label">Acrylic (hydrophilic)</span><span class="compare-other">Possible</span></div>
        <div class="compare-row"><span class="compare-label">Long-term clarity</span><span class="compare-wv" style="color:var(--neu-pmma-c);">60+ years proven</span></div>
      </div>
      <div style="width:100%;height:1px;background:rgba(0,0,0,0.07);margin:4px 0;"></div>
      <div class="material-neu-card-label" style="color:var(--neu-pmma-c);margin-top:4px;">
        <i class="fa-solid fa-certificate" style="margin-right:5px;"></i> Certifications
      </div>
      <div class="material-compare">
        <div class="compare-row"><span class="compare-label">Biocompatibility</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> ISO 10993</span></div>
        <div class="compare-row"><span class="compare-label">UV Protection</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Built-in</span></div>
        <div class="compare-row"><span class="compare-label">Blue Light Filter</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Built-in</span></div>
        <div class="compare-row"><span class="compare-label">Raw Material Source</span><span class="compare-wv">🇬🇧 United Kingdom</span></div>
      </div>`;
  }

  // ── TRUST ─────────────────────────────────────────────────────────────
  const pmmaTrust = qs("trustBar");
  if (pmmaTrust) pmmaTrust.innerHTML = [
    { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`, title: "ISO Certified", desc: "All World Vision PMMA IOLs are manufactured and tested to ISO 10993 biocompatibility standards." },
    { path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "UK Medical Grade PMMA", desc: "Polymer sourced from certified UK medical-grade suppliers — ensuring the highest standard of PMMA purity and optical quality." },
    { path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Zero Glistening", desc: "The rigid PMMA matrix completely prevents microvacuole formation — guaranteeing long-term optical clarity for the lifetime of the implant." },
  ].map(t => `
    <div class="trust-card">
      <div class="trust-icon" style="background:rgba(138,90,16,0.1);">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-pmma-c)" stroke-width="2" stroke-linecap="round">${t.path}</svg>
      </div>
      <div><h3>${t.title}</h3><p>${t.desc}</p></div>
    </div>`).join("");

  // ── IFU ───────────────────────────────────────────────────────────────
  const pmmaIfuHeader = qs("ifuHeader");
  if (pmmaIfuHeader) pmmaIfuHeader.innerHTML = `
    <div class="ifu-icon-wrap" style="background:linear-gradient(135deg,#8a5a10,#b87820);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    </div>
    <div>
      <div class="ifu-title">Instructions for Use</div>
      <div class="ifu-sub">Download IFU for all World Vision PMMA IOL product lines</div>
    </div>`;

  const pmmaIfuGrid = qs("ifuGrid");
  if (pmmaIfuGrid) pmmaIfuGrid.innerHTML = [
    { label: "IFU — Nano Plus",     sub: "Aspheric PC/AC · NPC AS series"   },
    { label: "IFU — Nano Plus Y",   sub: "Yellow Aspheric · NPC ASY series" },
    { label: "IFU — Nano IOL",      sub: "PC/AC · NPC / NPA / NSF series"   },
    { label: "IFU — Nano Iris",     sub: "Iris Claw · NIRS series"          },
    { label: "IFU — Nano Ring",     sub: "Capsular Tension Ring · NCR/NCC"  },
    { label: "IFU — Nano SQD",      sub: "360° Square Edge · NPC SQ series" },
  ].map(l => `
    <a href="#" class="ifu-link">
      <div class="ifu-link-icon" style="background:rgba(138,90,16,0.1);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-pmma-c)" stroke-width="2" stroke-linecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <polyline points="9 15 12 18 15 15"/>
        </svg>
      </div>
      <div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div>
    </a>`).join("");

  const LENS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${LENS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${LENS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${LENS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${LENS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${LENS.footer.contact.phone}">${LENS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${LENS.footer.contact.email}">${LENS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${LENS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}



/*************************************************
 * KERATOME PAGE — keratome.html
 *************************************************/
if (ACTIVE_PAGE === "keratome") {

  const KERAT_TABS = [
    {
      id:       "keratSharp",
      name:     "Sharp Tip",
      type:     "Phaco Stab",
      tag:      "Sharp Tip · Phaco Stab Incision · Straight / Angled 45° · Bevel Up/Down",
      title:    "Keratome Sharp",
      subtitle: "Keratome Blades (Sharp Astuce) / Queratomo Cuchillas (punta aguda) — For Phaco Stab Incision Straight / Angled 45 Deg. Bevel Up/Down",
      desc:     "Precision sharp tip keratome blades for phaco stab incisions. Available in straight and 45° angled configurations with bevel up or bevel down orientation.",
      lensImg:  "../Multimedia/msBlade-Sharp.png",
      highlights: [
        { icon: "fa-pen-fancy",         text: "Sharp astuce tip"      },
        { icon: "fa-arrows-left-right", text: "Straight / 45° angled" },
        { icon: "fa-rotate",            text: "Bevel up / down"       },
        { icon: "fa-ruler-horizontal",  text: "1.5 – 3.5 mm sizes"    },
        { icon: "fa-shield-halved",     text: "Stainless steel"       },
        { icon: "fa-certificate",       text: "CE certified"          },
      ],
      variants: [
        {
          id: "NS2620ST", label: "NS 2620ST", lensImg: "../Multimedia/msBlade-Sharp.png",
          specs: [
            { label: "Model",       value: "NS 2620ST",                    accent: true },
            { label: "Size",        value: "2.65 mm",                      accent: true },
            { label: "Gauge",       value: "20 Gauge"                                   },
            { label: "Tip",         value: "Sharp"                                      },
            { label: "Incision",    value: "Phaco Stab"                                 },
            { label: "Orientation", value: "Straight / Angled 45°"                      },
            { label: "Bevel",       value: "Up / Down"                                  },
            { label: "Order",       value: "Standard",                     accent: true },
          ],
        },
        {
          id: "NS2820ST", label: "NS 2820ST", lensImg: "../Multimedia/msBlade-Sharp.png",
          specs: [
            { label: "Model",       value: "NS 2820ST",                    accent: true },
            { label: "Size",        value: "2.8 mm",                       accent: true },
            { label: "Gauge",       value: "20 Gauge"                                   },
            { label: "Tip",         value: "Sharp"                                      },
            { label: "Incision",    value: "Phaco Stab"                                 },
            { label: "Orientation", value: "Straight / Angled 45°"                      },
            { label: "Bevel",       value: "Up / Down"                                  },
            { label: "Order",       value: "Standard",                     accent: true },
          ],
        },
        {
          id: "NS3019ST", label: "NS 3019ST", lensImg: "../Multimedia/msBlade-Sharp.png",
          specs: [
            { label: "Model",       value: "NS 3019ST",                    accent: true },
            { label: "Size",        value: "3.0 mm",                       accent: true },
            { label: "Gauge",       value: "19 Gauge"                                   },
            { label: "Tip",         value: "Sharp"                                      },
            { label: "Incision",    value: "Phaco Stab"                                 },
            { label: "Orientation", value: "Straight / Angled 45°"                      },
            { label: "Bevel",       value: "Up / Down"                                  },
            { label: "Order",       value: "Standard",                     accent: true },
          ],
        },
        {
          id: "NS3219ST", label: "NS 3219ST", lensImg: "../Multimedia/msBlade-Sharp.png",
          specs: [
            { label: "Model",       value: "NS 3219ST",                    accent: true },
            { label: "Size",        value: "3.2 mm",                       accent: true },
            { label: "Gauge",       value: "19 Gauge"                                   },
            { label: "Tip",         value: "Sharp"                                      },
            { label: "Incision",    value: "Phaco Stab"                                 },
            { label: "Orientation", value: "Straight / Angled 45°"                      },
            { label: "Bevel",       value: "Up / Down"                                  },
            { label: "Order",       value: "Standard",                     accent: true },
          ],
        },
        {
          id: "NS3519ST", label: "NS 3519ST", lensImg: "../Multimedia/msBlade-Sharp.png",
          specs: [
            { label: "Model",       value: "NS 3519ST",                    accent: true },
            { label: "Size",        value: "3.5 mm",                       accent: true },
            { label: "Gauge",       value: "19 Gauge"                                   },
            { label: "Tip",         value: "Sharp"                                      },
            { label: "Incision",    value: "Phaco Stab"                                 },
            { label: "Orientation", value: "Straight / Angled 45°"                      },
            { label: "Bevel",       value: "Up / Down"                                  },
            { label: "Order",       value: "Standard",                     accent: true },
          ],
        },
      ],
      specialOrder: [
        { id: "NS1524ST", label: "NS 1524ST", size: "1.5 mm",  gauge: "24 Gauge" },
        { id: "NS1820ST", label: "NS 1820ST", size: "1.8 mm",  gauge: "20 Gauge" },
        { id: "NS2020ST", label: "NS 2020ST", size: "2.0 mm",  gauge: "20 Gauge" },
        { id: "NS2320ST", label: "NS 2320ST", size: "2.3 mm",  gauge: "20 Gauge" },
        { id: "NS2520ST", label: "NS 2520ST", size: "2.5 mm",  gauge: "20 Gauge" },
      ],
    },
    {
      id:       "keratBlunt",
      name:     "Blunt Tip",
      type:     "IOL Enlarging",
      tag:      "Blunt Tip · IOL Enlarging",
      title:    "Keratome Blunt",
      subtitle: "Keratome Blades (bout Astuce) / Queratomo Cuchillas (Blunt Tip) — For IOL Enlarging",
      desc:     "Blunt tip keratome blades designed specifically for IOL enlarging incisions. The blunt tip prevents inadvertent puncture during incision widening procedures.",
      lensImg:  "../Multimedia/msBlade_Blunt.png",
      highlights: [
        { icon: "fa-circle",           text: "Blunt astuce tip"    },
        { icon: "fa-expand",           text: "IOL enlarging"       },
        { icon: "fa-ruler-horizontal", text: "3.5 – 6.0 mm sizes"  },
        { icon: "fa-shield-halved",    text: "Stainless steel"     },
        { icon: "fa-droplet-slash",    text: "Smooth incision"     },
        { icon: "fa-certificate",      text: "CE certified"        },
      ],
      variants: [
        {
          id: "NS3518BT", label: "NS 3518BT", lensImg: "../Multimedia/msBlade_Blunt.png",
          specs: [
            { label: "Model",      value: "NS 3518BT",  accent: true },
            { label: "Size",       value: "3.5 mm",     accent: true },
            { label: "Gauge",      value: "18 Gauge"                 },
            { label: "Tip",        value: "Blunt"                    },
            { label: "Indication", value: "IOL Enlarging"            },
            { label: "Order",      value: "Standard",   accent: true },
          ],
        },
        {
          id: "NS3818BT", label: "NS 3818BT", lensImg: "../Multimedia/msBlade_Blunt.png",
          specs: [
            { label: "Model",      value: "NS 3818BT",  accent: true },
            { label: "Size",       value: "3.8 mm",     accent: true },
            { label: "Gauge",      value: "18 Gauge"                 },
            { label: "Tip",        value: "Blunt"                    },
            { label: "Indication", value: "IOL Enlarging"            },
            { label: "Order",      value: "Standard",   accent: true },
          ],
        },
        {
          id: "NS4018BT", label: "NS 4018BT", lensImg: "../Multimedia/msBlade_Blunt.png",
          specs: [
            { label: "Model",      value: "NS 4018BT",  accent: true },
            { label: "Size",       value: "4.0 mm",     accent: true },
            { label: "Gauge",      value: "18 Gauge"                 },
            { label: "Tip",        value: "Blunt"                    },
            { label: "Indication", value: "IOL Enlarging"            },
            { label: "Order",      value: "Standard",   accent: true },
          ],
        },
      ],
      specialOrder: [
        { id: "NS5116BT", label: "NS 5116BT", size: "5.1 mm", gauge: "16 Gauge" },
        { id: "NS5516BT", label: "NS 5516BT", size: "5.5 mm", gauge: "16 Gauge" },
        { id: "NS6015BT", label: "NS 6015BT", size: "6.0 mm", gauge: "15 Gauge" },
      ],
    },
  ];

  // Hero
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse"></span>NanoSharp · Ophthalmic Micro Surgical Blades');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Keratome<br><em>NanoSharp Blade</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Precision-engineered keratome blades in sharp tip and blunt tip configurations. Available across standard and special order sizes for phaco stab and IOL enlarging procedures.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/index.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Home</a>`);

  function updateKeratHero(tabId) {
    const data = KERAT_TABS.find(t => t.id === tabId);
    if (!data) return;
    const wrap = qs("heroBladeWrap");
    if (wrap) wrap.innerHTML = `<img src="${data.lensImg}" alt="${data.title}" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='0'"/>`;
    const ey = qs("heroEyebrow");
    if (ey) ey.innerHTML = `<span class="pulse"></span>${data.tag}`;
  }

  // Tab bar
  const keratTabBar = qs("bladeSubTabBar");
  if (keratTabBar) {
    keratTabBar.innerHTML = KERAT_TABS.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}"
        role="tab" aria-selected="${i === 0}"
        aria-controls="panel-${t.id}" id="tab-${t.id}"
        data-model="${t.id}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  // Build panels — identical pattern to PMMA
  function buildKeratPanel(data) {
    const panelEl = qs("panel-" + data.id);
    if (!panelEl) return;

    const badges    = data.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `
      <button class="spec-model-btn${i === 0 ? " active" : ""}"
        data-rows="${v.id}" data-lens="${v.lensImg || data.lensImg}"
        type="button">${v.label}</button>`).join("");
    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `
        <div class="spec-row">
          <span class="spec-row-label">${s.label}</span>
          <span class="spec-row-val${s.accent ? " accent" : ""}"
            style="${s.accent ? "color:var(--neu-accent);font-weight:600;" : ""}">${s.value}</span>
        </div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const specialBlock = data.specialOrder ? `
      <div style="margin-top:0.8rem;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;font-size:13px;color:var(--neu-muted);">
          <i class="fa-solid fa-rotate" style="font-size:10px;color:var(--neu-accent);"></i>
          Special Order Models
        </div>
        <div class="spec-model-sel">
          ${data.specialOrder.map(s => `
            <button class="spec-model-btn spec-model-btn--special" data-rows="${s.id}" type="button">${s.label}</button>`).join("")}
        </div>
        ${data.specialOrder.map(s => `
          <div class="spec-rows" id="${s.id}" style="display:none;">
            <div class="spec-row"><span class="spec-row-label">Model</span><span class="spec-row-val accent" style="color:var(--neu-accent);font-weight:600;">${s.label}</span></div>
            <div class="spec-row"><span class="spec-row-label">Size</span><span class="spec-row-val accent" style="color:var(--neu-accent);font-weight:600;">${s.size}</span></div>
            <div class="spec-row"><span class="spec-row-label">Gauge</span><span class="spec-row-val">${s.gauge}</span></div>
            <div class="spec-row"><span class="spec-row-label">Order</span><span class="spec-row-val" style="color:#e07b00;font-weight:600;">Special Order</span></div>
          </div>`).join("")}
      </div>` : "";

    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);">${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" id="${data.id}Lens">
            <img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${data.title} — ${data.tag}</div>
          </div>
        </div>
        <p class="flip-hint-btn"><i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i> Select the model to reveal full specifications</p>
        <p class="flip-hint-btn sm:hidden !mb-0"><i class="fa-regular fa-hand-point-right"></i> Scroll to explore more models</p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        ${specialBlock}
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  // Build panels container
  const keratPanelsWrap = qs("blade-sub-panels");
  if (keratPanelsWrap) {
    keratPanelsWrap.innerHTML = KERAT_TABS.map((t, i) =>
      `<div id="panel-${t.id}" class="model-panel${i === 0 ? " active" : ""}"></div>`
    ).join("");
  }
  KERAT_TABS.forEach(buildKeratPanel);
  updateKeratHero(KERAT_TABS[0].id);

  // Tab switching
  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;
    const targetId = tab.dataset.model;
    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });
    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));
    const panel = qs("panel-" + targetId);
    if (panel) panel.classList.add("active");
    updateKeratHero(targetId);
  });

  // Trust + IFU + footer
  const keratTrust = qs("trustBar");
  if (keratTrust) keratTrust.innerHTML = [
    { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,   title: "ISO Certified",      desc: "All NanoSharp keratome blades manufactured to ISO 11070 and ISO 11979 surgical blade standards." },
    { path: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,    title: "Single-Use Sterile", desc: "Every blade individually packaged, EO-sterilised, and supplied ready for immediate surgical use." },
    { path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Ultra-Sharp Edge", desc: "Precision-ground stainless steel edge for clean, trauma-free incisions." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:rgba(10,94,168,0.08);"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  const keratIfuH = qs("ifuHeader");
  if (keratIfuH) keratIfuH.innerHTML = `<div class="ifu-icon-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title">Instructions for Use</div><div class="ifu-sub">Download IFU for Keratome Blade product lines</div></div>`;
  const keratIfuG = qs("ifuGrid");
  if (keratIfuG) keratIfuG.innerHTML = [
    { label: "IFU — Keratome Sharp Tip", sub: "ST series · Phaco Stab Incision" },
    { label: "IFU — Keratome Blunt Tip", sub: "BT series · IOL Enlarging"       },
  ].map(l => `<a href="#" class="ifu-link"><div class="ifu-link-icon hydro-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div></a>`).join("");
  
  const BLADS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${BLADS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${BLADS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${BLADS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${BLADS.footer.contact.phone}">${BLADS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${BLADS.footer.contact.email}">${BLADS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${BLADS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * CRESCENT PAGE — crescent.html
 *************************************************/
if (ACTIVE_PAGE === "crescent") {

  const CRES_TABS = [
    {
      id:       "crescentTI",
      name:     "Tunnel Incision",
      type:     "Straight / 45°",
      tag:      "Crescent · Tunnel Incision · Straight / Angled 45° · Bevel Up/Down",
      title:    "Crescent Blade",
      subtitle: "Croissant-Blades / Crescent Cuchillas — for Tunnel Incision Straight / Angled 45 Deg. Bevel Up / Down",
      desc:     "Crescent blades for tunnel incisions in cataract surgery. The crescent geometry enables smooth stromal dissection with minimal tissue trauma.",
      lensImg:  "../Multimedia/msBladeCrescent.png",
      highlights: [
        { icon: "fa-moon",              text: "Crescent geometry"     },
        { icon: "fa-arrows-left-right", text: "Straight / 45° angled" },
        { icon: "fa-rotate",            text: "Bevel up / down"       },
        { icon: "fa-ruler-horizontal",  text: "2.0 – 2.5 mm sizes"    },
        { icon: "fa-shield-halved",     text: "Stainless steel"       },
        { icon: "fa-certificate",       text: "CE certified"          },
      ],
      variants: [
        {
          id: "NS2020TI", label: "NS 2020TI", lensImg: "../Multimedia/msBladeCrescent.png",
          specs: [
            { label: "Model",       value: "NS 2020TI",             accent: true },
            { label: "Size",        value: "2.0 mm",                accent: true },
            { label: "Gauge",       value: "20 Gauge"                            },
            { label: "Type",        value: "Crescent"                            },
            { label: "Incision",    value: "Tunnel Incision"                     },
            { label: "Orientation", value: "Straight / Angled 45°"               },
            { label: "Bevel",       value: "Up / Down"                           },
            { label: "Order",       value: "Standard",              accent: true },
          ],
        },
        {
          id: "NS2520TI", label: "NS 2520TI", lensImg: "../Multimedia/msBladeCrescent.png",
          specs: [
            { label: "Model",       value: "NS 2520TI",             accent: true },
            { label: "Size",        value: "2.5 mm",                accent: true },
            { label: "Gauge",       value: "20 Gauge"                            },
            { label: "Type",        value: "Crescent"                            },
            { label: "Incision",    value: "Tunnel Incision"                     },
            { label: "Orientation", value: "Straight / Angled 45°"               },
            { label: "Bevel",       value: "Up / Down"                           },
            { label: "Order",       value: "Standard",              accent: true },
          ],
        },
      ],
      specialOrder: null,
    },
  ];

  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse"></span>NanoSharp · Ophthalmic Micro Surgical Blades');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Crescent<br><em>NanoSharp Blade</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Crescent blades (Croissant-Blades / Crescent Cuchillas) for tunnel incisions. Straight / Angled 45° · Bevel Up / Down.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/index.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Home</a>`);

  const cresWrap = qs("heroBladeWrap");
  if (cresWrap) cresWrap.innerHTML = `<img src="${CRES_TABS[0].lensImg}" alt="Crescent" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='0'"/>`;

  const cresTabBar = qs("bladeSubTabBar");
  if (cresTabBar) {
    cresTabBar.innerHTML = CRES_TABS.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}" role="tab" aria-selected="${i === 0}"
        aria-controls="panel-${t.id}" data-model="${t.id}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  const cresPanelsWrap = qs("blade-sub-panels");
  if (cresPanelsWrap) {
    cresPanelsWrap.innerHTML = CRES_TABS.map((t, i) =>
      `<div id="panel-${t.id}" class="model-panel${i === 0 ? " active" : ""}"></div>`
    ).join("");
  }

  CRES_TABS.forEach(function(data) {
    const panelEl = qs("panel-" + data.id);
    if (!panelEl) return;
    const badges    = data.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}" style="${s.accent ? "color:var(--neu-accent);font-weight:600;" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);">${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area"><div class="card-lens-bg"></div>
          <div class="card-lens-svg"><img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/></div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);"><i class="fa-solid fa-table-list"></i></div>
          <div><div class="spec-head-title">Technical Specifications</div><div class="spec-head-sub">${data.title} — ${data.tag}</div></div>
        </div>
        <p class="flip-hint-btn"><i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i> Select the model to reveal full specifications</p>
        <p class="flip-hint-btn sm:hidden !mb-0"><i class="fa-regular fa-hand-point-right"></i> Scroll to explore more models</p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  });

  const cresTrust = qs("trustBar");
  if (cresTrust) cresTrust.innerHTML = [
    { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,   title: "ISO Certified",      desc: "All NanoSharp crescent blades manufactured to ISO surgical blade standards." },
    { path: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,    title: "Single-Use Sterile", desc: "Every blade individually packaged, EO-sterilised, supplied ready for use." },
    { path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Ultra-Sharp Edge", desc: "Precision-ground stainless steel for clean, trauma-free tunnel incisions." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:rgba(10,94,168,0.08);"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  const cresIfuH = qs("ifuHeader");
  if (cresIfuH) cresIfuH.innerHTML = `<div class="ifu-icon-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title">Instructions for Use</div><div class="ifu-sub">Download IFU for Crescent Blade product lines</div></div>`;
  const cresIfuG = qs("ifuGrid");
  if (cresIfuG) cresIfuG.innerHTML = `<a href="#" class="ifu-link"><div class="ifu-link-icon hydro-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>IFU — Crescent Blade</strong><span>TI series · Tunnel Incision · 20 Gauge</span></div></a>`;
  
  const BLADS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${BLADS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${BLADS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${BLADS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${BLADS.footer.contact.phone}">${BLADS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${BLADS.footer.contact.email}">${BLADS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${BLADS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * LANCE IP PAGE — lanceIp.html
 *************************************************/
if (ACTIVE_PAGE === "lancelp") {

  const LANCE_TABS = [
    {
      id: "lance15", name: "15°", type: "24 Gauge",
      tag: "Lance Tip · 15° · 24 Gauge · Initial Incision",
      title: "Lance Ip — 15°", subtitle: "Lance Tip Knives (Lance Astuce Couteaux) — Length: 12 mm · Cutting Width: 6.5 mm · Angled 15°",
      desc: "Lance tip knife for initial incision at 15° angulation. Length 12 mm, Cutting Width 6.5 mm, 24 Gauge.", lensImg: "../Multimedia/msBladeLance.png",
      highlights: [
        { icon: "fa-staff-snake",      text: "Lance tip geometry"   },
        { icon: "fa-ruler",            text: "12 mm length"         },
        { icon: "fa-ruler-horizontal", text: "6.5 mm cutting width" },
        { icon: "fa-angle-right",      text: "15° angulation"       },
        { icon: "fa-certificate",      text: "CE certified"         },
      ],
      variants: [{
        id: "NS1524LT", label: "NS 1524LT", lensImg: "../Multimedia/msBladeLance.png",
        specs: [
          { label: "Model",         value: "NS 1524LT",              accent: true },
          { label: "Angulation",    value: "15°",                    accent: true },
          { label: "Gauge",         value: "24 Gauge"                             },
          { label: "Length",        value: "12 mm"                                },
          { label: "Cutting Width", value: "6.5 mm"                               },
          { label: "Base Angle",    value: "15°"                                  },
          { label: "Indication",    value: "Initial Incision"                     },
          { label: "Order",         value: "Standard",               accent: true },
        ],
      }],
      specialOrder: null,
    },
    {
      id: "lance30", name: "30°", type: "24 Gauge",
      tag: "Lance Tip · 30° · 24 Gauge · Initial Incision",
      title: "Lance Ip — 30°", subtitle: "Lance Tip Knives (Lance Astuce Couteaux) — Length: 12 mm · Cutting Width: 6.5 mm · Angled 15°",
      desc: "Lance tip knife for initial incision at 30° angulation. Length 12 mm, Cutting Width 6.5 mm, 24 Gauge.", lensImg: "../Multimedia/msBladeLance.png",
      highlights: [
        { icon: "fa-staff-snake",      text: "Lance tip geometry"   },
        { icon: "fa-ruler",            text: "12 mm length"         },
        { icon: "fa-ruler-horizontal", text: "6.5 mm cutting width" },
        { icon: "fa-angle-right",      text: "30° angulation"       },
        { icon: "fa-certificate",      text: "CE certified"         },
      ],
      variants: [{
        id: "NS3024LT", label: "NS 3024LT", lensImg: "../Multimedia/msBladeLance.png",
        specs: [
          { label: "Model",         value: "NS 3024LT",              accent: true },
          { label: "Angulation",    value: "30°",                    accent: true },
          { label: "Gauge",         value: "24 Gauge"                             },
          { label: "Length",        value: "12 mm"                                },
          { label: "Cutting Width", value: "6.5 mm"                               },
          { label: "Base Angle",    value: "15°"                                  },
          { label: "Indication",    value: "Initial Incision"                     },
          { label: "Order",         value: "Standard",               accent: true },
        ],
      }],
      specialOrder: null,
    },
    {
      id: "lance45", name: "45°", type: "24 Gauge",
      tag: "Lance Tip · 45° · 24 Gauge · Initial Incision",
      title: "Lance Ip — 45°", subtitle: "Lance Tip Knives (Lance Astuce Couteaux) — Length: 12 mm · Cutting Width: 6.5 mm · Angled 15°",
      desc: "Lance tip knife for initial incision at 45° angulation. Length 12 mm, Cutting Width 6.5 mm, 24 Gauge.", lensImg: "../Multimedia/msBladeLance.png",
      highlights: [
        { icon: "fa-staff-snake",      text: "Lance tip geometry"   },
        { icon: "fa-ruler",            text: "12 mm length"         },
        { icon: "fa-ruler-horizontal", text: "6.5 mm cutting width" },
        { icon: "fa-angle-right",      text: "45° angulation"       },
        { icon: "fa-certificate",      text: "CE certified"         },
      ],
      variants: [{
        id: "NS4524LT", label: "NS 4524LT", lensImg: "../Multimedia/msBladeLance.png",
        specs: [
          { label: "Model",         value: "NS 4524LT",              accent: true },
          { label: "Angulation",    value: "45°",                    accent: true },
          { label: "Gauge",         value: "24 Gauge"                             },
          { label: "Length",        value: "12 mm"                                },
          { label: "Cutting Width", value: "6.5 mm"                               },
          { label: "Base Angle",    value: "15°"                                  },
          { label: "Indication",    value: "Initial Incision"                     },
          { label: "Order",         value: "Standard",               accent: true },
        ],
      }],
      specialOrder: null,
    },
  ];

  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse"></span>NanoSharp · Lance Tip Knives for Initial Incision');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Lance Ip<br><em>NanoSharp Blade</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Lance Tip Knives (Punta de lanza cuchillos) for initial incision. Length: 12 mm · Grinding Width (Cutting): 6.5 mm · Angled 15°. Available in 15°, 30° and 45° angulations.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/index.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Home</a>`);

  function updateLanceHero(tabId) {
    const data = LANCE_TABS.find(t => t.id === tabId);
    if (!data) return;
    const wrap = qs("heroBladeWrap");
    if (wrap) wrap.innerHTML = `<img src="${data.lensImg}" alt="${data.title}" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='0'"/>`;
    const ey = qs("heroEyebrow");
    if (ey) ey.innerHTML = `<span class="pulse"></span>${data.tag}`;
  }

  const lanceTabBar = qs("bladeSubTabBar");
  if (lanceTabBar) {
    lanceTabBar.innerHTML = LANCE_TABS.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}" role="tab" aria-selected="${i === 0}"
        aria-controls="panel-${t.id}" data-model="${t.id}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  const lancePanelsWrap = qs("blade-sub-panels");
  if (lancePanelsWrap) {
    lancePanelsWrap.innerHTML = LANCE_TABS.map((t, i) =>
      `<div id="panel-${t.id}" class="model-panel${i === 0 ? " active" : ""}"></div>`
    ).join("");
  }

  LANCE_TABS.forEach(function(data) {
    const panelEl = qs("panel-" + data.id);
    if (!panelEl) return;
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}" style="${s.accent ? "color:var(--neu-accent);font-weight:600;" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);">${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area"><div class="card-lens-bg"></div>
          <div class="card-lens-svg"><img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/></div>
        </div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);"><i class="fa-solid fa-table-list"></i></div>
          <div><div class="spec-head-title">Technical Specifications</div><div class="spec-head-sub">${data.title} — ${data.tag}</div></div>
        </div>
        <p class="flip-hint-btn"><i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i> Select the model to reveal full specifications</p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  });

  updateLanceHero(LANCE_TABS[0].id);

  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;
    const targetId = tab.dataset.model;
    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });
    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));
    const panel = qs("panel-" + targetId);
    if (panel) panel.classList.add("active");
    updateLanceHero(targetId);
  });

  const lanceTrust = qs("trustBar");
  if (lanceTrust) lanceTrust.innerHTML = [
    { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,   title: "ISO Certified",      desc: "All NanoSharp lance tip knives manufactured to ISO surgical blade standards." },
    { path: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,    title: "Single-Use Sterile", desc: "Every blade individually packaged, EO-sterilised, supplied ready for use." },
    { path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Ultra-Sharp Edge", desc: "Precision-ground stainless steel for clean, trauma-free initial incisions." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:rgba(10,94,168,0.08);"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  const lanceIfuH = qs("ifuHeader");
  if (lanceIfuH) lanceIfuH.innerHTML = `<div class="ifu-icon-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title">Instructions for Use</div><div class="ifu-sub">Download IFU for Lance Ip product lines</div></div>`;
  const lanceIfuG = qs("ifuGrid");
  if (lanceIfuG) lanceIfuG.innerHTML = [
    { label: "IFU — Lance Ip 15°", sub: "NS 1524LT · 24 Gauge" },
    { label: "IFU — Lance Ip 30°", sub: "NS 3024LT · 24 Gauge" },
    { label: "IFU — Lance Ip 45°", sub: "NS 4524LT · 24 Gauge" },
  ].map(l => `<a href="#" class="ifu-link"><div class="ifu-link-icon hydro-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div></a>`).join("");
  
  const BLADS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${BLADS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${BLADS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${BLADS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${BLADS.footer.contact.phone}">${BLADS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${BLADS.footer.contact.email}">${BLADS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${BLADS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * MVR BLADE PAGE — mvrBlade.html
 *************************************************/
if (ACTIVE_PAGE === "mvrBlade") {

  const MVR_TABS = [
    {
      id: "mvr19", name: "19 Gauge", type: "Self Sealing",
      tag: "MVR Blade · 19 Gauge · Water Tight Self Sealing",
      title: "MVR Blade — 19G", subtitle: "MVR Blades (MVR Cuchillas) — Water Tight Self Sealing Incision · Straight / Angled 45° · Bevel Up/Down",
      desc: "MVR blade for water tight self sealing incision at 19 Gauge. Straight / Angled 45° Bevel Up / Down.", lensImg: "../Multimedia/msMVRBlade.png",
      highlights: [
        { icon: "fa-diamond-turn-right", text: "MVR geometry"          },
        { icon: "fa-droplet-slash",      text: "Water-tight seal"      },
        { icon: "fa-arrows-left-right",  text: "Straight / 45° angled" },
        { icon: "fa-rotate",             text: "Bevel up / down"       },
        { icon: "fa-certificate",        text: "CE certified"          },
      ],
      variants: [{
        id: "NS19MVR", label: "NS 19MVR", lensImg: "../Multimedia/msMVRBlade.png",
        specs: [
          { label: "Model",       value: "NS 19MVR",                     accent: true },
          { label: "Gauge",       value: "19 Gauge",                     accent: true },
          { label: "Type",        value: "MVR Blade"                                  },
          { label: "Incision",    value: "Water Tight Self Sealing"                   },
          { label: "Orientation", value: "Straight / Angled 45°"                      },
          { label: "Bevel",       value: "Up / Down"                                  },
          { label: "Order",       value: "Standard",                     accent: true },
        ],
      }],
      specialOrder: null,
    },
    {
      id: "mvr20", name: "20 Gauge", type: "Self Sealing",
      tag: "MVR Blade · 20 Gauge · Water Tight Self Sealing",
      title: "MVR Blade — 20G", subtitle: "MVR Blades (MVR Cuchillas) — Water Tight Self Sealing Incision · Straight / Angled 45° · Bevel Up/Down",
      desc: "MVR blade for water tight self sealing incision at 20 Gauge. Straight / Angled 45° Bevel Up / Down.", lensImg: "../Multimedia/msMVRBlade.png",
      highlights: [
        { icon: "fa-diamond-turn-right", text: "MVR geometry"          },
        { icon: "fa-droplet-slash",      text: "Water-tight seal"      },
        { icon: "fa-arrows-left-right",  text: "Straight / 45° angled" },
        { icon: "fa-rotate",             text: "Bevel up / down"       },
        { icon: "fa-certificate",        text: "CE certified"          },
      ],
      variants: [{
        id: "NS20MVR", label: "NS 20MVR", lensImg: "../Multimedia/msMVRBlade.png",
        specs: [
          { label: "Model",       value: "NS 20MVR",                     accent: true },
          { label: "Gauge",       value: "20 Gauge",                     accent: true },
          { label: "Type",        value: "MVR Blade"                                  },
          { label: "Incision",    value: "Water Tight Self Sealing"                   },
          { label: "Orientation", value: "Straight / Angled 45°"                      },
          { label: "Bevel",       value: "Up / Down"                                  },
          { label: "Order",       value: "Standard",                     accent: true },
        ],
      }],
      specialOrder: null,
    },
    {
      id: "mvr24", name: "24 Gauge", type: "Self Sealing",
      tag: "MVR Blade · 24 Gauge · Water Tight Self Sealing",
      title: "MVR Blade — 24G", subtitle: "MVR Blades (MVR Cuchillas) — Water Tight Self Sealing Incision · Straight / Angled 45° · Bevel Up/Down",
      desc: "MVR blade for water tight self sealing incision at 24 Gauge. Straight / Angled 45° Bevel Up / Down.", lensImg: "../Multimedia/msMVRBlade.png",
      highlights: [
        { icon: "fa-diamond-turn-right", text: "MVR geometry"          },
        { icon: "fa-droplet-slash",      text: "Water-tight seal"      },
        { icon: "fa-arrows-left-right",  text: "Straight / 45° angled" },
        { icon: "fa-rotate",             text: "Bevel up / down"       },
        { icon: "fa-certificate",        text: "CE certified"          },
      ],
      variants: [{
        id: "NS24MVR", label: "NS 24MVR", lensImg: "../Multimedia/msMVRBlade.png",
        specs: [
          { label: "Model",       value: "NS 24MVR",                     accent: true },
          { label: "Gauge",       value: "24 Gauge",                     accent: true },
          { label: "Type",        value: "MVR Blade"                                  },
          { label: "Incision",    value: "Water Tight Self Sealing"                   },
          { label: "Orientation", value: "Straight / Angled 45°"                      },
          { label: "Bevel",       value: "Up / Down"                                  },
          { label: "Order",       value: "Standard",                     accent: true },
        ],
      }],
      specialOrder: null,
    },
  ];

  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse"></span>NanoSharp · MVR Blades · Water Tight Self Sealing');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "MVR Blade<br><em>NanoSharp</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "MVR Blades (MVR Cuchillas) for Water Tight Self Sealing Incision. Straight / Angled 45° · Bevel Up / Down. Available in 19, 20 and 24 Gauge.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/index.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Home</a>`);

  function updateMvrHero(tabId) {
    const data = MVR_TABS.find(t => t.id === tabId);
    if (!data) return;
    const wrap = qs("heroBladeWrap");
    if (wrap) wrap.innerHTML = `<img src="${data.lensImg}" alt="${data.title}" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='0'"/>`;
    const ey = qs("heroEyebrow");
    if (ey) ey.innerHTML = `<span class="pulse"></span>${data.tag}`;
  }

  const mvrTabBar = qs("bladeSubTabBar");
  if (mvrTabBar) {
    mvrTabBar.innerHTML = MVR_TABS.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}" role="tab" aria-selected="${i === 0}"
        aria-controls="panel-${t.id}" data-model="${t.id}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  const mvrPanelsWrap = qs("blade-sub-panels");
  if (mvrPanelsWrap) {
    mvrPanelsWrap.innerHTML = MVR_TABS.map((t, i) =>
      `<div id="panel-${t.id}" class="model-panel${i === 0 ? " active" : ""}"></div>`
    ).join("");
  }

  MVR_TABS.forEach(function(data) {
    const panelEl = qs("panel-" + data.id);
    if (!panelEl) return;
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}" style="${s.accent ? "color:var(--neu-accent);font-weight:600;" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);">${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area"><div class="card-lens-bg"></div>
          <div class="card-lens-svg"><img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/></div>
        </div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" style="background:rgba(10,94,168,0.1);color:var(--neu-accent);"><i class="fa-solid fa-table-list"></i></div>
          <div><div class="spec-head-title">Technical Specifications</div><div class="spec-head-sub">${data.title} — ${data.tag}</div></div>
        </div>
        <p class="flip-hint-btn"><i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i> Select the model to reveal full specifications</p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  });

  updateMvrHero(MVR_TABS[0].id);

  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;
    const targetId = tab.dataset.model;
    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });
    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));
    const panel = qs("panel-" + targetId);
    if (panel) panel.classList.add("active");
    updateMvrHero(targetId);
  });

  const mvrTrust = qs("trustBar");
  if (mvrTrust) mvrTrust.innerHTML = [
    { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,   title: "ISO Certified",      desc: "All NanoSharp MVR blades manufactured to ISO surgical blade standards." },
    { path: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,    title: "Single-Use Sterile", desc: "Every blade individually packaged, EO-sterilised, supplied ready for use." },
    { path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Water-Tight Seal", desc: "MVR geometry ensures water-tight self-sealing incisions with minimal leakage." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:rgba(10,94,168,0.08);"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  const mvrIfuH = qs("ifuHeader");
  if (mvrIfuH) mvrIfuH.innerHTML = `<div class="ifu-icon-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title">Instructions for Use</div><div class="ifu-sub">Download IFU for MVR Blade product lines</div></div>`;
  const mvrIfuG = qs("ifuGrid");
  if (mvrIfuG) mvrIfuG.innerHTML = [
    { label: "IFU — MVR 19 Gauge", sub: "NS 19MVR · Self Sealing" },
    { label: "IFU — MVR 20 Gauge", sub: "NS 20MVR · Self Sealing" },
    { label: "IFU — MVR 24 Gauge", sub: "NS 24MVR · Self Sealing" },
  ].map(l => `<a href="#" class="ifu-link"><div class="ifu-link-icon hydro-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div></a>`).join("");
  
  const BLADS = {
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  }

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${BLADS.footer.tagline}</p>
      <div class="au-footer-socials">
        ${BLADS.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${BLADS.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${BLADS.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${BLADS.footer.contact.phone}">${BLADS.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${BLADS.footer.contact.email}">${BLADS.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${BLADS.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
}

/*************************************************
 * CONTACT US PAGE — contactUs.html
 *************************************************/
if (ACTIVE_PAGE === "contactUs") {

  const CONTACT = {
    eyebrow:  "Chennai, India · Est. 2008",
    h1:       "Let's start a<br><em>Conversation</em>",
    desc:     "Whether you're a Surgeon, Distributor or healthcare institution — our team is ready to help with product enquiries, technical support and partnership opportunities.",

    chips: [
      { label: "9AM–6PM IST",   icon: "fa-clock"       },
      { label: "Global Reach",  icon: "fa-globe"       },
      { label: "Quick Reply",   icon: "fa-headset"     },
      { label: "ISO Certified", icon: "fa-certificate" },
    ],

    cards: [
      { href: "tel:+919876543210",                                   icon: "fa-phone",    cls: "phone",    label: "Call Us",    value: "+91 98765 43210",                   sub: "Mon–Sat, 9AM–6PM IST"      },
      { href: "mailto:info@worldvisionophthalmic.com",               icon: "fa-envelope", cls: "email",    label: "Email Us",   value: "info@worldvisionophthalmic.com",    sub: "We reply within 24 hours"  },
      { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",    icon: "fa-whatsapp", cls: "whatsapp", label: "WhatsApp",   value: "Chat Instantly",                    sub: "Fastest response channel", brands: true },
      { href: null,                                                  icon: "fa-location-dot", cls: "location", label: "Head Office", value: "Chennai, Tamil Nadu",          sub: "India — PIN 600001"        },
    ],

    form: {
      title: "Send us a <em>message</em>",
      sub:   "Fill in the form below and our team will get back to you within one business day.",
      subjects: ["Product Enquiry", "Technical Support", "Distributor Partnership", "Toric Calculator", "Other"],
    },

    office: {
      name:    "Chennai Head Office",
      address: "Chennai, Tamil Nadu, India — PIN 600001",
      phone:   "+91 98765 43210",
      email:   "info@worldvisionophthalmic.com",
      hours:   "Mon–Sat 9AM–6PM IST",
      mapSrc:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.00898016972655!3d13.047686726476858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin",
    },

    social: {
      title:   "Find us on social media",
      links: [
        { href: "#",                                                icon: "fa-linkedin-in",  cls: "linkedin",  label: "LinkedIn",  brands: true },
        { href: "#",                                                icon: "fa-instagram",    cls: "instagram", label: "Instagram", brands: true },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",icon: "fa-whatsapp",     cls: "whatsapp",  label: "WhatsApp",  brands: true },
      ],
    },

    qr: {
      title: "Need a faster response?",
      desc:  "For urgent product enquiries or surgical support, reach us directly on WhatsApp — our team responds within minutes during business hours.",
      href:  "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",
      label: "<i class=\"fa-brands fa-whatsapp\"></i> Open WhatsApp",
    },

    faq: {
      eyebrow: "<i class=\"fa-solid fa-circle-question\" style=\"font-size:10px;\"></i> Common Questions",
      heading: "Frequently <em>asked</em>",
      sub:     "Quick answers to the most common questions we receive.",
      items: [
        {
          q: "What IOL models are available for distribution?",
          a: "We offer a full range including Hydrophobic (Monofocal, Multifocal, Toric, 3-Piece), Hydrophilic, and PMMA IOLs. View the complete catalogue on our Intraocular Lenses page or contact us for a product brochure.",
        },
        {
          q: "How do I use the Toric Calculator?",
          a: "Our Toric Calculator uses the crossed-cylinder vector method. Enter surgeon details, patient biometry, and pre-op keratometry — it calculates the optimal toric IOL power and axis. Access it from the nav above.",
        },
        {
          q: "How quickly can I get a product sample?",
          a: "Sample requests are typically processed within 3–5 business days for domestic orders and 7–14 days internationally, subject to availability and regulatory clearance in your country.",
        },
        {
          q: "Do you supply internationally?",
          a: "Yes — World Vision Ophthalmic supplies to hospitals, clinics, and distributors across South Asia, Southeast Asia, Africa, and the Middle East. Contact us to discuss distribution in your region.",
        },
        {
          q: "What certifications do your lenses hold?",
          a: "All World Vision IOLs are tested to ISO 10993 biocompatibility standards. Our hydrophobic range uses USA-sourced medical-grade acrylic with less than 0.5% water content. IFU documents are available on each product page.",
        },
        {
          q: "Do you offer surgical training or CME support?",
          a: "Yes — we collaborate with ophthalmic training institutes and support CME programs. Contact us with your institution's details and we will connect you with our medical affairs team.",
        },
      ],
    },

    trust: [
      { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,   title: "ISO 10993 Certified",    desc: "Every WVO lens undergoes full biocompatibility testing before leaving our facility in Chennai." },
      { path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "Global Distribution", desc: "Supplying ophthalmic products to hospitals and distributors across Asia, Africa, and the Middle East." },
      { path: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`, title: "Responsive Support", desc: "Dedicated technical and sales support by phone, email, and WhatsApp during business hours." },
    ],
    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  };

  // ── Meta ──────────────────────────────────────────────────────────────
  document.title = "Contact Us — World Vision Ophthalmic";
  const m = qs("pageMeta");
  if (m) m.setAttribute("content", "Contact World Vision Ophthalmic — Chennai, India. Reach our team for product enquiries, technical support, or distributor partnerships.");

  // ── Breadcrumb ────────────────────────────────────────────────────────
  const bc = qs("breadcrumb");
  if (bc) bc.innerHTML = `<a href="../Pages/index.html">Home</a><span class="sep">/</span><span class="current">Contact Us</span>`;

  // ── Hero ──────────────────────────────────────────────────────────────
  const ey = qs("contactEyebrow");
  if (ey) ey.innerHTML = `<span class="pulse"></span>${CONTACT.eyebrow}`;

  const h1 = qs("contact-h1");
  if (h1) h1.innerHTML = CONTACT.h1;

  const hd = qs("contactHeroDesc");
  if (hd) hd.textContent = CONTACT.desc;

  const chips = qs("heroInfoChips");
  if (chips) chips.innerHTML = CONTACT.chips.map(c =>
    `<div class="hero-chip"><i class="fa-solid ${c.icon}" style="font-size:11px;"></i> ${c.label}</div>`
  ).join("");

  // ── Quick cards ───────────────────────────────────────────────────────
  const cards = qs("contactCards");
  if (cards) cards.innerHTML = CONTACT.cards.map(c => {
    const tag  = c.href ? `<a href="${c.href}"${c.href.startsWith("http") ? ' target="_blank"' : ""} class="contact-card">` : `<div class="contact-card" style="cursor:default;">`;
    const end  = c.href ? `</a>` : `</div>`;
    const iprefix = c.brands ? "fa-brands" : "fa-solid";
    return `${tag}
      <div class="cc-icon ${c.cls}"><i class="${iprefix} ${c.icon}"></i></div>
      <div>
        <div class="cc-label">${c.label}</div>
        <div class="cc-value">${c.value}</div>
        <div class="cc-sub">${c.sub}</div>
      </div>
    ${end}`;
  }).join("");

  // ── Form card ─────────────────────────────────────────────────────────
  const ft = qs("formCardTitle");
  if (ft) ft.innerHTML = CONTACT.form.title;

  const fs = qs("formCardSub");
  if (fs) fs.textContent = CONTACT.form.sub;

  const sc = qs("subjectChips");
  if (sc) sc.innerHTML = CONTACT.form.subjects.map((s, i) =>
    `<button class="subject-chip${i === 0 ? " active" : ""}" type="button" data-subject="${s}">${s}</button>`
  ).join("");

  // ── Office map + details ──────────────────────────────────────────────
  const mapEl = qs("officeMap");
  if (mapEl) mapEl.src = CONTACT.office.mapSrc;

  const od = qs("officeDetails");
  if (od) od.innerHTML = `
    <div class="office-name">${CONTACT.office.name}</div>
    <div class="office-detail-row"><i class="fa-solid fa-location-dot"></i><span>${CONTACT.office.address}</span></div>
    <div class="office-detail-row"><i class="fa-solid fa-phone"></i><span><a href="tel:${CONTACT.office.phone.replace(/\s/g,"")}" style="color:inherit;text-decoration:none;">${CONTACT.office.phone}</a></span></div>
    <div class="office-detail-row"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${CONTACT.office.email}" style="color:inherit;text-decoration:none;">${CONTACT.office.email}</a></span></div>
    <div class="office-hours-badge"><span class="hours-dot"></span> Open · ${CONTACT.office.hours}</div>`;

  // ── Social card ───────────────────────────────────────────────────────
  const st = qs("socialTitle");
  if (st) st.textContent = CONTACT.social.title;

  const sr = qs("socialRow");
  if (sr) sr.innerHTML = CONTACT.social.links.map(l =>
    `<a href="${l.href}" target="_blank" class="social-btn ${l.cls}"><i class="fa-brands ${l.icon}"></i>${l.label}</a>`
  ).join("");

  // ── WhatsApp QR card ──────────────────────────────────────────────────
  const qt = qs("qrTitle"); if (qt) qt.textContent = CONTACT.qr.title;
  const qd = qs("qrDesc");  if (qd) qd.textContent = CONTACT.qr.desc;
  const qb = qs("qrBtn");
  if (qb) { qb.href = CONTACT.qr.href; qb.innerHTML = CONTACT.qr.label; }

  // ── FAQ ───────────────────────────────────────────────────────────────
  const fe = qs("faqEyebrow"); if (fe) fe.innerHTML = CONTACT.faq.eyebrow;
  const fh = qs("faqHeading"); if (fh) fh.innerHTML = CONTACT.faq.heading;
  const fsub = qs("faqSub");   if (fsub) fsub.textContent = CONTACT.faq.sub;

  const fg = qs("faqGrid");
  if (fg) {
    const half  = Math.ceil(CONTACT.faq.items.length / 2);
    const left  = CONTACT.faq.items.slice(0, half);
    const right = CONTACT.faq.items.slice(half);
    const makeCol = items => `<div class="faq-col">${items.map(item => `
      <div class="faq-item">
        <div class="faq-q">
          <span class="faq-q-text">${item.q}</span>
          <div class="faq-icon"><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="faq-a-wrap"><div class="faq-a">${item.a}</div></div>
      </div>`).join("")}</div>`;
    fg.innerHTML = makeCol(left) + makeCol(right);
  }

  // ── Subject chips — wire AFTER innerHTML is set ───────────────────────
  const scWrap = qs("subjectChips");
  if (scWrap) {
    scWrap.querySelectorAll(".subject-chip").forEach(function(chip) {
      chip.addEventListener("click", function() {
        scWrap.querySelectorAll(".subject-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const sf = qs("subjectField");
        if (sf) sf.value = chip.dataset.subject;
      });
    });
  }

  // ── Trust bar ─────────────────────────────────────────────────────────
  const tb = qs("contactTrustBar");
  if (tb) tb.innerHTML = CONTACT.trust.map(t => `
    <div class="trust-card">
      <div class="trust-icon" style="background:rgba(0,85,165,0.1);">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="2" stroke-linecap="round">${t.path}</svg>
      </div>
      <div><h3>${t.title}</h3><p>${t.desc}</p></div>
    </div>`).join("");

  // ── Footer ────────────────────────────────────────────────────────────
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${CONTACT.footer.tagline}</p>
      <div class="au-footer-socials">
        ${CONTACT.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>

    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${CONTACT.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${CONTACT.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>

    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${CONTACT.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${CONTACT.footer.contact.phone}">${CONTACT.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${CONTACT.footer.contact.email}">${CONTACT.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${CONTACT.footer.contact.hours}</span></div>
    </div>`;

    const fc = qs("auFooterBottom");
    if (fc) fc.textContent = PAGE.company.copyright;

    const waF = qs("waFloat");
    if (waF) waF.href = PAGE.company.whatsapp;
  
}

/*************************************************
 * ABOUT US PAGE — aboutUs.html
 *************************************************/
if (ACTIVE_PAGE === "aboutUs") {

  const ABOUT = {
    eyebrow: "Chennai, India · Est. 2008",
    h1:   "Pioneering Vision<br><em>Care in India</em>",
    desc: "World Vision Ophthalmic Pvt. Ltd. is a Chennai-based manufacturer and distributor of premium ophthalmic products — delivering surgical precision, global materials, and Indian excellence to eye care professionals worldwide.",

    chips: [
      { label: "Est. 2008",      icon: "fa-calendar"      },
      { label: "ISO Certified",  icon: "fa-certificate"   },
      { label: "Global Reach",   icon: "fa-globe"         },
      { label: "Chennai, India", icon: "fa-location-dot"  },
    ],

    badges: [
      { id: "eyeBadge1", icon: "fa-certificate", text: "ISO Certified" },
      { id: "eyeBadge2", icon: "fa-globe",        text: "Global Export" },
      { id: "eyeBadge3", icon: "fa-award",        text: "15+ Years"     },
    ],

    stats: [
      { num: "15+", label: "Years of Excellence" },
      { num: "50+", label: "IOL Product Models"  },
      { num: "20+", label: "Countries Supplied"  },
      { num: "1M+", label: "Lenses Delivered"    },
    ],

    story: {
      eyebrow: "Our Story",
      heading: "Built on a <em>Vision</em><br>for Better Sight",
      paras: [
        "World Vision Ophthalmic Pvt. Ltd. was founded in 2008 in Chennai, Tamil Nadu, with a singular mission: to make world-class ophthalmic products accessible to surgeons and patients across India and beyond.",
        "Starting with a focused range of intraocular lenses, we grew steadily — investing in precision manufacturing, sourcing <strong>USA and European medical-grade materials</strong>, and building clinical trust with ophthalmologists from South Asia to the Middle East.",
        "Today, we supply a comprehensive portfolio of hydrophobic and hydrophilic IOLs, PMMA lenses, micro-surgical blades, and ophthalmic pharma — all backed by strict quality protocols and ISO-compliant manufacturing.",
      ],
      timeline: [
        { year: "2008", desc: "<strong>Founded</strong> in Chennai with a focused range of PMMA IOLs." },
        { year: "2012", desc: "Expanded into <strong>foldable hydrophilic IOLs</strong> and entered export markets." },
        { year: "2016", desc: "Launched the <strong>Nano Hydrophobic series</strong> using USA medical-grade acrylic." },
        { year: "2020", desc: "Introduced <strong>Micro-Surgical Blades</strong> and pharma product range." },
        { year: "2024", desc: "Supplying to <strong>20+ countries</strong> across Asia, Africa, and the Middle East." },
      ],
    },

    values: {
      eyebrow: "Mission & Values",
      heading: "Guided by <em>Purpose,</em><br>Driven by Precision",
      sub: "Every decision at World Vision Ophthalmic is shaped by our commitment to clinical integrity, patient outcomes, and the advancement of ophthalmic care worldwide.",
      items: [
        { icon: "fa-eye",           title: "Patient First",        desc: "Every product begins and ends with one question: will this improve the patient's quality of life? Clinical outcomes drive every design decision." },
        { icon: "fa-microscope",    title: "Scientific Rigour",    desc: "We source only USA and European medical-grade raw materials, tested to ISO 10993 biocompatibility standards. No compromises on quality." },
        { icon: "fa-handshake",     title: "Surgeon Partnership",  desc: "We collaborate closely with ophthalmic surgeons to refine designs, improve IFUs, and develop solutions that work in real operating rooms." },
        { icon: "fa-globe",         title: "Global Accessibility", desc: "Affordable, world-class ophthalmic care should not be limited by geography. We export to 20+ countries with full regulatory support." },
        { icon: "fa-shield-halved", title: "Quality Assurance",    desc: "ISO-certified manufacturing with full traceability — from raw material sourcing to sterilization and final packaging." },
        { icon: "fa-seedling",      title: "Sustainable Growth",   desc: "We invest in R&D, people, and technology — building a company that will advance ophthalmic care for the next generation." },
      ],
    },

    mfg: {
      eyebrow: "Manufacturing",
      heading: "Precision Made<br>in Chennai",
      desc: "Our manufacturing facility in Chennai combines modern cleanroom infrastructure with decades of ophthalmic expertise — producing lenses trusted by surgeons across three continents.",
      features: [
        { icon: "fa-industry",         text: "ISO-compliant cleanroom manufacturing" },
        { icon: "fa-vial",             text: "USA & European medical-grade materials" },
        { icon: "fa-shield",           text: "ISO 10993 biocompatibility testing"    },
        { icon: "fa-boxes-stacked",    text: "Full supply chain traceability"        },
        { icon: "fa-magnifying-glass", text: "Precision optics quality control"      },
        { icon: "fa-truck-fast",       text: "Global export & logistics support"     },
      ],
    },

    team: {
      eyebrow: "Our Leadership",
      heading: "The Team Behind<br><em>World Vision</em>",
      sub: "Our leadership brings decades of combined experience in ophthalmic manufacturing, regulatory affairs, and clinical science.",
      members: [
        { name: "Dr. R. Krishnaswamy", role: "Founder & Managing Director", icon: "fa-user-tie", desc: "Visionary entrepreneur with 25+ years in ophthalmic manufacturing. Founded WVO in 2008 to bridge the gap between global quality and local accessibility." },
        { name: "Mrs. S. Meenakshi",   role: "Director — Operations",       icon: "fa-user-tie", desc: "Oversees manufacturing, quality assurance, and supply chain. An ISO compliance expert with deep expertise in medical device regulations." },
        { name: "Mr. A. Venkatesh",    role: "Head of Sales & Export",      icon: "fa-user-tie", desc: "Leads global distribution across Asia, Africa, and the Middle East. 18+ years of experience in ophthalmic product marketing." },
      ],
    },

    cta: {
      heading: "Ready to Partner<br><em>with Us?</em>",
      sub:     "Whether you're a surgeon, distributor, or healthcare institution — we'd love to connect and explore how World Vision Ophthalmic can serve your patients.",
      btns: [
        { label: "Contact Us",       href: "../Pages/contactUs.html", cls: "btn-p", icon: "fa-envelope" },
        { label: "Explore Products", href: "../Pages/iol-page.html",  cls: "btn-g", icon: "fa-grid-2"   },
      ],
    },

    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
        { label: "Gallery",          href: "../Pages/gallery.html"         },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  };

  // ── Meta ──────────────────────────────────────────────────────────────
  document.title = "About Us — World Vision Ophthalmic";
  const m = qs("pageMeta");
  if (m) m.setAttribute("content", "World Vision Ophthalmic Pvt. Ltd. — Chennai-based manufacturer of premium ophthalmic IOLs and surgical products since 2008.");

  // ── Breadcrumb ────────────────────────────────────────────────────────
  const bc = qs("breadcrumb");
  if (bc) bc.innerHTML = `<a href="../Pages/index.html">Home</a><span class="sep">/</span><span class="current">About Us</span>`;

  // ── Hero ──────────────────────────────────────────────────────────────
  const ey = qs("aboutEyebrow");
  if (ey) ey.innerHTML = `<span class="pulse"></span>${ABOUT.eyebrow}`;

  const h1 = qs("aboutH1");
  if (h1) h1.innerHTML = ABOUT.h1;

  const hd = qs("aboutHeroDesc");
  if (hd) hd.textContent = ABOUT.desc;

  const chips = qs("aboutChips");
  if (chips) chips.innerHTML = ABOUT.chips.map(c =>
    `<div class="about-chip"><i class="fa-solid ${c.icon}"></i>${c.label}</div>`
  ).join("");

  // ── Floating badges ───────────────────────────────────────────────────
  ABOUT.badges.forEach(b => {
    const el = qs(b.id);
    if (el) el.innerHTML = `<i class="fa-solid ${b.icon}"></i>${b.text}`;
  });

  // ── Stats ─────────────────────────────────────────────────────────────
  const ss = qs("auStats");
  if (ss) ss.innerHTML = ABOUT.stats.map(s =>
    `<div class="au-stat">
      <div class="au-stat-num">${s.num}</div>
      <div class="au-stat-lbl">${s.label}</div>
    </div>`
  ).join("");

  // ── Story ─────────────────────────────────────────────────────────────
  const se = qs("storyEyebrow"); if (se) se.textContent = ABOUT.story.eyebrow;
  const sh = qs("storyHeading"); if (sh) sh.innerHTML   = ABOUT.story.heading;
  const sp = qs("storyParas");   if (sp) sp.innerHTML   = ABOUT.story.paras.map(p => `<p>${p}</p>`).join("");
  const tl = qs("storyTimeline");
  if (tl) tl.innerHTML = ABOUT.story.timeline.map(t =>
    `<div class="tl-item"><div class="tl-yr">${t.year}</div><div class="tl-desc">${t.desc}</div></div>`
  ).join("");

  // ── Values ────────────────────────────────────────────────────────────
  const ve = qs("valuesEyebrow"); if (ve) ve.textContent = ABOUT.values.eyebrow;
  const vh = qs("valuesHeading"); if (vh) vh.innerHTML   = ABOUT.values.heading;
  const vs = qs("valuesSub");     if (vs) vs.textContent = ABOUT.values.sub;
  const vg = qs("valuesGrid");
  if (vg) vg.innerHTML = ABOUT.values.items.map(v =>
    `<div class="val-card">
      <div class="val-ico"><i class="fa-solid ${v.icon}"></i></div>
      <h3>${v.title}</h3><p>${v.desc}</p>
    </div>`
  ).join("");

  // ── Manufacturing ─────────────────────────────────────────────────────
  const mb = qs("mfgBand");
  if (mb) mb.innerHTML = `
    <div class="mfg-band-text">
      <span class="eyebrow"><i class="fa-solid fa-industry" style="margin-right:8px;"></i>${ABOUT.mfg.eyebrow}</span>
      <h2>${ABOUT.mfg.heading}</h2>
      <p>${ABOUT.mfg.desc}</p>
    </div>
    <div class="mfg-feats">
      ${ABOUT.mfg.features.map(f =>
        `<div class="mfg-feat"><i class="fa-solid ${f.icon}"></i><span>${f.text}</span></div>`
      ).join("")}
    </div>`;

  // ── Team ──────────────────────────────────────────────────────────────
  const te = qs("teamEyebrow"); if (te) te.textContent = ABOUT.team.eyebrow;
  const th = qs("teamHeading"); if (th) th.innerHTML   = ABOUT.team.heading;
  const ts = qs("teamSub");     if (ts) ts.textContent = ABOUT.team.sub;
  const tg = qs("teamGrid");
  if (tg) tg.innerHTML = ABOUT.team.members.map(mem =>
    `<div class="team-card">
      <div class="team-avatar"><i class="fa-solid ${mem.icon}"></i></div>
      <div class="team-info"><h3>${mem.name}</h3><div class="team-role">${mem.role}</div><p>${mem.desc}</p></div>
    </div>`
  ).join("");

  // ── CTA ───────────────────────────────────────────────────────────────
  const ch = qs("auCtaH");   if (ch) ch.innerHTML   = ABOUT.cta.heading;
  const cs = qs("auCtaP");   if (cs) cs.textContent = ABOUT.cta.sub;
  const cb = qs("auCtaBtns");
  if (cb) cb.innerHTML = ABOUT.cta.btns.map(b =>
    `<a href="${b.href}" class="${b.cls}"><i class="fa-solid ${b.icon}"></i>${b.label}</a>`
  ).join("");

  // ── Footer ────────────────────────────────────────────────────────────
const fb = qs("auFooterBody");
if (fb) fb.innerHTML = `
  <div class="au-footer-brand-col">
    <div class="au-footer-brand-header">
      <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
      <div>
        <div class="au-footer-brand-name">${PAGE.company.name}</div>
        <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
      </div>
    </div>
    <p class="au-footer-tagline">${ABOUT.footer.tagline}</p>
    <div class="au-footer-socials">
      ${ABOUT.footer.socials.map(s =>
        `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
          <i class="${s.icon}"></i>
        </a>`
      ).join("")}
    </div>
  </div>

  <div class="au-footer-links-col">
    <h4>Quick Links</h4>
    <div class="au-footer-links-grid">
      ${ABOUT.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
    </div>
    <h4 style="margin-top:24px;">Products</h4>
    <div class="au-footer-links-grid">
      ${ABOUT.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
    </div>
  </div>

  <div class="au-footer-contact-col">
    <h4>Contact Us</h4>
    <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${ABOUT.footer.contact.address}</span></div>
    <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${ABOUT.footer.contact.phone}">${ABOUT.footer.contact.phone}</a></span></div>
    <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${ABOUT.footer.contact.email}">${ABOUT.footer.contact.email}</a></span></div>
    <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${ABOUT.footer.contact.hours}</span></div>
  </div>`;

  const fc = qs("auFooterBottom");
  if (fc) fc.textContent = PAGE.company.copyright;

  const waF = qs("waFloat");
  if (waF) waF.href = PAGE.company.whatsapp;

  // ── GSAP Eye Parallax + Scroll Animations ────────────────────────────
  (function() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const outer  = document.getElementById("eyeParallaxOuter");
    const inner  = document.getElementById("eyeParallaxInner");
    const badges = document.querySelectorAll(".eye-badge");
    if (!outer || !inner) return;

    gsap.from(outer, { y: 50, opacity: 0, scale: 0.96, duration: 1.0, ease: "expo.out", delay: 0.2 });
    gsap.to(badges, {
      opacity: 1, stagger: 0.15, duration: 0.6, ease: "back.out(1.5)", delay: 0.8,
      onComplete() { badges.forEach(b => b.classList.add("live")); }
    });

    gsap.fromTo(inner,
      { yPercent: -9 },
      {
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        }
      }
    );

    document.querySelectorAll(".reveal-section").forEach(el => {
      gsap.from(el, {
        y: 44, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
      });
    });

    document.querySelectorAll(".au-stat-num").forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: "top 90%",
        onEnter() {
          gsap.fromTo(el, { scale: 0.75, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 0.65, ease: "back.out(1.7)" });
        }
      });
    });
  })();
}


/*************************************************
 * GALLERY PAGE — only runs on gallery.html
 *************************************************/

if (ACTIVE_PAGE === "gallery") {

  const GAL = {
    eyebrow: "Product Showcase · Chennai, India",
    h1:      "Precision in <em>Every Frame</em>",
    desc:    "Explore our complete portfolio of intraocular lenses, micro-surgical instruments, and manufacturing excellence — crafted for surgeons across the world.",

    stats: [
      { num: "50+", lbl: "IOL Models"        },
      { num: "20+", lbl: "Countries Served"  },
      { num: "4",   lbl: "Product Categories" },
    ],

    filters: [
      { key: "all",           label: "All",                  icon: "fa-grip",             color: "" },
      { key: "hydrophobic",   label: "Hydrophobic IOL",      icon: "fa-eye",              color: "#0055a5" },
      { key: "hydrophilic",   label: "Hydrophilic IOL",      icon: "fa-droplet",          color: "#0077cc" },
      { key: "pmma",          label: "PMMA IOL",             icon: "fa-circle",           color: "#0099bb" },
      { key: "surgical",      label: "Surgical Blades",      icon: "fa-scissors",         color: "#e06000" },
      { key: "facility",      label: "Facility",             icon: "fa-industry",         color: "#2a7a3b" },
    ],

    items: [
      /* ─── Hydrophobic IOL ────────────────────────── */
      { src: "../Multimedia/lense1.png",  label: "Nano Claro — Hydrophobic IOL",      cat: "hydrophobic", variant: ""       },
      { src: "../Multimedia/lense2.png",  label: "Nano Grand — Hydrophobic IOL",      cat: "hydrophobic", variant: ""       },
      { src: "../Multimedia/lense3.png",  label: "Nano Claro Plus",                   cat: "hydrophobic", variant: ""       },
      { src: "../Multimedia/lense4.png",  label: "Nano Grand Plus",                   cat: "hydrophobic", variant: ""       },
      { src: "../Multimedia/lense5.png",  label: "Aspheric Hydrophobic IOL",          cat: "hydrophobic", variant: ""       },
      { src: "../Multimedia/lense6.png",  label: "Toric Hydrophobic IOL",             cat: "hydrophobic", variant: ""       },
      { src: "../Multimedia/nanoIOL1.png",label: "Nano Series — A-Constant 118.0",    cat: "hydrophobic", variant: "square" },
      { src: "../Multimedia/nanoIOL2.png",label: "Nano Series — UV-Blue Filter",      cat: "hydrophobic", variant: "square" },
      /* ─── Hydrophilic IOL ────────────────────────── */
      { src: "../Multimedia/lense7.png",  label: "Nano Fold — Hydrophilic IOL",       cat: "hydrophilic", variant: ""       },
      { src: "../Multimedia/lense8.png",  label: "Nano Flex — Hydrophilic IOL",       cat: "hydrophilic", variant: ""       },
      { src: "../Multimedia/lense9.png",  label: "Foldable Hydrophilic — 6.0mm",     cat: "hydrophilic", variant: ""       },
      { src: "../Multimedia/lense10.png", label: "One-Piece Hydrophilic IOL",         cat: "hydrophilic", variant: ""       },
      { src: "../Multimedia/hydrophilic_flexY1.png", label: "Nano Flex — Plate Haptic",  cat: "hydrophilic", variant: ""   },
      { src: "../Multimedia/hydrophilic_fold1.png",  label: "Nano Fold — Three-Piece",   cat: "hydrophilic", variant: ""   },
      /* ─── PMMA IOL ───────────────────────────────── */
      { src: "../Multimedia/lense11.png", label: "PMMA Biconvex IOL — 5.5mm",        cat: "pmma", variant: ""       },
      { src: "../Multimedia/lense12.png", label: "PMMA Modified C-Loop",             cat: "pmma", variant: ""       },
      { src: "../Multimedia/lense13.png", label: "PMMA — High Power Range",          cat: "pmma", variant: ""       },
      { src: "../Multimedia/lense14.png", label: "PMMA Iris-Claw IOL",               cat: "pmma", variant: ""       },
      { src: "../Multimedia/nanoIRISPmma.png", label: "Nano Iris PMMA",              cat: "pmma", variant: "square" },
      { src: "../Multimedia/nanoPlusPmma.png",  label: "Nano Plus PMMA",             cat: "pmma", variant: "square" },
      /* ─── Surgical Blades ────────────────────────── */
      { src: "../Multimedia/msBlade-Sharp.png",   label: "Microsurgical Blade — Sharp",    cat: "surgical", variant: "square" },
      { src: "../Multimedia/msBladeCrescent.png", label: "Crescent Blade",                 cat: "surgical", variant: "square" },
      { src: "../Multimedia/msBladeLance.png",    label: "Lance Blade",                    cat: "surgical", variant: "square" },
      { src: "../Multimedia/msBlade_blunt.png",   label: "Blunt Tunnel Blade",             cat: "surgical", variant: "square" },
      { src: "../Multimedia/msMVRBlade.png",      label: "MVR Blade — 20G",                cat: "surgical", variant: "square" },
      /* ─── Facility ────────────────────────────────── */
      { src: "../Multimedia/lensemanu1.jpg", label: "Chennai Manufacturing Facility",    cat: "facility", variant: "wide" },
      { src: "../Multimedia/lensemanu2.jpg", label: "CNC Precision Lathe",               cat: "facility", variant: "wide" },
      { src: "../Multimedia/lensemanu3.jpg", label: "Quality Inspection Lab",            cat: "facility", variant: "wide" },
      { src: "../Multimedia/lensemanu4.jpg", label: "Sterile Packaging Line",            cat: "facility", variant: "wide" },
    ],

    catMeta: {
      all:          { label: "All",               color: "#0055a5", bg: "rgba(0,85,165,0.75)"   },
      hydrophobic:  { label: "Hydrophobic IOL",   color: "#0055a5", bg: "rgba(0,85,165,0.75)"   },
      hydrophilic:  { label: "Hydrophilic IOL",   color: "#0077cc", bg: "rgba(0,119,204,0.75)"  },
      pmma:         { label: "PMMA IOL",          color: "#0099bb", bg: "rgba(0,153,187,0.75)"  },
      surgical:     { label: "Surgical Blades",   color: "#c05000", bg: "rgba(192,80,0,0.75)"   },
      facility:     { label: "Facility",          color: "#2a7a3b", bg: "rgba(42,122,59,0.75)"  },
    },

    cta: {
      h:    "Interested in Our <em>Products?</em>",
      p:    "Our team of experts are ready to answer your questions about IOL specifications, pricing, and surgical compatibility.",
      btns: [
        { href: "../Pages/contactUs.html",      label: "Contact Us",       cls: "btn-p", icon: "fa-envelope"   },
        { href: "../Pages/iol-page.html",       label: "Browse Products",  cls: "btn-g", icon: "fa-eye"        },
        { href: "../Pages/toricCalculator.html",label: "Toric Calculator", cls: "btn-o", icon: "fa-calculator" },
      ],
    },

    footer: {
      tagline: "Premium ophthalmic products — IOLs, surgical blades, and pharma — crafted in Chennai for surgeons worldwide.",
      socials: [
        { href: "#", icon: "fa-brands fa-linkedin-in", label: "LinkedIn"  },
        { href: "#", icon: "fa-brands fa-instagram",   label: "Instagram" },
        { href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
      ],
      quickLinks: [
        { label: "Home",             href: "../Pages/index.html"           },
        { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html"  },
        { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html"  },
        { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html"         },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html" },
        { label: "About Us",          href: "../Pages/aboutUs.html"        },
        { label: "Contact Us",       href: "../Pages/contactUs.html"       },
      ],
      products: [
        { label: "Nano Claro",      href: "../Pages/nanoClaro.html"  },
        { label: "Nano Grand",      href: "../Pages/nanoGrand.html"  },
        { label: "Nano Fold",       href: "../Pages/nanoFold.html"   },
        { label: "Nano Flex",       href: "../Pages/nanoFlex.html"   },
        { label: "Keratome Blades", href: "../Pages/keratome.html"   },
        { label: "Crescent Blades", href: "../Pages/crescent.html"   },
        { label: "MVR Blades",      href: "../Pages/mvrBlade.html"   },
      ],
      contact: {
        address: "Chennai, Tamil Nadu, India — PIN 600001",
        phone:   "+91 98765 43210",
        email:   "info@worldvisionophthalmic.com",
        hours:   "Mon–Sat, 9AM–6PM IST",
      },
    },
  };

  /* ── Meta ──────────────────────────────────────────── */
  document.title = "Gallery — World Vision Ophthalmic";
  const galMeta = qs("pageMeta");
  if (galMeta) galMeta.setAttribute("content", "Explore World Vision Ophthalmic's full IOL and surgical product gallery — hydrophobic, hydrophilic, PMMA, and micro-surgical instruments.");

  /* ── Breadcrumb ────────────────────────────────────── */
  const galBc = qs("breadcrumb");
  if (galBc) galBc.innerHTML = `<a href="../Pages/index.html">Home</a><span class="sep">/</span><span class="current">Gallery</span>`;

  /* ── Hero ──────────────────────────────────────────── */
  const galEy = qs("galHeroEyebrow");
  if (galEy) galEy.innerHTML = `<i class="fa-solid fa-images"></i>${GAL.eyebrow}`;

  const galH1 = qs("galHeroH1");
  if (galH1) galH1.innerHTML = GAL.h1;

  const galDes = qs("galHeroDesc");
  if (galDes) galDes.textContent = GAL.desc;

  const galSt = qs("galStats");
  if (galSt) galSt.innerHTML = GAL.stats.map(s =>
    `<div class="gal-stat">
      <div class="gal-stat-num">${s.num}</div>
      <div class="gal-stat-lbl">${s.lbl}</div>
    </div>`
  ).join("");

  /* ── Filter Bar ────────────────────────────────────── */
  let activeFilter = "all";

  const filterBar = qs("galFilterBar");
  if (filterBar) {
    filterBar.innerHTML = GAL.filters.map(f =>
      `<button type="button"
               class="gal-filter-btn${f.key === "all" ? " active" : ""}"
               data-filter="${f.key}"
               role="tab"
               aria-selected="${f.key === "all" ? "true" : "false"}">
        <i class="fa-solid ${f.icon}"></i>${f.label}
      </button>`
    ).join("");

    filterBar.querySelectorAll(".gal-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        filterBar.querySelectorAll(".gal-filter-btn").forEach(b => {
          b.classList.toggle("active", b.dataset.filter === activeFilter);
          b.setAttribute("aria-selected", b.dataset.filter === activeFilter ? "true" : "false");
        });
        filterItems();

        // Scroll so the gallery starts immediately below the sticky filter
        const gallery = document.querySelector(".gal-grid-section");
        const filterWrap = document.querySelector(".gal-filter-wrap");
        const navbar = document.querySelector("header");

        const navH = navbar ? navbar.offsetHeight : 0;
        const filterH = filterWrap ? filterWrap.offsetHeight : 0;

        if (gallery) {
          const galleryTop = gallery.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: galleryTop - navH - filterH,
            behavior: "smooth"
          });
        }
      });
    });
  }

  /* ── Masonry Grid ──────────────────────────────────── */
  const masonry = qs("galMasonry");
  const countEl = qs("galFilterCount");

  function renderMasonry() {
    if (!masonry) return;
    masonry.innerHTML = GAL.items.map((item, idx) => {
      const meta = GAL.catMeta[item.cat];
      return `
        <div class="gal-item${item.variant ? " " + item.variant : ""}" data-cat="${item.cat}" data-idx="${idx}" style="animation-delay:${(idx % 12) * 0.045}s">
          <img src="${item.src}" alt="${item.label}" loading="lazy" decoding="async"/>
          <div class="gal-item-overlay">
            <span class="gal-item-cat-tag" style="background:${meta.bg}">${meta.label}</span>
            <span class="gal-item-label">${item.label}</span>
          </div>
          <div class="gal-item-zoom-ico"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
        </div>`;
    }).join("");

    masonry.querySelectorAll(".gal-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.dataset.idx, 10);
        openLightbox(idx);
      });
    });

    updateCount();
  }

  function filterItems() {
    if (!masonry) return;
    masonry.querySelectorAll(".gal-item").forEach(el => {
      const matches = activeFilter === "all" || el.dataset.cat === activeFilter;
      if (matches) {
        el.classList.remove("gal-hidden");
        el.classList.add("gal-fade-in");
        setTimeout(() => el.classList.remove("gal-fade-in"), 400);
      } else {
        el.classList.add("gal-hidden");
        el.classList.remove("gal-fade-in");
      }
    });
    updateCount();
  }

  function updateCount() {
    if (!countEl) return;
    const total   = GAL.items.length;
    const visible = activeFilter === "all"
      ? total
      : GAL.items.filter(i => i.cat === activeFilter).length;
    countEl.textContent = `${visible} of ${total} items`;
  }

  renderMasonry();

  /* ── Lightbox ──────────────────────────────────────── */
  const lb     = qs("galLightbox");
  const lbImg  = qs("galLbImg");
  const lbTitle= qs("galLbTitle");
  const lbCat  = qs("galLbCat");
  const lbCnt  = qs("galLbCount");
  const lbThumbs = qs("galLbThumbs");
  const lbClose  = qs("galLbClose");
  const lbPrev   = qs("galLbPrev");
  const lbNext   = qs("galLbNext");
  const lbBack   = qs("galLbBackdrop");

  let lbIndex = 0;
  let lbList  = GAL.items; // current filtered list

  function getFilteredItems() {
    return activeFilter === "all"
      ? GAL.items.map((it, i) => ({ ...it, origIdx: i }))
      : GAL.items.map((it, i) => ({ ...it, origIdx: i })).filter(it => it.cat === activeFilter);
  }

  function openLightbox(origIdx) {
    lbList = getFilteredItems();
    const pos = lbList.findIndex(i => i.origIdx === origIdx);
    lbIndex = pos >= 0 ? pos : 0;
    renderLbThumbs();
    showLbItem(lbIndex);
    if (!lb) return;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderLbThumbs() {
    if (!lbThumbs) return;
    lbThumbs.innerHTML = lbList.map((item, i) =>
      `<div class="gal-lb-thumb${i === lbIndex ? " active" : ""}" data-pos="${i}">
        <img src="${item.src}" alt="${item.label}" loading="lazy" decoding="async"/>
      </div>`
    ).join("");

    lbThumbs.querySelectorAll(".gal-lb-thumb").forEach(t => {
      t.addEventListener("click", () => {
        lbIndex = parseInt(t.dataset.pos, 10);
        showLbItem(lbIndex);
        syncThumbs();
      });
    });
  }

  function showLbItem(pos) {
    const item = lbList[pos];
    if (!item || !lbImg) return;
    lbImg.classList.add("gal-lb-loading");
    lbImg.src = item.src;
    lbImg.alt = item.label;
    lbImg.onload = () => lbImg.classList.remove("gal-lb-loading");
    if (lbTitle) lbTitle.textContent = item.label;
    const meta = GAL.catMeta[item.cat];
    if (lbCat)  { lbCat.textContent = meta.label; lbCat.style.background = meta.bg; lbCat.style.color = "#fff"; }
    if (lbCnt)  lbCnt.textContent = `${pos + 1} / ${lbList.length}`;
    syncThumbs();
  }

  function syncThumbs() {
    if (!lbThumbs) return;
    lbThumbs.querySelectorAll(".gal-lb-thumb").forEach((t, i) => {
      t.classList.toggle("active", i === lbIndex);
    });
    const active = lbThumbs.querySelector(".gal-lb-thumb.active");
    if (active) active.scrollIntoView({ inline: "center", behavior: "smooth" });
  }

  function lbStep(dir) {
    lbIndex = (lbIndex + dir + lbList.length) % lbList.length;
    showLbItem(lbIndex);
  }

  if (lbClose)  lbClose.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); closeLightbox(); });
  if (lbBack)   lbBack.addEventListener("click", e => { e.preventDefault(); closeLightbox(); });
  if (lbPrev)   lbPrev.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); lbStep(-1); });
  if (lbNext)   lbNext.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); lbStep(1); });

  document.addEventListener("keydown", e => {
    if (!lb || !lb.classList.contains("open")) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   lbStep(-1);
    if (e.key === "ArrowRight")  lbStep(1);
  });

  /* ── CTA ────────────────────────────────────────────── */
  const ctaH = qs("galCtaH");   if (ctaH) ctaH.innerHTML   = GAL.cta.h;
  const ctaP = qs("galCtaP");   if (ctaP) ctaP.textContent = GAL.cta.p;
  const ctaB = qs("galCtaBtns");
  if (ctaB) ctaB.innerHTML = GAL.cta.btns.map(b =>
    `<a href="${b.href}" class="${b.cls}"><i class="fa-solid ${b.icon}"></i>${b.label}</a>`
  ).join("");

  /* ── Footer ─────────────────────────────────────────── */
  const fb = qs("auFooterBody");
  if (fb) fb.innerHTML = `
    <div class="au-footer-brand-col">
      <div class="au-footer-brand-header">
        <img src="${PAGE.company.logo}" alt="World Vision Logo"/>
        <div>
          <div class="au-footer-brand-name">${PAGE.company.name}</div>
          <div class="au-footer-brand-sub">${PAGE.company.subtitle}</div>
        </div>
      </div>
      <p class="au-footer-tagline">${GAL.footer.tagline}</p>
      <div class="au-footer-socials">
        ${GAL.footer.socials.map(s =>
          `<a href="${s.href}" class="au-footer-social" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank"' : ""}>
            <i class="${s.icon}"></i>
          </a>`
        ).join("")}
      </div>
    </div>
    <div class="au-footer-links-col">
      <h4>Quick Links</h4>
      <div class="au-footer-links-grid">
        ${GAL.footer.quickLinks.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
      <h4 style="margin-top:24px;">Products</h4>
      <div class="au-footer-links-grid">
        ${GAL.footer.products.map(l => `<a href="${l.href}" class="au-footer-link">${l.label}</a>`).join("")}
      </div>
    </div>
    <div class="au-footer-contact-col">
      <h4>Contact Us</h4>
      <div class="au-footer-contact-item"><i class="fa-solid fa-location-dot"></i><span>${GAL.footer.contact.address}</span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-phone"></i><span><a href="tel:${GAL.footer.contact.phone}">${GAL.footer.contact.phone}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-envelope"></i><span><a href="mailto:${GAL.footer.contact.email}">${GAL.footer.contact.email}</a></span></div>
      <div class="au-footer-contact-item"><i class="fa-solid fa-clock"></i><span>${GAL.footer.contact.hours}</span></div>
    </div>`;

  const fc = qs("auFooterBottom");
  if (fc) fc.textContent = PAGE.company.copyright;

  const waF = qs("waFloat");
  if (waF) waF.href = PAGE.company.whatsapp;

  /* ── GSAP Scroll Animations ──────────────────────── */
  (function () {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Initial page-load entrance
    gsap.from(".gal-hero-inner", {
      y: 40, opacity: 0, duration: 1.0, ease: "expo.out", delay: 0.15
    });
    gsap.from(".gal-filter-wrap", {
      y: 20, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.4
    });

    // Scroll-driven zoom: pin hero, scale the title up while the rest fades,
    // then release into the filter bar + gallery grid.
    const galHeroZoom = gsap.timeline({
      scrollTrigger: {
        trigger: ".gal-hero",
        start: "top top",
        end: "+=80%",          // ← matches hero height → gallery lands at top:0
        pin: true,
        pinSpacing: false,      // ← gallery slides up BEHIND opaque hero, hidden
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    galHeroZoom
      // Supporting elements clear out early
      .to(".gal-eyebrow",       { y: -20, opacity: 0, ease: "power2.in", duration: 0.20 }, 0)
      .to(".gal-desc",          { y:  20, opacity: 0, ease: "power2.in", duration: 0.20 }, 0)
      .to(".gal-stats-row",     { y:  30, opacity: 0, ease: "power2.in", duration: 0.20 }, 0)
      .to(".gal-hero-bg-rings", { opacity: 0,        ease: "power2.in", duration: 0.20 }, 0)

      // Title zooms across most of the timeline
      .to(".gal-h1", {
        scale: 2.6,
        transformOrigin: "50% 50%",
        ease: "power1.inOut",
        duration: 0.80
      }, 0)

      // Hero curtains away at the very end
      .to(".gal-h1",   { opacity: 0, ease: "power2.in", duration: 0.18 }, 0.82)
      .to(".gal-hero", { 
        opacity: 0, 
        pointerEvents: "none",
        ease: "power2.in", 
        duration: 0.18 
      }, 0.82);

    // Filter bar fades in as hero clears (separate trigger — independent of scrub)
    ScrollTrigger.create({
      trigger: ".gal-hero",
      start: "bottom 80%",
      onEnter() {
        gsap.to(".gal-filter-wrap", {
          opacity: 1, duration: 0.5, ease: "power2.out"
        });
      }
    });

    // Cards rise from below with stagger — the main event
    ScrollTrigger.create({
      trigger: ".gal-masonry",
      start: "top 85%",
      onEnter() {
        gsap.to(".gal-item", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: {
            each: 0.06,
            from: "start",
            grid: "auto"
          }
        });
      }
    });

    // Set initial y position for cards so they rise from below
    gsap.set(".gal-item", { y: 50 });

    document.querySelectorAll(".reveal-section").forEach(el => {
      gsap.from(el, {
        y: 44, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
      });
    });
  })();
}
