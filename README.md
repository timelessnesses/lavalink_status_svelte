# lavalink_status_page

oh god why am i doing this again  

yes its lavalink status page auto update/client side svelte thingy

## build

```bash
npx vite build
```

## test

```bash
npx vite dev
```

## install

```bash
npm install
```

## add lavalink servers

edit `src/config.ts`  
typehint should help you

## note

this repo use [this back end](https://github.com/timelessnesses/lavalink-tester) (im too lazy to implement my own)  

also noting please also include submodule  

and start the backend with uvicorn or your asgi of your choice  

then config your .env file

```bash
PUBLIC_PINGER_ENDPOINT=host:port/test_bulk # note you can't use localhost and you need to use your public ip address
PUBLIC_PING_INTERVAL=amount of second between each ping # recommended 60000 milliseconds
```

## todo

- none

send balls
