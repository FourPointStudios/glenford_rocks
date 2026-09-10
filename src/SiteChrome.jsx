import React, { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'

const navigation = [
  { label: 'Furniture', homeHref: '#work', pageHref: '/#work' },
  { label: 'About', homeHref: '#about', pageHref: '/#about' },
  { label: 'Future', homeHref: '#future', pageHref: '/#future' },
  { label: 'Mission', homeHref: '#mission', pageHref: '/#mission' },
  { label: 'Resources', homeHref: '/links/', pageHref: '/links/', page: 'resources' },
]

export function MarketStrip() {
  return (
    <div className="market-strip" aria-label="Contact Glenford Rocks">
      <a href="mailto:glenfordsales@hotmail.com">
        <Mail size={20} aria-hidden="true" />
        <span>glenfordsales@hotmail.com</span>
      </a>
      <span className="contact-divider" aria-hidden="true" />
      <a href="tel:+18456797555">
        <Phone size={20} aria-hidden="true" />
        <span>845.679.7555</span>
      </a>
    </div>
  )
}

export function SiteHeader({ currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = currentPage === 'home'
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a
        className="brand"
        href={isHome ? '#top' : '/'}
        aria-label="Glenford Rocks home"
        onClick={closeMenu}
      >
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

      <nav
        className={menuOpen ? 'primary-nav is-open' : 'primary-nav'}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navigation.map((item) => (
          <a
            href={isHome ? item.homeHref : item.pageHref}
            aria-current={item.page === currentPage ? 'page' : undefined}
            onClick={closeMenu}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href={isHome ? '#contact' : '/#contact'} onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <strong>Glenford Rocks</strong>
          <span>Bluestone furniture and functional art</span>
        </div>
        <div>
          <span>Glenford, New York</span>
          <a href="mailto:glenfordsales@hotmail.com">glenfordsales@hotmail.com</a>
          <a href="tel:+18456797555">845.679.7555</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Glenford Rocks</p>
      </div>
    </footer>
  )
}
