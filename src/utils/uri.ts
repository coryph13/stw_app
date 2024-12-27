import { env } from "process";

// const domain = env('API_DOMAIN'); // Get from config
const domain = 'api.stw.test';
// const locale = 'en'; // Get from middleware global state
// const forceHttps = env('FORCE_HTTPS');
const forceHttps = false;


export function genApiUrlFromPath(path: string): string
{
    let urlStr = forceHttps ? 'https://' : 'http://';
    urlStr += domain;
    urlStr += path;

    const url = new URL(urlStr);

    return url.toString();
}
