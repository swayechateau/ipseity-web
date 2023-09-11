import { useEffect, useState } from 'react'

export interface ITypewriter {
  string: string,
  delay: number,
  stopBlinkinOnComplete: boolean,
  customClass: string,
  onComplete: Function,
  cursor: string,
  cursorClass: string
}

function Typewriter({
  string = '',
  delay = 100,
  stopBlinkinOnComplete = false,
  customClass,
  onComplete = () => { },
  cursor = '|',
  cursorClass
}: ITypewriter) {
  const [text, setText] = useState('')
  const [pointer, setPointer] = useState(-1)
  const [isBlinking, setBlinking] = useState(true)

  useEffect(() => {
    if (pointer < string.length) {
      setTimeout(() => {
        setText(text + string.charAt(pointer))
        setPointer(pointer + 1)
      }, delay)
    } else {
      if (stopBlinkinOnComplete) setBlinking(false)
      onComplete()
    }
  }, [pointer])

  return (
    <span className={customClass}>
      {text}
      {isBlinking ? (
        <span className={cursorClass || 'animate-blink text-inherit font-weight-thin'}>{cursor}</span>
      ) : null}
    </span>
  )
}

export default Typewriter