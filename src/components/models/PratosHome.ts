class HomePratos {
  title: string
  imgprato: string
  avalia: string
  description: string
  infos: string[]
  numavali: number

  constructor(
    title: string,
    description: string,
    infos: string[],
    avalia: string,
    imgprato: string,
    numavali: number
  ) {
    this.imgprato = imgprato
    this.title = title
    this.numavali = numavali
    this.infos = infos
    this.avalia = avalia
    this.description = description
  }
}

export default HomePratos
