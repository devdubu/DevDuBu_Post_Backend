import { PResponseType } from 'types/util';

const transResForm = (responseData: any): PResponseType => {
  return {
    status: {
      code: 2000,
      message: '성공적으로 수행했습니다.',
    },
    data: responseData,
  };
};

export { transResForm };
