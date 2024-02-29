import { Skeleton } from "@mantine/core"

const CategorySkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5 py-10">
        <Skeleton height={50} width="25%" radius="md" />
      </div>
    </div>
  )
}

export default CategorySkeleton
