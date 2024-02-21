"use client";
import qs from "query-string"
import { Search } from "lucide-react";
import {Input} from "@/components/ui/input";
import { useRouter,useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
export const SearchInput =()=>{
    const router=useRouter();
    const searchParams=useSearchParams();

    const categoryId=searchParams.get("categoryId");
    const name=searchParams.get("name");
    const [Value,setValue]=useState(name||"");
    const [Debounced,setDebounded]=useState(Value);
    useEffect(()=>{
      const timer=setTimeout(() => {
        setDebounded(Value)
      }, 400);
      return ()=>{clearTimeout(timer)};
    },[Value])
    const onChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
      setValue(e.target.value)
    }
    useEffect(()=>{
      const query={
        name:Debounced,
        categoryId:categoryId||null
      }
      const url=qs.stringifyUrl({
        url:window.location.href,
        query,
      },{
        skipEmptyString:true,skipNull:true
      })
      router.push(url);
    },[Debounced,router,categoryId])
    return (
        <div className="relative">
          <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/> 
          <Input placeholder="Search..."
          onChange={onChange}
          value={Value}
          className="pl-10 bg-primary/10"/>
        </div>
    )
}