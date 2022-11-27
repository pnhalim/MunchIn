import React from 'react'

function InputBox({ title, content, setContent, type }) {
  let inputRef = null;

  return (
    <div className={`my-3 flex h-14 px-3 leading-relaxed cursor-text border border-neutral-500 rounded-md outline outline-1 outline-white text-neutral-800 focus-within:outline-sky-600 focus-within:border-sky-600 transition-all ease-linear ${((content == '') ? 'items-center font-light text-xl focus-within:font-normal focus-within:text-sm focus-within:flex-col focus-within:justify-center focus-within:items-start' : 'flex-col justify-center font-normal text-sm items-start')}` }onClick={() => inputRef.focus()}>
      {title}
      <input className={`text-xl outline-none ${(content == '') ? 'w-5' : 'w-full'}`} ref={ref => inputRef = ref} type={type} value={content} onChange={e => setContent(e.target.value)} />
    </div>
  )
}

InputBox.defaultProps = {
  title: 'Enter text',
  type: 'text',
}

export default InputBox