import { useState, useEffect } from 'react';

// next themes
import { useTheme } from 'next-themes';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

// extras
import { ActiveLink } from 'components/elements';

function SiteLayout(props: any) {
  // custom hooks
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <Container className="pt-4">
        <Row className="justify-content-center">
          <Col className="col-md-9">
            <Navbar className="pt-3 pb-3 w-100" expand="lg">
              <Navbar.Brand className="theme-font" href="/">
                Vihar Kurama
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="justify-content-end">
                  <ActiveLink href="/">
                    <Nav.Link className="theme-font" href="#home">
                      home
                    </Nav.Link>
                  </ActiveLink>
                  <ActiveLink href="/articles">
                    <Nav.Link className="theme-font" href="#link">
                      articles
                    </Nav.Link>
                  </ActiveLink>
                  <ActiveLink href="/projects">
                    <Nav.Link className="theme-font" href="#link">
                      projects
                    </Nav.Link>
                  </ActiveLink>
                  <Nav.Link className="theme-font">
                    <span
                      aria-label="Toggle Dark Mode"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      {mounted && (
                        <span>{theme === 'dark' ? <span>light</span> : <span>dark</span>}</span>
                      )}
                    </span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SiteLayout;
