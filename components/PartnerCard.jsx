
export default function PartnerCard({ logo, name }) {
  return (
    <div className="flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:h-44">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="block max-h-20 w-full object-contain"
      />
    </div>
  );
}
