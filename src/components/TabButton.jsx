export default function TabButton({ isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} {...props}>
        {props.children}
      </button>
    </li>
  );
}
