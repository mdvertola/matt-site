import { SocialIcon } from "react-social-icons";
export default function Header(props) {
  const { info } = props;
  return (
    <>
      <div className="pt-10">
        <div className="flex justify-evenly">
          <img className="h-48 w-48 rounded-full" src={info.image}></img>
        </div>
        <div className="flex justify-evenly mt-4">
          <div className={`text-3xl text-center font-bold`}>
            {info.fullName}
          </div>
        </div>
        <div className="flex justify-evenly mt-2">
          <div className={`text-md text-center`}>{info.bio}</div>
        </div>
      </div>
    </>
  );
}
