export default function ResumeDoodle({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="relative h-full">
      <iframe
        src={src}
        title={title}
        className="relative z-0 block h-full w-full bg-white"
      />
    </div>
  );
}
