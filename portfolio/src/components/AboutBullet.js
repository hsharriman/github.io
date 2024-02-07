export const AboutBullet = (text, year) => {
  return (
    <li>
      {text}
      <span className="yr">{year}</span>
    </li>
  );
};
