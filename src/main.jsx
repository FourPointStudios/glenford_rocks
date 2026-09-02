import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown,
  ArrowRight,
  Hammer,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Trees,
  X,
} from 'lucide-react'
import './styles.css'

const collections = [
  {
    id: 'benches',
    title: 'Benches',
    image: '/images/bluestone-benches.jpeg',
    alt: 'A group of one-of-a-kind bluestone benches arranged at the quarry',
    description: 'Natural-edged slabs become enduring seats for gardens, patios and gathering places.',
  },
  {
    id: 'chairs',
    title: 'Chairs',
    image: '/images/bluestone-chair.jpg',
    alt: 'A sculptural bluestone chair with a dark metal support frame',
    description: 'Individual stone profiles shape chairs with the presence of small-scale sculpture.',
  },
  {
    id: 'tables',
    title: 'Tables',
    image: '/images/bluestone-table.jpg',
    alt: 'A large bluestone outdoor table with a hand-built metal base',
    description: 'Substantial stone surfaces paired with handmade bases for outdoor dining and conversation.',
  },
  {
    id: 'firepits',
    title: 'Firepits',
    image: '/images/bluestone-firepit.jpg',
    alt: 'A circular outdoor firepit on a geometric dark metal stand',
    description: 'Outdoor gathering pieces that bring stone, steel and fire into one functional form.',
  },
]

