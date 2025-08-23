export default function Loading() {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  