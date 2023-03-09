<script>
    import PersonalisedRecommendations from "../../lib/components/body-elements/PersonalisedRecommendations.svelte"
    import ClearSpecificCandid from "../../lib/components/body-elements/ClearSpecificCandid.svelte"
    import Illustration from '$lib/assets/img/illustration.svg';
</script>

<img class="h-40 mb-7" src={Illustration} alt="Feedback Sense Check Illustration" />

<h2 class="text-6xl mb-8">It seems like a good moment to give feedback</h2>
<p class="text-2xl mb-8">Looks like conditions may work in your favour. Follow the advice below to create the best chance of having a feedback conversation that leads to growth for both of you.</p>
<PersonalisedRecommendations/>
<ClearSpecificCandid/>
