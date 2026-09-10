import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight,
  BookOpen,
  ExternalLink,
  Landmark,
  Mountain,
  Trees,
} from 'lucide-react'
import { MarketStrip, SiteFooter, SiteHeader } from './SiteChrome'
import './styles.css'

const resourceGroups = [
  {
    id: 'bluestone-history',
    number: '01',
    eyebrow: 'The material and the region',
    title: 'Bluestone History',
    description: 'Local histories, archival publications and first-hand accounts of the stone that shaped Ulster County and cities far beyond it.',
    icon: Landmark,
    resources: [
      {
        title: 'Bluestone History in Kingston',
        source: 'Friends of Historic Kingston',
        description: 'A locally grounded introduction to the industry, its timeline and the bluestone sidewalks that remain part of Kingston today.',
        href: 'https://www.fohk.org/bluestone-history/',
        format: 'Local history',
      },
      {
        title: 'Bluestone: From Ancient Sea to American Architecture',
        source: 'New York State Department of Environmental Conservation',
        description: 'An official illustrated account of New York bluestone, from its geologic formation to quarrying and architectural use.',
        href: 'https://extapps.dec.ny.gov/docs/administration_pdf/0808bluestone.pdf',
        format: 'PDF',
      },
      {
        title: 'Bluestone Quarries',
        source: 'Vassar College Hudson Valley Guidebook',
        description: 'A student-researched guide to the environmental and economic history of Hudson Valley bluestone quarrying.',
        href: 'https://web.archive.org/web/20220203111208/https://pages.vassar.edu/hudsonvalleyguidebook/2013/06/03/bluestone-quarries/',
        format: 'Archived guide',
      },
      {
        title: 'The History of Bluestone in Ulster County',
        source: 'Robert Donaldson, 2017',
        description: 'A recorded presentation tracing the people, places and industry behind the region\'s bluestone legacy.',
        href: 'https://www.youtube.com/watch?v=oaKzJDsWjTw',
        format: 'Video',
      },
      {
        title: 'The Great Bluestone Industry',
        source: 'Popular Science Monthly, 1894',
        description: 'A period account of quarrying, finishing and transporting Hudson Valley bluestone during the industry\'s height.',
        href: 'https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_45/July_1894/The_Great_Bluestone_Industry',
        format: 'Historical article',
      },
      {
        title: 'Bluestone Sidewalks',
        source: 'The Manufacturer and Builder, 1890',
        description: 'A digitized period article documenting the scale, craft and remarkable dimensions of nineteenth-century bluestone production.',
        href: 'https://babel.hathitrust.org/cgi/pt?id=coo.31924080795275&view=1up&seq=87&size=125',
        format: 'Digital archive',
      },
      {
        title: 'Bluestone Sidewalks',
        source: 'Scientific American, 1890',
        description: 'A contemporary report on the Catskill and Hudson River quarries that supplied New York City\'s stone sidewalks.',
        href: 'https://quarriesandbeyond.org/articles_and_books/pdf/bluestone_sidewalks_scientific_american_november_22_1890.pdf',
        format: 'PDF',
      },
      {
        title: 'Preserving the History That Lies Underfoot',
        source: 'The New York Times, 1994',
        description: 'A look at the renewed appreciation for bluestone sidewalks and the history carried in their surviving slabs.',
        href: 'https://www.nytimes.com/1994/06/20/nyregion/preserving-the-history-that-lies-underfoot-bluestone-sidewalks-on-comeback-trail.html',
        format: 'Article',
        note: 'Access may be limited',
      },
      {
        title: 'Bluestone',
        source: 'Wikipedia',
        description: 'A broad reference to the different building stones known as bluestone, including the sandstone quarried in New York and Pennsylvania.',
        href: 'https://en.wikipedia.org/wiki/Bluestone',
        format: 'Reference',
      },
    ],
  },
  {
    id: 'sculpture-parks',
    number: '02',
    eyebrow: 'Art in the landscape',
    title: 'Sculpture Parks',
    description: 'Places where sculpture, terrain and open space meet, including several inspirations behind the long-range vision for Glenford Rocks.',
    icon: Mountain,
    resources: [
      {
        title: 'Opus 40',
        source: 'Saugerties, New York',
        description: 'Harvey Fite\'s monumental earthwork and sculpture park, built by hand from millions of pieces of local bluestone.',
        href: 'https://opus40.org/',
        format: 'Official site',
      },
      {
        title: 'Storm King Art Center',
        source: 'New Windsor, New York',
        description: 'A 500-acre outdoor museum where large-scale sculpture and site-specific commissions are experienced under open sky.',
        href: 'https://stormking.org/',
        format: 'Official site',
      },
      {
        title: 'Grounds For Sculpture',
        source: 'Hamilton, New Jersey',
        description: 'A landscaped sculpture park and museum that brings contemporary art into gardens, paths and gathering places.',
        href: 'https://www.groundsforsculpture.org/',
        format: 'Official site',
      },
      {
        title: 'deCordova Sculpture Park and Museum',
        source: 'Lincoln, Massachusetts',
        description: 'Thirty acres of contemporary outdoor sculpture set among lawns, forests, fields and gardens.',
        href: 'https://thetrustees.org/place/decordova/',
        format: 'Official site',
      },
      {
        title: 'Socrates Sculpture Park',
        source: 'Queens, New York',
        description: 'A waterfront public park devoted to experimental outdoor artwork, artist commissions and community programs.',
        href: 'https://socratessculpturepark.org/',
        format: 'Official site',
      },
      {
        title: 'Red Rocks Amphitheatre',
        source: 'Morrison, Colorado',
        description: 'A landmark example of architecture and gathering space shaped in direct conversation with monumental natural rock formations.',
        href: 'https://en.wikipedia.org/wiki/Red_Rocks_Amphitheatre',
        format: 'Reference',
      },
    ],
  },
  {
    id: 'nature-and-place',
    number: '03',
    eyebrow: 'Landscape and well-being',
    title: 'Nature and Place',
    description: 'Two ideas that connect the history of the wider region with Glenford Rocks\' belief in restorative, thoughtfully designed outdoor space.',
    icon: Trees,
    resources: [
      {
        title: 'History and Culture of the Upper Delaware',
        source: 'National Park Service',
        description: 'An official history of the river valley, including the resource industries and bluestone quarrying that shaped its communities.',
        href: 'https://www.nps.gov/upde/learn/historyculture/index.htm',
        format: 'Official history',
      },
      {
        title: 'Biophilia Hypothesis',
        source: 'Wikipedia',
        description: 'An introduction to the idea that people possess an innate tendency to seek connection with nature and other forms of life.',
        href: 'https://en.wikipedia.org/wiki/Biophilia_hypothesis',
        format: 'Reference',
      },
    ],
  },
]

