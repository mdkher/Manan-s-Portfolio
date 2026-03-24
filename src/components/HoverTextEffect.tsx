export default function HoverTextEffect({ text }: { text: string }) {
  return (
    <span className="relative inline-flex overflow-hidden">
      <span className="flex">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%]"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 flex" aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
