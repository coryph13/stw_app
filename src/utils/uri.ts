import { env } from "process";
import baseApiUrl from '@/config';

// const domain = env('API_DOMAIN'); // Get from config
const domain = 'api.stw.test';
// const locale = 'en'; // Get from middleware global state
// const forceHttps = env('FORCE_HTTPS');
const forceHttps = false;


export function genApiUrlFromPath(path: string): string
{
    const url = new URL(baseApiUrl + path);

    return url.href;

    // return url.toString();
}


