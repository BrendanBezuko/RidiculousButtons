<template>
  <div class="page">
    <h2>About</h2>

    <h3>Built with Nuxt 3 and Sass</h3>

    <p>
      The focus of this project is to develop high quality buttons using CSS and
      SCSS, avoiding any use of pre built styles such as shacdn, tailwind,
      bootstrap. The goal in doing so is to come up with unique looking
      components.
    </p>

    <h3>About Buttons</h3>

    <p>
      The word "button" originates from the Old French word "boton," which
      originally referred to something that protrudes or sticks out. Before the
      advent of electricity, the term was primarily used to describe garment
      fasteners—a knob or similar object that would push through slits in
      clothing to secure it. Henece the round button with four holes we all know
      and wear on daily basis.
    </p>

    <p>
      With the development of electrical technology, the word "button" evolved
      to describe a device used to close an electrical circuit. Think about how
      an early circuit would physically have a protuding button to disconnect
      the circuit. Later with more sensitve circuitry, buttons took on a new
      meaning commoly refering to small clickly momentary buttons or switches
      like the keys on your keyboard. Today, the concept has further
      transformed, as "button" is commonly associated with virtual buttons found
      on web interfaces.
    </p>

    <p>
      This evolution of the term is fascinating. At its core, a button is
      designed to stand out, both physically and conceptually. By creating
      unique virtual buttons, I like to think I’m honoring the word’s rich
      history and the ingenuity of button makers.
    </p>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

h3 {
  text-align: center;
}

.page {
  margin: 0 auto;
  padding: 1rem;
  max-width: 80%;

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
}
</style>
