import "./Nav.css";

const Nav = (): JSX.Element => {
  const links = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/pzaenger"
    },
    {
      id: 2,
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/2436655/pzaenger"
    }
  ];

  return (
    <nav role="navigation">
      <ul className="nav">
        {links.map(({ id, name, url }) => (
          <li className="nav-item" key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
