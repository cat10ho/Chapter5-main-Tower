import { PacketType } from '../../constants/header.js';
import { addGameSession, getAllGameSessions } from '../../session/game.session.js';
import { getUserBySocket } from '../../session/user.session.js';
import { generateRandomMonsterPath } from '../../utils/monster/monsterPath.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { v4 as uuidv4 } from 'uuid';

const matchHandler = async ({ socket, sequence, payload }) => {
  try {
    const {  } = payload; //없음.?? 이게 왜없지. 아니 소켓으로 유저 찾아서 매칭해야하네.


    const user = getUserBySocket(socket);

    let gameSession = getAllGameSessions().find((session) => session.users.length === 1);

    const path = generateRandomMonsterPath(340);
    user.updateMonsterPaths(path);

    if (gameSession) {
      gameSession.addUser(user);
      gameSession.startGame();
    } else {
      const gameId = uuidv4();
      gameSession = addGameSession(gameId);
      gameSession.addUser(user);
    }
    

    // 매칭이 성공하면 계속 동기화를 시켜줘야 한다.
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
    //const packetType = PacketType.STATE_SYNC_NOTIFICATION;
    //const stateSyncResponse = createResponse(packetType, stateSyncpayload, sequence);


  } catch (error) {
    console.error(error);
  }
};

export default matchHandler;
