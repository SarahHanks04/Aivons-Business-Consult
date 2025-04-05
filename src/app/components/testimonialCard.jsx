export default function TestimonialCard({ comment, name, title }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-4 flex flex-col justify-between h-[300px]">
      {/* Client Comment */}
      <p className="text-gray-600 text-sm leading-relaxed">{comment}</p>

      {/* Client Info */}
      <div className="mt-4">
        <h4 className="text-[16px] font-semibold text-blue">{name}</h4>
        <p className="text-[10px] text-gray-500 uppercase">{title}</p>
      </div>
    </div>
  );
}
