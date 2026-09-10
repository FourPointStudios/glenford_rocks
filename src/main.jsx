import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Trees,
} from 'lucide-react'
import { MarketStrip, SiteFooter, SiteHeader } from './SiteChrome'
import './styles.css'

const furniture = [
  {
    id: 'benches',
    title: 'Benches',
    image: '/images/bluestone-benches.jpeg',
    alt: 'A group of one-of-a-kind bluestone benches arranged at Glenford Rocks',
    details: [
      'Benches are made from slabs of Bluestone.',
      'The steel structure is 1.25"solid round stock.',
      'The design places the stones in a very comfortable angle.',
      'Prices range due to size.',
      'Presently each is "one of a kind" but models will also be offered in "cut stone"',
    ],
  },
  {
    id: 'chairs',
    title: 'Chairs',
    image: '/images/bluestone-chair.jpg',
    alt: 'A sculptural bluestone chair with a solid steel support frame',
    details: [
      'Chairs are made from slabs of Bluestone.',
      'The steel structure is 1"solid round stock.',
      'The design places the stones in a very comfortable angle.',
      'Presently each is "one of a kind" but models will also be offered in "cut stone"',
    ],
  },
  {
    id: 'tables',
    title: 'Tables',
    image: '/images/bluestone-table.jpg',
    alt: 'A large bluestone outdoor table with a hand-built steel base',
    details: [
      'Tables are available in 17" height or full 30"',
      'Shown are some larger coffee tables',
      'Also a new triangle model',
    ],
  },
  {
    id: 'firepits',
    title: 'Firepits',
    image: '/images/bluestone-firepit.jpg',
    alt: 'A 30-inch outdoor firepit with a stainless steel bowl and geometric steel stand',
    details: [
      'Fire pits are 30" in diameter',
      'Have stainless steel bowl',
      'The steel structure is 3/4"solid square steel stock.',
    ],
  },
]

const futureParagraphs = [
  'Glenfordrocks is also working to be an earth sculpture. This is a long range vision...one that will take a number of years moving forward. The hope would be that it would be open to the public as a park. The site is now connected to some 90 acres of New York City lands that are open to the public for recreational uses. Glenfordrocks becomes a starting point and destination for walks, hikes and cycling. This with the opening of the proposed Ashokan rail trail that extends for some 11 miles.',
  'Along with displaying our artwork and installations it would be our hope that an extension of the core feelings translate to the visitor. This might be from the flow of the sun sails or the swaying of what we call our birds in the wind. We position our outdoor furniture to look and feel like an inviting space to capture special views. As one sits on this furniture the angle has been set to make what would seem to be hard stone to be comfortable especially as the sun warms the stone.',
  'It would be our hope that visitors enjoy the open space and a sensation of grounding that can happen as one views all the stone which is permanent as opposed to the world which we have become accustomed to where so many things are disposable. From the ribbons of our pathways and our labyrinth a feeling of calm is transferred so that in our busy lives Glenfordrocks can be an oasis and retreat where one comes to get away and release the tensions of the world.',
]

