import { PacketType } from '../../constants/header.js';
import { createResponse } from '../../utils/response/createResponse.js';

const towerPurchaseHandler = async ({ socket, sequence, payload }) => {
  try {
    const {  } = payload; //없음.?? 이게 왜없지. 아니 소켓으로 유저 찾아서 매칭해야하네.


    
    //서버에서 몬스터 위치랑 타워 위치를 계산해서 공격 명령을 보내줘야함.
    const matchStartpayload = {
      initialGameState: {
        baseHp: 100,
        towerCost: 100,
        initialGold: 100,
        monsterSpawnInterval: 100,
      },
      playerData: {
        gold: 100,
        base: {
          hp: 100,
          maxHp: 100,
        },
        highScore: 100,
        towers: [{
          towerId: 100,
          x: 0.1,
          y: 0.1,
        }],
        monsters:[{
          monsterId: 100,
          monsterNumber: 100,
          level: 100,
        }],
        monsterLevel: 100,
        score: 100,
        monsterPath: [{
          x: 0.1,
          y: 0.1,
        }],
        basePosition: {
          x: 0.1,
          y: 0.1,
        },
      },
      opponentData: {
        gold: 100,
        base: {
          hp: 100,
          maxHp: 100,
        },
        highScore: 100,
        towers: [{
          towerId: 100,
          x: 0.1,
          y: 0.1,
        }],
        monsters:[{
          monsterId: 100,
          monsterNumber: 100,
          level: 100,
        }],
        monsterLevel: 100,
        score: 100,
        monsterPath: [{
          x: 0.1,
          y: 0.1,
        }],
        basePosition: {
          x: 0.1,
          y: 0.1,
        },
      },
    };

    const packetType = PacketType.TOWER_PURCHASE_RESPONSE;
    const matchStartResponse = createResponse(packetType, matchStartpayload, sequence);
    socket.write(matchStartResponse);

    // 이건 뭔지 모르겠네.
    //const stateSyncpayload = {
    //  userGold: 100,
    //  baseHp: 100,
    //  monsterLevel: 100,
    //  score: 100,
    //  towers: [{
    //    towerId: 100,
    //    x: 0.1,
    //    y: 0.1,
    //  }],
    //  monsters:[{
    //    monsterId: 100,
    //    monsterNumber: 100,
    //    level: 100,
    //  }],
    //}
    //const packetType = PacketType.ADD_ENEMY_TOWER_NOTIFICATION;
    //const stateSyncResponse = createResponse(packetType, stateSyncpayload, sequence);


  } catch (error) {
    console.error(error);
  }
};

export default towerPurchaseHandler;
