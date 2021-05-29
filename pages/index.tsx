// next
import Link from 'next/link';
// layouts
import { SiteLayout } from 'layouts';
// react bootstrap
import { Button } from 'react-bootstrap';

// content

let popular_writings = [
  {
    title: 'Linear Algebra for Deep Learning',
    desc: 'Fundamentals of linear algebra for getting started with Deep learning',
    logo: '/logos/medium.png',
    link: 'https://towardsdatascience.com/linear-algebra-for-deep-learning-506c19c0d6fa'
  },
  {
    title: 'Using the Notion API to Build a Content Management System',
    desc: 'Tutorial to use Notion API and Appsmith to build an Internal CMS',
    logo: '/logos/appsmith.png',
    link: 'https://towardsdatascience.com/linear-algebra-for-deep-learning-506c19c0d6fa'
  }
];

let featured_items = [
  {
    title: 'KeatsApp',
    desc: 'Online platform to learn CS in a more fun and interactive way',
    logo: '/logos/keats.png',
    link: 'https://towardsdatascience.com/linear-algebra-for-deep-learning-506c19c0d6fa'
  }
];

export default function Home() {
  return (
    <SiteLayout>
      <div className="my-5 pt-5">
        <h2 className="mb-3">
          <span className="fw-bold">Hello there, I'm</span>
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
            <Button variant="outline-secondary px-3 py-2 mt-2 text-dark">
              <i className="bi bi-caret-right me-2 text-dark"></i>
              Learn more about me
            </Button>
          </a>
        </Link>

        <Link href="https://twitter.com/vihar13k">
          <a target="_blank">
            <Button variant="outline-secondary ms-3 px-3 py-2 mt-2 text-dark">
              <i className="bi bi-twitter me-2 twitter"></i>
              Follow me on Twitter
            </Button>
          </a>
        </Link>
      </div>
      <div>
        <h5 className="fw-bold mt-5">Featured Writings</h5>

        {popular_writings.map((item, index) => {
          return (
            <>
              <div className="card p-3 shadow-sm border-0 card-left-border mt-3">
                <div className="d-flex">
                  <div>
                    <p className="mb-0">{item.title}</p>
                  </div>
                  <div className="ms-auto">
                    <img src={item.logo} width="20" />
                  </div>
                </div>

                <p className="p-small text-muted mb-1">{item.desc}</p>
              </div>
            </>
          );
        })}

        <h5 className="fw-bold mt-5">Selected Work</h5>

        {featured_items.map((item, index) => {
          return (
            <>
              <div className="card p-3 shadow-sm border-0 card-left-border mt-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img className="img-fluid" src={item.logo} width="50" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-0 fw-bold">{item.title}</p>
                    <p className="p-small text-muted mb-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </SiteLayout>
  );
}
