// link
import Link from 'next/link';

// layout
import { SiteLayout } from 'layouts';
// react bootstrap
import { Image } from 'react-bootstrap';

function AboutPage() {
  return (
    <SiteLayout>
      <div className="my-5 pt-5">
        <div>
          <Image
            className="rounded-3 img-fluid my-2 mx-auto d-block"
            src="/vihar_color.jpg"
            width="300"
          />

          <p className="text-muted">
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <Link href="https://twitter.com/vihar13k">
                  <a target="_blank" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                </Link>
              </div>
              <div className="p-2 ps-0">
                <Link href="https://www.linkedin.com/in/vihar-kurama/">
                  <a target="_blank" className="text-decoration-none linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </Link>
              </div>
              <div className="p-2">
                <Link href="mailto:vihar.kurama@gmail.com">
                  <a target="_blank" className="gmail">
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                </Link>
              </div>
              <div className="p-2">
                <Link href="https://www.instagram.com/vihar_kurama/">
                  <a target="_blank" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </Link>
              </div>
              <div className="p-2">
                <Link href="https://github.com/vihar">
                  <a target="_blank" className="github">
                    <i className="bi bi-github"></i>
                  </a>
                </Link>
              </div>
              <div className="p-2">
                <Link href="https://www.reddit.com/user/vihar_kurama3">
                  <a target="_blank" className="reddit">
                    <i className="bi bi-reddit"></i>
                  </a>
                </Link>
              </div>
            </div>
          </p>
        </div>

        <p className="p-small text-muted">
          👋 Hey, I'm Vihar Kurama. I'm a developer, writer, and creator. I'm currently working as
          an Engineer and Developer Advocate at Appsmith.
          <br />
          <br />
          🕒 In the past, I've worked with several startups as a consultant helping them build
          scalable products. I've managed dev teams, architectured products and have done some
          severe frontend engineering.
          <br />
          <br />
          ✍️ Apart from these, I've written several articles relating to Programming Languages, Web
          Development, and Machine Learning at Auth0, Paperspace, BuiltIn, Medium and Nanonets.
          <br />
          <br />☕ You can find me on Twitter, where I talk about design and development, or on
          GitHub.
          {/* I'm also passionate about Machine Learning as well. I'm consulting at Eprosoft America Inc,
        where I lead the ML division, working on projects related to Information Extraction, NER and
        Speech. */}
        </p>
      </div>
    </SiteLayout>
  );
}

export default AboutPage;
