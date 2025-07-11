import Button from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


type props = {
    title: string
};
    export const Header = ({ title }: props) => {
        return (
             <div className="sticky top-0 bg-white pb-3  lg: pt-[28px] lg:mt-[-28px]
             flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
                <Link href={"/Courses"}>
                <Button variant={"ghost"} size="sm">
                    <ArrowLeft className =" h-5 w-5 stroke-2 text-neutral-400" />
                </Button>
                </Link>
                <h1 className="text-lg font-bold">{title}</h1>
                <div/>
             </div>
        );
    };