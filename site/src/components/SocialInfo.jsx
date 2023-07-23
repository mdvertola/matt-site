import { SocialIcon } from "react-social-icons";

export function SocialInfo(props) {
  const { info } = props;
  return (
    <>
      <div className="flex justify-evenly mt-4">
        {info.socialLinks.map((link) => {
          return (
            <div className="">
              <SocialIcon
                key={link}
                className={`h-12 w-12 m-2 rounded-full ${info.styles.iconColor}`}
                url={link}
                target="_blank"
                rel="noreferrer"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
