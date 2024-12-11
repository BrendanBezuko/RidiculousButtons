<template>
  <div class="header-container">
    <svg
      width="200"
      height="200"
      viewBox="0 0 13.229 13.229"
      xml:space="preserve"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="a">
          <stop style="stop-color: #00dc82; stop-opacity: 1" offset="0" />
          <stop style="stop-color: #00d8da; stop-opacity: 1" offset="1" />
        </linearGradient>
        <linearGradient
          xlink:href="#a"
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="1.282"
          y1="6.823"
          x2="12.149"
          y2="6.823"
        />
        <linearGradient
          xlink:href="#a"
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="1.282"
          y1="6.823"
          x2="12.149"
          y2="6.823"
        />
        <linearGradient
          xlink:href="#a"
          id="d"
          gradientUnits="userSpaceOnUse"
          x1="1.282"
          y1="6.823"
          x2="12.149"
          y2="6.823"
          gradientTransform="translate(2.078 -.139)"
        />
        <linearGradient
          xlink:href="#a"
          id="e"
          gradientUnits="userSpaceOnUse"
          x1="1.282"
          y1="6.823"
          x2="12.149"
          y2="6.823"
          gradientTransform="translate(.139 -.139)"
        />
        <linearGradient
          xlink:href="#a"
          id="f"
          gradientUnits="userSpaceOnUse"
          x1="1.282"
          y1="6.823"
          x2="12.149"
          y2="6.823"
          gradientTransform="translate(.139 -.139)"
        />
      </defs>
      <circle
        style="
          fill: none;
          stroke: url(#b);
          stroke-width: 0.565;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        cx="6.715"
        cy="6.823"
        r="5.151"
      />
      <circle
        style="
          fill: none;
          stroke: url(#c);
          stroke-width: 0.165;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        cx="6.742"
        cy="6.742"
        r="4.261"
      />
      <ellipse
        style="
          fill: none;
          stroke: url(#d);
          stroke-width: 0.2;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        cx="7.823"
        cy="5.714"
        rx=".728"
        ry=".782"
      />
      <ellipse
        style="
          fill: none;
          stroke: url(#e);
          stroke-width: 0.2;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        cx="5.881"
        cy="7.844"
        rx=".728"
        ry=".782"
      />
      <ellipse
        style="
          fill: none;
          stroke: url(#f);
          stroke-width: 0.2;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        cx="7.777"
        cy="7.795"
        rx=".728"
        ry=".782"
      />
      <path
        d="M6.004 6.285h.689a.126.126 0 0 0 .062-.018.13.13 0 0 0 .05-.044.125.125 0 0 0 .018-.062.125.125 0 0 0-.018-.062l-.466-.8a.113.113 0 0 0-.043-.044.15.15 0 0 0-.069-.019.126.126 0 0 0-.062.019.113.113 0 0 0-.043.043l-.118.205-.236-.397a.13.13 0 0 0-.043-.05.12.12 0 0 0-.062-.012.12.12 0 0 0-.063.012.147.147 0 0 0-.05.05l-.577.993a.12.12 0 0 0-.012.062.12.12 0 0 0 .012.062.13.13 0 0 0 .05.044c.02.01.04.018.062.018h.435a.422.422 0 0 0 .385-.223l.21-.366.112-.193.342.584h-.453Zm-.49-.198h-.305l.454-.782.23.39-.153.266c-.058.095-.124.126-.226.126z"
        fill="#00dc82"
        style="stroke-width: 0.00439233"
      />
    </svg>
    <h1 class="poppins-bold">Ridiculous Buttons</h1>
    <p>Stand out with this collection of Nuxt 3 compatible buttons.</p>
  </div>
</template>

<style lang="scss">
h1 {
  display: block;
  text-align: center;
}

.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  color: $accent;
  text-align: center;
}
</style>
