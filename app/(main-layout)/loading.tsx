export default function Loading() {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="grid w-max animate-spin grid-cols-2 gap-1">
        <i className="size-3 rounded-full bg-neutral-500" />
        <i className="size-3 rounded-full bg-neutral-500/75" />
        <i className="size-3 rounded-full bg-neutral-500/50" />
        <i className="size-3 rounded-full bg-neutral-500/25" />
      </div>
    </div>
  );
}
