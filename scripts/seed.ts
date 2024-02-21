const {PrismaClient}=require("@prisma/client")
const db=new PrismaClient();
async function main(){
    try{await db.category.createMany({
        data:[
            {name:"famous people"},
            {name:"Movies and TV"},
            {name:"Musicians"},
            {name:"Games"},
            {name:"Animals"},
            {name:"Philosophy"},
            {name:"Scientists"},
            {name:"friends"}
        ]
    })

    }catch(error){
        console.log(error);
    }
    finally{
        await db.$disconnect();
    }
}
main();