const missionParagraphs = [
  'It is our intent here at Glenfordrocks to create an inviting space for people who wish to come and enjoy nature. This would include relaxing in our settings of outdoor furniture as well as wandering the grounds and experiencing the views and vistas.',
  'Because of our strong connection and belief in the healing power of nature we would like to enlighten others about the many benefits of connecting with nature including better spiritual, physical and emotional well being. There is a theory called biophilia which is the theory that man has an innate need to connect with nature according to E.O. Wilson. There is a new trend in architecture towards "biophilic design" as it has been proven to improve a person\'s well being to feel connected to the natural world.',
  'In addition to this goal we would also like to promote aesthetic expression in art and design with emphasis on green design. We would also like to promote recycling, eco-friendly materials, clean water and alternative energy.',
  'After experiencing Glenfordrocks we would hope that people would leave feeling more relaxed, connected with nature, feel more at peace within themselves which is carried out into the world and can be passed on. There is hope for a better more peaceful world if we can find our way back to nature and realize how we are all connected and we all have the same needs to live a happy, healthy and fulfilling life.',
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <MarketStrip />
      <SiteHeader currentPage="home" />

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-overlay" />
          <div className="hero-content page-shell">
            <p className="eyebrow">Bluestone Furniture</p>
            <h1 id="hero-title">A New World of Functional Art</h1>
            <p className="hero-lede">Glenford Rocks is both a range of outdoor furnishings and future earth sculpture park.</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#work">Explore the work <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="button button-ghost" href="#contact">Contact Glenford Rocks</a>
            </div>
          </div>
          <p className="hero-caption">Original Glenford Rocks stone wall</p>
        </section>

        <section className="introduction section-pad" aria-labelledby="introduction-title">
          <div className="page-shell intro-grid">
            <div>
              <p className="section-kicker">Bluestone Furniture</p>
              <h2 id="introduction-title">Bluestone Furniture</h2>
            </div>
            <div className="prose prose-lead">
              <p>It is the design of Glenfordrocks to add the fine nature of stone to your outdoor patio with bluestone benches, chairs and tables.</p>
              <p>One would not think Stone to be warm and comfortable but as the sun hits the bluestone bench you enjoy the angle and design.</p>
              <p>Located in the Hudson Valley Glenfordrocks looks to bring a world of functional art into view.</p>
              <p>Along with being a place to purchase outdoor furniture Glenfordrocks is a sculpture park and gallery.</p>
              <p>With the range of outdoor furnishings we have designed a system of ground supported Sunsails. These come in sizes from 16' to 24'.</p>
              <p>Please take time to view out Sun Sail page on this site.</p>
            </div>
          </div>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-title">
          <div className="page-shell manifesto-grid">
            <p className="section-kicker">Hand crafted artisan furniture</p>
            <div className="prose">
              <h2 id="manifesto-title">Hand Crafted Artisan Furniture</h2>
              <p>The idea behind creating and designing the benches, chairs and tables is to use local bluestone as the building block for function as well aesthetic appearance. Made from fully stable slabs of stone and solid steel round bar stock. These units need no maintenance and will last FOREVER!</p>
              <p>You may have noticed the sun sails in passing by our Rt 28 gallery. These are made from polypropylene fabric and are put into suspension from several different fixtures.These come in many different colors and units can range from 12' to 24'. These do a great job of creating shade to help summer days stay cool.</p>
              <p>We encourage you to explore our web site and our unique hand crafted artisan furniture</p>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="page-shell">
            <div className="section-heading single-heading">
              <div>
                <p className="section-kicker">The furniture</p>
                <h2 id="work-title">Bluestone Furniture</h2>
              </div>
            </div>

            <div className="collection-grid">
              {furniture.map((piece, index) => (
                <article className={`collection collection-${index + 1}`} id={piece.id} key={piece.id}>
                  <img src={piece.image} alt={piece.alt} loading={index > 1 ? 'lazy' : 'eager'} />
                  <div className="collection-copy">
                    <span className="collection-number">0{index + 1}</span>
                    <div>
                      <h3>{piece.title}</h3>
                      {piece.details.map((detail) => <p key={detail}>{detail}</p>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story" id="about" aria-labelledby="about-title">
          <div className="story-image" role="img" aria-label="Historic photograph of a Hudson Valley bluestone quarry" />
          <div className="story-copy prose">
            <p className="section-kicker">Twelve acres and a former bluestone quarry</p>
            <h2 id="about-title">About Us</h2>
            <p>After purchasing the 12 acres of what we call Glenfordrocks we came up with the idea to create a quarry museum as this was a former bluestone quarry. We have a keen interest in history, wanted to learn more about the bluestone industry and share it with others. This area including West Hurley and Glenford located in Ulster County had some of the largest bluestone quarries which produced vast quantities of stone used to build sidewalks for cities like New York.</p>
            <p>From having visited sculpture parks and locations like Opus 40 has given us the inspiration to create a public space where people could come and enjoy the views and vista's seen from the earthworks at Glenfordrocks. As we spent time working on the property we realized that it also has potential to become an open space and sculpture park. Glenfordrocks at this time is a work in progress and we hope to achieve these goals.</p>
            <p>Since we have a very strong interest in art and design we have created a unique array of functional stone furniture and sculptural installations. We continue to have many new innovative ideas for products and designs as we look forward into the future.</p>
            <div className="story-facts" aria-label="Glenford Rocks facts">
              <span><Mountain size={20} aria-hidden="true" /> Hudson Valley bluestone</span>
              <span><MapPin size={20} aria-hidden="true" /> Glenford, New York</span>
              <span><Trees size={20} aria-hidden="true" /> Future sculpture landscape</span>
            </div>
          </div>
        </section>

        <section className="beyond" id="beyond" aria-labelledby="beyond-title">
          <img src="/images/quarry-sculpture.jpg" alt="A Glenford Rocks outdoor installation combining stone, steel and a sun sail" loading="lazy" />
          <div className="beyond-copy">
            <p className="section-kicker">Beyond furniture</p>
            <h2 id="beyond-title">Bluestone, Sculptures and Sunsails</h2>
            <div className="beyond-list">
              <article>
                <h3>Bluestone</h3>
                <p>Their is a rich history of bluestone in Glenford... as quarries supplied stone for cities like New York sidewalk.</p>
                <p>Here at Glenfordrocks we design and create Bluestones installations. These can include walls and pathways.</p>
                <p>Please let us know if we might be able to quote on your projects.</p>
              </article>
              <article>
                <h3>Sculptures</h3>
                <p>Here at Glenfordrocks their is the intent to put in view settings and installations</p>
                <p>Shown is our first installation with what looks like large K's. This has triangular sunsail... creating shade.</p>
                <p>Also shown is a setting in woodstock in front of "Castaways".</p>
                <p>New shapes and designs are always being worked on a ever changing showcase on Rt 28</p>
              </article>
              <article>
                <h3>Sunsails</h3>
                <p>Sunsails are a shade system to help cool an area from sun.</p>
                <p>Here at Glenfordrocks.. we have designed some fixture systems to put sunsails in suspension.</p>
                <p>We find that as these sunsails shade our setting they become more inviting.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="future section-pad" id="future" aria-labelledby="future-title">
          <div className="page-shell editorial-grid">
            <div className="editorial-heading">
              <p className="section-kicker">Long range vision</p>
              <h2 id="future-title">Future</h2>
            </div>
            <div className="prose editorial-copy">
              {futureParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="mission section-pad" id="mission" aria-labelledby="mission-title">
          <div className="page-shell editorial-grid">
            <div className="editorial-heading">
              <p className="section-kicker">Nature, art and design</p>
              <h2 id="mission-title">Mission Statement</h2>
            </div>
            <div className="prose editorial-copy">
              {missionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="page-shell contact-grid">
            <div>
              <p className="section-kicker">Contact Glenford Rocks</p>
              <h2 id="contact-title">Ask about furniture, installations or a visit.</h2>
            </div>
            <div className="contact-actions">
              <a className="contact-link" href="mailto:glenfordsales@hotmail.com">
                <Mail size={22} aria-hidden="true" />
                <span><small>Email</small>glenfordsales@hotmail.com</span>
              </a>
              <a className="contact-link" href="tel:+18456797555">
                <Phone size={22} aria-hidden="true" />
                <span><small>Call</small>845.679.7555</span>
              </a>
              <a className="button button-light" href="mailto:glenfordsales@hotmail.com?subject=Glenford%20Rocks%20inquiry">
                Send an inquiry <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
