export function removeAccents (str) {
  const accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž/'
  const accentsOut = 'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz-'
  str = str.split('')
  str.forEach((letter, index) => {
    const i = accents.indexOf(letter)
    if (i !== -1) {
      str[index] = accentsOut[i]
    }
  })
  return str.join('')
}

export function generateSlug (str) {
  return removeAccents(str).split(' ').join('-').toLowerCase()
}
