import { SiteLayout } from 'layouts';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <SiteLayout>
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center my-5 py-5">
              <h1 className="fw-bolder mb-2">Hi, I’m Vihar Kurama</h1>
              <p className="fs-4 fw-light">
                I’m a developer, writer, and creator. I'm currently working at Caravel.AI, as a
                co-founder and full stack engineer.
              </p>
              <Button className="me-3">More about me</Button>
              <Button variant="outline-secondary">Follow me on Twitter</Button>
            </div>
            {/* <img className="img-fluid shadow" src="/vihar.jpg" width="250" /> */}
            <div className="d-flex">
              <div>
                <h5 className="fw-bold m-0">Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SiteLayout>
  );
}
