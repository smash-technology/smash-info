export default function ArrowEast({
  width,
  height,
  stroke = 1.5,
  color = "#ffffff",
  position = -5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeLinejoin="arcs"
      strokeWidth={stroke}
      className="feather feather-arrow-right"
      viewBox="0 0 24 24"
      style={{
        marginBottom: position + "px",
        marginLeft: "4px",
      }}
    >
      <path d="M5 12L19 12"></path>
      <path d="M12 5L19 12 12 19"></path>
    </svg>
  );
}

export function ArrowNortheast({
  width,
  height,
  stroke = 1.5,
  color = "#ffffff",
  position = -5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeLinejoin="arcs"
      strokeWidth={stroke}
      className="feather feather-arrow-up-right"
      viewBox="0 0 20 22"
      style={{ marginBottom: position + "px" }}
    >
      <path d="M7 17L17 7"></path>
      <path d="M7 7L17 7 17 17"></path>
    </svg>
  );
}
