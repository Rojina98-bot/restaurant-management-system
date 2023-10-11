import Menu from '../models/menu.js';
import Category from '../models/category.js';

export const MenuCreate =async(req,res,next)=>{
   const {MenuName,MenuPrice,category_id}=req.body
    try{
        const CreateMenu=await Menu.create({
            MenuName:MenuName,
            MenuPrice:MenuPrice,
            category_id:category_id,
        })
        
        if(CreateMenu===null)
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
}
export const MenuUpdate =async(req,res,next)=>{
    try{
        const MenuId=req.params.id;
        const updateData=req.body;
        const affectedRowCount=await Menu.update(updateData,{
            where:{
                MenuID:MenuId},
                returning :true,
            
        });
        
        if(affectedRowCount===0){
            return res.status(500).json({message:'menu not found'});
        }
        else{
        
        return res.json({message:'updated'});
        
       
    }
}

    catch(err){
        next(err);
    }
}

export const MenuDelete =async(req,res,next)=>{
    try{
        const MenuId=req.params.id;
        const reply=await Menu.destroy({
            where:{MenuID:MenuId
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
export const MenuGet=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const menu=await Menu.findOne({
            where:{
               MenuID:id

            }
            
        }

        );
        if(menu===null)
        return res.status(500).json({Status:"Error"});
        else
        return res.status(200).json({
            Status:"Success",result:menu
        });
    }
    catch(err){
    next(err);
    }
}
export const MenuGetAll=async(req,res,next)=>{
    try{
        const menus=await Menu.findAll({
            include: [{
                model: Category, // Include the Category model
                attributes: ['CategoryName'] // Include only the CategoryName column
            }],
            order:[['MenuID','DESC']]
        });
        console.log(menus);
        console.log(menus[0].Category.CategoryName);
        if(menus===null){
            return res.status(500).json({Status:"Error"});
        }
        else{
            const menuListWithCategory = menus.map(menu => {
                return {
                    MenuID: menu.MenuID,
                    MenuName: menu.MenuName,
                    MenuPrice: menu.MenuPrice,
                    category_id:menu.category_id,
                    CategoryName: Category ? menu.Category.CategoryName : null
                };})
        res.status(200).json({Status:"Success",result:menuListWithCategory});
            }
        
    }
    catch(err){
        next(err);
    }
}
