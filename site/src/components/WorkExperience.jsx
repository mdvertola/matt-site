export default function WorkExperience(props) {
  const { info } = props;
  return (
    <div className="mt-10 h-full w-full rounded-lg bg-white p-2 overflow-hidden">
      <h1 className="text-3xl">Work Experience</h1>
      {info.workExperience.map((work) => {
        return (
          <div key={work.title} className="mt-3">
            <div className="">
              {work.start}-{work.end}
            </div>
            <h2 className="text-2xl">{work.company}</h2>
            <h3 className="text-xl">{work.title}</h3>
            <ul className="list-disc px-4">
            {work.bulletPoints.map((bullet) => {
              return <li key={bullet}>{bullet}</li>;
            })}
            </ul>
            
          </div>
        );
      })}
    </div>
  );
}
