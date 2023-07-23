export default function Education(props) {
  const { info } = props;
  return (
    <div className="mt-10 h-full w-full rounded-lg bg-white p-2">
      <h1 className="text-3xl">Education</h1>
      {info.education.map((education) => {
        return (
          <div key={education.title} className="mt-3">
            <div className="">{education.start}-{education.end}</div>
            <h2 className="text-2xl">{education.institution}</h2>
            <h3 className="text-xl">{education.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
