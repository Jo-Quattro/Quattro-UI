import gitHubLogo from "@/assets/logos/gitHubLogo.svg";
import linkedinLogo from "@/assets/logos/linkedinLogo.svg";
import instagramLogo from "@/assets/logos/instagramLogo.svg";
//Source : https://codepen.io/hwbuk/pen/xxvPXXz
function SocialFanAnimated() {
  return (
    <section className="group hover:duration-500 ">
      <div className="flex justify-center isolate">
        <div className="size-12 bg-white rounded-xl relative grid place-items-center ring-1 ring-black/[0.08] left-2.5 -top-1 -rotate-10 group-hover:-translate-x-5 group-hover:-rotate-20 transition duration-500">
          <a href="https://github.com/jo-quattro" target="blank">
            <img src={gitHubLogo} alt="Github Logo" className="h-10" />
          </a>
        </div>

        <div className="size-12 z-5 bg-white rounded-xl relative grid place-items-center ring-1 ring-black/[0.08] group-hover:-translate-y-3.5 transition duration-500">
          <a
            href="https://www.linkedin.com/in/jordan-aulagnier-54621a247/"
            target="blank"
          >
            <img src={linkedinLogo} alt="Linkedin Logo" className="h-10" />
          </a>
        </div>

        <div className="size-12 bg-white rounded-xl relative grid place-items-center ring-1 ring-black/[0.08] right-2.5 -top-1 rotate-10 group-hover:translate-x-5 transition duration-500">
          <a href="http://instagram.com/jordan__stagram" target="blank">
            <img src={instagramLogo} alt="Instagram Logo" className="h-9" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialFanAnimated;
