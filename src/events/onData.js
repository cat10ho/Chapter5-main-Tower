export const onData = (socket) => async (data) => {
  // 데이터가 계속 오니까 여기에 쌓는거.
  socket.buffer = Buffer.concat([socket.buffer, data]);
  // 1. packetType (2 bytes)
const packetType = socket.buffer.readUInt16BE(0);

// 2. versionLength (1 byte)
const versionLength = socket.buffer.readUInt8(2);

// 3. version (versionLength bytes)
const version = socket.buffer.toString("utf8", 3, 3 + versionLength);

// 4. sequence (4 bytes)
const sequence =socket.buffer.readUInt32BE(3 + versionLength);

// 5. payloadLength (4 bytes)
const payloadLength = socket.buffer.readUInt32BE(7 + versionLength);

// 6. payload (payloadLength bytes)
const payload = socket.buffer.slice(11 + versionLength, 11 + versionLength + payloadLength);

console.log("packetType:", packetType);
console.log("versionLength:", versionLength);
console.log("version:", version);
console.log("sequence:", sequence);
console.log("payloadLength:", payloadLength);
console.log("payload (hex):", payload.toString("hex"));
console.log("payload (utf8):", payload.toString("utf8"));
};