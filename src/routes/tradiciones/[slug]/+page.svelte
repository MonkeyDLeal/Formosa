<script lang="ts">
    import { error } from "@sveltejs/kit";
    import { cardTradiciones } from "#lib/data/cardtradiciones.js";
    import type { Card } from "../../../lib/types/card";
    const { params } = $props()

    const slug = $derived(params.slug)


    const data: Card | undefined = cardTradiciones.find(
        (card) => card.slug == slug
    )

    if (!data) {
        error(404, 'Epa, esta receta no existe')
    }

</script>

<section>
    <div>
        <img src={data.portada} alt="">
    </div>
    <h1>{data.titulo}</h1>
    <p>{data.resumen}</p>
</section>