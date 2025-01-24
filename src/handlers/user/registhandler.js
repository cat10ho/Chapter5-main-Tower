import { PacketType } from '../../constants/header.js';
import { createResponse } from '../../utils/response/createResponse.js';

const registHandler = async ({ socket, sequence, payload }) => {
  try {
    const { id, password, email } = payload;

    if(email === "로그인요청"){

      addUser(socket);

      const loginpayload = {
        success: true,
        message: '로그인 성공!',
        token: '임시토큰입니다.',
        failCode: 0,
      };
      const packetType = PacketType.LOGIN_RESPONSE;
      const loginResponse = createResponse(packetType, loginpayload, sequence);
      socket.write(loginResponse);

    }else{
      const registpayload = {
        success: true,
        message: '회원가입 성공!',
        failCode: 0,
      };
      
      const packetType = PacketType.REGISTER_RESPONSE;
      const registResponse = createResponse(packetType, registpayload, sequence);
      socket.write(registResponse);
    }
  } catch (error) {
    console.error(error);
  }
};

export default registHandler;