const faqs = [
  {
    question: 'Is Glenford Rocks furniture custom made?',
    answer: 'Yes. Each piece responds to the natural shape, edge and character of its bluestone slab, so no two pieces are exactly alike.',
  },
  {
    question: 'What types of bluestone furniture are available?',
    answer: 'The work includes outdoor benches, chairs, tables, firepits and sculptural pieces made from Hudson Valley bluestone.',
  },
  {
    question: 'Where is Glenford Rocks located?',
    answer: 'Glenford Rocks is based in Glenford, New York, in the Hudson Valley.',
  },
  {
    question: 'How do I discuss a custom piece?',
    answer: 'Email Glenford Rocks with the type of piece, intended location and approximate size. Delivery and site requirements can then be discussed directly.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Glenford Rocks home" onClick={closeMenu}>
          <span className="brand-name">Glenford Rocks</span>
          <span className="brand-line">Hudson Valley bluestone</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} id="primary-navigation" aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Furniture</a>
          <a href="#story" onClick={closeMenu}>The quarry</a>
          <a href="#process" onClick={closeMenu}>Commissions</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-overlay" />
          <div className="hero-content page-shell">
            <p className="eyebrow">Made in Glenford, New York</p>
            <h1 id="hero-title">Custom Bluestone Furniture</h1>
            <p className="hero-lede">One-of-a-kind benches, chairs, tables and firepits shaped from Hudson Valley stone. Functional art with the durability of the landscape.</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#work">Explore the work <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="button button-ghost" href="mailto:glenfordsales@hotmail.com?subject=Glenford%20Rocks%20commission%20inquiry">Discuss a commission</a>
            </div>
          </div>
          <p className="hero-caption">A working quarry landscape in the Hudson Valley</p>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-title">
          <div className="page-shell manifesto-grid">
            <p className="section-kicker">A new world of functional art</p>
            <div>
              <h2 id="manifesto-title">Raw stone. Considered form. Made to belong outdoors.</h2>
              <p>Glenford Rocks brings the character of local bluestone into furniture that is useful, sculptural and inseparable from the material it came from.</p>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">The work</p>
                <h2 id="work-title">Furniture drawn from the stone itself.</h2>
              </div>
              <p>Every slab brings its own edge, color and history. The design responds to that material instead of forcing it into a factory-perfect shape.</p>
            </div>

            <div className="collection-grid">
              {collections.map((collection, index) => (
                <article className={`collection collection-${index + 1}`} id={collection.id} key={collection.id}>
                  <img src={collection.image} alt={collection.alt} loading={index > 1 ? 'lazy' : 'eager'} />
                  <div className="collection-copy">
                    <span className="collection-number">0{index + 1}</span>
                    <h3>{collection.title}</h3>
                    <p>{collection.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story" id="story" aria-labelledby="story-title">
          <div className="story-image" role="img" aria-label="Historic photograph of a Hudson Valley bluestone quarry" />
          <div className="story-copy">
            <p className="section-kicker">Twelve acres and a former bluestone quarry</p>
            <h2 id="story-title">More than a workshop.</h2>
            <p>Glenford Rocks began as both a range of outdoor furnishings and a vision for a future earth-sculpture park: a working landscape where local quarry history, functional art and the land itself meet.</p>
            <p>The long view is a place where visitors can encounter sculpture, learn about the region's bluestone history and see new work emerge from the quarry.</p>
            <img
              className="legacy-artwork"
              src="/images/original-stone-background.jpg"
              alt="Original Glenford Rocks wordmark over a wall of stacked local bluestone"
              loading="lazy"
            />
            <div className="story-facts" aria-label="Glenford Rocks facts">
              <span><Mountain size={20} aria-hidden="true" /> Hudson Valley bluestone</span>
              <span><MapPin size={20} aria-hidden="true" /> Glenford, New York</span>
              <span><Trees size={20} aria-hidden="true" /> Future sculpture landscape</span>
            </div>
          </div>
        </section>

        <section className="process section-pad" id="process" aria-labelledby="process-title">
          <div className="page-shell">
            <div className="section-heading compact-heading">
              <div>
                <p className="section-kicker">Commissioning a piece</p>
                <h2 id="process-title">Start with the place it will live.</h2>
              </div>
              <p>A useful first conversation covers the setting, the kind of piece you have in mind and any practical delivery considerations.</p>
            </div>
            <ol className="process-grid">
              <li>
                <span className="process-icon"><Mail size={22} aria-hidden="true" /></span>
                <span className="process-step">Step 1</span>
                <h3>Share the idea</h3>
                <p>Describe the location, purpose and approximate size of the piece.</p>
              </li>
              <li>
                <span className="process-icon"><Mountain size={22} aria-hidden="true" /></span>
                <span className="process-step">Step 2</span>
                <h3>Choose the stone</h3>
                <p>The material's natural form helps determine the final design and character.</p>
              </li>
              <li>
                <span className="process-icon"><Hammer size={22} aria-hidden="true" /></span>
                <span className="process-step">Step 3</span>
                <h3>Plan the details</h3>
                <p>Confirm the piece, placement and delivery requirements directly with Glenford Rocks.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="sculpture-band" aria-labelledby="sculpture-title">
          <img src="/images/quarry-sculpture.jpg" alt="An outdoor quarry installation combining stone, steel and shade structures" loading="lazy" />
          <div>
            <p className="section-kicker">Beyond furniture</p>
            <h2 id="sculpture-title">The quarry as canvas.</h2>
            <p>Sculptural work and the future park extend the same conversation between stone, structure and landscape.</p>
          </div>
        </section>

        <section className="faq section-pad" aria-labelledby="faq-title">
          <div className="page-shell faq-grid">
            <div>
              <p className="section-kicker">Common questions</p>
              <h2 id="faq-title">About the work</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="page-shell contact-grid">
            <div>
              <p className="section-kicker">Custom commissions and inquiries</p>
              <h2 id="contact-title">Have a place or piece in mind?</h2>
            </div>
            <div>
              <p>Tell us what you are considering and where the piece will live. Studio and quarry visits are discussed by arrangement.</p>
              <a className="button button-light" href="mailto:glenfordsales@hotmail.com?subject=Glenford%20Rocks%20inquiry">
                Email Glenford Rocks <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div>
            <strong>Glenford Rocks</strong>
            <span>Custom bluestone furniture and functional art</span>
          </div>
          <div>
            <span>Glenford, New York</span>
            <a href="mailto:glenfordsales@hotmail.com">glenfordsales@hotmail.com</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Glenford Rocks</p>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
