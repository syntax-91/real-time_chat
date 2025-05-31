

export function setupSocket(io){
	io.on('connection', (socket) => {
		

		socket.on('joinRoom', (roomID) => {
			socket.join(roomID);
			console.log(`Client joined room: ${roomID}`);
		});

		socket.on('sendMessage', (data) => {
			const { roomID, message } = data;
			io.to(roomID).emit('receiveMessage', message);
		});

		socket.on('disconnect', () => {
			console.log('Client disconnected');
		});
	});
}