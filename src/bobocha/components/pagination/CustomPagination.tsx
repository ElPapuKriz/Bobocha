import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router"

interface Props{

    totalPages:number;
    classname?: React.HTMLAttributes<HTMLDivElement> | string;

}

const CustomPagination = ({totalPages,classname}:Props,) => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const page  = Number(searchParams.get('page')  ?? 1);
    if (isNaN(page)) { searchParams.set('page','1') }

    const goToPage = (newPage: number) => {
        setSearchParams(prev => {
            prev.set('page',String(newPage));
            return prev;
        });
    };

    return (
        <div>
            {/* Paginación */}
            {totalPages > 1 && (
                <div className={cn("mb-8",classname)}>
                    <Pagination>
                        <PaginationContent>

                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => goToPage(page - 1)}
                                    className={page <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                <PaginationItem key={p}>
                                    <PaginationLink
                                        isActive={p === page}
                                        onClick={() => goToPage(p)}
                                        className="cursor-pointer"
                                    >
                                        {p}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => goToPage(page + 1)}
                                    className={page >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>

                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>  
    )
}

export default CustomPagination
