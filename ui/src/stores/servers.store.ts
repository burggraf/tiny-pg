import { writable } from 'svelte/store';
export const servers: any = writable(null);
export let server: any = writable<Server>({ url: '', title: '', active: false });
let _servers: Server[] = []

servers.subscribe((value: Server[]) => {
    _servers = value
})
// define Server interface
export interface Server {
    title: string;
    url: string;
    active: boolean;
}

export const add_server = (server: Server) => {
    console.log('add_server, _servers', _servers);
    const index = _servers.findIndex((s: Server) => s.url === server.url);
    if (index === -1) {
        _servers.push(server);
        servers.set(_servers);
        localStorage.setItem('servers', JSON.stringify(_servers));
    }
}
export const remove_server = (server: Server) => {
    const index = _servers.findIndex((s: Server) => s.url === server.url);
    if (index !== -1) {
        _servers.splice(index, 1);
        servers.set(_servers);
        localStorage.setItem('servers', JSON.stringify(_servers));
    }
}
export const update_server = (server: Server) => {
    const index = _servers.findIndex((s: Server) => s.url === server.url);
    if (index !== -1) {
        _servers[index] = server;
        servers.set(_servers);
        localStorage.setItem('servers', JSON.stringify(_servers));
    }
}
export const set_active_server = (ss: Server) => {
    const index = _servers.findIndex((s: Server) => s.url === ss.url);
    if (index !== -1) {
        _servers.forEach((s: Server) => s.active = false);
        _servers[index].active = true;
        servers.set(_servers);
        server.set(_servers[index])
        localStorage.setItem('servers', JSON.stringify(_servers));
    }
}
export const get_active_server = (): Server => {
    if (!_servers) {
        preload();
    }
    console.log('get_active_server, _servers', _servers)
    if (_servers) {
        const s = _servers.find((s: Server) => s.active === true);
        if (s) {
            return s;
        } else {
            return { url: '', title: '', active: false }
        }    
    } else {
        return { url: '', title: '', active: false }
    }
}
const preload = () => {
    console.log('************************')
    console.log('loading servers.store.ts')
    console.log('************************')
    const savedServers = localStorage.getItem('servers');
    console.log('savedServers', savedServers)
    if (savedServers) {
        _servers = JSON.parse(savedServers);
        server.set(get_active_server());
    } else {
        _servers = [];
    }
    servers.set(_servers);
    console.log('_servers', _servers)
    console.log('************************')    
}
preload();

