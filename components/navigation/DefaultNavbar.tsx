import { useState, useEffect } from 'react';

// next themes
import { useTheme } from 'next-themes';

// react-bootstrap
import { Container, Navbar, Nav } from 'react-bootstrap';

// extras
import { ActiveLink } from 'components/elements';

function DefaultNavbar() {
  useEffect(() => setMounted(true), []);

  // custom hooks
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Navbar className="w-100 custom-nav" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* TODO: Map Navigation Items */}
              <ActiveLink href="/">
                <Nav.Link className="theme-font px-4 mx-2 rounded">Home</Nav.Link>
              </ActiveLink>
              <ActiveLink href="/about">
                <Nav.Link className="theme-font px-4 mx-2 rounded">About</Nav.Link>
              </ActiveLink>
              <ActiveLink href="/blog">
                <Nav.Link className="theme-font px-4 mx-2 rounded">Blog</Nav.Link>
              </ActiveLink>
              <ActiveLink href="/writing">
                <Nav.Link className="theme-font px-4 mx-2 rounded">Writing</Nav.Link>
              </ActiveLink>
              <Nav.Link className="theme-font px-4 mx-2 rounded" href="/vihar-kurama.pdf">
                Resume
              </Nav.Link>
              {/* <Nav.Link className="theme-font px-4 mx-2 rounded">
                <span
                  aria-label="Toggle Dark Mode"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {mounted && (
                    <span>{theme === 'dark' ? <span>Go Light</span> : <span>Go Dark</span>}</span>
                  )}
                </span>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DefaultNavbar;
