import questionsPics from './questions_pics.json'
import questionsVids from './questions_vids.json'

export default function () {
  let newArray = []

  newArray = newArray.concat(randomSampling(questionsPics, 15))
  newArray = newArray.concat(randomSampling(questionsVids, 10))

  return arrayMixer(newArray.map(item => {
    return {
      ...item,
      variants: arrayMixer(item.variants)
    }
  }))
}

function arrayMixer (array) {
  return array.sort(_ => compareRandom())
}

function randomSampling (array, elements) {
  let newArray = []

  newArray = array.sort(compareRandom)
  newArray = newArray.slice(0, elements)

  return newArray
}

function compareRandom () {
  return Math.random() - 0.5
}
