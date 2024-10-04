import classes from './SectionContent.module.css';

function PageContent({ title, children }) {
  return (
    <section className={classes.content}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default PageContent;
