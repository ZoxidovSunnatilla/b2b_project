import React from 'react';
import { Skeleton } from '@mantine/core';


const productSkeleton = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex gap-5 py-10">
                    <div className="w-1/4">
                        <Skeleton height={200} width="100%" radius="md" />
                        <Skeleton height={15} width="60%" my={10} radius="xl" />
                        <Skeleton height={15} width="100%" my={10} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={48} width="100%" my={10} radius="md" />
                    </div>
                    <div className="w-1/4">
                        <Skeleton height={200} width="100%" radius="md" />
                        <Skeleton height={15} width="60%" my={10} radius="xl" />
                        <Skeleton height={15} width="100%" my={10} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={48} width="100%" my={10} radius="md" />
                    </div>
                    <div className="w-1/4">
                        <Skeleton height={200} width="100%" radius="md" />
                        <Skeleton height={15} width="60%" my={10} radius="xl" />
                        <Skeleton height={15} width="100%" my={10} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={48} width="100%" my={10} radius="md" />
                    </div>
                    <div className="w-1/4">
                        <Skeleton height={200} width="100%" radius="md" />
                        <Skeleton height={15} width="60%" my={10} radius="xl" />
                        <Skeleton height={15} width="100%" my={10} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={15} width="50%" my={5} radius="xl" />
                        <Skeleton height={48} width="100%" my={10} radius="md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productSkeleton