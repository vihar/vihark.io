// next
import Link from 'next/link';
// layouts
import { SiteLayout } from 'layouts';
// react bootstrap
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <SiteLayout>
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center my-5 py-5">
              <h1 className="fw-bolder mb-2">Hi, I’m Vihar Kurama</h1>
              <p className="fs-4 fw-light text-muted">
                I’m a developer, writer, and creator. I'm currently working at Caravel.AI, as a
                co-founder and full stack engineer.
              </p>
              <Button className="me-3 py-2 px-3 shadow">More about me</Button>
              <Button className="py-2 px-3 shadow" variant="outline-secondary">
                Follow me on Twitter
              </Button>
            </div>

            <div>
              <h3 className="fw-bolder m-0">Experience</h3>
              <hr className="mt-1 border-bottom" />
              <h5 className="fw-bolder">Caravel.AI</h5>
              <div className="d-flex align-items-center">
                <p className="mb-1 fw-bold">Co-founder and Full Stack Engineer (Full Time)</p>
                <div className="ms-auto">
                  <p className="mb-1">Mar 2017 - Present</p>
                </div>
              </div>
              <p className="text-muted">
                Building products and scalable web applications for clients in the Education,
                Finance, Ed-tech, Healthcare sectors.
              </p>
              <h5 className="fw-bolder">Soulpage IT</h5>
              <div className="d-flex align-items-center">
                <p className="mb-1 fw-bold">Engineering Manager, Software Architect (Full Time)</p>
                <div className="ms-auto">
                  <p className="mb-1">Jan 2020 - Present</p>
                </div>
              </div>
              <p className="text-muted">
                Managing development teams, architecturing scalable software products at scale for
                clients in EdTech, Retail and Fintech sectors.
              </p>
              <div className="d-flex align-items-center mb-2">
                <p className="mb-1 fw-bold">Engineer, Consultant (Part Time)</p>
                <div className="ms-auto">
                  <p className="mb-1">May 2019 - Jan 2020</p>
                </div>
              </div>
              {/* <h5 className="fw-bolder">Eprosoft America Inc.</h5>
              <div className="d-flex align-items-center">
                <p className="mb-1 fw-bold">Machine Learning Engineer, Consultant(Part Time)</p>
                <div className="ms-auto">
                  <p className="mb-1">April 2020 - Present</p>
                </div>
              </div>
              <p className="text-muted">
                Managing machine learning division and building intelligent algorithms on medical
                data, currently working on problems relating to NER and Information Extraction.
              </p> */}
              <hr className="mt-1 border-bottom" />
              <p className="fw-light text-muted fst-italic">
                I also write various blogs and guides related to programming languages, web
                development and machine learning; check my articles{' '}
                <Link href="">
                  <a>here!</a>
                </Link>
              </p>
              <hr className="mt-1 border-bottom" />
            </div>
          </div>
        </div>
      </Container>
    </SiteLayout>
  );
}
