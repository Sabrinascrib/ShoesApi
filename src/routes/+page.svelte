<script>
  import { onMount } from "svelte";
  let price = "";
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
    fetch(`http://localhost:3000/shoes?price_below=${price}`)
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
    bind:value={price}
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
      <div
        class="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      >
        <h2 class="text-xl font-semibold mb-2">{shoe.name}</h2>
        <p class="text-gray-600 mb-2">Material: {shoe.material}</p>
        <p class="text-gray-600 mb-2">Description: {shoe.description}</p>
        <p class="text-gray-600 mb-2">Gender: {shoe.gender}</p>
        <p class="text-gray-600 mb-2">Release Date: {shoe.release_date}</p>
        <p class="text-gray-600 mb-2">Price: ${shoe.price}</p>
        <p class="text-gray-600 mb-2">Main Color: {shoe.main_color}</p>
        <div class="">
          <a href={`/shoes/${shoe.slug}`} class="text-blue-500 hover:underline"
            >More Info</a
          >
          <a
            href={shoe.more_info}
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:underline">Buy Now</a
          >
        </div>
      </div>
    {/each}
  </div>
</main>
