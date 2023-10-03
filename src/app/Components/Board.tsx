import './component.modules.css'
import Title from './Title';
import NewItemComponent from './NewItemComponent';
import TaxTipsAddComponent from './TaxTipsAddComponent';
import ItemsComponent from './ItemsComponent';

export default function Board() {
  return (
  <div className='board'>
    <Title />
    <TaxTipsAddComponent />
    <NewItemComponent />
    <ItemsComponent />
    <TaxTipsAddComponent />

  </div>);
}