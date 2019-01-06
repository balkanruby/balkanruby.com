const PageTitle = ({ title, theme = "blank" }) => (
  <div className={["page-title", theme].join(" ")}>
    <div className="container">
      <h1>{title}</h1>
    </div>
  </div>
);

PageTitle.defaultProps = {
  title: 'Page title',
};

export default PageTitle;
