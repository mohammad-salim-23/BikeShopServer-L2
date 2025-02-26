import QueryBuilder from "../../builder/QueryBuilder";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderintoDB = async (payload : IOrder)=>{
    const result = await Order.create(payload);
    return result;
}

const getAllOrdersFromDB = async(query: Record<string, unknown>)=>{
    const orderQuery = new QueryBuilder(Order.find(),query)
    .search(['userEmail', 'productName','productBrand'])
    .filter()
    .sort();

    const result = await orderQuery.modelQuery.select('__v').lean();
    return result;
};
const getSingleOrderFromDB = async(id : string)=>{
    const result = await Order.findById(id);
    return result;
};
//email er upor base kore data get
const getOrderByUserEmail = async (userEmail : string)=>{
    const result = await Order.find({userEmail}).lean();
    return result;
}
const updateOrderIntoDB = async(id: string, payload: Partial<IOrder>)=>{
    const {...orderData} = payload;
    const modifiedUpdatedData : Record<string , unknown>={
        ... orderData
    };
    const result = await Order.findByIdAndUpdate(id , modifiedUpdatedData, {
        new : true,
        runValidators : true,
    });
    return result;
};
const deleteOrderIntoDB = async(orderId : string)=>{
    const order = await Order.findById(orderId);
    if(!order){
        return null;
    }
    const result = await Order.findByIdAndDelete(orderId);
    return result;
};
export const OrderServices = {
    createOrderintoDB , 
    getAllOrdersFromDB,
    getSingleOrderFromDB,
    getOrderByUserEmail ,
    updateOrderIntoDB,
    deleteOrderIntoDB
}
