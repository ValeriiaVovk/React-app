import { Experience } from "./experience";

export function OtherExperience() {
  const experienceData = [
    {
      title: "INGO, Odesa",
      link: "https://ingo.ua/",
      data: "2021 - present",
      description:
        "Consulting clients on the insurance product, conclusion of insurance contracts, work with the database.",
      name: "Insurance manager",
    },
    {
      title: "Universalna, Kyiv",
      link: "https://universalna.com/#slide-2",
      data: "2019 - 2019",
      description: "Customer service, support of existing insurance contracts.",
      name: "Manager",
    },
  ];

  return (
    <section>
      {experienceData.map((experience) => (
        <Experience
          key={experience.name}
          title={experience.title}
          name={experience.name}
          description={experience.description}
          link={experience.link}
          date={experience.data}
        />
      ))}
    </section>
  );
}
