import Image from "next/image"
import loader, { Loader } from "lucide-react"
import { Component } from "lucide-react"
import Button  from "@/components/ui/button"
import { ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton
 } from "@clerk/nextjs"
import Link from "next/link"
export default function Home() {
  return(
    <div className="max-w-[988px] flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-2 gap-2">
      <div className="relative w-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <img src="/hero.svg"  />
      </div> 
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-semibold text-netural-600 max-w-[480px] text-center"> 
          Learn, Practice and master new languages with Asklingo.
        </h1>
        <div  className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
               mode="modal">
                <Button className="w-full" size={"lg"} variant={"secondary"}>
                 Get Started
               </Button>
              </SignUpButton>
              <SignInButton
                mode="modal" >
                <Button className="w-full" size={"lg"} variant={"primaryOutline"}>
                  I already have an account
                </Button>
             </SignInButton>
           </SignedOut>
            <SignedIn>
              <Button className="px-6"  asChild size={"lg"} variant={"secondary"}>
                <Link href={"/learn"}>
                  Continue Learning
                </Link>
             </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>

  );
 
}
