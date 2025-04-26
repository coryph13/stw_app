export default function Loader() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      {/* Внешнее кольцо */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="var(--gray-light)"
        strokeWidth="4"
        strokeDasharray="282.74" // длина окружности
        strokeDashoffset="282.74"
        className="outer-ring"
      />
      {/* Внутреннее кольцо */}
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeDasharray="219.91" // длина окружности
        strokeDashoffset="219.91"
        className="inner-ring"
      />
    </svg>
  );
}
