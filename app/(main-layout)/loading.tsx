export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-spin grid w-max grid-cols-2 gap-1">
        <i className="w-3 h-3 rounded-full bg-neutral-500" />
        <i className="w-3 h-3 rounded-full bg-neutral-500/75" />
        <i className="w-3 h-3 rounded-full bg-neutral-500/50" />
        <i className="w-3 h-3 rounded-full bg-neutral-500/25" />
      </div>
    </div>
  );
}
