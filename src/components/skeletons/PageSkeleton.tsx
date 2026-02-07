import { Skeleton } from "@/components/ui/skeleton";

export function PageHeroSkeleton() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-premium">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 lg:h-16 w-64 mx-auto" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          <Skeleton className="h-6 w-3/4 max-w-2xl mx-auto" />
        </div>
      </div>
    </section>
  );
}

export function SectionSkeleton() {
  return (
    <section className="section-spacing">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Skeleton className="h-10 w-48 mx-auto" />
          <Skeleton className="h-5 w-full max-w-md mx-auto" />
        </div>
        
        {/* Content placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentBlockSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export function ImageWithTextSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <Skeleton className="aspect-[3/2] rounded-3xl" />
      <div className="space-y-6">
        <Skeleton className="h-10 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <Skeleton className="h-16 w-full rounded-xl" />
      </div>
    </div>
  );
}
