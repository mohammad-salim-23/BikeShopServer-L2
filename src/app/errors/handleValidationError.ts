import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => ({
      path: 'path' in val ? val.path : 'unknown',
      message: val.message,
    }),
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorSources,
  };
};
export default handleValidationError;
