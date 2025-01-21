import { PacketType } from '../../constants/header.js';
import { getJoinGameSessions } from '../../session/game.session.js';
import { getUserBySocket } from '../../session/user.session.js';
import { createResponse } from '../../utils/response/createResponse.js';

const spawnMonsterHandler = async ({ socket, sequence, payload }) => {
  try {
    const { } = payload; 

    const user = getUserBySocket(socket);

    const gameSessions = getJoinGameSessions(user);

    const monsterId = gameSessions.getSpawnMonstercounter();
    
    const monsterNumber = Math.floor(Math.random()*(4))+ 1 ;

    const monster = { monsterId , monsterNumber, level:gameSessions.monsterLevel };

    user.addMonster(monster);
    
    const spawnMonsterpayload = {
        monsterId,
        monsterNumber,
    };
    let packetType = PacketType.SPAWN_MONSTER_RESPONSE;
    const spawnMonsterResponse = createResponse(packetType, spawnMonsterpayload, sequence);
    socket.write(spawnMonsterResponse);



    //상대가 너동기화
    const enemyUser = getUserBySocket(user.getMatchingUsersocket());

    const spawnEnemyMonsterNotificationpayload = {
      monsterId,
      monsterNumber,
    }
    packetType = PacketType.SPAWN_ENEMY_MONSTER_NOTIFICATION;
    const spawnEnemyMonsterNotificationResponse = createResponse(packetType, spawnEnemyMonsterNotificationpayload, sequence);
    enemyUser.socket.write(spawnEnemyMonsterNotificationResponse);

  } catch (error) {
    console.error(error);
  }
};

export default spawnMonsterHandler;
