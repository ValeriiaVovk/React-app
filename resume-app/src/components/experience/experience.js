export function Experience(props) {
  return (
    <div>
      <ul className="list list-work-one">
        <li>
          <span className="bold-text">Name of employer: </span>
          <a href={props.link} className="job-link">
            {props.title}
          </a>
        </li>
        <li>
          <span className="bold-text">Dates of employment: </span>
          {props.date}
        </li>
        <li>
          <span className="bold-text">Job title: </span>
          {props.name}
        </li>
        <li>
          <span className="bold-text">Role description: </span>
          {props.description}
        </li>
      </ul>
    </div>
  );
}

// export function Experience() {
//   return (
//     <section className="adaptive">
//       <h2 className="heading">Work Experince</h2>
//       <ul className="list list-work-one">
//         <li>
//           <span className="bold-text">Name of employer: </span>INGO, Odesa
//         </li>
//         <li>
//           <span className="bold-text">Dates of employment: </span>09/2021 -
//           present
//         </li>
//         <li>
//           <span className="bold-text">Job title: </span>Insurance manager
//         </li>
//         <li>
//           <span className="bold-text">Role description: </span>Consulting
//           clients on the insurance product, conclusion of insurance contracts,
//           work with the database.
//         </li>
//       </ul>
//       <ul className="list previous-work">
//         <li>
//           <span className="bold-text">Name of employer: </span>Universalna, Kyiv
//         </li>
//         <li>
//           <span className="bold-text">Dates of employment: </span>01/2019 -
//           08/2019
//         </li>
//         <li>
//           <span className="bold-text">Job title: </span>Insurance manager
//         </li>
//         <li>
//           <span className="bold-text">Role description: </span>Customer service,
//           support of existing insurance contracts.
//         </li>
//       </ul>
//     </section>
//   );
// }
