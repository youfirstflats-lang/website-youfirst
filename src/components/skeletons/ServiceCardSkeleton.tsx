import { Skeleton } from "@/components/ui/skeleton";

export function ServiceCardSkeleton() {
  return (
    <div className="bg-background rounded-2xl overflow-hidden border-2 border-primary/10 h-full flex flex-col">
      {/* Image */}
      <Skeleton className="aspect-[4/3] w-full" />
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2 flex-grow">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-5 w-24 mt-2" />
      </div>
    </div>
  );
}

export function ServiceCardsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  );
}
