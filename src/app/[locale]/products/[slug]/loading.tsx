export default function LoadingProductPage() {
  return (
    <div className="container py-8">
      <div className="flex animate-pulse flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <div className="h-[400px] rounded-2xl bg-gray-light" />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="h-12 w-3/4 rounded bg-gray-light" />
          <div className="h-6 w-1/2 rounded bg-gray-light" />
          <div className="mt-4 h-4 w-full rounded bg-gray-light" />
          <div className="h-4 w-5/6 rounded bg-gray-light" />
          <div className="h-4 w-2/3 rounded bg-gray-light" />

          <div className="mt-6 space-y-2">
            <div className="h-5 w-1/3 rounded bg-gray-light" />
            <div className="h-4 w-1/2 rounded bg-gray-light" />
            <div className="h-4 w-1/4 rounded bg-gray-light" />
          </div>
        </div>
      </div>
    </div>
  );
}
