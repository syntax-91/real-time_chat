import { observer } from 'mobx-react-lite'
import { searchQueryStore } from '../../app/store/HeaderSearchQuery'
import Chats from './Chats'
import HeaderB1 from './HeaderB1'
import { HeaderSearchRes } from './HeaderSearchRes'

// chats
 function Block1(){

	return (
		<div className=''>  
			<HeaderB1 />
			{searchQueryStore.query && <HeaderSearchRes />}
			<Chats />
		</div>
	)
}

export default observer(Block1)