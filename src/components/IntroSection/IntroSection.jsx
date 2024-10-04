import classes from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={classes['overview-section']}>
      <h2 className={classes.h2}>
        Connect with amazing people <br />
        or <strong>find a new passion</strong>
      </h2>
      <p>Anyone can organize and join events on React Event!</p>
      <div>
        <a href="#">Create your first event</a>
      </div>
    </section>
  );
}
