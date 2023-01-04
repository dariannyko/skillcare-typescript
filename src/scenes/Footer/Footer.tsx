import Logo from "@/assets/Icons/Logo.svg";
import FacebookIcon from "@/assets/SocialMedia/FacebookIcon.svg";
import TwitterIcon from "@/assets/SocialMedia//TwitterIcon.svg";
import InstagramIcon from "@/assets/SocialMedia//InstagramIcon.svg";
import PinterestIcon from "@/assets/SocialMedia//PinterestIcon.svg";

const Footer = () => {
  const socialMediaStyles =
    "bg-purple-200 rounded-full w-[38px] h-[38px] flex items-center justify-center";
  return (
    <footer className="bg-blue-100 py-20">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="basis-1/2">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            You’ll find your next home loan valu you prefer. Follow us on social
            media and stay updated with the latest information about us
          </p>
          <p className="font-bold">&#169; SkillCare All Rights Reserved.</p>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            href="#"
            className="my-4 inline-block transition duration-500 hover:text-orange-500"
          >
            Online Instructor
          </a>
          <a
            href="#"
            className="mb-4 inline-block transition duration-500 hover:text-orange-500"
          >
            Premium E Course
          </a>
          <a
            href="#"
            className="inline-block transition duration-500 hover:text-orange-500"
          >
            Our Blogs
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a className="my-4 inline-block font-bold" href="tel:+3334256825">
            +9-(333)-425-6825
          </a>
          <p className="mb-5">Follow us on social media</p>
          <div className="flex justify-between">
            <a href="#" className={socialMediaStyles}>
              <img src={FacebookIcon} alt="facebook-icon" />
            </a>
            <a href="#" className={socialMediaStyles}>
              <img src={TwitterIcon} alt="twitter-icon" />
            </a>
            <a href="#" className={socialMediaStyles}>
              <img src={InstagramIcon} alt="instagram-icon" />
            </a>
            <a href="#" className={socialMediaStyles}>
              <img src={PinterestIcon} alt="pinterest-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
