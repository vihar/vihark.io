// next
import Link from 'next/link';
// layouts
import { SiteLayout } from 'layouts';
// react bootstrap
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <SiteLayout>
      <div className="my-5 py-5">
        <h2 className="mb-3">
          <span className="fw-light">Hello there, I'm</span>
          <span className="fw-bolder name-gradient"> Vihar Kurama</span>
        </h2>
        <p className="text-muted">
          I'm a developer, writer, and creator. I'm currently working with the growth team at{' '}
          <a href="https://www.appsmith.com/" target="_blank">
            Appsmith
          </a>{' '}
          as an <span className="fw-bold">Engineer</span> and{' '}
          <span className="fw-bold">Developer Advocate</span>.
        </p>

        <p className="text-muted">
          I'm also the co-founder at <a href="https://caravel.ai/">Caravel.AI</a>, an Artificial
          Intelligence consulting firm. We build Intelligent Products and Scalable Web Applications
          for clients in Ed-tech, Finance, and Healthcare sectors.
        </p>

        <Link href="/about">
          <a>
            <Button variant="outline-secondary text-muted px-3 py-2 mt-2">
              <i className="bi bi-caret-right me-2 text-dark"></i>
              Learn more about me
            </Button>
          </a>
        </Link>

        <Link href="https://twitter.com/vihar13k">
          <a target="_blank">
            <Button variant="outline-secondary text-muted ms-3 px-3 py-2 mt-2">
              <i className="bi bi-twitter me-2 twitter"></i>
              Follow me on Twitter
            </Button>
          </a>
        </Link>
      </div>
    </SiteLayout>
  );
}
