import { PacketType } from '../../constants/header.js';
import { createResponse } from '../../utils/response/createResponse.js';

const spawnMonsterHandler = async ({ socket, sequence, payload }) => {
  try {
    const { } = payload; 




    

    const spawnMonsterpayload = {
        monsterId: 100,
        monsterNumber: 100, //1~5까지임 ㅇㅇ 내가 봄.
    };

    const packetType = PacketType.SPAWN_MONSTER_RESPONSE;
    const spawnMonsterResponse = createResponse(packetType, spawnMonsterpayload, sequence);
    socket.write(spawnMonsterResponse);

    
    // 대칭상대 몬스터 스폰 동기화. 상대가 spawnMonsterHandler를 받았을때 보내면 됨.
    //const spawnEnemyMonsterNotificationpayload = {
    //  monsterId: 100,
    //  monsterNumber: 100,
    //}
    //const packetType = PacketType.SPAWN_ENEMY_MONSTER_NOTIFICATION;
    //const spawnEnemyMonsterNotificationResponse = createResponse(packetType, spawnEnemyMonsterNotificationpayload, sequence);
    //socket.write(spawnEnemyMonsterNotificationResponse);

  } catch (error) {
    console.error(error);
  }
};

export default spawnMonsterHandler;
