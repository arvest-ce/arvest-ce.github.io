<script>
    import { base } from '$app/paths';
    import MenuButton from '$lib/components/MenuButton.svelte';
</script>

<div class="container">
    <div class="inner_container">
        <div class="content_container">
            <h2>About</h2>
            <p>Arvest is an open source, free to use tool for the analysis and navigation of collections of digital documents. Consult, compare, organize and annotate documents, images, videos and audio.</p>
            <p>Arvest is based on the <a href="https://iiif.io/">IIIF standard</a>, and based a modified version of the IIIF viewer <a href="https://projectmirador.org/">Mirador</a>.</p>
            <p>Arvest is currently under development in the context of the ERC-funded <a href="https://stage-to-data.huma-num.fr/">STAGE</a> Project. You can take a look at the current demo sandbox <a href="https://scene.tetras-libre.fr/">here</a>. The first beta is set to release at the end of 2024. It is developped at <a href="https://www.univ-rennes2.fr/ ">Rennes 2 University</a>, France. Developpment is currently funded by <a href="https://www.ouest-valorisation.fr/">SATT Ouest Valorisation</a>.</p>
        </div>

        <div class="menu_container">
            <MenuButton 
                label = "HOME"
                link = "{base}/"
            />
            <MenuButton 
                label = "SANDBOX"
                link = "https://scene.tetras-libre.fr/"
            />
            
            <MenuButton 
                label = "DISCUSS"
                link = ""
            />
        </div>
    </div>
</div>

<style>
    .content_container{
        background-color: white;
        padding: 1em;
        border-top: solid 1px black;
        margin: auto;
        max-width: 75vw;
        max-height: 75vh;
        overflow: scroll;
    }

    .menu_container{
        background-color: white;
        padding: 1em;
        border-bottom: solid 1px black;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        max-width: 75vw;
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    h2{
        font-family: 'Input-Mono-Narrow', monospace;
        font-size: 5em;
        padding-bottom: 0.2em;
    }

    p{
        font-size: 1.5em;
        padding-top: 1em;
    }

    a{
        color: black;
    }

    a:hover{
        color: grey;
    }
</style>