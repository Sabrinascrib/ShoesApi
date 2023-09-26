/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  const res = await fetch(`http://localhost:3000/shoes/${params.slug}`);
  const shoe = await res.json();

  console.log(shoe);

  return {
    shoe,
  };
}
