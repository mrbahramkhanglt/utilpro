/**
 * UtilPro — SEO + AEO (Answer Engine Optimization) System
 * Injects: JSON-LD Schema, FAQ, HowTo, BreadcrumbList, WebApplication
 * Targets: Google, Bing, ChatGPT, Perplexity, Google AI Overviews
 */

const SEO_BASE = {
  siteName: 'UtilPro',
  url: 'https://utilpro.netlify.app',
  vercelUrl: 'https://utilpro.vercel.app',
  logo: 'https://utilpro.netlify.app/logo.png',
  locale: 'en_US',
  twitter: '@UtilProTools',
};

/* ── PAGE DEFINITIONS ────────────────────────────────
   Each page gets: title, description, keywords, schema type, FAQ, HowTo
─────────────────────────────────────────────────────── */
const PAGE_SEO = {
  'index': {
    title: 'UtilPro — Free Online Tools, Calculators & Guides | 100% Free',
    desc: 'Free online calculators, PDF tools, converters and expert guides. Age Calculator, EMI Calculator, PDF to Excel, Currency Converter, Password Generator. No signup needed.',
    keywords: 'free online tools, calculators, pdf tools, age calculator, emi calculator, currency converter, password generator, unit converter',
    schema: 'WebSite',
    faqs: [
      { q: 'What tools does UtilPro offer?', a: 'UtilPro offers 10+ free tools including Age Calculator, EMI/Loan Calculator, BMI Calculator, PDF to Excel, PDF to Word, Password Generator, Currency Converter, Unit Converter, Time Zone Converter, and Date Difference Calculator.' },
      { q: 'Is UtilPro completely free?', a: 'Yes, all tools on UtilPro are 100% free. No signup, no login, and no credit card required.' },
      { q: 'Do I need to create an account?', a: 'No. UtilPro requires no registration or login. All tools work instantly in your browser.' },
      { q: 'Does UtilPro work on mobile phones?', a: 'Yes, UtilPro is fully mobile-responsive and works on all smartphones, tablets, and desktop computers.' },
      { q: 'Is my data safe when using UtilPro?', a: 'Yes. All calculations happen in your browser. For PDF tools, files are processed locally and never uploaded to any server.' },
    ],
  },
  'tools/age-calculator': {
    title: 'Age Calculator — Calculate Exact Age in Years, Months, Days | UtilPro',
    desc: 'Free online age calculator. Find your exact age in years, months, weeks, and days. Calculate age from date of birth instantly. No signup required.',
    keywords: 'age calculator, calculate age, age from date of birth, how old am i, exact age calculator, age in years months days',
    schema: 'WebApplication',
    faqs: [
      { q: 'How do I calculate my exact age?', a: 'Enter your date of birth in the Age Calculator. It instantly shows your exact age in years, months, weeks, and days as of today.' },
      { q: 'Can I calculate age for a future date?', a: 'Yes, you can set any target date to calculate how old you will be on that date.' },
      { q: 'How is age calculated in years, months and days?', a: 'Age is calculated by finding the difference between your birth date and today\'s date, accounting for leap years and varying month lengths.' },
    ],
    howto: {
      name: 'How to Calculate Your Exact Age',
      steps: [
        { name: 'Enter Date of Birth', text: 'Click the date field and enter your birth date (day, month, year).' },
        { name: 'Set Target Date', text: 'By default it uses today. Optionally change to any future or past date.' },
        { name: 'Click Calculate', text: 'Press the Calculate button to instantly see your age in years, months, weeks, and days.' },
      ]
    }
  },
  'tools/emi-calculator': {
    title: 'Loan EMI Calculator — Monthly Payment Calculator | UtilPro',
    desc: 'Free EMI calculator for home loans, car loans, personal loans. Calculate monthly installment, total interest, amortization schedule. Supports PKR and all currencies.',
    keywords: 'emi calculator, loan calculator, monthly installment calculator, home loan emi, car loan calculator, mortgage calculator pakistan',
    schema: 'WebApplication',
    faqs: [
      { q: 'What is EMI?', a: 'EMI (Equated Monthly Installment) is the fixed monthly payment made to repay a loan. It includes both principal and interest components.' },
      { q: 'How to calculate EMI?', a: 'EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal loan amount, R is monthly interest rate, and N is number of monthly installments.' },
      { q: 'What is a good EMI to salary ratio?', a: 'Financial experts recommend keeping your total EMI payments below 40-50% of your monthly income for financial stability.' },
      { q: 'Can I prepay my loan?', a: 'Yes, most loans allow prepayment. Use the calculator to see how prepayments reduce total interest paid.' },
    ],
    howto: {
      name: 'How to Calculate Loan EMI',
      steps: [
        { name: 'Enter Loan Amount', text: 'Input the total loan amount in your currency (e.g., Rs. 1,000,000).' },
        { name: 'Set Interest Rate', text: 'Enter the annual interest rate offered by your bank (e.g., 12%).' },
        { name: 'Enter Loan Term', text: 'Specify the loan duration in months or years (e.g., 5 years = 60 months).' },
        { name: 'View Results', text: 'Instantly see monthly EMI, total interest payable, and complete amortization schedule.' },
      ]
    }
  },
  'tools/bmi-calculator': {
    title: 'BMI Calculator — Body Mass Index Calculator | UtilPro',
    desc: 'Free BMI calculator. Calculate your Body Mass Index (BMI) using metric or imperial units. Check if you are underweight, normal weight, overweight, or obese.',
    keywords: 'bmi calculator, body mass index, calculate bmi, bmi chart, healthy bmi range, bmi metric imperial',
    schema: 'WebApplication',
    faqs: [
      { q: 'What is a healthy BMI range?', a: 'A BMI between 18.5 and 24.9 is considered healthy. BMI under 18.5 is underweight, 25-29.9 is overweight, and 30 or above is obese.' },
      { q: 'How is BMI calculated?', a: 'BMI = weight (kg) ÷ height² (m²). For imperial: BMI = 703 × weight (lbs) ÷ height² (inches²).' },
      { q: 'Is BMI accurate for everyone?', a: 'BMI is a general screening tool but does not account for muscle mass, age, gender, or ethnicity. Athletes may have high BMI despite being healthy.' },
    ],
    howto: {
      name: 'How to Calculate Your BMI',
      steps: [
        { name: 'Choose Units', text: 'Select metric (kg/cm) or imperial (lbs/inches).' },
        { name: 'Enter Weight', text: 'Input your current weight in kilograms or pounds.' },
        { name: 'Enter Height', text: 'Input your height in centimeters or feet and inches.' },
        { name: 'Calculate', text: 'Press Calculate to see your BMI value and which category you fall into.' },
      ]
    }
  },
  'tools/pdf-tools': {
    title: 'Free PDF Tools — Convert, Merge, Compress PDF Online | UtilPro',
    desc: '20+ free PDF tools: PDF to Excel, PDF to Word, PDF to JPG, Merge PDF, Split PDF, Compress PDF, Rotate, Watermark, Protect PDF. No upload, works in browser.',
    keywords: 'pdf to excel, pdf to word, pdf to jpg, merge pdf, split pdf, compress pdf, free pdf tools online, convert pdf',
    schema: 'WebApplication',
    faqs: [
      { q: 'How to convert PDF to Excel for free?', a: 'Upload your PDF to UtilPro\'s PDF to Excel tool. It extracts tables and text and converts them to a downloadable .xlsx file. Completely free, no signup needed.' },
      { q: 'Is it safe to convert PDF files online?', a: 'Yes. UtilPro processes all PDF files locally in your browser using PDF.js and SheetJS. Your files are never uploaded to any server.' },
      { q: 'How to compress a PDF file?', a: 'Go to Compress PDF tool, upload your PDF, select compression level (Low/Medium/High), and download the compressed file. Reduces size by up to 80%.' },
      { q: 'Can I merge multiple PDF files?', a: 'Yes. Use the Merge PDF tool, upload multiple PDF files, arrange them in order, and download the combined PDF.' },
      { q: 'How to convert PDF to Word?', a: 'Upload PDF to the PDF to Word tool. It extracts text and formatting and creates a downloadable .docx file you can edit in Microsoft Word.' },
    ],
    howto: {
      name: 'How to Convert PDF to Excel',
      steps: [
        { name: 'Open PDF to Excel Tool', text: 'Go to UtilPro PDF Tools and click "PDF to Excel" in the sidebar.' },
        { name: 'Upload PDF File', text: 'Click "Browse Files" or drag and drop your PDF file containing tables.' },
        { name: 'Select Options', text: 'Choose table detection mode (Auto Detect) and page mapping (All in one sheet).' },
        { name: 'Convert', text: 'Click "Convert to Excel" button. The conversion happens in your browser.' },
        { name: 'Download', text: 'Download the .xlsx Excel file. Open in Microsoft Excel or Google Sheets.' },
      ]
    }
  },
  'tools/currency-converter': {
    title: 'Currency Converter — PKR to USD, EUR, GBP Live Rates | UtilPro',
    desc: 'Free currency converter with live exchange rates. Convert Pakistani Rupee (PKR) to USD, EUR, GBP, SAR, AED, CAD and 16+ currencies. Updated daily.',
    keywords: 'currency converter, pkr to usd, dollar to rupee, pakistan currency converter, exchange rate today, rupee to dollar',
    schema: 'WebApplication',
    faqs: [
      { q: 'What is today\'s dollar rate in Pakistan?', a: 'Use UtilPro\'s Currency Converter to see the current USD to PKR exchange rate. Rates are updated regularly.' },
      { q: 'How many rupees is 1 US Dollar?', a: 'The USD to PKR rate fluctuates daily. Check UtilPro\'s Currency Converter for the current live rate.' },
      { q: 'Which currencies does UtilPro support?', a: 'UtilPro supports 16+ currencies including USD, EUR, GBP, PKR, SAR, AED, CAD, AUD, JPY, INR, CNY, and more.' },
    ],
  },
  'tools/password-generator': {
    title: 'Password Generator — Create Strong Random Passwords | UtilPro',
    desc: 'Generate strong, secure random passwords online. Customize length, uppercase, lowercase, numbers, symbols. Free password strength checker included.',
    keywords: 'password generator, strong password generator, random password, secure password creator, password strength checker',
    schema: 'WebApplication',
    faqs: [
      { q: 'How to create a strong password?', a: 'A strong password should be at least 12 characters long and include uppercase letters, lowercase letters, numbers, and special symbols. Use UtilPro\'s Password Generator to create one instantly.' },
      { q: 'What makes a password secure?', a: 'Password security depends on length, complexity, and randomness. Avoid dictionary words, personal information, and sequential patterns.' },
      { q: 'Are generated passwords saved anywhere?', a: 'No. UtilPro generates passwords entirely in your browser. No passwords are stored or transmitted.' },
    ],
  },
  'tools/unit-converter': {
    title: 'Unit Converter — Convert Length, Weight, Temperature, Speed | UtilPro',
    desc: 'Free unit converter for length, weight, temperature, volume, speed, and area. Convert km to miles, kg to lbs, Celsius to Fahrenheit and 100+ units instantly.',
    keywords: 'unit converter, length converter, weight converter, temperature converter, km to miles, kg to lbs, celsius to fahrenheit',
    schema: 'WebApplication',
    faqs: [
      { q: 'How many kilometers in a mile?', a: '1 mile = 1.60934 kilometers. Use UtilPro\'s Unit Converter to convert any distance instantly.' },
      { q: 'How to convert Celsius to Fahrenheit?', a: 'Formula: °F = (°C × 9/5) + 32. For example, 100°C = 212°F. UtilPro\'s Unit Converter does this automatically.' },
      { q: 'How many grams in a pound?', a: '1 pound (lb) = 453.592 grams. Use UtilPro\'s Weight Converter for instant conversions.' },
    ],
  },
};

