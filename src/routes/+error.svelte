<script lang="ts">
    import errorImagen from "#lib/assets/error-image.jpg";
    import { IconPointFilled } from "@tabler/icons-svelte";
    import { IconArrowNarrowLeft } from "@tabler/icons-svelte";
    const { error } = $props();
</script>

<!--Error PC Tablet-->

<section class="hidden md:block">
    <div class="flex justify-between px-15 items-center gap-10">
        <div class="">
            <div class="flex flex-col gap-2 text-wrap">
                <span
                    class="uppercase flex text-gray-500 text-xs lg:text-sm font-bold font-Jakarta-sans"
                    ><IconPointFilled class="text-secondary" />error {error.status}
                    — coordenada no registrada</span
                >
                <h1 class="font-syne font-extrabold text-7xl lg:text-8xl">
                    {error.status}
                </h1>
                <span class=" font-syne font-bold text-2xl lg:text-3xl"
                    >Camino extraviado en la niebla</span
                >
                <p
                    class="font-Jakarta-sans text-base lg:text-lg text-gray-600 wrap-break-word"
                >
                    La senda solicitada se ha disipado entre la bruma perenne de
                    Alishan. La coordenada no existe o aguarda a ser redibujada.
                </p>
            </div>
            <div class="pt-3 flex justify-center">
                <a
                    href="/"
                    class="flex items-center font-Jakarta-sans font-bold uppercase text-sm bg-secondary text-black max-w-fit px-10 py-2"
                    ><IconArrowNarrowLeft />Volver al inicio</a
                >
            </div>
        </div>

        <div class="w-200 h-max">
            <figure>
                <img src={errorImagen} class="grayscale-85" alt="" />
                <figcaption class="flex justify-between uppercase pt-2">
                    <span
                        class="text-gray-500 font-Jakarta-sans font-bold text-xs lg:text-base"
                        >23.838.1° N, 120.9876° E — Alishan</span
                    >
                    <span
                        class="text-icono font-Jakarta-sans font-bold text-xs lg:text-base"
                        >Desvio {error.status}</span
                    >
                </figcaption>
            </figure>
        </div>
    </div>
</section>

<!--Error mobile-->

<section class="md:hidden">
    <div class="px-3">
        <div class="flex flex-col pb-5">
            <div class="gap-2 text-wrap text-center">
                <span
                    class="uppercase flex text-gray-500 text-xs lg:text-sm font-bold font-Jakarta-sans"
                    ><IconPointFilled class="text-secondary" />error {error.status}
                    — coordenada no registrada</span
                >
                <h1 class="font-syne font-extrabold text-7xl lg:text-8xl">
                    {error.status}
                </h1>
                <span class=" font-syne font-bold text-2xl lg:text-3xl"
                    >Camino extraviado en la niebla</span
                >
                <p
                    class="font-Jakarta-sans text-base lg:text-lg text-gray-600 wrap-break-word"
                >
                    La senda solicitada se ha disipado entre la bruma perenne de
                    Alishan. La coordenada no existe o aguarda a ser redibujada.
                </p>
            </div>
            <div class="pt-3 flex justify-center">
                <a
                    href="/"
                    class="flex items-center font-Jakarta-sans font-bold uppercase text-sm bg-secondary text-black max-w-fit px-10 py-2"
                    ><IconArrowNarrowLeft />Volver al inicio</a
                >
            </div>
        </div>

        <div class="pb-5">
            <figure>
                <img src={errorImagen} class="grayscale-85" alt="" />
                <figcaption class="flex justify-between uppercase pt-2">
                    <span
                        class="text-gray-500 font-Jakarta-sans font-bold text-xs lg:text-base"
                        >23.838.1° N, 120.9876° E — Alishan</span
                    >
                    <span
                        class="text-icono font-Jakarta-sans font-bold text-xs lg:text-base"
                        >Desvio {error.status}</span
                    >
                </figcaption>
            </figure>
        </div>
    </div>
</section>
