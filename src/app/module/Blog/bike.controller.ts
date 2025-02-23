import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BikeServices } from './bike.service';


const createBike = catchAsync(async (req , res)=>{
  const result = await BikeServices.createBikeIntoDB(req.body);

  sendResponse(res , {
    success : true,
    statusCode : StatusCodes.CREATED,
    message : "Bike is created successfully",
    data : result
  })
});

const getAllBikes = catchAsync(async ( req , res)=>{
  const result = await BikeServices.getAllBikesFromDB(req.body);
  sendResponse( res, {
    success: true,
    message: result.length
      ? 'Bikes fetched successfully'
      : 'No bikes matched the query. Returning all data.',
    statusCode: StatusCodes.OK,
    data: result,
  })
})
const getSingleBike = catchAsync( async (req , res)=>{
  const {bikeId} = req.params;
  const result = await BikeServices.getSingleBikeFromDB(bikeId);

  if(!result){
     return sendResponse( res, {
      success: false,
      message: 'Bike not found',
      statusCode: StatusCodes.NOT_FOUND,
      data: null,
     })
  }
  sendResponse(res , {
    statusCode : StatusCodes.OK,
    success : true,
    message : "Bike retrieved successfully",
    data : result
  })
})

const updateBike = catchAsync(async ( req , res)=>{
  const {bikeId} = req.params;
  const result = await BikeServices.updateBikeIntoDB(bikeId, req.body);
  if(!result) {
    return sendResponse( res , {
      success : false,
      message : 'Failed to update bike ',
      statusCode : StatusCodes.NOT_FOUND,
      data : null
    })
  }
  sendResponse(res, {
    success: true,
    message: 'Bike updated successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
})
 const deleteBike = catchAsync( async (req , res)=>{
  const {bikeId} = req.params;
  const result = await BikeServices.deleteBikeIntoDB(bikeId);

  sendResponse(res , {
    success : true, 
    message : "Bike deleted successfully",
    statusCode : StatusCodes.OK
  })
 })
export const BikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike
};
