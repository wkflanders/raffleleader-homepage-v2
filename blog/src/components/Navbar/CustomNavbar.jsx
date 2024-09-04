import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './custom-navbar.module.css';

function CustomNavbar() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <div className={`navbar ${styles.navbar}`}>
        <nav className={styles.customNavbar} aria-label="Global">
          <div className={styles.navbarLeft}>
              <Link to="https://raffleleader.com" className={styles.navbarBrand}>
                  <img src={useBaseUrl('img/TEXT-LOGO.svg')} alt="Logo" className={styles.navbarLogo} />
              </Link>
          </div>
          <div className={styles.navbarCenter}>
              <Link to={useBaseUrl('pricing')} className={styles.navbarLink}>
                  Pricing
              </Link>
              <Link to={useBaseUrl('blog')} className={styles.navbarLink}>
                  Blog
              </Link>
              <Link to={useBaseUrl('docs/intro')} className={styles.navbarLink}>
                  Documentation
              </Link>
              <Link to={useBaseUrl('about')} className={styles.navbarLink}>
                  About
              </Link>
          </div>
          <div className={styles.navbarRight}>
            <div style={{ visibility: 'hidden' }}>Placeholder</div>
          </div>
        </nav>
      </div>
    );
}

export default CustomNavbar;