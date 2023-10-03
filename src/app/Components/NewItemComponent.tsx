import './component.modules.css'
import NewItemPartyInput from './NewItemPartyInput';
import NewItemTitleInput from './NewItemTitleInput';

export default function NewItemComponent() {
  return (
  <div className='new-item-component'>
    <NewItemTitleInput />
    <NewItemPartyInput />
  </div>);
}