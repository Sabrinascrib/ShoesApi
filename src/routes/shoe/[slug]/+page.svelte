<script>
  import Card from "../../../components/card.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  // object destructuring
  const {
    name,
    material,
    description,
    gender,
    release_date,
    price,
    main_color,
    buy_url,
  } = data.shoe;
</script>

<Card
  {name}
  {material}
  {description}
  {gender}
  {release_date}
  {price}
  {main_color}
  {buy_url}
/>
