import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 pt-4">
        {/* Hero Image Skeleton */}
        <Skeleton className="w-full aspect-[4/3] rounded-3xl" />

        {/* Content Skeleton */}
        <div className="px-2 py-8 text-center space-y-4">
          <Skeleton className="h-10 w-3/4 mx-auto" />
          <Skeleton className="h-1 w-12 mx-auto rounded-full" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
          <Skeleton className="h-4 w-full max-w-xs mx-auto" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Skeleton className="h-14 w-full rounded-full" />
            <Skeleton className="h-14 w-full rounded-full" />
          </div>

          {/* Trust Points */}
          <div className="flex flex-col gap-3 pt-4">
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
            <Skeleton className="h-10 w-full rounded-full" />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block container-premium py-16">
        <div className="relative bg-secondary/30 rounded-[2.5rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="relative z-10 px-12 py-16 xl:px-16 xl:py-20 space-y-6">
              <Skeleton className="h-16 w-full max-w-lg" />
              <Skeleton className="h-8 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full max-w-md" />
                <Skeleton className="h-4 w-3/4 max-w-md" />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-12 w-36 rounded-full" />
                <Skeleton className="h-12 w-36 rounded-full" />
              </div>

              {/* Trust Points */}
              <div className="flex gap-6 pt-4">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-44" />
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2">
              <Skeleton className="w-full h-full rounded-l-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
