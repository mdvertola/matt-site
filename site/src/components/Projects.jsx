import { useLinkPreview } from "get-link-preview";
export default function Projects(props) {
  const { info } = props;
  return (
    <div className="flex justify-evenly">
      {info.projects.map((project) => {
        return (
          <Project url={project}></Project>
        )
      })}
      
    </div>
  );
}
export const getLinkPreview = (url) => {
  let BASE_URL=""
  return fetch(`${BASE_URL}/preview?url=${url}`, {
      method: 'GET', 
      mode: 'cors'
  });
}; 
export function Project(props) {
  return (<div>
    
    {props.url}
    </div>);
}
