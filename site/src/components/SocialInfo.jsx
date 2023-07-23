import { SocialIcon } from "react-social-icons";

export function SocialInfo(props) {
  const { info } = props;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {info.socialLinks.map((link) => {
          return (
            <div className="h-44 w-full bg-white rounded-md">
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
