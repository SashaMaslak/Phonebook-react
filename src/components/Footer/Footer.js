import css from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <a className={css.footer_link} href="https://github.com/SashaMaslak">
        SashaMaslak © 2023
      </a>
      <span>(Course GoIT Final Project by React)</span>
    </div>
  );
};
