import prismadb from '@/lib/prismadb'
import { CompainonForm } from './components/companion-form';
interface CompanionIdPageProps {
    params:{
        companionId:string;
    };
};

const CompanionIdPage=async({
    params
}:CompanionIdPageProps)=>{
    const companion=await prismadb.companion.findUnique({
        where:{
            id:params.companionId,
        }
    })
    const categories=await prismadb.category.findMany();

    return(
        <div>
         <CompainonForm 
         initialData={companion}
         categories={categories}/>
        </div>
    )
}

export default CompanionIdPage;