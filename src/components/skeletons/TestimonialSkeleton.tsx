import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-border/50 bg-card p-6 lg:p-8 flex flex-col">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-full" />
        ))}
      </div>

      {/* Review text */}
      <div className="mt-4 mb-6 flex-grow space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 space-y-4">
          <Skeleton className="h-5 w-24 mx-auto" />
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-full max-w-md mx-auto" />
          <Skeleton className="h-5 w-3/4 max-w-md mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <TestimonialCardSkeleton key={i} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        {/* Trust indicators */}
        <div className="mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-10 w-16 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
