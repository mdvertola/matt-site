import { useEffect, useState } from "react";

export default function Projects(props) {
  const { info } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {info.projects.map((project) => {
        return <Project url={project} key={project}></Project>;
      })}
    </div>
  );
}
export const getLinkPreview = (url) => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/preview?url=${url}`, {
    method: "GET",
    mode: "cors",
  });
};
export function Project(props) {
  const [linkInfo, setLinkInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    try {
      getLinkPreview(props.url)
        .then((response) => response.json())
        .then((linkInfo) => {
          setLinkInfo(linkInfo);
          setLoading(false);
        });
    } catch {
      setLoading(false);
      setFailed(true);
    }
  }, [props.url]);
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : failed ? (
        <div>failed to load link preview</div>
      ) : (
        <div className="grid bg-white rounded-md h-full">
          <img
            className="h-44 align-center mx-auto"
            src={linkInfo.image}
            alt={linkInfo.description}
          />
          <div className="p-2 grid place-content-start shadow-md">
            <div className="text-xl font-semibold">{linkInfo.title}</div>
            <div>{linkInfo.description}</div>
            <div className="font-bold">{linkInfo.url}</div>
          </div>
        </div>
      )}
    </div>
  );
}
