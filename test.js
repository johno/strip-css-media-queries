import test from 'ava'
import stripCssMediaQueries from './'

const INPUT = `
.tomato {
  color: tomato;
}

@media screen and (max-width: 1234) {
  .purple {
    color: purple;
  }

  .fuschia {
    color: fuschia;
  }
}

.red {
  color: red;
}

@media (max-width: 456) and (min-width: 123) {
  .purple {
    color: purple;
  }

  .fuschia {
    color: fuschia;
  }
}

.hotpink {
  color: hotpink;
}
`

const OUTPUT = `
.tomato {
  color: tomato;
}



.red {
  color: red;
}



.hotpink {
  color: hotpink;
}
`

test('strips media queries', t => {
  t.is(stripCssMediaQueries(INPUT), OUTPUT)
})
