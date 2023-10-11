import Category from '../models/category.js';
import Menu from '../models/menu.js';

export const CategoryCreateNew =async(req,res,next)=>{
    const newCategory=new Category(req.body)
    try{
        const savedCategory=await newCategory.save()
        res.status(200).json(savedCategory)
    }
    catch(err){
       next(err);
    }
}
export const CategoryCreate =async(req,res,next)=>{
    const name=req.body.CategoryName;
   
    try{

    const createdCategory=await Category.create({
    CategoryName:name
    
});
const Menus=req.body.Menus;
console.log(Menus);
for (const MenuItem of Menus){
    await Menu.create({
        MenuName:MenuItem.name,
        MenuPrice:MenuItem.price,
        category_id:createdCategory.CategoryID
});
}
if(createdCategory===null)
{
    return res.status(500).json({Status:"Error"})
}
else{
    return res.status(200).json({Status:"Success"})
}
    }
    catch(err){
        next(err);
    }
};



export const CategoryUpdate =async(req,res,next)=>{
    try{
        const CategoryId=req.params.id;
        const updateData=req.body;
        const affectedRowCount=await Category.update(updateData,{
            where:{
                CategoryID:CategoryId},
                returning :true,
            
        });
        
        if(affectedRowCount===0){
            return res.status(500).json({message:'user not found'});
        }
        else{
        
        return res.json({message:'updated'});
        
       
    }
}

    catch(err){
        next(err);
    }
}

export const CategoryDelete =async(req,res,next)=>{
    try{
        const CategoryId=req.params.id;
        const reply=await Category.destroy({
            where:{CategoryID:CategoryId
            },
        });
        if(reply===0)
        {
            return res.status(500).json({message:'no such data'});
        }
        else
        {
            return res.status(200).json({message:'deleted'});
        }
       
    }
    catch(err)
    {
        next(err);
    }
}
export const CategoryGet=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const category=await Category.findOne({
            where:{
               CategoryID:id

            },
            
            
        }

        );
        if(category===null)
        return res.status(500).json({Status:"Error"});
        else
        return res.send(category).status(200).json({
            Status:"Success"
        });
    }
    catch(err){
    next(err);
    }
}
export const CategoryGetAll=async(req,res,next)=>{
    try{
        const categories=await Category.findAll({
            
            order:[['CategoryID','DESC']]
        });
        if(categories===null){
            return res.status(500).json({Status:"Error"});
        }
        else
        res.send(categories).status(200).json({Status:"Success"});
        
    }
    catch(err){
        next(err);
    }
}
