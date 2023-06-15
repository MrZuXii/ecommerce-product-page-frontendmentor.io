export default function Navigation() {
  const links = [
    { name: "Collections", href: "#" },
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map(({ name, href }, i) => (
          <li key={i} className="navigation__item">
            <a href={href} className="navigation__link">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
