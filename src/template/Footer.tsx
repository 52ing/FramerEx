import { Logo } from "./Logo";

export function Footer({ title = "", url = "" }) {
  return (

    
    <footer>

    <a href="www.naver.com" target="_blank" rel="noreferrer">
      <Logo />
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        <code>{title}</code>
      </a> 

    </footer>
  );
}
