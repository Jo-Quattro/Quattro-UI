/* logos from https://icons8.com/ */

import gitHubWhite from "../assets/logos/gitHubWhite.svg";
import instagramWhite from "../assets/logos/instagramWhite.svg";
import linkedinWhite from "../assets/logos/linkedinWhite.svg";

function Footer() {
  return (
    <section className="flex flex-col items-center pb-3 gap-1">
      <div className="flex items-center justify-center gap-2">
        <a
          href="https://github.com/jo-quattro"
          target="blank"
          className="hover:brightness-80  active:brightness-60"
        >
          <img
            src={gitHubWhite}
            alt="Github Logo"
            className="w-8 p-[1px] rounded ring-[1.5px] ring-white "
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-aulagnier-54621a247/"
          target="blank"
          className="hover:brightness-80 active:brightness-60"
        >
          <img src={linkedinWhite} alt="Linkedin Logo" className="w-10" />
        </a>
        <a
          href="http://instagram.com/jordan__stagram"
          target="blank"
          className="w-8 p-[1px] rounded ring-[1.5px] ring-white hover:brightness-80  active:brightness-60"
        >
          <img
            src={instagramWhite}
            alt="Instagram Logo"
            className="w-8 p-[2px]"
          />
        </a>
      </div>
      <p className="text-white">
        Logos from{" "}
        <a
          className="underline hover:brightness-80  active:brightness-70"
          href="https://icons8.com/"
          target="blank_"
        >
          Icon8
        </a>
      </p>
    </section>
  );
}

export default Footer;
