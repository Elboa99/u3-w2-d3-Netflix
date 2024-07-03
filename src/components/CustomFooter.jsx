import { Container, Row, Col, Button } from "react-bootstrap";
const CustomFooter = () => (
  <footer className="d-flex customFooter">
    <Container>
      <Row>
        <Col>
          <span className="text-white m-auto p-2 ">
            <p className="text-secondary">Audio and Subtitles</p>
            <p className="text-secondary">Media Center</p>
            <p className="text-secondary">Privacy</p>
            <p className="text-secondary">Contact us</p>
          </span>
        </Col>

        <Col>
          <span className="text-white m-auto p-2 ">
            <p className="text-secondary">Audio Description</p>
            <p className="text-secondary">Investor Relations</p>
            <p className="text-secondary">Legal Notices</p>
          </span>
        </Col>

        <Col>
          <span className="text-white m-auto p-2 ">
            <p className="text-secondary">Help Center</p>
            <p className="text-secondary">Jobs</p>
            <p className="text-secondary">Cookies</p>
            <p className="text-secondary">Preferences</p>
          </span>
        </Col>

        <Col>
          <span className="text-white m-auto p-2 ">
            <p className="text-secondary">Gift Cards</p>
            <p className="text-secondary">Terms of Use</p>
            <p className="text-secondary">Corporate</p>
            <p className="text-secondary">Information</p>
          </span>
        </Col>
      </Row>
      <Row>
        <Col xl={2}>
          <Button className="footerButton mb-3" variant="outline-secondary">
            Secondary
          </Button>
        </Col>
        <strong className="text-secondary ">© 1997-2023 Netflix, Inc.</strong>
      </Row>
    </Container>
  </footer>
);

export default CustomFooter;
