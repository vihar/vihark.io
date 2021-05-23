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
        <h2 className="mb-2">
          <span className="fw-light">Hello there, I'm</span>
          <span className="fw-bolder name"> Vihar Kurama</span>
        </h2>
        <p className="text-muted">
          I’m a developer, writer, and creator. I'm currently working at Caravel.AI, as a co-founder
          and full stack engineer.
        </p>
      </div>
    </SiteLayout>
  );
}
