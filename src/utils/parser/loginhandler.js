import { PacketType } from '../../constants/header.js';
import { createResponse } from '../../utils/response/createResponse.js';

const loginHandler = async ({ socket, sequence, payload }) => {
  try {
    const { id, password } = payload;

    //id = 토큰, password는 {packetType, handlerpayload} 여기서 가공.



   const handler = getHandlerById(packetType);
      
   await handler({socket: socket, sequence: sequence, payload });

  } catch (error) {
    console.error(error);
  }
};

export default loginHandler;
