import {memo}from 'react'
import style from "./index.module.scss"
import GameCompany from './gameCompany'
const SectionProviders = memo(() => {
  return (
<div className={style.container}>
	<div className={style.title}>
	Proveedores de juego
	</div>
	<div className={style.groups}>
		<GameCompany />
		<GameCompany />
		<GameCompany />
	</div>
</div>
  )
})

export default SectionProviders