/* ── SCHEMA GENERATORS ──────────────────────────── */
function getPageKey() {
  const path = window.location.pathname
    .replace(/^\/+|\/+$/g,'')
    .replace('.html','')
    .replace('/index','');
  return path || 'index';
}

function injectSchema(schemas) {
  schemas.forEach(schema => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(schema, null, 0);
    document.head.appendChild(el);
  });
}

function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SEO_BASE.siteName,
    'url': SEO_BASE.url,
    'description': 'Free online tools, calculators and expert guides for everyday problems.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': { '@type': 'EntryPoint', 'urlTemplate': `${SEO_BASE.url}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'UtilPro',
      'url': SEO_BASE.url,
      'logo': { '@type': 'ImageObject', 'url': `${SEO_BASE.url}/logo.png` }
    }
  };
}

function buildOrgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'UtilPro',
    'url': SEO_BASE.url,
    'sameAs': [SEO_BASE.vercelUrl, 'https://utilpro.netlify.app'],
    'description': 'Free online utilities, tools and guides',
    'foundingDate': '2026',
    'areaServed': 'Worldwide',
    'serviceType': 'Free Online Tools'
  };
}

function buildWebAppSchema(title, desc, pageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': title,
    'url': pageUrl,
    'description': desc,
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'browserRequirements': 'Requires JavaScript',
    'isAccessibleForFree': true,
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
    'provider': { '@type': 'Organization', 'name': 'UtilPro', 'url': SEO_BASE.url }
  };
}

function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': faq.a }
    }))
  };
}

function buildHowToSchema(howto, pageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': howto.name,
    'url': pageUrl,
    'step': howto.steps.map((s, i) => ({
      '@type': 'HowToStep',
      'position': i + 1,
      'name': s.name,
      'text': s.text
    }))
  };
}

function buildBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

/* ── UPDATE META TAGS ──────────────────────────── */
function updateMeta(name, content, prop = false) {
  if (!content) return;
  const attr = prop ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function updateCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

function updateTitle(title) {
  document.title = title;
  let el = document.querySelector('meta[property="og:title"]');
  if (!el) { el=document.createElement('meta'); el.setAttribute('property','og:title'); document.head.appendChild(el); }
  el.content = title;
}

/* ── AEO: SPEAKABLE SCHEMA ─────────────────────── */
function buildSpeakableSchema(pageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'url': pageUrl,
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.hero-title', '.result-box', '.faq-answer']
    }
  };
}

/* ── AEO: ITEM LIST FOR TOOLS ──────────────────── */
function buildToolsListSchema() {
  const tools = [
    { name: 'Age Calculator', url: '/tools/age-calculator.html', desc: 'Calculate exact age in years, months, days' },
    { name: 'EMI Loan Calculator', url: '/tools/emi-calculator.html', desc: 'Calculate monthly loan EMI and amortization' },
    { name: 'BMI Calculator', url: '/tools/bmi-calculator.html', desc: 'Body Mass Index calculator metric and imperial' },
    { name: 'PDF to Excel Converter', url: '/tools/pdf-tools.html', desc: 'Convert PDF tables to Excel spreadsheet' },
    { name: 'Password Generator', url: '/tools/password-generator.html', desc: 'Generate strong secure random passwords' },
    { name: 'Currency Converter', url: '/tools/currency-converter.html', desc: 'Convert currencies with live exchange rates' },
    { name: 'Unit Converter', url: '/tools/unit-converter.html', desc: 'Convert length weight temperature and more' },
    { name: 'PDF to Word Converter', url: '/tools/pdf-tools.html', desc: 'Convert PDF to editable Word document' },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Free Online Tools by UtilPro',
    'description': 'Complete list of free online tools available at UtilPro',
    'numberOfItems': tools.length,
    'itemListElement': tools.map((t, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': t.name,
      'url': SEO_BASE.url + t.url,
      'description': t.desc
    }))
  };
}

/* ── MAIN INIT ────────────────────────────────── */
function initSEOAEO() {
  const pageKey = getPageKey();
  const pageData = PAGE_SEO[pageKey] || PAGE_SEO['index'];
  const pageUrl  = SEO_BASE.url + '/' + (pageKey === 'index' ? '' : pageKey + '.html');

  // Update document title and meta
  if (pageData.title)    updateTitle(pageData.title);
  if (pageData.desc)     updateMeta('description', pageData.desc);
  if (pageData.keywords) updateMeta('keywords', pageData.keywords);

  // Open Graph
  updateMeta('og:title',       pageData.title,       true);
  updateMeta('og:description', pageData.desc,         true);
  updateMeta('og:url',         pageUrl,               true);
  updateMeta('og:type',        'website',             true);
  updateMeta('og:site_name',   'UtilPro',             true);
  updateMeta('og:image',       `${SEO_BASE.url}/og-image.png`, true);
  updateMeta('og:locale',      'en_US',               true);

  // Twitter Cards
  updateMeta('twitter:card',        'summary_large_image');
  updateMeta('twitter:title',       pageData.title);
  updateMeta('twitter:description', pageData.desc);
  updateMeta('twitter:image',       `${SEO_BASE.url}/og-image.png`);
  updateMeta('twitter:site',        '@UtilProTools');

  // Additional SEO meta
  updateMeta('robots',        'index, follow, max-snippet:-1, max-image-preview:large');
  updateMeta('author',        'UtilPro');
  updateMeta('theme-color',   '#1a73e8');
  updateMeta('rating',        'general');
  updateMeta('language',      'English');

  // Canonical
  updateCanonical(pageUrl);

  // ── SCHEMA.ORG JSON-LD ──────────────────────────
  const schemas = [];

  // WebSite schema (homepage only)
  if (pageKey === 'index') {
    schemas.push(buildWebSiteSchema());
    schemas.push(buildOrgSchema());
    schemas.push(buildToolsListSchema());
    schemas.push(buildBreadcrumbSchema([
      { name: 'Home', url: SEO_BASE.url }
    ]));
  }

  // WebApplication schema
  if (pageData.schema === 'WebApplication') {
    schemas.push(buildWebAppSchema(pageData.title, pageData.desc, pageUrl));
    schemas.push(buildBreadcrumbSchema([
      { name: 'Home', url: SEO_BASE.url },
      { name: 'Tools', url: `${SEO_BASE.url}/tools/` },
      { name: pageData.title.split('—')[0].trim(), url: pageUrl }
    ]));
  }

  // FAQ Schema (AEO)
  if (pageData.faqs && pageData.faqs.length) {
    schemas.push(buildFAQSchema(pageData.faqs));
  }

  // HowTo Schema (AEO)
  if (pageData.howto) {
    schemas.push(buildHowToSchema(pageData.howto, pageUrl));
  }

  // Speakable (AEO - for voice assistants)
  schemas.push(buildSpeakableSchema(pageUrl));

  // Inject all schemas
  injectSchema(schemas);

  // ── AEO: Add FAQ HTML to page if no FAQ exists ──
  if (pageData.faqs && !document.querySelector('.faq-section')) {
    const existing = document.querySelector('.faq, #faq, .faqs');
    if (!existing && pageData.faqs.length >= 3) {
      injectFAQHTML(pageData.faqs);
    }
  }
}

function injectFAQHTML(faqs) {
  const section = document.createElement('section');
  section.className = 'faq-section';
  section.setAttribute('itemscope', '');
  section.setAttribute('itemtype', 'https://schema.org/FAQPage');
  section.style.cssText = 'max-width:860px;margin:40px auto;padding:0 20px';
  section.innerHTML = `
    <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:20px;color:var(--text-dark)">
      ❓ Frequently Asked Questions
    </h2>
    ${faqs.map(faq => `
    <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
      style="border:1px solid var(--border);border-radius:10px;margin-bottom:12px;overflow:hidden">
      <details>
        <summary itemprop="name" style="padding:14px 18px;cursor:pointer;font-weight:600;font-size:.92rem;
          list-style:none;display:flex;justify-content:space-between;align-items:center;
          background:var(--bg-light)">
          ${faq.q}
          <span style="font-size:1.1rem;flex-shrink:0;margin-left:10px">+</span>
        </summary>
        <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"
          style="padding:14px 18px;font-size:.9rem;line-height:1.7;color:var(--text-mid);
          border-top:1px solid var(--border)">
          <p itemprop="text" class="faq-answer">${faq.a}</p>
        </div>
      </details>
    </div>`).join('')}
  `;
  // Insert before footer
  const footer = document.querySelector('footer');
  if (footer) footer.parentNode.insertBefore(section, footer);
  else document.body.appendChild(section);
}

// Auto-run
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSEOAEO);
} else {
  initSEOAEO();
}
