// react-bootstrap
import { Container } from 'react-bootstrap';

// components
import { DefaultNavbar } from 'components/navigation';

function SiteLayout(props: any) {
  return (
    <>
      <DefaultNavbar />
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-6">{props.children}</div>
        </div>
      </Container>
    </>
  );
}

export default SiteLayout;
