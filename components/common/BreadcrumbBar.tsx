import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'
import { ButtonGroup } from '../ui/button-group'
import { Button } from '../ui/button'
import { Code, Download, EllipsisVertical, Eye, SquareSplitHorizontal } from 'lucide-react'

const BreadcrumbBar = () => {
    return (

        <>
            <div className=" container pt-2 px-8 flex flex-row justify-between items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex gap-4">
                    <ButtonGroup className='bg-accent ' >
                        <Button variant={'outline'}>
                            <Eye />
                        </Button>
                        <Button variant={'outline'}>
                            <Code />
                        </Button >
                        <Button variant={'outline'}>
                            <SquareSplitHorizontal />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className='bg-accent ' >
                        <Button variant={'outline'}>
                            <Download />
                        </Button>
                        <Button variant={'outline'}>
                            <EllipsisVertical />
                        </Button >
                     
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export default BreadcrumbBar