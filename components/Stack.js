import { stack } from "../data/stack";

export default function Stack() {
  return (
    <section id="stack">
      <h2 className="section-title">Stack técnico</h2>
      <div className="stack-grid">
        {stack.map(({ name, icon: Icon }) => (
          <div className="stack-chip" key={name}>
            <Icon className="stack-chip-icon" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
