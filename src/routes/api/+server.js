import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {

    const random = Math.random();

    return new Response(String(random));
}