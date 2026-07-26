// src/constants/productTemplates.js

export const PRODUCT_TEMPLATES = {
  laptop: {
    label: "💻 Laptop / Notebook",
    description: `
<h3>Ultra-Light Premium Convertible for Executives &amp; Frequent Travelers</h3>
<p>The HP Elite Dragonfly x360 redefines mobility. Weighing just under 1kg, this ultra-premium convertible is crafted from recycled ocean-bound plastics and magnesium, making it as sustainable as it is stylish. It’s the ultimate companion for C-suite executives, consultants, and professionals who live on the move.</p>
<h4>Performance &amp; Memory</h4>
<p>Powered by the <strong>11th Generation Intel Core i7</strong> processor (up to 3.0GHz), this laptop handles heavy multitasking, large spreadsheets, and virtual meetings with ease. With <strong>16GB of RAM</strong> and a <strong>512GB NVMe SSD</strong>, you get lightning-fast boot times, quick file access, and ample storage for your entire digital workspace.</p>
<h4>Display &amp; Convertible Design</h4>
<p>The <strong>14-inch Full HD touchscreen</strong> delivers crisp visuals with 400 nits of brightness, making it usable even in bright outdoor environments. The 360° hinge allows four versatile modes — laptop, tablet, tent, and stand — giving you flexibility for presentations, note-taking, or media consumption.</p>
<h4>Security &amp; Connectivity</h4>
<p>Business-grade security comes standard with an integrated fingerprint reader, HP Sure View privacy screen options, and HP Sure Start BIOS protection. It also includes <strong>Wi-Fi 6</strong> and <strong>Bluetooth 5.0</strong> for fast, stable wireless connections.</p>
<h4>Battery Life</h4>
<p>With an all-day battery that delivers up to <strong>12 hours of mixed usage</strong>, you can leave your charger behind and stay productive from morning meetings to evening flights.</p>
<h4>Best For:</h4>
<ul>
  <li>Executives</li>
  <li>Frequent travelers</li>
  <li>Remote professionals</li>
  <li>Anyone who demands premium build quality in an ultra-light package</li>
</ul>
    `,
  },
  starlink: {
    label: "🛰️ Starlink Kit",
    description: `
<h3>High‑Speed Satellite Internet – Anywhere, Anytime</h3>
<p>Starlink delivers low‑latency, high‑speed internet to even the most remote locations. Perfect for rural areas, off‑grid cabins, and mobile setups.</p>
<h4>Kit Includes</h4>
<ul>
  <li>Starlink Dish (Dishy McFlatface)</li>
  <li>Wi‑Fi Router with dual‑band support</li>
  <li>Power supply and mounting tripod</li>
  <li>75 ft cable</li>
</ul>
<h4>Performance</h4>
<p>Download speeds between <strong>50–200 Mbps</strong>, latency as low as <strong>20 ms</strong>. Weather‑resistant design works in rain, snow, and extreme heat.</p>
<h4>Easy Setup</h4>
<p>Plug in, point the dish skyward, and connect within minutes using the Starlink app. No professional installation required.</p>
    `,
  },
  cctv: {
    label: "📹 CCTV Camera Kit",
    description: `
<h3>Professional 4MP Security Camera System</h3>
<p>Protect your home or business with crystal‑clear 4MP resolution, night vision, and intelligent motion detection.</p>
<h4>Features</h4>
<ul>
  <li>4MP (2560×1440) resolution</li>
  <li>Night vision up to 30 meters</li>
  <li>IP67 weatherproof housing</li>
  <li>Two‑way audio and siren alarm</li>
  <li>MicroSD card slot (up to 256GB)</li>
</ul>
<h4>Smart Detection</h4>
<p>AI‑powered human/vehicle detection reduces false alerts. Receive real‑time notifications on your phone.</p>
<h4>Easy Integration</h4>
<p>Works with Alexa, Google Home, and ONVIF‑compatible NVRs. View live footage from anywhere via the mobile app.</p>
    `,
  },
  // Add more templates as needed
};

// Helper to get template by key
export const getTemplate = (key) => PRODUCT_TEMPLATES[key]?.description || "";
