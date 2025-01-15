import { PORT, HOST, CLIENT_VERSION} from '../constants/env.js';
import { PACKET_TYPE_LENGTH, PAYLOAD_LENGTH, SEQUENCE_LENGTH, TOTAL_HEADER_LENGTH, VERSION_LENGTH } from '../constants/header.js';

export const config = { //이 config 하나로 모든 환경변수를 가져옴.
  server: {
    port: PORT,
    host: HOST,
  },
  client: {
    version: CLIENT_VERSION,
  },
  packet: {
    totalHeaderLength: TOTAL_HEADER_LENGTH,
    packetTypeLength: PACKET_TYPE_LENGTH,
    versionLength: VERSION_LENGTH,
    sequenceLength: SEQUENCE_LENGTH,
    payloadLength: PAYLOAD_LENGTH,
  },
};