function ResourceRow({ resource, index }) {
  return (
    <article className="resource-row">
      <a href={resource.href} target="_blank" rel="noopener noreferrer">
        <span className="resource-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="resource-copy">
          <span className="resource-source">{resource.source}</span>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
        </span>
        <span className="resource-meta">
          <span>{resource.format}</span>
          {resource.note && <small>{resource.note}</small>}
          <ExternalLink size={19} aria-hidden="true" />
        </span>
      </a>
    </article>
  )
}

function ResourcesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <MarketStrip />
      <SiteHeader currentPage="resources" />

      <main id="main-content" className="resources-page">
        <section className="resources-hero" aria-labelledby="resources-title">
          <img
            className="resources-hero-image"
            src="/images/historic-quarry.jpg"
            alt="Historic Hudson Valley bluestone quarry with stone blocks, workers and lifting equipment"
            width="632"
            height="427"
            fetchpriority="high"
          />
          <div className="resources-hero-overlay" />
          <div className="page-shell resources-hero-content">
            <p className="eyebrow">The Glenford Rocks library</p>
            <h1 id="resources-title">Bluestone history, art and ideas.</h1>
            <p>Explore the regional history, sculpture landscapes and enduring ideas that inform the work and long-range vision of Glenford Rocks.</p>
          </div>
          <p className="resources-hero-caption">Historic Hudson Valley bluestone quarry</p>
        </section>

        <section className="resources-overview" aria-labelledby="overview-title">
          <div className="page-shell resources-overview-grid">
            <div>
              <p className="section-kicker">A living collection</p>
              <h2 id="overview-title">Sources worth following</h2>
            </div>
            <div>
              <p className="resources-intro">This collection preserves the spirit of the original Glenford Rocks links page while directing visitors to trustworthy, relevant sources that are available today.</p>
              <nav className="resource-jump-links" aria-label="Resource categories">
                {resourceGroups.map((group) => (
                  <a href={`#${group.id}`} key={group.id}>
                    <span>{group.number}</span>
                    {group.title}
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {resourceGroups.map((group) => {
          const Icon = group.icon
          return (
            <section
              className={`resource-section resource-section--${group.id}`}
              id={group.id}
              aria-labelledby={`${group.id}-title`}
              key={group.id}
            >
              <div className="page-shell resource-section-grid">
                <div className="resource-section-heading">
                  <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                  <p className="section-kicker">{group.eyebrow}</p>
                  <h2 id={`${group.id}-title`}>{group.title}</h2>
                  <p>{group.description}</p>
                </div>
                <div className="resource-list">
                  {group.resources.map((resource, index) => (
                    <ResourceRow resource={resource} index={index} key={`${resource.title}-${resource.source}`} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        <section className="resources-contact" aria-labelledby="resources-contact-title">
          <div className="page-shell resources-contact-grid">
            <BookOpen size={32} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="section-kicker">From reference to reality</p>
              <h2 id="resources-contact-title">See what bluestone can become.</h2>
            </div>
            <a className="button button-light" href="/#work">Explore the furniture</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResourcesPage />
  </React.StrictMode>,
)
