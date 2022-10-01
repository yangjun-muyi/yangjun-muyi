/**
 * 统一的音效管理器
 */
class music {
  constructor() {
    this.bgmAudio = new Audio()
    this.bgmAudio.loop = true
    this.bgmAudio.src = 'audio/bgm.mp3'
    this.playBgm()
  }

  playBgm() {
    this.bgmAudio.play()
  }
}

export {
  music
}
