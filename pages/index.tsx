import { SiteLayout } from 'layouts';

export default function Home() {
  return (
    <SiteLayout>
      <div className="row pt-3">
        <div className="col-md-8 align-self-center">
          <h1 className="fw-bold">Hey, I’m Vihar Kurama</h1>
          <p className="lead">
            I’m a developer, writer, and creator. I work at Caravel.AI, as a co-founder and full
            stack engineer.
          </p>
        </div>
        <div className="col-md-4 text-center align-self-center">
          <img className="img-fluid rounded-circle shadow" src="/vihar.jpg" width="250" />
        </div>
      </div>
    </SiteLayout>
  );
}
