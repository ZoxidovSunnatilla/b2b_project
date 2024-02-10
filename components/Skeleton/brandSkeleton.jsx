import React from "react"
import { Skeleton } from "@mantine/core"

const BrandSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5 py-10">
        <Skeleton height={100} width="25%" radius="md" />
        <Skeleton height={100} width="25%" radius="md" />
        <Skeleton height={100} width="25%" radius="md" />
        <Skeleton height={100} width="25%" radius="md" />
      </div>
    </div>
  )
}

export default BrandSkeleton
