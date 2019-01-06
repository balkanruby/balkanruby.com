import Container from '../documentation/Container';

export default ({ theme, name }) => (
  <Container id="speakers" theme={ theme || "blank" } spacing="spacing-both" container>
    <div className="container">
      <div className="grid">
        <div className="shift-2">
          <div className="section-title">
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
