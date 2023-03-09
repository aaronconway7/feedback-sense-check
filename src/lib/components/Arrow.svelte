<script>
  export let colour="grey";
  export let direction="down";

  let rotationAmount = {
    "down": 0,
    "left": 90,
    "up": 180,
    "right": 270
  }


</script>
<svg 
width="14" 
height="22" 
class="{direction}"
fill="none" 
xmlns="http://www.w3.org/2000/svg"><path class="{colour}" fill-rule="evenodd" clip-rule="evenodd" d="M13.676 14.32a1.116 1.116 0 0 0-1.563 0L8 18.38V1.332C8 .597 7.552 0 7 0S6 .597 6 1.333V18.38l-4.113-4.06a1.116 1.116 0 0 0-1.563 0 1.08 1.08 0 0 0 0 1.543l5.894 5.818c.216.213.5.32.782.32.283 0 .566-.107.782-.32l5.894-5.818a1.081 1.081 0 0 0 0-1.543Z"/></svg>

<style lang="postcss">
  .orange {
    fill: theme(colors.orange)
  }

  .grey {
    fill: theme(colors.grey)
  }

  .left {
    transform: rotate(90deg);
  }

  .down {
    transform: rotate(0deg);
  }

  .right {
    transform: rotate(270deg);
  }

  .up {
    transform: rotate(180deg);
  }
</style>