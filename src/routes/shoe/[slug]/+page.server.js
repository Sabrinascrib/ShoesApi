/** @type {import('./$types').PageLoad} */

export const ssr = true;

export async function load({ fetch, params }) {
  console.log("hier läuft es noch!");
  const res = await fetch(`http://localhost:3000/shoes/${params.slug}`);
  console.log("hier auch noch!");
  const shoes = await res.json();
  console.log("und hier auch noch!");

  console.log(shoes);

  return {
    shoes,
  };
}
// insomnia -> nodejs server

// browser -> svelteKit -> nodejs server
