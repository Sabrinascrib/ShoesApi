<script>
  import Card from "./../components/card.svelte";
  import { onMount } from "svelte";
  let priceLimit = "";
  let shoes = [];

  onMount(() => {
    fetch(`http://localhost:3000/shoes`)
      .then((response) => response.json())
      .then((result) => {
        shoes = result;
        console.log(shoes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  function handleOnSubmit() {
    fetch(`http://localhost:3000/shoes?price_below=${priceLimit}`)
      .then((response) => response.json())
      .then((result) => {
        shoes = result;
        console.log(shoes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
</script>

<form on:submit|preventDefault={handleOnSubmit}>
  <input
    class="bg-gray-100 text-xs rounded-sm p-3 font-extralight focus:outline-none"
    type="text"
    name="price"
    bind:value={priceLimit}
    placeholder="Select a price limit"
  />
  <button
    type="submit"
    class="bg-gray-100 rounded-sm p-3 ml-3 text-sm duration-75 hover:bg-gray-200"
    >GO</button
  >
</form>

<main class="p-4">
  <h1 class="text-3xl font-semibold mb-6">List of Shoes</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each shoes as shoe (shoe.name)}
      <Card
        name={shoe.name}
        material={shoe.material}
        description={shoe.description}
        gender={shoe.gender}
        release_date={shoe.release_date}
        price={shoe.price}
        main_color={shoe.main_color}
        buy_url={shoe.buy_url}
        link={`/shoe/${shoe.slug}`}
        linkText={"More info"}
      />
    {/each}
  </div>
</main>
