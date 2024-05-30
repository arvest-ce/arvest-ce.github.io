<script>
    import LogoImage from '$lib/components/LogoImage.svelte';
    import { base } from '$app/paths';
</script>

<footer>
    <LogoImage 
        src = "logos/cc.png"
        alt = "creative commons logo"
        link = "https://creativecommons.org/"
    />

    <LogoImage 
        src = "logos/erc.png"
        alt = "european research council logo"
        link = "https://www.horizon-europe.gouv.fr/erc"
    />

    <LogoImage 
        src = "logos/europe.png"
        alt = "european union logo"
        link = ""
    />

    <LogoImage 
        src = "logos/R2.png"
        alt = "rennes 2 logo"
        link = "https://www.univ-rennes2.fr/"
    />

    <div class="right_content">
        <a href="{base}/terms">Terms</a>
    </div>

</footer>

<style>

    .right_content{
        position: absolute;
        top:0;
        right:0;
        /*height: 100%;*/
        align-items: center;
        display: flex;
        gap: 0.5em;
        flex-wrap: wrap;
        padding-right: 1em;
        /* padding-top: 0.5em; */
        height: 100%;
    }

    a{
        text-decoration: underline;
        color: white;
        
    }
    a:hover{
        cursor: pointer;
        color: grey;
    }


    footer{
        align-items: center;
        width: 100%;
        position: absolute;
        z-index: 9;
        bottom: 0px;
        padding: 0.5em;
        /* opacity: 0.5; */

        transition-duration: 200ms;
        background-color: black;
        /* background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgb(0, 0, 0, 1) 99%); */
    }
</style>