import ProductShowcase from "@/components/product-showcase";

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Check() { return <span className="check">✓</span>; }

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand" aria-label="Ultimate Studios home">
          <span className="brand-orb"><span>U</span></span>
          <span className="brand-name">ULTIMATE <b>STUDIOS</b></span>
        </a>
        <div className="nav-links">
          <a href="#products">Products</a><a href="#why">Why Us</a><a href="#faq">FAQ</a>
        </div>
        <a href="#products" className="nav-cta">Explore <Arrow /></a>
      </nav>

      <section id="home" className="hero wrap">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-a" aria-hidden="true" /><div className="orb orb-b" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> PREMIUM MINECRAFT PLUGIN DEVELOPMENT</div>
          <h1>Make your server feel <em>ultimate.</em></h1>
          <p>Premium, performance-focused tools built for modern Minecraft servers — with clean design, practical systems, and a polished experience.</p>
          <div className="hero-actions"><a href="#products" className="button primary">Explore Products <Arrow /></a><a href="#why" className="button ghost">Why Ultimate Studios</a></div>
          <div className="proof-row"><span><Check /> Clean UI</span><span><Check /> Performance Focused</span><span><Check /> Built for Servers</span></div>
        </div>
        <div className="hero-stack" aria-hidden="true">
          <div className="floating-card fc-back"><span>SERVER</span><strong>READY</strong></div>
          <div className="floating-card fc-mid"><span>ULTIMATE</span><strong>ENGINE</strong></div>
          <div className="floating-card fc-front"><div className="mini-icon">U</div><div><small>ULTIMATE STUDIOS</small><strong>Built different.</strong></div><i>+</i></div>
        </div>
      </section>

      <section id="products" className="section wrap">
        <div className="section-head"><div><div className="eyebrow">OUR PRODUCTS</div><h2>Tools made for <em>better servers.</em></h2></div><p>Five projects in the lineup today. More are already on the way.</p></div>
        <ProductShowcase />
      </section>

      <section id="why" className="section wrap">
        <div className="center-head"><div className="eyebrow">WHY ULTIMATE STUDIOS</div><h2>Simple. Powerful. <em>Premium.</em></h2><p>Good software should look great, stay fast, and feel easy to use.</p></div>
        <div className="feature-grid">
          <article><div className="feature-icon">01</div><h3>Performance First</h3><p>Lightweight interactions and efficient frontend structure keep the experience fast on mobile and desktop.</p></article>
          <article><div className="feature-icon">02</div><h3>Premium Design</h3><p>Deep surfaces, light-blue and light-purple accents, layered depth, and subtle 3D details without visual clutter.</p></article>
          <article><div className="feature-icon">03</div><h3>Built to Scale</h3><p>The site is structured so products, client accounts, licenses, and protected downloads can be added later.</p></article>
        </div>
      </section>

      <section id="faq" className="section faq wrap"><div className="center-head"><div className="eyebrow">FAQ</div><h2>Stay in the <em>loop.</em></h2></div>
        <details><summary>Can visitors download the plugin JAR files?</summary><p>No. The public showcase does not expose plugin files. Protected client downloads can be added later with authentication and license verification.</p></details>
        <details><summary>What payment methods are planned?</summary><p>GCash, UPI, and crypto are the current planned methods. More automated options such as Stripe, PayPal, and Discord-based transaction workflows are coming soon.</p></details>
        <details><summary>Are more Ultimate products coming?</summary><p>Yes. More products are being worked on and will be announced as they become ready.</p></details>
      </section>

      <footer className="wrap footer"><div className="footer-left"><span className="brand-orb small"><span>U</span></span><div><strong>ULTIMATE STUDIOS</strong><small>Premium Minecraft Plugin Development</small></div></div><span>© 2026 Ultimate Studios</span></footer>
    </main>
  );
}
