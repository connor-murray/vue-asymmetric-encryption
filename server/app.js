const port = process.env.PORT || 3000;
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (client) => {
    let currentRoom = 'DEFAULT';

    client.on('JOIN', (newRoom) => isRoomFull(io, newRoom) ? fullRoom(io, client, newRoom) : currentRoom = joinRoom(io, client, currentRoom, newRoom));

    client.on('MESSAGE', (message) => sendMessage(client, currentRoom, message));

    client.on('PUBLIC_KEY', (publicKey) => sendPublicKey(client, currentRoom, publicKey));

    client.on('disconnect', () => notifyRoomUserDisconnected(client, currentRoom));
});

function fullRoom(io, client, requestedRoomName) {
    notifyUserRoomFull(io, client, requestedRoomName);
    notifyRoomIntrusionAttempt(client, requestedRoomName);
}

function joinRoom(io, client, currentRoomName, requestedRoomName) {
    disconnectFromRoom(client, currentRoomName);
    notifyRoomUserDisconnected(client, currentRoomName);

    connectToRoom(client, requestedRoomName);
    notifyUserJoinedRoom(io, client, requestedRoomName);
    notifyRoomNewConnection(client, requestedRoomName);

    return requestedRoomName;
}

function sendMessage(client, room, message) {
    client.broadcast.to(room).emit('MESSAGE', message)
}

function sendPublicKey(client, room, publicKey) {
    client.broadcast.to(room).emit('PUBLIC_KEY', publicKey)
}

function notifyRoomIntrusionAttempt(client, room) {
    client.broadcast.to(room).emit('INTRUSION_ATTEMPT');
}

function notifyRoomNewConnection(client, room) {
    client.broadcast.to(room).emit('NEW_CONNECTION');
}

function notifyRoomUserDisconnected(client, room) {
    client.broadcast.to(room).emit('USER_DISCONNECTED');
}

function notifyUserRoomFull(io, client, requestedRoomName) {
    io.to(client.id).emit('ROOM_FULL', requestedRoomName);
}

function notifyUserJoinedRoom(io, client, room) {
    io.to(client.id).emit('ROOM_JOINED', room);
}

function disconnectFromRoom(client, room) {
    client.leave(room);
}

function connectToRoom(client, room) {
    client.join(room);
}

function isRoomFull(io, room) {
    let roomInfo = io.sockets.adapter.rooms[room];
    return (roomInfo && roomInfo.length > 1);
}

server.listen(port, () => {
    console.log(`Chat server listening on port: ${port}`);
});
