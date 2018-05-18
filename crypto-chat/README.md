# crypto-chat

Vue.js chat application with asymmetric encryption, Vuex, web workers and web sockets.

## Overview

The intention was to have a quick play about with vue.js and not to create a well refined app,
although it would be nice to switch to Typescript, SCSS and Bootstrap etc.

The project includes:
 - Vuex
 - Web Workers
 - Web Sockets
 - Event Bus
 - Asymmetric encryption
 - Nodejs

## Vuex

state
- All your application level state and serves as the "single source of truth".

getters
- Return store state or compute derived state based on store state

mutations
- Only way to actually change state in a Vuex store is by committing a mutation (event)

actions
- Actions is the business logic, commit mutations (more than one at a time if necessary) and can be asynchronous.


## Asymmetric encryption

Asymmetric or public key encryption uses public and private keys to encrypt and decrypt data. Keys are generated from a secret pass-phrase and a bit length say 2048.
The public key can be given to anyone and can only be used to encrypt messages. The private key is kept secret. It is not shared with anyone. 
Only with the private key can you decrypt the data.


## Web Worker
A means to move processor intensive work off of the main UI thread to prevent the UI from becoming unresponsive until the operations have completed. 
Essentially they allow you to run JavaScript in separate thread which communicates with the main thread via messages.
Note: web workers do not have access to the window object, document object or the parent object.

## Application flow

Open three browsers

Browser one:
1. open the app
2. wait until your public and private keys have been generated (loading icon)
3. connect to room 123 (web sockets)
4. when another user connects to this room they will send you their public key and you will send them yours

Browser two:
1. open the app
2. wait until your public and private keys have been generated (loading icon)
3. connect to room 123 (web sockets)
4. your public key will be sent to the user already in room 123 and you will receive their public key
5. type a message and hit enter key
6. your message is encrypted using the other persons public key and sent to them via web socket (only they can decrypt using their private key)
7. when a message is received that was encrypted with your public key it will be decrypted with your private key and displayed

Browser three:
1. open the app
2. wait until your public and private keys have been generated (loading icon)
3. connect to room 123 (web sockets)
4. you will be unable to join (only 2 people per room)
5. Both users in room 123 will be notified of intrusion attempt

