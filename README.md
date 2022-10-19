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
so you can edit my api out to yours if you want at `src/utils/pinger.ts` at line 32 from
```ts
`http://media.api.rukchadisa.live/test?host=${host}&port=${port}&ssl=${ssl}&password=${password}`,
```
to 
```ts
`http://ip or domain here/test?host=${host}&port=${port}&ssl=${ssl}&password=${password}`,
```

send balls
